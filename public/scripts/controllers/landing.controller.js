angular
    .module('ahNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$scope','$log', '$routeParams', '$location', 'dataServices'];

/* @ngInject */
function landingController($scope, $log, $routeParams, $location, dataServices) {

	//define view model variable
	var vm = this;
	var data = dataServices;

	//define view model variables
	vm.example = {
		test: "TEST TEST TEST",
		"another test": "try again"
	};

	$log.info('in the landing controller');	//TODO: TAKE THIS OUT LATER

	//define local functions
	function dataTest() {

		//get data
		data.test()
		.then(function(result) {
			$log.info('got this result', result);
			vm.example.test = result;
			$scope.$apply();
		});

	};

	//run the test
	dataTest();

}