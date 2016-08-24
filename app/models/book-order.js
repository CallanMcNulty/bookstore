import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo('book', {async: true}),
  order: DS.belongsTo('order', {async: true})
});
