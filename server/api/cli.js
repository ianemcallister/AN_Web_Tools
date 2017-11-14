
//console.log(__dirname);

//var api = require('./api.js');
var ahNuts = require('./ah-nuts_processes.js');
//var square = require('./squareup.js');
//var fs = require('fs');
//var sling = require('./sling.js');
//var fb = require('./firebase.js');

ahNuts.addShiftsToEmployeeTimecards('2017-11-10')
.then(function success(s) {
	console.log('success', s);
}).catch(function error(e) {
	console.log('there was an error', e);
});


//ahNuts.dailyEarningsReportEmails(false);

/*ahNuts.updateEmployeeList()
.then(function success(s) {
	console.log('success', s);
}).catch(function error(e) {
	console.log('there was an error', e);
});*/

/*var path = __dirname + '/../assets/json/fbEMpList.json'
var fbemplist = JSON.parse(fs.readFileSync(path, 'utf8'));

console.log('fbemplist', fbemplist);

fb._write("employees", fbemplist)
.then(function success(s) {
	console.log('success', s);
}).catch(function error(e) {
	console.log('error', e);
});*/