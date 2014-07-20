import Ember from "ember";


export default Ember.TextField.extend({

    
    classNames: ["messagefield"],

    insertNewline: function() {
        var controller = this.get('targetObject');
        controller.send('post');

    }
});
