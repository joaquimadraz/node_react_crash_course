var hash = require('./test.js')

if(typeof hash.message === 'undefined')
  console.log('nope, message not defined');
else
  console.log(hash.message);

console.log(hash.myfunc());

