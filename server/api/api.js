/*
*	AH-NUTS SERVER API
*
*	All the tools I need to run the backend.
*
*/

//declare dependencies
var fs = require('fs');
var db = require('./db.js');

//build object
var api = {
	dbRequest: dbRequest,
	supplyAsset: supplyAsset,
	supplySquareCreds: supplySquareCreds,
	shiftEarnings: shiftEarnings,
	authUser: authUser
};

/*
*	DB Request
*
*	This is used to access the databse
*/
function dbRequest(params) {


	//pass back async work
	return new Promise(function(resolve, reject) {

		//access the database asyncronously 
		db.getProductList(params)
		.then(function success(s) {

			//pass back successful reqest
			resolve(s);

		}).catch(function error(e) {	

			//or pass back the error
			reject(e);

		});

	});

};

/*
*
*/
function supplyAsset(directory, filename) {
	return fs.readFileSync(__dirname + '/../assets/' + directory + "/" + filename);
}

function supplySquareCreds(key) {

	var returnVariables = { applicationId: 'NONE FOUND', locationId: ''};

	if(key == process.env.AH_NUTS_SQUARE_CREDS_KEY) {
		returnVariables.applicationId = process.env.SQUARE_SANDBOX_APP_ID;
	}

	return returnVariables;
}

function shiftEarnings(params) {

	//return async work
	return new Promise(function(resolve, reject) {

		resolve('it worked');
		
	});

}

function authUser(params) {
	console.log('athenticating user', params);
}

module.exports = api;