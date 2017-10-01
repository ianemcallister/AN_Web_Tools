
console.log(__dirname);

var api = require('./api.js');

api.dbRequest({filter: 'cone'})
.then(function success(s) {

	console.log(s.length);
}).catch(function error(e) {

	console.log('error', e);
});
