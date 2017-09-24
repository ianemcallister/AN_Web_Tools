angular
    .module('ahNuts')
    .controller('accountsController', accountsController);

accountsController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function accountsController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	//define view model variable
	vm.registeredUser = false;	//default to false
	vm.forgotPassword = false;	//default to false

	//notify us of the location
	$log.info('in the accounts controller');	//TODO: TAKE THIS OUT LATER

	//check the params
	function userCheck(userId) {

		//check the credentials
		if(userId == 'CreateProfile' || userId == 'ForgotPassword') {

			//if it's just a forgotten password go there
			if(userId == 'ForgotPassword') vm.forgotPassword = true;

		} else {

			//if they are not creating a new profile, check credentials
			vm.registeredUser = true;

		};

	};

	userCheck($routeParams.param);
}