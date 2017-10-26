
//console.log(__dirname);

//var api = require('./api.js');
var ahNuts = require('./ah-nuts_processes.js');
//var square = require('./squareup.js');
//var fs = require('fs');
//var sling = require('./sling.js');

/*sling.downloadTimecards(new Date())
.then(function success(s) {
	console.log('success', s);
}).catch(function error(e) {
	console.log('error', e);
});*/

ahNuts.dailyEarningsReportEmails(false, '2017-10-26');

