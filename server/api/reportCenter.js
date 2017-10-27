

//define dependencies
var hb = require('handlebars');
var dc = require('./datacenter.js');

//define the module
var reportCenter = {
	_buildSubject: _buildSubject,
	_buildTextBody: _buildTextBody,
	_buildHTMLBody: _buildHTMLBody,
	employeeDailySalesReport: employeeDailySalesReport
};

/*
*	_build Subject
*
*	This function accepts the model and returns a string Subject for the email
*
*	@param - model
*	@return - theSubject
*/
function _buildSubject(model) {

	//define local variables
	var wkdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var theSubject = "Your Ah-Nuts! Daily Sales Report for ";	

	//set the date back one day
	var yesterday = new Date(model.TheDate.getTime());
	yesterday.setDate(model.TheDate.getDate() - 1);

	//add the day of the week
	theSubject += wkdays[yesterday.getDay()] + ", ";

	//add the month
	theSubject += months[yesterday.getMonth()] + " ";

	//add the day of the month
	theSubject += yesterday.getDate();

	//add the ending on the day
	if(yesterday.getDate() == 1 || yesterday.getDate() == 21 || yesterday.getDate() == 31) theSubject += "st "
	else if(yesterday.getDate() == 2 || yesterday.getDate() == 22) theSubject += "nd "
	else theSubject += "th ";

	//add the year
	theSubject += yesterday.getFullYear();

	//return the messsage
	return theSubject;
};

/*
*	_build Text Body
*
*	This function accepts the model and returns a string text message for the email
*
*	@param - model
*	@return - plainText
*/
function _buildTextBody(model) {

	//define the local variable
	var plainText = "Just basic";

	//return the text body
	return plainText;
};

/*
*	_build HTML Body
*
*	This function accepts the model and returns a string Subject for the email
*
*	@param - model
*	@return - htmlBody
*/
function _buildHTMLBody(model) {

	//load the template source
	var source = dc.readFileSync(__dirname + '/../assets/templates/employee_sales_report_text.htm')
	
	//compile the template source into an HB template
	var template = hb.compile(source);
	
	//add the data to the template
	var data = model;
	
	//render the results
	var result = template(data);

	//return the text body
	return result;
};

/*
*	EMPLOYEE DAILY SALES REPORT
*
*	This function accepts a json model and converts it into an html, and plain text
*	email that can be sent to the employee and will copy their supervisors
*
*	@params - model
*	@report - emailReport
*/
function employeeDailySalesReport(model) {

	//define local variables
	var self = this;
	var emailReport = { subject: "", msgBody: { plainText:"", htmlText:"" }};

	//first define the subject
	var subject = self._buildSubject(model);

	//then define the plain text body
	var plainText = self._buildTextBody(model);

	//finally define the html text body
	var htmlText = self._buildHTMLBody(model);

	//add all the new values
	emailReport.subject = subject;
	emailReport.msgBody.plainText = plainText;
	emailReport.msgBody.htmlText = htmlText;

	//return the report
	return emailReport;
};

//export the module
module.exports = reportCenter;