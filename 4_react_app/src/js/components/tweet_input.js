var React = require('react');

var TweetInput = React.createClass(
  {
    render: function() {
      return (
        <div>
          <textarea
            className="form-control"
            onChange={ this.props.update }>
          </textarea>
          <br />
        </div>
      )
    }
  }
);

module.exports = TweetInput;
