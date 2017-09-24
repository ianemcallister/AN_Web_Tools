angular
    .module('ahNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$scope','$log', '$routeParams', '$location', 'dataServices'];

/* @ngInject */
function landingController($scope, $log, $routeParams, $location, dataServices) {

	//define view model variable
	var vm = this;
	var data = dataServices;

	$log.info('in the landing controller');	//TODO: TAKE THIS OUT LATER

	//define local functions


	//run the test


}