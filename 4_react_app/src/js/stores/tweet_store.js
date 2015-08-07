var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/app_dispatcher');
var TweetConstants = require('../constants/tweet_constants');

var _tweets = [];

var TweetStore = _.assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('CHANGE');
  },

  addChangeListener: function(cb) {
    this.on('CHANGE', cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener('CHANGE', cb);
  },

  getTweets: function() {
    return _tweets;
  },

  viewActions: {}

});

TweetStore.viewActions[TweetConstants.ADD] = add;
TweetStore.viewActions[TweetConstants.REMOVE] = remove;

appDispatcher.register(dispatcherCallback);

module.exports = TweetStore;

/* ############################### PROTECTED ############################### */

function add(tweet) {
  _tweets.push(tweet);
};

function remove(index) {
  _tweets.splice(index, 1);
};

function dispatcherCallback(payload) {

  if (payload.source == 'VIEW_ACTION') {
    TweetStore.viewActions[payload.action].apply(this, payload.args);
    TweetStore.emitChange();
  };

  return true;
};
