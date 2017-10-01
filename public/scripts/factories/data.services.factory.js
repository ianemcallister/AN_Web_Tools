angular
    .module('ahNuts')
    .factory('dataServices', dataServices);

dataServices.$inject = ['$log', '$http'];

/* @ngInject */
function dataServices($log, $http) {

	var dataServicesObject = {
		get: get,
		post: post
	};

	//define all methods
	function get(url, config) {

		//return a promise for async work
		return new Promise(function(resolve, reject) {
			
			$http.get(url, config)
			.then(function success(s) {

				resolve(s.data);

			}, function error(e) {

				reject(e);
			});

		});

	};

	function post(url, data, config) {

		//return a promise for async work
		return new Promise(function(resolve, reject) {
			
			$http.post(url, data, config)
			.then(function success(response) {

				resolve(response.data);

			}, function error(e) {

				reject(e);
			});

		});

	};

	return dataServicesObject;
}