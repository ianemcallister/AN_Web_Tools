/*
*	SLING.JS
*
*	This module handles all the interactions required with sling
*
*/

//define dependencies
var fetch = require('node-fetch');
var moment = require('moment');

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
	_formatCardsDate: _formatCardsDate,
	_monthDayZeros: _monthDayZeros,
	_calcDuration: _calcDuration,
	_calcDifference: _calcDifference,
	_unpackFetchResponse: _unpackFetchResponse,
	downloadTimecards: downloadTimecards,
	parseTimecards: parseTimecards,
	downloadEmployeesList: downloadEmployeesList
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
	var self = this;
	var theDate = new Date(aDate);

	var year = aDate.getFullYear();
	var startTime = "T03:00:00-08:00";
	var endTime = "T02:59:59-08:00";

	//add zeros when applicable
	var monthDay = self._monthDayZeros(aDate);

	var startString = year + "-" + monthDay.start.month + "-" + monthDay.start.day + startTime;
	var endString = year + "-" + monthDay.end.month + "-" + monthDay.end.day + endTime;;

	return startString + '/' + endString;
};

/*
*
*
*
*/
function _formatCardsDate(aDate) {
	//define local variable
	var self = this;
	var theDate = new Date(aDate);

	var year = aDate.getFullYear();

	//add zeros when applicable
	var monthDay = self._monthDayZeros(aDate);

	return year + "_" + monthDay.end.month + "_" + monthDay.end.day;
};

/*
*	_month Day Zeros
*
*	calculates the proper start and end month and days and ads zeros if need be
*
*	@param theDate (a date object)
*	@return monthDay {
*		start: {
*			month: string,
*			day: string
*		},
*		end: {
*			month: string,
*			day: string
*		},
*	}
*/
function _monthDayZeros(theDate) {

	//define local variables
	var self = this;
	var monthDay = {
		start: {
			month: "",
			day: ""
		},
		end: {
			month: "",
			day: ""
		}
	};

	//what is the date before?
	var today = moment(theDate);
	var yesterday = moment(today).subtract(1, "day");
	var startDate = new Date(yesterday.format());
	var endDate = new Date(today.format());

	//add zeros if necessary
	if((startDate.getMonth() + 1) < 10) monthDay.start.month = "0" + (startDate.getMonth() + 1);
	else monthDay.start.month = (startDate.getMonth() + 1);

	if((endDate.getMonth() + 1) < 10) monthDay.end.month = "0" + (endDate.getMonth() + 1);
	else monthDay.end.month = (endDate.getMonth() + 1);

	if(startDate.getDate() < 10) monthDay.start.day = "0" + startDate.getDate();
	else monthDay.start.day = startDate.getDate();

	if(endDate.getDate() < 10) monthDay.end.day = "0" + endDate.getDate();
	else monthDay.end.day = endDate.getDate();

	return monthDay;
};

/*
*
*
*/
function _calcDuration(start, end) {
	var theStart = new Date(start);
	var theEnd = new Date(end);

	return ((theEnd - theStart) / 1000 / 60 / 60);
};

/*
*	
*
*/
function _calcDifference(original, actual) {
	return (actual - original);
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

/*
*	Parse Timecards
*	
*	This accepts a timecard object and parses it into a documen that can be used by
*	firebase.  Comes in looking like this:
*	[
	  {
	    "edited": null,
	    "clockIn": "2017-11-11T07:15:00-08:00",
	    "shiftEnded": true,
	    "event": {
	      "status": "published",
	      "available": false,
	      "user": {
	        "id": 615455
	      },
	      "offer": null,
	      "fullDay": false,
	      "self": {
	        "link": "shifts/27038064"
	      },
	      "summary": null,
	      "applications": null,
	      "breakDuration": 0,
	      "rrule": null,
	      "parentId": null,
	      "openEnd": false,
	      "position": {
	        "id": 621674
	      },
	      "dtend": "2017-11-11T14:00:00-08:00",
	      "dtstart": "2017-11-11T06:30:00-08:00",
	      "type": "shift",
	      "id": "27038064",
	      "location": {
	        "id": 621302
	      }
	    },
	    "editedBy": null,
	    "user": {
	      "id": 615455
	    },
	    "clockOut": "2017-11-11T14:13:00-08:00",
	    "timezone": "America/Los_Angeles",
	    "isClockOutBreak": false,
	    "id": 24216
	  }
	]
*
*
*	Needs to go out looking like this:
*	253-468-2199ELISAM: {
			2017_11_30: {
				24216: {
					shift: {
						location: "",
						scheduledStart: "",
						scheduledEnd: "",
						clockedIn: "",
						clockedOut: "",
					},
					break: {
						start: "",
						end: "",
					},
					salesHours: {
						start: "",
						end: ""
						duration: ""
					},
					nonSalesHours: {
						start: "",
						end: "",
						duration: ""
					},
					totalHours: ""
				}
			}
		}
*	
*	@param {allTimecards}
*	@return {newTimecards}
*/
function parseTimecards(allTimecards, employeeList, tcDb, aDate) {
	//define local variables
	var self = this;
	var cardsDate = self._formatCardsDate(aDate);

	//1. Iterate through all timecards
	allTimecards.forEach(function(timecard) {

		//save the sling id
		var slingId = timecard.user.id;

		//iterate through the employee list
		Object.keys(employeeList).forEach(function(key) {

			//define local variable
			var ahNutsId = key;
			var shiftId = timecard.id;

			//test the case
			if(employeeList[key].sling_id == slingId) {

				//if no timecards exist for this employee, create the first 
				if(tcDb[ahNutsId] == undefined) tcDb[ahNutsId] = {};

				//if no cards for this day, add it
				if(tcDb[ahNutsId][cardsDate] == undefined) tcDb[ahNutsId][cardsDate] = {};

				//add the timecard
				tcDb[ahNutsId][cardsDate][shiftId] = {
					"shift": {
						"location": timecard.event.location.id,
						"scheduledStart": timecard.event.dtstart,
						"scheduledEnd": timecard.event.dtend,
						"clockedIn": timecard.clockIn,
						"clockedOut": timecard.clockOut,
					},
					"break": {
						"duration": timecard.event.breakDuration
					},
					"salesHours": {
						"start": "",
						"end": "",
						"duration": ""
					},
					"nonSalesHours": {
						"start": "",
						"end": "",
						"duration": ""
					},
					"scheduledHrs": self._calcDuration(timecard.event.dtstart, timecard.event.dtend),
					"workedHrs": self._calcDuration(timecard.clockIn, timecard.clockOut),
					"difference": self._calcDifference(self._calcDuration(timecard.event.dtstart, timecard.event.dtend), self._calcDuration(timecard.clockIn, timecard.clockOut))
				};

			}
				

		});

	});

	return tcDb;
};

/*
*	download Employees List
*
*	@return {employeesList}
*/
function downloadEmployeesList() {

	//define local variables
	var self = this;
	var urlPath = self.baseURL + 'v1/users';

	//pass back async work
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

};

//export the module
module.exports = sling;