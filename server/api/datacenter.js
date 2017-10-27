
//define dependencies
var fs = require('fs');

//define module
datacenter = {
	_check_shift_tx_values: _check_shift_tx_values,
	_buildTimeObject: _buildTimeObject,
	calcEvntDyErnngs: calcEvntDyErnngs,
	loadEmployeesList: loadEmployeesList,
	readFileSync: readFileSync
};

/*
*	_CHECK SHIFT TX VALES
*
*	This is a local method that accets either the shift devices array or the
*	shift employees array and compares the values to the tranaction value.
*	this is used to determine discrepinces.
*
*	@shiftArray is the array of devices or employees assigned to this shift [] - Ah-Nuts03-Oregon or lfRy4B4G-0lA_udwGgQr
*	@txValue is the individual value associated with a single tranaction - Ah-Nuts03-Oregon or lfRy4B4G-0lA_udwGgQr
*	
*	RETURNS a true or false boolean value
*/
function _check_shift_tx_values(shiftArray, txValue) {

	//define local variable
	var matchFound = false;

	//iterate through all the shiftArray values
	shiftArray.forEach(function checkValues(shiftValue) {

		//if one of the values matches then the tx is part of this shift
		if(shiftValue == txValue) matchFound = true;

	});

	//return the value. True if the devices or employee was one find in
	//the list of expected devices or employees.  False if no matches
	//were found
	return !matchFound;
};

/*
*	_BUILD TIME OBJECT
*
*	This is a local method that accepts a date string and a time string
*	then returns a javascipt date object that represents the passed in 
*	values
*	@dateString is the date to be used - 2017-09-23
*	@timeString is the time to be used - 08_00_00
*
*	RETURNS a javascript date object
*/
function _buildTimeObject(dateString, timeString) {

	//define local variable
	var dateSplit = dateString.split('-');
	var timeSplit = timeString.split('_');
	var dateObject = {
		Y: parseInt(dateSplit[0]),
		M: parseInt(dateSplit[1])-1,
		D: parseInt(dateSplit[2]),
		h: parseInt(timeSplit[0]),
		m: parseInt(timeSplit[1]),
		s: parseInt(timeSplit[2]),
	};

	return new Date(dateObject.Y, dateObject.M, dateObject.D, dateObject.h, dateObject.m, dateObject.s);
};

/*
*	CALCULATE EVENT DAY EARNINGS
*
*	@date is the date the event occured - 2017-09-23
*	@startTime is the time that the event started - 06_00_00
*	@endTime is the time the event ended - 14_30_00
*	@devices is the names of all the device used at the event [] - Ah-Nuts03-Oregon
*	@employees is the names of all the empoyees that worked the event [] - lfRy4B4G-0lA_udwGgQr
*	@txs is an object of all the txs for a given day
*
*	RETURNS two objects:
*		1)	results object - broken down by hours, of the sales between 
*			the given times made on the designated device, by the designated 
*			employee.
*		2)	errors object - listing any tx that didn't match the one of the
*			devices AND one of the employees
*
*/
function calcEvntDyErnngs(shift, txs, tests) {

	//
	var returnObject = {};

	//itrate through each of the txs
	Object.keys(txs).forEach(function checkAllTx(txTime) {

		//add the time to the return object
		returnObject[txTime] = {};

		//iterate through tests
		Object.keys(tests).forEach(function checkAllTests(testName) {

			returnObject[txTime][testName] = tests[testName](1, 2);

		});

	});

	console.log(returnObject);

};

function loadEmployeesList() {

	//return async work
	return new Promise(function(resolve, reject){ 
		
		//eventually this will pull from firebase or other databse, but for now
		//this will just load a file
		var path = __dirname + '/../assets/json/TEST_employee_records.json'
		//var path = __dirname + '/../assets/json/employee_records.json'
		var jsonModel = fs.readFileSync(path, "utf8");

		resolve(JSON.parse(jsonModel));

	});

};

/*
*	readFileSync
*
*/
function readFileSync(path) {

	return fs.readFileSync(path, 'utf8');
}

//export the module
module.exports = datacenter;

