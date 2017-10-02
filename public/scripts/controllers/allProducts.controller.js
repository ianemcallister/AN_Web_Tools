angular
    .module('ahNuts')
    .controller('allProductsController', allProductsController);

allProductsController.$inject = ['$log', '$routeParams', '$location', 'productList'];

/* @ngInject */
function allProductsController($log, $routeParams, $location, productList) {

	//define view model variable
	var vm = this;
	vm.allProducts = productList;
	
	if($routeParams.filter != undefined) vm.selectedProducts = $routeParams.filter;

	//$log.info('in the all Products controller', $routeParams);	//TODO: TAKE THIS OUT LATER
	//$log.info('got this prduct list', productList);

	//something
	vm.selectAProuct = function(prdctCode) {
		var path = '/product/' + prdctCode;

		$location.path(path).search('filter', null);
	};

}