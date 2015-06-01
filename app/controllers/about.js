import Ember from 'ember';

export default Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function () {
      alert('Dracula was some dude back in the day');
    },
    showPicture: function () {
      this.set('isPictureShowing', true);
    },
    hidePicture: function () {
      this.set('isPictureShowing', false);
    }
  }
});
