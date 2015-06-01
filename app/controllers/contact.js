import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage: function () {
      var message = prompt('enter your message');
    }
  }
});
