angular
    .module('ahNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$scope','$log', '$routeParams', '$location', 'dataServices', 'shoppingCart'];

/* @ngInject */
function landingController($scope, $log, $routeParams, $location, dataServices, shoppingCart) {

	//define view model variable
	var vm = this;
	var data = dataServices;
	vm.shoppingCart = shoppingCart;

	$log.info('in the landing controller', vm.shoppingCart);	//TODO: TAKE THIS OUT LATER

	//define local functions
	vm.shoppingCart.splash();

	//run the test


}