import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "clean room",
        description: "Rory cleaned her books up today",
      },
      {
        id: "2",
        name: "feed pet",
        description: "Rory fed jay his dinner",
      },
      {
        id: "3",
        name: "brush teeth",
        description: "Rory brushed her teeth tonight",
      }
    ];
  }
});
