
////define dependencies
	
//define module
datacenter = {
	_check_shift_tx_values: _check_shift_tx_values,
	_buildTimeObject: _buildTimeObject,
	calcEvntDyErnngs: calcEvntDyErnngs
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
	return matchFound;
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
function calcEvntDyErnngs(date, startTime, endTime, devices, employees, txs) {

	//define local variables
	var returnObject = { results: {}, errors: {} };

	//itrate through each of the txs
	Object.keys(txs).forEach(function checkAllTx(txTime) {

		//define local variables
		var hasMismatch = false;	//each tx starts off with no mismatches, if one is found the flag is thrown;
		var misMatchSections = [];	//each section that mismatches is logged int he error array

		//turn all the dates/times into new date objects
		var time_of_transaction = _buildTimeObject(date, txTime);
		var time_of_shift_start = _buildTimeObject(date, startTime);
		var time_of_shift_end = _buildTimeObject(date, endTime);

		//1. check the start time, is the tx time after the shift start time?
		if(time_of_transaction < time_of_shift_start) {
			//if it occured before the shift started..
			//throw the mismatch flag
			hasMismatch = true;

			//note the mismatch in the array
			misMatchSections.push('tx occured before shift started');
		}
		
		//2. check the end time, is the tx end before the shift end time?
		if(time_of_transaction > time_of_shift_end) {
			//if it occured after the shift ended..
			//throw the mismatch flag
			hasMismatch = true;

			//note the mismatch in the array
			misMatchSections.push('tx occured after the shift ended');	
		}
		
		//3. check the devices, is the tx device one of the shift devices?
		if(_check_shift_tx_values(devices, txs[txTime].device)) {
			//if the tx device could not be found in the list of approved devices...
			//throw the mismatch flag
			hasMismatch = true;

			//note the mismatch in the array
			misMatchSections.push('the tx device was not designated for this shift');
		}

		//4. check the employees, is the tx employee one of the shift employees?
		if(_check_shift_tx_values(employees, txs[txTime].tender[0].employee_id)) {
			//if the tx employee could not be found in the list of approved employees...
			//throw the mismatch flag
			hasMismatch = true;

			//note the mismatch in the array
			misMatchSections.push('the tx employee was not designated for this shift');
		}

		//once all the tests have been administered...
		if(!hasMismatch) {
			//if there are no mismatches, add the tx to the report
			returnObject.results[txTime] = '';
		} else {
			//if mismatches were found, add the errors to the error log
			returnObject.errors[txTime] = misMatchSections;
		}

	});

	return returnObject;
};

//export the module
module.exports = datacenter;

