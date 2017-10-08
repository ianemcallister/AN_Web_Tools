angular
    .module('ahNuts')
    .controller('productGettingController', productGettingController);

productGettingController.$inject = ['$log', '$routeParams', '$location', 'shoppingCart'];

/* @ngInject */
function productGettingController($log, $routeParams, $location, shoppingCart) {

	//define view model variable
	var vm = this;
	vm.product = $routeParams.item;
	vm.cart = shoppingCart;

	//$log.info('in the product getting controller', vm.product);	//TODO: TAKE THIS OUT LATER

	vm.order = function() {
		//save the address
		vm.cart.updateAquisitionMethod();

		//TODO: CHANGE THIS LATER
		vm.cart.aquisitionMethod = 'delivery';

		//then redirect
		$location.path('/cart');
	}
}