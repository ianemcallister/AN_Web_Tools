angular
    .module('ahNuts')
    .controller('mainController', mainController);

mainController.$inject = ['$scope','$log', '$routeParams', '$location'];

/* @ngInject */
function mainController($scope, $log, $routeParams, $location) {

	//define view model variable
	var vm = this;
	
	$scope.teamMember = false;

	$log.info('in the main controller');	//TODO: TAKE THIS OUT LATER
}