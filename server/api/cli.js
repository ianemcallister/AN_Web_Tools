
var firebase = require('./firebase');

function checkTxs(txs) {

	var returnObject = {}

	//run through all the txs
	Object.keys(txs).forEach(function(key) {

		var deviceName = txs[key].device;
		var timeSplit = key.split("_");
		var hour = timeSplit[0];

		if(returnObject[deviceName] == undefined) returnObject[deviceName] = {};

		if(returnObject[deviceName][hour] == undefined) returnObject[deviceName][hour] = txs[key].gross_sales_money
		else returnObject[deviceName][hour] += txs[key].gross_sales_money;

	});


	return returnObject;

}



var date = '2017-09-16';
var readPath = '/raw_sales_data/' + date;
var writePath = '/raw_device_sales/' + date;

firebase.read(readPath)
.then(function success(txs) {

	firebase.write(writePath, checkTxs(txs))
	.then(function success(s) {
		console.log("success:",s);
	}).catch(function error(e) {
		console.log('error:', e);
	});

}).catch(function error(e) {
	console.log("error:",e);
});

