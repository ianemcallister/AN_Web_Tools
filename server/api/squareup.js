//SQUAREUP

//define dependencies
var fetch = require('node-fetch');
var moment = require('moment');

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
	_formatCardsDate: _formatCardsDate,
	_unpackTxPages: _unpackTxPages,
	_isAnotherPage: _isAnotherPage,
	_collectMultiPages: _collectMultiPages,
	_downloadDailySales: _downloadDailySales,
	_dateFormatter: _dateFormatter,
	_monthDayZeros: _monthDayZeros,
	_findAhNutsId: _findAhNutsId,
	_squareDateToFBCardDate: _squareDateToFBCardDate,
	_parseTxType: _parseTxType,
	_parseTxItems: _parseTxItems,
	_condenseModsList: _condenseModsList,
	parseDailyTxToTc: parseDailyTxToTc,
	employeesList: employeesList,
	downloadDailySales: downloadDailySales,
	calcDailyGrossSales: calcDailyGrossSales,
	calcDailyNetSales: calcDailyNetSales,
	calcTips: calcTips,
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
};

/*	
*	_format cards Date
*
*	@param {aDate}
*	@return "yyyy-mm-dd"
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

					//console.log(allResponses);

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
	var startTime = "T03:00:00-08:00";
	var endTime = "T02:59:59-08:00";

	//add zeros when applicable
	var monthDay = self._monthDayZeros(theDate);

	var startString = 'begin_time=' + year + "-" + monthDay.start.month + "-" + monthDay.start.day + startTime;
	var endString = '&end_time=' + year + "-" + monthDay.end.month + "-" + monthDay.end.day + endTime;;

	return startString + endString;
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
*	_find Ah-Nuts Id
*
*	Takes a square ID and runs the the FB emp list to pull out he ah-nuts id
*/
function _findAhNutsId(squareId, fbEmpList) {
	//define local variables
	var self = this;
	var ahNutsID = undefined;

	//run through each of the employees
	Object.keys(fbEmpList).forEach(function(id) {

		//console.log(squareId, fbEmpList[id].square_id, squareId == fbEmpList[id].square_id);
		//if the squareID matches, save the id
		if(squareId == fbEmpList[id].square_id) ahNutsID = id;
	});

	console.log('ahNutsID', ahNutsID, squareId);

	return ahNutsID;
};

/*
*	_square Date to FB Card Date
*
*	Takes a square date and turns it into a FB card date
*
*/
function _squareDateToFBCardDate(squareDate) {

	var dPieces = squareDate.split('-');

	return dPieces[0] + "_" + dPieces[1] + "_" + dPieces[2];
};

/*
*	Parse Tx Types
*
*	@params [tender]
*	@return string
*/
function _parseTxType(tender) {
	//define local variables
	var self = this;
	var typeString = '';

	if(tender.length > 1) {

		typeString = "Split - ";

		tender.forEach(function(tx) {
			typeString += (tx.type + ", ");
		});

	} else {
		typeString = tender[0].type;
	}

	return typeString;
};

/*
*	Parse Tx Items
*
*	@params [items]
*	@return [smallItems]
*/
function _parseTxItems(items) {
	//define local variables
	var self = this;
	var smallItems = [];

	//iterate through each item
	items.forEach(function(item) {

		var theItem = {
			name: item.name,
			qty: item.quantity,
			varName: item.item_variation_name,
			mods: self._condenseModsList(item.modifiers)
		};

		smallItems.push(theItem);

	});

	return smallItems;	
};

/*
*
*
*
*
*/
function _condenseModsList(mods) {
	//define local variables
	var self = this;
	var returnString = '';
	var i = 1;
	var noOf = mods.length;
	
	mods.forEach(function(modifier) {

		returnString += modifier.name;

		if(i < noOf) returnString += ", ";

		i++;
	});

	return returnString;
};

