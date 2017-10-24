/*
*	SLING.JS
*
*	This module handles all the interactions required with sling
*
*/

//define dependencies
var fetch = require('node-fetch');

//define local variables

//define the module
var sling = {
	headers: { 
		"Accept": "application/json", 
		"Authorization": "4201fe8a5aaa5a9cbaff94607b551918" 
	},
	baseURL: 'https://api.sling.is/',
	_get: _get,
	_post: _post,
	_put: _put,
	_delete: _delete,
	_dateFormatter:_dateFormatter,
	_unpackFetchResponse: _unpackFetchResponse,
	downloadTimecards: downloadTimecards
};

/*
*	_GET
*	
*	This function gets from the sling server
*/
function _get(url, options) {

	//define local variable
	var self = this;

	//return async work
	return new Promise(function(resolve, reject) {

		//fetch requred data
		fetch(url, options)
		.then(function success(s) {
			resolve(s);
		}).catch(function error(e) {
			reject(e);
		});

	});

};

function _post() {}
function _put() {}
function _delete() {}

/*
*	_DATE FORMATTER
*
*	This function takes a single date and returns a stinr gthat is the formated required
*	2017-07-30T00:03:00-08:00
*
*	@param aDate - i.e. 2017-10-22
*	@return durationString - i.e. 2017-10-22T01:00:00Z/2017-10-22T23:00:00Z
*/
function _dateFormatter(aDate) {
	//define local variable
	var theDate = new Date(aDate);

	var year = aDate.getFullYear();
	var month = parseInt(aDate.getMonth());
	var day = parseInt(aDate.getDate());
	var startTime = "T03:00:00-08:00";
	var endTime = "T02:59:59-08:00";
	var startString = year + "-" + (month + 1) + "-" + (day - 1) + startTime;
	var endString = year + "-" + (month + 1) + "-" + (day) + endTime;;

	return startString + '/' + endString;
};

/*
*	_UNPACK FETCH RESPONSE
*
*	This function returns only what is needed from most fetch respones, the data
*/
function _unpackFetchResponse(response) {

	//return async work
	return new Promise(function(resolve, reject) {

		//unpack the response
		response.buffer().then(function(data) {

			//convert to string
			resolve(data.toString('utf8'));

		});

	});

};

/*
*	downloadTimecards
*
*	This function is used to downlooad time cards, according to the sling API.
*	Possible Responses:
*	200 - Success
*	400 - The dates query string parameter was not supplied.
*	402 - Premium required
*	405	- Invalid permissions
*
*
*	@param dates - is an interval time, i.e. 2017-10-22T01:00:00Z/2017-10-22T23:00:00Z
*	@returns Promise
*
*/
function downloadTimecards(aDate) {

	//define local variables
	var self = this;
	var urlPath = self.baseURL + 'v1/timesheets?dates=' + self._dateFormatter(aDate);

	//retur async work
	return new Promise(function(resolve, reject) {
		
		//get the timecards then pass them back
		self._get(urlPath, { 'headers': self.headers}).then(function success(s) {
			
			//when the data comes back, unpack it
			self._unpackFetchResponse(s).then(function(data) {

				//resolve the data
				resolve({"data":JSON.parse(data)});

			}).catch(function error(e) {
				reject({"error": e});
			});

		}).catch(function error(e) {
			reject({"error": e});
		});

	});

}

//export the module
module.exports = sling;