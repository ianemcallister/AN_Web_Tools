

var api = {
	shiftEarnings: shiftEarnings,
	authUser: authUser
};

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