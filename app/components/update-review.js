import Ember from 'ember';

export default Ember.Component.extend({
  reviewForm: false,
  actions: {
    reviewForm() {
      this.set('reviewForm', true);
    },
    save(review) {
      var newStars = this.get('selectedStar');
      if(newStars !== undefined) {
        review.set('stars', newStars);
      }
      review.save();
      this.set('reviewForm', false);
    },
    deleteReview(review) {
      this.sendAction('deleteReview', review);
    }
  }
});
