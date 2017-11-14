/*
*	AH-NUTS PROCESSES
*
*	This is where all the proprietory processes for ah-nuts are stored.
*/


//define the dependencies
var dc = require('./datacenter.js');
var square = require('./squareup.js');
var sling = require('./sling.js');
var fb = require('./firebase.js');
var mc = require('./mailcenter.js');
var rc = require('./reportCenter.js');

//define the current module
var ahNuts = {
	admin: "ian@ah-nuts.com",
	_calcShiftHrs: _calcShiftHrs,
	_calcShiftSales: _calcShiftSales,
	dailyEarningsReportEmails: dailyEarningsReportEmails,
	updateEmployeeList: updateEmployeeList,
	addShiftsToEmployeeTimecards: addShiftsToEmployeeTimecards
};

/*
*	_CALCULATE SHIFT HOURS
*	
*	This function accepts an employee ID and the timecards form sling and returns
*	the hours worked as a decimal.
*
*	@param - employeeId
*	@param - timecards
*	@return - hoursWorked (decimal)
*/
function _calcShiftHrs(employeeId, timecards) {

	console.log('_calcShiftHrs', employeeId);
	//define local variables
	var self = this;
	var hoursWorked = 0.00;

	//console.log('calculating Shift Hours', employeeId, timecards);

	//iterate through each of the timecards
	timecards.forEach(function(tCard) {

		//only assess timecards for selected employee
		if(tCard.user.id == employeeId) {

			//calculate the duration
			var startTime = new Date(tCard.clockIn);
			var endTime = new Date(tCard.clockOut);
			var duration = (endTime - startTime) / 1000 / 60 / 60; // miliseconds->Seconds, seconds->minutes, minutes->hrs 

			//console.log('duration', duration );

			//add that duration to the hours Worked
			hoursWorked += duration;
		}

	});

	//return the value
	return hoursWorked;
};

/*
*	_CALC SHIFT SALES
*
*	This function looks through all of the shift sales and adds those attributed
*	to the employee to their shift
*
*	@param - employeeId
*	@param - allSales
*	@return - Total_Shift_Sales
*
*/
function _calcShiftSales(employeeId, allSales) {

	console.log('_calcShiftSales');

	//define local variables
	var self = this;
	var totalShiftSales = 0;

	//iterate through the objects based on keys
	Object.keys(allSales).forEach(function(txDate) {

		//iterate through each of the tender transactions
		Object.keys(allSales[txDate]).forEach(function(txTime) {

			//TODO
			//console.log(allSales[txDate][txTime].tender[0].employee_id, employeeId);
			//console.log(allSales[txDate][txTime].tender[0]);
			if(allSales[txDate][txTime].tender[0].employee_id == employeeId) {
				//ad the sales to the employee
				totalShiftSales += allSales[txDate][txTime].gross_sales_money;
			};
			
		});

	});

	//return the shift sales
	return totalShiftSales;
};

