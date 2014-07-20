import Ember from "ember";

export
default Ember.Object.extend({


    setid: function(id, controller) {
        this.set('id',id);
        this.set('controller',controller);
        
        var pubnub = PUBNUB.init({
            publish_key: 'pub-c-96b229dc-a45d-4527-9f82-80235ada50db',
            subscribe_key: 'sub-c-bea004aa-0fd4-11e4-8880-02ee2ddab7fe'
        });

        pubnub.subscribe({
            channel: id,    
            message: function(m) {
                
                var messages=controller.get('messages');
                messages.push(m);

                var count = controller.get('unread');
                count+=1;

                controller.set('unread',count);
                controller.set('messages',messages);
                controller.propertyDidChange('messages');
                if (m.match){
                    controller.transitionTo('lunch');
                }
                /*
                if (m.match){
                    pubnub.subscribe({channel:m.id,
                    message: function(m){
                        var unread = controller.get('unread_messages');
                        unread.push(m);
                        controller.set('unread_messages',unread);
                        controller.propertyDidChange('unread_messages');
                    }
                    });
                }
                else{
                var unread =controller.get('unseen_matches');
                console.log(m.uid);
                controller.store.update('user',{'id':m.uid,'match_b':true});

                //controller.store.find('user',{'match_b':true});
                //controller.transition_to('conversations');
                unread.push(m);
                controller.set('unseen_matches', unread);
                controller.propertyDidChange('unseen_matches');

                } */               
            },

        });

        this.set('pubnub',pubnub);
    },

    conversationsubscribe: function(id,conversation){
        var pubnub = this.get('pubnub');
        var self=this;
        pubnub.subscribe({
            channel: id,    
            message: function(m) {
                conversation;
               }
        });
        this.set('pubnub',pubnub);

    },
    publish: function(id, message){
        alert('publishing to '+id);
        this.get('pubnub').publish({
             channel : id,
             message : message
        });
 
     
    }


});