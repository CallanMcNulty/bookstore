import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('cart'),
  actions: {
    placeOrder() {
      this.sendAction('placeOrder');
    }
  }
});