/*
*	Parse Daily Tx to Timecards
*
*	This accepts the firebase timecards object, employee information, and sales data
*	then combines the sales data on with the assoicated timecard.
*
*	@param {fbTimecards}
*	@param {fbEmpList}
*	@param {sqrSalesData}
*	@return {newTimecards}
*/
function parseDailyTxToTc(fbTimecards, fbEmpList, sqrSalesData, aDate) {
	//define local variables
	var self = this;
	var cardsDate = self._formatCardsDate(aDate);
	var newTimecards = fbTimecards;

	//iterate through all square Tx dates
	Object.keys(sqrSalesData).forEach(function(txDate) {

		var txDateSplit = txDate.split('-');
		var txYr = txDateSplit[0];
		var txMo = txDateSplit[1];
		var txDy = txDateSplit[2];
		var salesDay = txYr + "_" + txMo + "_" + txDy;

		//iterate through all squre TX times
		Object.keys(sqrSalesData[txDate]).forEach(function(txTime) {

			//define local variables
			var empId = self._findAhNutsId(sqrSalesData[txDate][txTime].tender[0].employee_id, fbEmpList);
			var fbCardDate = self._squareDateToFBCardDate(txDate);
			var txTimeSplit = txTime.split('-');
			var txHr = txTimeSplit[0];
			var txMn = txTimeSplit[1];
			var txSc = txTimeSplit[2];
			var txTimeStamp = new Date(txYr, txMo, txDy, txHr, txMn, txSc);

			//filter training earnings
			if(empId == "323-788-4533IANMCA") {

				if(newTimecards['training'] == undefined) newTimecards['training'] = {};

				if(newTimecards['training'][salesDay] == undefined) newTimecards['training'][salesDay] = {};

				if(newTimecards['training'][salesDay][txTime] == undefined) newTimecards['training'][salesDay][txTime] = '';

			} else {	//if it was not in training, these are the sales

				//create the timecard if need be
				if(newTimecards[empId] == undefined) console.log(empId, "timecard not available ");

				//
				if(newTimecards[empId][salesDay] == undefined) console.log(salesDay, "day not available");

				if(newTimecards[empId][salesDay]['sales'] == undefined) newTimecards[empId][salesDay]['sales'] = {};

				console.log(sqrSalesData[txDate][txTime]);

				newTimecards[empId][salesDay]['sales'][txTime] = {
					tip: sqrSalesData[txDate][txTime].tip_money,
					discount: sqrSalesData[txDate][txTime].discount_money,
					refunded: sqrSalesData[txDate][txTime].refunded_money,
					gross: sqrSalesData[txDate][txTime].gross_sales_money,
					net: sqrSalesData[txDate][txTime].net_sales_money,
					type: self._parseTxType(sqrSalesData[txDate][txTime].tender),
					itemization: self._parseTxItems(sqrSalesData[txDate][txTime].itemizations)
				};
			}
			

		});

	});

	return newTimecards;
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
				
				//console.log('got this from square', data.toString('utf8'));
				//convert to string
				resolve(JSON.parse(data.toString('utf8')));

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

/*
*
*
*
*	@param {allSales}
*	@return int
*/
function calcDailyGrossSales(allSales) {

	//define local variables
	var self = this;
	var grossSales = 0;

	Object.keys(allSales).forEach(function(timestamp) {

		grossSales += parseInt(allSales[timestamp].gross);

	});

	//return the value
	return grossSales;

};

/*
*
*
*
*
*/
function calcDailyNetSales(allSales) {
	//define local variables
	var self = this;	
	var netSales = 0;

	Object.keys(allSales).forEach(function(timestamp) {

		//add the gross sales
		netSales += parseInt(allSales[timestamp].gross);

		//then subtract the refunds
		netSales += parseInt(allSales[timestamp].refunded);

		if(allSales[timestamp].refunded > 0) console.log('refund of', allSales[timestamp].refunded);

	});


	return netSales;
};

/*
*	Calc Tips
*
*	@param {allSales}
*	@return int
*/
function calcTips(allSales) {
	//define local variables
	var self = this;
	var allTips = 0;

	//iterate through all sales
	Object.keys(allSales).forEach(function(sale) {
		allTips += allSales[sale].tip;
	});

	return allTips;
};

function aTest() { return new Promise(function(resolve, reject) { resolve('testing square'); })}

module.exports = squareup;
