

var api = {
	supplySquareCreds: supplySquareCreds,
	shiftEarnings: shiftEarnings,
	authUser: authUser
};

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