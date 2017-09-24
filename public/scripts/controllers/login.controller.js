angular
    .module('ahNuts')
    .controller('loginController', loginController);

loginController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function loginController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the login controller');	//TODO: TAKE THIS OUT LATER

	//define view model variables
	vm.email = '';
	vm.password = '';

	//define vm function
	vm.login = function() {

		//upon login, are the credentails good
		
	};
}