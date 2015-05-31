import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stars');
  this.route('about');
  this.resource('contact', function() {});
});

export default Router;
