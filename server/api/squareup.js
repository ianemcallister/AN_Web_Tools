//SQUAREUP

//define dependencies
var fetch = require('node-fetch');

//define local variables
var accessToken = process.env.SQUARE_APP_TOKEN;
var applicationID = process.env.SQUARE_APP_ID;
var baseURL = 'https://connect.squareup.com/v1/';
var locationID = '14E8S7P16JQDM';
var headers = {
	'Authorization': 'Bearer ' + process.env.SQUARE_APP_TOKEN,
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

var squareup = {
	_distillDateTime : _distillDateTime,
	_unpackTxPages: _unpackTxPages,
	_isAnotherPage: _isAnotherPage,
	_collectMultiPages: _collectMultiPages,
	_downloadDailySales: _downloadDailySales,
	_dateFormatter: _dateFormatter,
	employeesList: employeesList,
	downloadDailySales: downloadDailySales,
	aTest: aTest
};

function _distillDateTime(aDate) {

	//define return object
	var returnObject = {
		dateString: "",
		timeString: ""
	};

	var newDate = new Date(aDate);

	var year = newDate.getFullYear().toString();
			
	var month = '';
	if((newDate.getMonth() + 1) < 10) {
		month = "0" + (newDate.getMonth() + 1).toString();
	} else {
		month = (newDate.getMonth() + 1).toString();
	}

	var day = '';
	if(newDate.getDate() < 10) {
		day = '0' + newDate.getDate().toString();
	} else {
		day = newDate.getDate().toString();
	}

	var hour = '';
	if(newDate.getHours() < 10) {
		hour = '0' + newDate.getHours().toString();
	} else {
		hour = newDate.getHours().toString();
	}

	var minute = '';
	if(newDate.getMinutes() < 10) {
		minute = '0' + newDate.getMinutes().toString();
	} else {
		minute = newDate.getMinutes().toString();
	}

	var second = '';
	if(newDate.getSeconds() < 10) {
		second = '0' + newDate.getSeconds().toString();
	} else {
		second = newDate.getSeconds().toString();
	}

	returnObject.dateString = year + '-' + month + '-' + day;
	returnObject.timeString = hour + "_" + minute + "_" + second;

	return returnObject;
}

function _unpackTxPages(pagedResults) {

	//define local variables
	var returnObject = {};

	//iterate through each page
	pagedResults.forEach(function(page) {

		//itrate through each tx
		page.forEach(function(tx) {

			var dateObject = _distillDateTime(tx.created_at);
			
			if(returnObject[dateObject.dateString] == undefined) returnObject[dateObject.dateString] = {};
			if(returnObject[dateObject.dateString][dateObject.timeString] == undefined) {
				returnObject[dateObject.dateString][dateObject.timeString] = {
					device: tx.device.name,
					inclusive_tax_money: tx.inclusive_tax_money.amount,
					additive_tax_money: tx.additive_tax_money.amount,
					tax_money: tx.tax_money.amount,
					tip_money: tx.tip_money.amount,
					discount_money: tx.discount_money.amount,
					total_collected_money: tx.total_collected_money.amount,
					processing_fee_money: tx.processing_fee_money.amount,
					net_total_money: tx.net_total_money.amount,
					refunded_money: tx.refunded_money.amount,
					gross_sales_money: tx.gross_sales_money.amount,
					net_sales_money: tx.net_sales_money.amount,
					inclusive_tax: tx.inclusive_tax,
					additive_tax: tx.additive_tax,
					tender: tx.tender,
					refunds: tx.refunds,
					itemizations: tx.itemizations
				}
			}

			//console.log(tx);

		});
		
	});

	return returnObject;
};

function _isAnotherPage(headers) {

	//console.log('in _isAnotherPage', headers);

	var returnObject = { link: false, value: '' };

	if(headers._headers.link != undefined) {
		var link = headers._headers.link[0];
		var splitLink = link.split(";");
		var rawHalfOne = splitLink[0];
		var splitRawHalfOne = rawHalfOne.split("<");
		var newRawHalfOne = splitRawHalfOne[1];
		var splitRawHalfTwo = newRawHalfOne.split(">");
		var usableLink = splitRawHalfTwo[0];
		returnObject.link = true;
		returnObject.value = usableLink;
	} 
	
	//console.log(returnObject);

	return returnObject;
};

function _collectMultiPages(url, options) {

	console.log('in _collectMultiPages');

	//return async work
	return new Promise(function(resolve, reject) {

		//fetch the required data
		fetch(url, options)
		.then(function successful(s) {
			
			//check for new page links
			var isAnotherPage = _isAnotherPage(s.headers);

			console.log('isAnotherPage?', isAnotherPage.link);

			//if there is another page go deeper
			if(isAnotherPage.link) {

				var newUrl = isAnotherPage.value;

				_collectMultiPages(newUrl, options)
				.then(function success(newS) {

					//after the result has come back, access data
					s.buffer().then(function(data) {
					
						//convert to string
						newS.push(JSON.parse(data.toString('utf8')));

						//then pass the array up
						resolve(newS);

					});

				}).catch(function error(e) {
					reject(e);
				});

			} else {
			//if this is the last page, add the data and pass it up
				console.log('got to the bottom');

				var allResponses = [];

				//access data
				s.buffer().then(function(data) {
				
					//convert to string
					allResponses.push(JSON.parse(data.toString('utf8')));

					//then pass the array up
					resolve(allResponses);

				});

			}

		})
		.catch(function error(e) {
			reject(e);
		});
	});

};

function _downloadDailySales(url, options) {

	//return async work
	return new Promise(function(resolve, reject) {
		
		//get data
		_collectMultiPages(url, options)
		.then(function success(s) {

			//returning value is an array, pages of results
			var daysTxs = _unpackTxPages(s);

			//send the daysTxs back
			resolve(daysTxs);

		}).catch(function error(e) {
			reject(e);
		});

	});

}

/*
*	_DATE FORMATTER
*	
*	Date formatter is a function that takes a javasciprt date and returns the required date
*	string for square to access a specifc date;
*/
function _dateFormatter(aDate) {

	//define local variables
	var self = this;
	var theDate = new Date(aDate);

	var year = aDate.getFullYear();
	var month = parseInt(aDate.getMonth());
	var day = parseInt(aDate.getDate());
	var startTime = "T03:00:00-08:00";
	var endTime = "T02:59:59-08:00";
	var startString = 'begin_time=' + year + "-" + (month + 1) + "-" + (day - 1) + startTime;
	var endString = '&end_time=' + year + "-" + (month + 1) + "-" + (day) + endTime;;

	return startString + endString;
};

//Download Employees List
function employeesList() {

	//local variables
	var sectionUrl = 'me/employees';
	var url = baseURL + sectionUrl;
	var options = {
		method: 'GET',
		headers: headers
	};

	//return async work
	return new Promise(function(resolve, reject) {

		//fetch the required data
		fetch(url, options)
		.then(function successful(response) {
			
			//response comes as buffer
			response.buffer().then(function(data) {
				
				//convert to string
				resolve(data.toString('utf8'));

			});

		})
		.catch(function error(e) {
			reject(e);
		});
	});

};

//Download Daily Sales
function downloadDailySales(date, employees, devices) {
	
	//local variables
	var self = this;
	var sectionUrl = locationID + '/payments?' + self._dateFormatter(date);
	var url = baseURL + sectionUrl;
	var options = {
		method: 'GET',
		headers: headers
	};

	console.log(url);

	//return async work
	return new Promise(function(resolve, reject) {

		_downloadDailySales(url, options)
		.then(function success(s) {
			resolve(s);
		}).catch(function error(e) {
			reject(e);
		});

	});

};

function aTest() { return new Promise(function(resolve, reject) { resolve('testing square'); })}

module.exports = squareup;
