import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: this.get('price'),
        description: this.get('description')
      };
      this.sendAction("save", params);
    }
  }
});
