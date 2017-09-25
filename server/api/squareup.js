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
	_unpackTxPages: _unpackTxPages,
	_isAnotherPage: _isAnotherPage,
	_collectMultiPages: _collectMultiPages,
	_downloadDailySales: _downloadDailySales,
	employeesList: employeesList,
	downloadDailySales: downloadDailySales
};

function _unpackTxPages(pagedResults) {
	
}

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
}

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
	var dateStart = date.year + '-' + date.month + '-' + date.day + 'T02:59:59-08:00';
	var dateEnd = date.year + '-' + date.month + '-' + date.next + 'T03:00:00-08:00'
	var sectionUrl = locationID + '/payments?begin_time=' + dateStart + '&end_time=' + dateEnd;
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

module.exports = squareup;