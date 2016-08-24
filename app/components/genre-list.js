import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    chooseGenre(genre) {
      this.sendAction("chooseGenre", genre);
    }
  }
});
