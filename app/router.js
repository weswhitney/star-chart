import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stars', {path: '/'});
  this.route('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
  this.resource('oopses', function () {});
});

export default Router;
