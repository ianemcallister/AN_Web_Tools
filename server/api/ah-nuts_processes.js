/*
*	AH-NUTS PROCESSES
*
*	This is where all the proprietory processes for ah-nuts are stored.
*/


//define the dependencies
var dc = require('./datacenter.js');
var square = require('./squareup.js');
var sling = require('./sling.js');

//define the current module
var ahNuts = {
	admin: "ian@ah-nuts.com",
	dailyEarningsReportEmails: dailyEarningsReportEmails
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
	if(aDate == undefined) aDate = new Date();

	//load all async data at the same time, when all promises resolve the process
	//the data
	Promise.all([
		dc.loadEmployeesList(),
		//square.downloadDailySales(aDate),
		square.aTest(),
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

			//define local variables
			var Total_Shift_Hours = 0;				//Aquired from Sling API
			var Total_Shift_Sales = 0; 				//Aquired from Square API	
			var Base_Pay_Rate = 0; 					//Aquired from Ah-Nuts Database
			var Commission_Factor = 0;				//(2,752) - Aquired from Ah-Nuts Databse
			
			//for each employee we must make the required calculations

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
				Total_Shift_Hours: Total_Shift_Hours,
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
				//email report must be sent to the employee
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

module.exports = ahNuts;