/*
*	DAILY EARNINGS REPORT EMAILS
*
*	This method is an important tool for communicating performance to employees. 
*	It needs a couple of resoureces to opperate, sling shifts, and square sales data, 
*	along with employee contract data.
*
*	Total_Shift_Sales ($) DIVIDED BY Total_Shift_Hours (Hrs) = Average_Sales_Per_Hour ($/hr)
*	Average_Sales_Per_Hour ($/hr) DIVIDED BY 2,752 = Shift_Commission_Multiplier (%)
*	Shift_Commission_Multiplier (%) TIMES Average_Sales_Per_Hour ($/hr) = Hourly_Commission_Rate ($)
*	Hourly_Commission_Rate ($) PLUS Base_Pay_Rate ($) = Average_Hourly_Earnings ($)
*	Average_Hourly_Earnings ($) TIMES Total_Shift_Hours (Hrs) = Total_Shift_Earnings ($)
*
*	Each of these values is obtained from the following sources
*	Total_Shift_Hours - Aquired from Sling API	
*	Total_Shift_Sales - Aquired from Square API	
*	Base_Pay_Rate - Aquired from Ah-Nuts Database
*	Commission_Factor (2,752) - Aquired from Ah-Nuts Databse
*	Average_Sales_Per_Hour = Total_Shift_Sales / Total_Shift_Hours
*	Shift_Commission_Multiplier = Average_Sales_Per_Hour / Commission_Factor
*	Hourly_Commission_Rate = Shift_Commission_Multiplier * Average_Sales_Per_Hour
*	Average_Hourly_Earnings = Hourly_Commission_Rate + Base_Pay_Rate
*	Total_Shift_Earnings = Average_Hourly_Earnings * Total_Shift_Hours
*
*	Additionally, because this is an all emcompasing method it requires the list of
*	Employees, their square ID numbers, and their email addresses, as well as the 
*	email addresses of supervisors in order to process reports for all employees.
*
*	@param - takes no params
*	@return - returns no data
*/
function dailyEarningsReportEmails(employeeReportsNeeded, aDate) {
	//var define local variables
	var self = this;
	var allEmployeeReports = {};	//this will track all the reports generated

	//if no date is provided, default to the current date
	if(aDate == undefined) aDate = new Date()
	else {
		var passedDate = aDate;
		var splitDate = aDate.split('-');
		var passedYear = splitDate[0];
		var passedMonth = splitDate[1] - 1;
		var passedDay = splitDate[2];
		var currentTime = new Date();
		//first set the date
		aDate = new Date(passedYear, passedMonth, passedDay, currentTime.getHours(), currentTime.getMinutes());
		//then make sure the times are updated
	};

	console.log('got this date:', aDate);

	//load all async data at the same time, when all promises resolve the process
	//the data
	Promise.all([
		dc.loadEmployeesList(),
		square.downloadDailySales(aDate),
		sling.downloadTimecards(aDate)
	])
	.then(function success(earningsRequiredData) {

		//define local variables
		var employeeList = earningsRequiredData[0];
		var allDailySales = earningsRequiredData[1];
		var allDailyShifts = earningsRequiredData[2];

		//this function needs to execute for each employee, so we must iterate through
		
		//a list of employee objects with the required data
		employeeList.forEach(function(employee) {

			console.log('lookign at employee', employee.ah_nuts_id);
			//define local variables
			var employeeWorkedToday = 0;	//TODO: ADD THIS TEST HERE
			var Total_Shift_Hours = self._calcShiftHrs(employee.sling_id, allDailyShifts.data);	//Aquired from Sling API
			//var Total_Sales_Hours = //TODO: ADD THIS LATER
			var Total_Shift_Sales = self._calcShiftSales(employee.square_id, allDailySales) / 100; 	//Aquired from Square API	
			var Base_Pay_Rate = employee.deal.hourly_rate / 100; 			//Aquired from Ah-Nuts Database
			var Commission_Factor = employee.deal.commission_factor;	//(2,752) - Aquired from Ah-Nuts Databse
			
			//for each employee we must make the required calculations
			console.log(employee.ah_nuts_id, Total_Shift_Sales);

			//calculate the Average_Sales_Per_Hour
			var Average_Sales_Per_Hour = Total_Shift_Sales / Total_Shift_Hours; 
			
			//calculate the Shift_Commission_Multiplier
			var Shift_Commission_Multiplier = Average_Sales_Per_Hour / Commission_Factor;

			//calculate the Hourly_Commission_Rate
			var Hourly_Commission_Rate = Shift_Commission_Multiplier * Average_Sales_Per_Hour;

			//calculate the Average_Hourly_Earnings
			var Average_Hourly_Earnings = Hourly_Commission_Rate + Base_Pay_Rate;

			//calculate Total_Shift_Earnings
			var Total_Shift_Earnings = Average_Hourly_Earnings * Total_Shift_Hours;

			//compile dailyEarningsReportModel
			var dailyEarningsReportModel = {
				TheDate: aDate,
				Total_Shift_Hours: Total_Shift_Hours,
				//Total_Sales_Hours: Total_Sales_Hours,	//TODO: ADD THIS LATER
				Total_Shift_Sales: Total_Shift_Sales,
				Base_Pay_Rate: Base_Pay_Rate,
				Commission_Factor: Commission_Factor,
				Average_Sales_Per_Hour: Average_Sales_Per_Hour,
				Shift_Commission_Multiplier: Shift_Commission_Multiplier,
				Hourly_Commission_Rate: Hourly_Commission_Rate,
				Average_Hourly_Earnings: Average_Hourly_Earnings,
				Total_Shift_Earnings: Total_Shift_Earnings
			};

			//send in email to employees if required
			if(employeeReportsNeeded) {

				//report model must be compiled into an email report
				var employeeSalesReportEmail = rc.employeeDailySalesReport(dailyEarningsReportModel);
				
				console.log('employeeSalesReportEmail', employeeSalesReportEmail);

				//email report must be sent to the employee
				mc.send(employee.contact.email, 'info@ah-nuts.com', employee.supervisors, employeeSalesReportEmail.subject, employeeSalesReportEmail.msgBody)
				.then(function success(s) {
					console.log('success:', s);
				}).catch(function error(e) {
					console.log('error:', e);
				});

			};

			//add the findings to a report for the manager
			allEmployeeReports[employee.ah_nuts_id] = dailyEarningsReportModel;

		});

		//when the function is finished, it should send an error report to the administrator
		console.log(allEmployeeReports);

	}).catch(function error(e){
		//error handling for employee list

	});

};

