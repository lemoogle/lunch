import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LunchENV.locationType
});

Router.map(function() {
	this.resource('random', { path: '/random/:id' });
	this.resource('messages', { path: '/messages' });
	this.resource('user', { path: '/user/:id' });


});

export default Router;
