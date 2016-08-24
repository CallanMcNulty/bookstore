import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('genre', {path: '/genre/:genre_id'});
  this.route('book', {path: '/book/:book_id'});
  this.route('cart');
});

export default Router;
