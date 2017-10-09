angular
    .module('ahNuts')
    .controller('productGettingController', productGettingController);

productGettingController.$inject = ['$log', '$routeParams', '$location', 'shoppingCart', 'uspsServices'];

/* @ngInject */
function productGettingController($log, $routeParams, $location, shoppingCart, uspsServices) {

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
	};

	/*
	*	City State Lookup
	*
	*/
	vm.cityStateLookup = function() {
		//define local variables

		uspsServices.cityStateLookup(vm.cart.aquisitionDetails.deliveryLocation.zip)
		.then(function success(cityStateObject) {

			//save the values
			vm.cart.aquisitionDetails.deliveryLocation.city = cityStateObject.city;
			vm.cart.aquisitionDetails.deliveryLocation.state = cityStateObject.state;

		}).catch(function error(e) {

			//display an error message
			console.log('error:', e);
			
		});

	};

}