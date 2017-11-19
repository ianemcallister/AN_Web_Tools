/*
*	
*	This CLI is designed to facilitate timecards
*	
*	It should be exectued in three steps
*/

//var api = require('./api.js');
var ahNuts = require('./ah-nuts_processes.js');
var square = require('./squareup.js');
//var fs = require('fs');
var sling = require('./sling.js');
//var fb = require('./firebase.js');

var requiredDate = '2017-11-17';

//1. Download Timecard Data
//ahNuts.addShiftsToEmployeeTimecards(requiredDate).then(function success(s) { console.log('success', s); }).catch(function error(e) { console.log('there was an error', e); });

//2. Download Sales Data
//ahNuts.addSalesToEmployeeTimecards(requiredDate).then(function success(s) { console.log('success', s); }).catch(function error(e) { console.log('there was an error', e); });

//3. Process Timecard & Sales Data
//ahNuts.processTCAndSalesData().then(function success(s) { console.log('success', s); }).catch(function error(e) { console.log('there was an error', e); });

//4. Distribute results //MUST CHANGE DATE TO THE DATE YOU WANT SENT, NOT THE DAY OF COMPILING
ahNuts.distributeDailySales(requiredDate).then(function success(s) { console.log('success', s); }).catch(function error(e) { console.log('there was an error', e); });


/*square.employeesList()
.then(function(result){
	console.log(result);
});*/

/*sling.downloadEmployeesList()
.then(function(result){
	console.log(result);
});*/