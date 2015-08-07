var { Dispatcher } = require('flux');
var _ = require('lodash');

var appDispatcher = new Dispatcher();

appDispatcher.dispatchViewAction = function(action, ...args) {
  if(args.length === 1 && _.isArguments(args[0])) {
    args = args[0];
  }

  this.dispatch({ source: 'VIEW_ACTION', action: action, args: args });
};

module.exports = appDispatcher;
