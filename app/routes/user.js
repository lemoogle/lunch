import Ember from "ember";

export default Ember.Route.extend({
   setupController:function(controller,model){
   	
   	model.id=parseInt(model.id);
   	this.controllerFor('application').set('currentid',model.id);
   	controller.set('model',this.model(model));
    controller.load();
   },
   model: function(params){
        return params;
      //  return this.store.find('user', params.id);
         }
});