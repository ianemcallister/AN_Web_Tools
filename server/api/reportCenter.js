

//define dependencies

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

	//return the messsage
	return "This is a Subject";
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

	//return the text body
	return "This is the text body";
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

	//return the html body
	return "<h1>This is the html body</h1>"
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