import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    updateBook(book){
      book.save();
    },
    deleteBook(book){
      this.sendAction('deleteBook', book);
    }
  }
});
