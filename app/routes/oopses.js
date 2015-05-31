import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: '1',
        name: 'Rory lied',
        description: 'Rory lied about putting her thing her boot'
      },
      {
        id: '2',
        name: 'Rory got an oops at school',
        description: 'Rory got an oops for doing something wrong at school'
      },
      {
        id: '3',
        name: "Rory didn't fallow directions",
        description: 'Rory got an oops for doing something wrong at school'
      },


    ];
  }
});
