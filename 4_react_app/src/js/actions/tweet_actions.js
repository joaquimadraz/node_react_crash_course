var TweetConstants = require('../constants/tweet_constants');
var AppDispatcher = require('../dispatchers/app_dispatcher');

module.exports = {

  add: function() {
    AppDispatcher.dispatchViewAction(TweetConstants.ADD, arguments);
  },

  remove: function() {
    AppDispatcher.dispatchViewAction(TweetConstants.REMOVE, arguments);
  }

};
