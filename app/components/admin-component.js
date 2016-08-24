import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
  selectedGenre: null,
  actions: {
    chooseGenre(genre) {
      this.set("formVisible", true);
      this.set("selectedGenre", genre);
    },
    save(params) {
      params.genre = this.get("selectedGenre");
      this.sendAction("save", params);
      this.set("formVisible", false);
    },
    ship(order) {
      order.destroyRecord();
    }
  }
});
