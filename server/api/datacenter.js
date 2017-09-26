
////define dependencies
	
//define module
datacenter = {
	calcEvntDyErnngs: calcEvntDyErnngs
};

/*
*	CALCULATE EVENT DAY EARNINGS
*
*	@date is the date the event occured - 2017-09-23
*	@startTime is the time that the event started - 06:00:00
*	@endTime is the time the event ended - 14:30:00
*	@devices is the names of all the device used at the event [] - Ah-Nuts03-Oregon
*	@employees is the names of all the empoyees that worked the event [] - Lindsey Newby
*	@txs is an object of all the txs for a given day
*
*	RETURNS two objects:
*		1)	compilation object - broken down by hours, of the sales between 
*			the given times made on the designated device, by the designated 
*			employee.
*		2)	feedback object - listing any tx that didn't match the one of the
*			devices AND one of the employees
*
*/
function calcEvntDyErnngs(date, startTime, endTime, devices, employees, txs) {

	//define local variables
	

};

//export the module
module.exports = datacenter;

