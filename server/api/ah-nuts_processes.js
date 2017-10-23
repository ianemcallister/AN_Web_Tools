/*
*	AH-NUTS PROCESSES
*
*	This is where all the proprietory processes for ah-nuts are stored.
*/


//define the dependencies
var dc = require('./datacenter.js');

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
*	Each of these values is optained from the following sources
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

	//if no date is provided, default to the current date
	if(aDate == undefined) aDate = new Date();

	//load async data, the employee list comes from the databse
	dc.loadEmployeesList()
	.then(function success(employeeList) {

		//this function needs to execute for each employee, so we must iterate through
		//a list of employee objects with the required data
		employeeList.forEach(function(employee) {

			//for each employee we must make the required calculations

			//start by downloading the total shift details from Sling (start, end, duration, location)

			//next download the shift earnings from square with the employee id, start, and end times

			//calculate the Average_Sales_Per_Hour

			//calculate the Shift_Commission_Multiplier

			//calculate the Hourly_Commission_Rate

			//calculate the Average_Hourly_Earnings

			//compile 

		});

		//when the function is finished, it should send an error report to the administrator
	
	}).catch(function error(e){
		//error handling for employee list

	});

};

module.exports = ahNuts;