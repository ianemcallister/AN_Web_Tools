angular
    .module('ahNuts')
    .controller('aProductController', aProductController);

aProductController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function aProductController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;
	vm.productId = $routeParams.itemId;

	$log.info('in the a Product controller', vm.product);	//TODO: TAKE THIS OUT LATER

	vm.returnHome = function() {
		$location.path('/');
	};
}