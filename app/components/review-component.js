import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['stars:desc'],
  sortedReviews: Ember.computed.sort('book.reviews', 'sortBy'),
  actions:{
    save() {
      var newDate = new Date(Date.now())
      var params = {
        userName: this.get('userName'),
        stars: this.get('selectedStar'),
        comment: this.get('comment'),
        book: this.get('book'),
        date: newDate.getMonth() + "/" + newDate.getDate() + "/" + newDate.getFullYear()
      };
      console.log(params);
      this.sendAction('save', params);
    }
  }
});
