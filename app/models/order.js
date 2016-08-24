import DS from 'ember-data';

export default DS.Model.extend({
  bookOrders: DS.hasMany('book-order', {async: true}),
  total: DS.attr('number')
});
