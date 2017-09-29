angular
    .module('ahNuts')
    .controller('cartController', cartController);

cartController.$inject = ['$log', '$routeParams', '$location', 'shoppingCart'];

/* @ngInject */
function cartController($log, $routeParams, $location, shoppingCart) {

	//define view model variable
	var vm = this;
	vm.cart = shoppingCart;

	$log.info('in the cart controller');	//TODO: TAKE THIS OUT LATER


}