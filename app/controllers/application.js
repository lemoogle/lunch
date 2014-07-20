import Ember from "ember";

/**
 
 
 
 **/


export
default Ember.ObjectController.extend({
    init: function() {
        var id = 1;
        this.set('id', id);
        this.set('curr  entid', id);
        this.set('unseen_matches', []);
        this.set('unread_messages', []);
        this.get('pubnub').setid(id, this);
        //this.get('pubnub').publish(id, "yo");
    },
    activated: false,
    id: 1,
    currentid: 1,
    unread:0,
    messages:[],
    unseen_matches: [],
    actions: {
        activate: function() {
            var activated = !this.get('activated');

            this.set('activated', activated);
            if (activated) {
                this.send('next');
            } else {
                this.transitionTo('index');
            }
        },

        next: function() {
            //var newid = this.get('currentid') + 1;
            //this.set('currentid', newid);
            this.transitionToRoute('random',{'id':Math.random(10)});

        }


    }

});