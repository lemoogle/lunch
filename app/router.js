import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LunchENV.locationType
});

Router.map(function() {
	this.resource('random', { path: '/random/:id' });


});

export default Router;
