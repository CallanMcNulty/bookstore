import Ember from 'ember';

export default Ember.Component.extend({
  chosenBook: Ember.computed("books", function() {
    var books = this.get('books');
    var chosenNumber = Math.floor(Math.random()*books.content.length);
    var i=0;
    var output = null;
    books.forEach(function(book) {
      if(i===chosenNumber) {
        output = book;
      }
      i++;
    });
    return output;
  })
});
