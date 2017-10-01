/*
*	AH-NUTS SERVER DATABASE INTERFACE
*
*	All the tools to interact with our stored data
*
*/

//declare dependencies
var fs = require('fs');
var filter = require('./filter.js');

var db = {
	_create: _create,
	_read: _read,
	_update: _update,
	_del: _del,
	getProductList: getProductList
};

function _create() {}
function _read(path, params) {
	
	//return async work
	return new Promise(function(resolve, reject) {

		//right now we only have a json, so that's what will be supplied
		var jsonModel = fs.readFileSync(__dirname + '/../assets/json/productList.json', "utf8");

		resolve(JSON.parse(jsonModel));

	});
}

function _update() {}
function _del() {}

function getProductList(params) {

	//return async work
	return new Promise(function(resolve, reject) {

		//read from the database
		_read('', params)
		.then(function success(s) {

			//when the data comes back, filter it appropriately
			var filteredData = filter.productList(s, params);

			//pass back successful reqest
			resolve(filteredData);

		}).catch(function error(e) {

			//or pass back the error
			reject(e);

		});

	});

}

module.exports = db;
