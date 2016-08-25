import Ember from 'ember';

export default Ember.Component.extend({
  updateBook: false,
  actions:{
    reviseBook() {
      this.set('updateBook', true);
    },
    updateBook(book){
      book.save();
      this.set('updateBook', false);
    },
    deleteBook(book){
      this.sendAction('deleteBook', book);
    }
  }
});
