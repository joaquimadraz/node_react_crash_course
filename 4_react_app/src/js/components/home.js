var React = require('react');
var _ = require('lodash');

var ClearFix = require('./clearfix');
var TweetInput = require('./tweet_input');

// create react component
var Home = React.createClass(
  {
    getInitialState: function () {
      return {
        tweet: '',
        tweets: ['teste']
      }
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
            <button onClick={ this.removeTweet.bind(null, index) }>X</button>
          </div>
        )
      });
    },

    removeTweet: function(index) {
      _.pullAt(this.state.tweets, index);

      this.setState({ tweets: this.state.tweets });
    },

    submitTweet: function() {
      this.state.tweets.push(this.state.tweet);

      this.setState({ tweets: this.state.tweets });
    },

    render: function () {
      return (
        <div>
          <br />
          { this.renderTweets() }
          <br />
          <ClearFix className="well">
            <TweetInput update={ this.update } />
            <span>{ this.leftChars() }</span>
            <button
              className="btn btn-primary pull-right"
              disabled={ this.buttonDisabled() }
              onClick={ this.submitTweet }>
              Tweet
            </button>
          </ClearFix>
        </div>
      );
    }
  }
);

module.exports = Home;

// second app
//
// // create react component
// var App = React.createClass(
//   {
//     getDefaultProps: function () {
//       // se não enviar nada no render do component,
//       // estes são os defaults
//       return {
//         title: 'yellou',
//         what: 25
//       }
//     },

//     propTypes: {
//       title: React.PropTypes.string,
//       what: React.PropTypes.number.isRequired
//     },

//     render: function () {
//       return (
//         // React.DOM.h1(null, 'hello wurld');
//         <div title="mais que um elemento, precisa de ter sempre um div">
//           <h1>{ this.props.title } { this.props.what }</h1>
//           <h1>{ this.props.title } { this.props.what }</h1>
//         </div>
//       );
//     }
//   }
// );

// // body vai levar o conteudo do app
// React.render(<App title="hello" what="world" />, document.body);


// first app
//
// var React = require('react');

// var hello = 'Yellow Wurld';

// // create react component
// var App = React.createClass({
//   render: function() {
//     return <h1>{ hello }</h1>;
//   }
// });

// // body vai levar o conteudo do app
// React.render(<App />, document.body);
