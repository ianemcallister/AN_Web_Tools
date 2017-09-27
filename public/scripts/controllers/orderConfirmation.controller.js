angular
    .module('ahNuts')
    .controller('orderConfirmationController', orderConfirmationController);

orderConfirmationController.$inject = ['$scope','$log', '$routeParams', '$location'];

/* @ngInject */
function orderConfirmationController($scope, $log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the order confirmation controller');	//TODO: TAKE THIS OUT LATER
}