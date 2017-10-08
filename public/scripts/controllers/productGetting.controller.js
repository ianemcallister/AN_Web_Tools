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
	vm.cart.aquisitionDetails = {
		zipAndDateSelected: false,
		shippedOrPUSelected: false,
		willShippp: false,
		willPU: false,
		puLocSelected: false,
		delMthSelected: false,
		pickupLocation: {},
		deliveryLocation: {
			receiver: {
				first: "",
				last: ""
			},
			street1: "",
			street2: "",
			street3: "",
			city: "",
			state: "",
			zip: ""
		},
		deliveryMethod: {}
	};
	
	$log.info('in the product getting controller', vm.product);	//TODO: TAKE THIS OUT LATER

	vm.order = function() {
		//save the address
		vm.cart.updateAquisitionMethod();

		//then redirect
		$location.path('/cart');
	}
}