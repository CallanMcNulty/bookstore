import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),
  model(params){
    return this.store.findRecord('book', params.book_id);
  },
  actions: {
    addToCart(book) {
      this.get('cart').add(book);
    },
    save(params) {
      var review = this.store.createRecord('review', params);
      var book = params.book;
      book.get('reviews').addObject(review);

      review.save().then(function(){
        return book.save();
      });
    },
    deleteBook(book) {
      var review_deletions = book.get('reviews').map(function(review){
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return book.destroyRecord();
      });
      this.transitionTo('index');
    },
    deleteReview(review) {
      review.destroyRecord();
    }
  },
});
