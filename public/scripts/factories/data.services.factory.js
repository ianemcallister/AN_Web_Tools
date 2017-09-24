angular
    .module('ahNuts')
    .factory('dataServices', dataServices);

dataServices.$inject = ['$log', '$http'];

/* @ngInject */
function dataServices($log, $http) {

	var dataServicesObject = {
		test: test		
	};

	//define all methods
	function test() {
			
		return new Promise(function(resolve, reject) {

			resolve('a new form of testing');

		});
	};

	return dataServicesObject;
}