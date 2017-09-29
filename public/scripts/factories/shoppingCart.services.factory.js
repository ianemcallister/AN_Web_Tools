angular
    .module('ahNuts')
    .factory('shoppingCart', shoppingCart);

shoppingCart.$inject = ['$log', '$http'];

/* @ngInject */
function shoppingCart($log, $http) {

	var shoppingCartObject = {
		isEmpty: true,
		aquisitionMethod: undefined,
		noOfItems: 0,
		aquisitionDetails: {},
		items: [],
		addItem: addItem
	};

	function addItem() {}



	return shoppingCartObject;
}
