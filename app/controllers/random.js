import Ember from "ember";

/**
 
 
 
 **/


export
default Ember.ObjectController.extend({
    needs:['application'],
    actions:{
        choice:function(val){
            if (val===1) 
            {   
                var self = this;
                var conv_id=this.get('controllers.application.id')+"+"+this.get('id');
                Ember.$.get('http://123.harveychan.net:3000/addtoqueue_a/'+this.get('controllers.application.id')+"/"+this.get('id'));
                Ember.$.get('http://123.harveychan.net:3000/addtoqueue_b/'+this.get('id')+'/'+this.get('controllers.application.id'));
                Ember.$.get('http://123.harveychan.net:3000/user/'+this.get('controllers.application.id'),function(data){
                data=JSON.parse(data);
                if (data.matches.length>0){
                   self.get('pubnub').publish(self.get('id'),{'match':true,'text':'','name':self.get('name')});
                   self.transitionTo('lunch');
                }
                else{
                   self.get('pubnub').publish(self.get('id'),{'invite':true,'text':'','name':self.get('name')});
                }

                });
//                this.get('pubnub').conversationsubscribe(conv_id,this);
                //conversation.save();
                //this.transitionTo('conversation',conversation);
            }
            this.get('controllers.application').send('next');
        }
    },
    load:function(){
        var self=this;
        Ember.$.get('http://123.harveychan.net:3000/random','json').then(function(data){
            console.log(JSON.parse(data));
            self.set('content',JSON.parse(data));
        });
    }
});     