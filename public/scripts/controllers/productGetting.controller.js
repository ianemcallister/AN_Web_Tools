angular
    .module('ahNuts')
    .controller('productGettingController', productGettingController);

productGettingController.$inject = ['$scope', '$log', '$routeParams', '$location', 'shoppingCart', 'uspsServices', 'uspsUsername'];

/* @ngInject */
function productGettingController($scope, $log, $routeParams, $location, shoppingCart, uspsServices, uspsUsername) {

	//define view model variable
	var vm = this;
	vm.product = $routeParams.item;
	vm.cart = shoppingCart;
	vm.usps = uspsServices;
	vm.usps._uspsUsername = uspsUsername;

	vm.usps.priceCalculator({
		l: 5,
		w: 5,
		h: 5,
		zipcode: "49001",
		pounds: 1,
		ounces: 8,
		container: "VARIABLE"
	}).then(function success(s) {
		
		console.log('got this back', s);
		
		vm.uspsOptions = s;
		$scope.$apply();

	}).catch(function error(e) {
		console.log('error', e);
	});

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