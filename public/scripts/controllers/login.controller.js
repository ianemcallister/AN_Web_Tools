angular
    .module('ahNuts')
    .controller('loginController', loginController);

loginController.$inject = ['$log', '$routeParams', '$location', 'dataServices'];

/* @ngInject */
function loginController($log, $routeParams, $location, dataServices) {

	//define view model variable
	var vm = this;
	var data = dataServices;

	$log.info('in the login controller');	//TODO: TAKE THIS OUT LATER

	//define view model variables
	vm.email = '';
	vm.password = '';

	//define vm function
	vm.login = function() {

		//upon login, are the credentails good
		data.post('/api/authenticate', { email: vm.email, pass: vm.password },'')
		.then(function(token) {
			
			var path = '#/teamMember/' + token;

			//show what returned
			$log.info('got this token back', path);

			$location.path('/');	//TODO: WHY DOESN'T THIS WORK?

		});
		
	};
}