/*
*	
*
*	Daily Earnings Report Emails was getting too big so it's time to break it down
*	into smaller component parts.  There are several components that go into calculating
*	an employees dailyEarningsReportEmail.  They are as follows:
*
*	1. Download and process shift data.
*	2. Download and process sales data.
*	3. Calculate earnings from shift and sales data.
*	4. Compile reports for employees and supervisors.
*	5. Send reports to employees and supervisors.
*
*	By breaking the process into these component parts we can streamline each of these
*	steps.  So here's where we'll start with the first one. Download and process shift data.
*
*	In order to download and process shift data we need a date.  If not date is provided
*	We'll default to the previous day.  We'll be aquiring the shift data from sling.
*	There are several elements we're looking for:
*
*	Shift location
*	Shift scheduled start
*	Shift scheduled end
*	Shift actual start
*	Shift actual end
*	Break start
*	Break End
*	Sales Hours start
*	Sales Hours End
*	Sales Hours duration
*	Non-sales Hours start
*	Non-sales Hours end
*	Non-sales Hours duration
*	Total hours worked
*	Total Sales hours worked
*	Total Non-sales Hours worked
*
*	In order to 
*
*/

/*
*	Employee List Update
*	
*	The employee list is an important document. It keeps track of all the employee
*	details across square, sling, and ah-nuts. All the information for these three
*	services needs to be in sync.  All this info gets saved into firebase.
*
*	This function downloads employee lists from square and sling, then makes sure
*	the data from each is stored in firebase.
*	
*	@return status
*/
function updateEmployeeList() {

	//define local variables
	var self = this;

	return new Promise(function(resolve, reject) {
		
		//run all promises
		Promise.all([
			fb.downloadEmployeesList(),	//download firebase employee list
			sling.downloadEmployeesList(),	//download sling employee list
			square.employeesList() 	//download square employee list
		])
		.then(function success(allEmpLists) {
			
			//define local variables
			var fbList = allEmpLists[0];
			var slingList = allEmpLists[1].data;
			var squareList = allEmpLists[2];

			console.log('slingList');
			slingList.forEach(function(slingEmp) {
				console.log(slingEmp.lastname + slingEmp.name + slingEmp);
			});
			

			//save list to firebase
			resolve(true);

		}).catch(function error(e){
			//error handling for employee list
			resolve("error: " + e);
		});
	
	});

};

/*
*	Add Shifts To Employee Timecards
*
*	This function does exactly what it sounds like. It accepts a date and checks
*	shift information in sling.  Then adds any shifts found to the respective timecards
*	of employees.
*	
*	1. Collect all the sling timecards for a given day
*	2. Parse the timesheet (in sling module)
*	3. Update Firebase with the new time sheet information	
*	4. Return success or failure
*
*	@param aDate (string - "YYYY-MM-DD")
*	@return success/fail (bool)
*/
function addShiftsToEmployeeTimecards(aDate) {

	//define local variales
	var self = this;

	//if no date is provided, default to the current date
	if(aDate == undefined) aDate = new Date()
	else {
		var passedDate = aDate;
		var splitDate = aDate.split('-');
		var passedYear = splitDate[0];
		var passedMonth = splitDate[1] - 1;
		var passedDay = splitDate[2];
		var currentTime = new Date();
		//first set the date
		aDate = new Date(passedYear, passedMonth, passedDay, currentTime.getHours(), currentTime.getMinutes());
		//then make sure the times are updated
	};

	//return async work
	return new Promise(function(resolve, reject) {

		Promise.all([
			fb.downloadTimecards(),
			fb.downloadEmployeesList(),
			sling.downloadTimecards(aDate)
		])
		.then(function success(requiredTimecardData) {

			//console.log('got this employee list', requiredTimecardData[0]);
			//console.log('got these timecards', requiredTimecardData[1].data);

			//upon success, parse the timesheet
			var newTimecards = sling.parseTimecards(requiredTimecardData[2].data, requiredTimecardData[1], requiredTimecardData[0], aDate);

			//when the newTimecards come back, save them
			fb._write('timecards', newTimecards)
			.then(function success(s) {
				resolve(s);
			}).catch(function error(e) {
				reject(e);
			});

		}).catch(function error(e) {
			//if there was an error pass it back
			reject(e);
		});

	});

};

module.exports = ahNuts;

