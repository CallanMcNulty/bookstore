import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  stars: DS.attr(),
  comment: DS.attr(),
  book: DS.belongsTo('book', {async: true}),
  date: DS.attr()

});
