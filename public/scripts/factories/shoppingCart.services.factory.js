angular
    .module('ahNuts')
    .factory('shoppingCart', shoppingCart);

shoppingCart.$inject = ['$log', '$http'];

/* @ngInject */
function shoppingCart($log, $http) {

	var shoppingCartObject = {
		isEmpty: true,
		aquisitionMethod: undefined,
		noOfItems: 10,
		subtotal: 1250,
		aquisitionDetails: {},
		items: [],
		addItem: addItem,
		removeItem: removeItem,
		updateAquisitionMethod: updateAquisitionMethod
	};

	function addItem() {}
	function removeItem() {}
	function updateAquisitionMethod() {}

	return shoppingCartObject;
}
