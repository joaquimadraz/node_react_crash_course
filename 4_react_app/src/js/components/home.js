var React = require('react');
var _ = require('lodash');

var ClearFix = require('./clearfix');
var TweetInput = require('./tweet_input');
var TweetStore = require('../stores/tweet_store');
var TweetActions = require('../actions/tweet_actions');

// create react component
var Home = React.createClass(
  {
    getInitialState: function () {
      return {
        tweet: '',
        tweets: TweetStore.getTweets()
      }
    },

    componentDidMount: function() {
      // first time the component is loaded
      TweetStore.addChangeListener(this._onChange);
    },

    componentWillMount: function() {
      TweetStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(this.getInitialState());
    },

    update: function(event) {
      this.setState({ tweet: event.target.value });
    },

    leftChars: function() {
      return (140 - this.state.tweet.length);
    },

    buttonDisabled: function() {
      return (this.state.tweet.length <= 0 || this.state.tweet.length > 140);
    },

    renderTweets: function() {
      return this.state.tweets.map((tweet, index) => {
        return (
          <div key={ index }>
            { tweet }
            <button onClick={ TweetActions.remove.bind(null, index) }>X</button>
          </div>
        )
      });
    },

    render: function () {
      return (
        <div>
          <br />
          { this.renderTweets() }
          <br />
          <ClearFix className="well">
            <TweetInput update={ this.update } tweet={ this.state.tweet } />
            <span>{ this.leftChars() }</span>
            <button
              className="btn btn-primary pull-right"
              disabled={ this.buttonDisabled() }
              onClick={ TweetActions.add.bind(null, this.state.tweet) }>
              Tweet
            </button>
          </ClearFix>
        </div>
      );
    }
  }
);

module.exports = Home;
