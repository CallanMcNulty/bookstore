import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service('cart'),
  actions: {
    placeOrder() {
      var rt = this;
      var newOrder = rt.store.createRecord('order', {total: 0});
      rt.get("shoppingCart").get("items").forEach(function(item) {
        newOrder.set("total", newOrder.get("total")+parseFloat(item.get('price')));
        var params = {
          book: item,
          order: newOrder
        };
        var newBookOrder = rt.store.createRecord('book-order', params);
        item.get('bookOrders').addObject(newBookOrder);
        newOrder.get('bookOrders').addObject(newBookOrder);
        newBookOrder.save().then(function() {
          item.save();
          newOrder.save();
        });
      });
      rt.get("shoppingCart").removeAll();
    }
  }
});
