angular
    .module('ahNuts')
    .controller('cartController', cartController);

cartController.$inject = ['$log', '$routeParams', '$location', 'shoppingCart'];

/* @ngInject */
function cartController($log, $routeParams, $location, shoppingCart) {

	//define view model variable
	var vm = this;
	vm.cart = shoppingCart;

	$log.info('in the cart controller', vm.cart);	//TODO: TAKE THIS OUT LATER

	//calculate the total cost when the controller is loaded
	vm.cart.calcTotalCost();

}