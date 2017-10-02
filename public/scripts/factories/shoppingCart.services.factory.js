angular
    .module('ahNuts')
    .factory('shoppingCart', shoppingCart);

shoppingCart.$inject = ['$log', '$http'];

/* @ngInject */
function shoppingCart($log, $http) {

	var shoppingCartObject = {
		isEmpty: true,
		orderNumber: undefined,
		aquisitionMethod: undefined,
		noOfItems: 0,
		subtotal: 0,
		shippingPrice: 0,
		aquisitionDetails: {},
		items: [],
		addItem: addItem,
		removeItem: removeItem,
		updateAquisitionMethod: updateAquisitionMethod
	};

	function addItem(itemSelections) {
		var self = this;

		//if we're adding something then the cart can't be empty
		self.isEmpty = false;

		//update the cost subtotal
		self.subtotal = itemSelections.price * itemSelections.qty;

		//update the item counter
		self.noOfItems += itemSelections.qty;
		
		//add the item to the cart
		self.items.push(itemSelections);

		return true;
	}
	function removeItem() {}
	function updateAquisitionMethod() {}

	return shoppingCartObject;
}
