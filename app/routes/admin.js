import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      genres: this.store.findAll('genre'),
      orders: this.store.findAll('order')
    });
  },
  actions: {
    save(params) {
      var newBook = this.store.createRecord('book', params);
      var genre = params.genre;
      genre.get('books').addObject(newBook);
      newBook.save().then(function() {
        return genre.save();
      });
    }
  }
});
