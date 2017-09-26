angular
    .module('ahNuts')
    .controller('productGettingController', productGettingController);

productGettingController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function productGettingController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;
	vm.product = $routeParams.item;

	$log.info('in the product getting controller', vm.product);	//TODO: TAKE THIS OUT LATER

	vm.order = function() {
		$location.path('/cart');
	}
}