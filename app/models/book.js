import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  genre: DS.belongsTo('genre', {async: true}),
  bookOrders: DS.hasMany('book-order', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
