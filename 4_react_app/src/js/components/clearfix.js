var React = require('react');

var ClearFix = React.createClass(
  {
    render: function() {
      return (
        <div className="clearfix" { ...this.props }>
          { this.props.children }
        </div>
      );
    }
  }
);

module.exports = ClearFix;
