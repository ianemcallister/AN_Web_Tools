/*
*	SLING.JS
*
*	This module handles all the interactions required with sling
*
*/

//define dependencies

//define the module
var sling = {
	downloadTimecards: downloadTimecards
};

/*
*	downloadTimecards
*
*	This function is used to downlooad time cards
*
*/
function downloadTimecards() {

	//retur async work
	return new Promise(function(resolve, reject) {
		resolve('this is a time card');
	});

}

//export the module
module.exports = sling;