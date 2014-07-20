import Ember from "ember";

export default Ember.Route.extend({

	setupController: function(controller){

//		controller.set('model',this.model());
		controller.load();
	},
   model: function(params){
   		
   		return Ember.$.get('http://123.harveychan.net:3000/random','json');
   		//return Ember.$.getJSON('/assets/random.json');
   		//var id=this.controllerFor('application').get('id');
        //return this.store.find('user', id);
    }
});