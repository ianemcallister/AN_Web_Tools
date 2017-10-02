angular
    .module('ahNuts')
    .controller('aProductController', aProductController);

aProductController.$inject = ['$log', '$routeParams', '$location', 'aProduct'];

/* @ngInject */
function aProductController($log, $routeParams, $location, aProduct) {

	//define view model variable
	var vm = this;
	vm.product = aProduct;
	//vm.prdctId = $routeParams.prdctId;

	//$log.info('in the Product controller', vm.prdctId);	//TODO: TAKE THIS OUT LATER

	vm.returnHome = function() {
		$location.path('/');
	};
}