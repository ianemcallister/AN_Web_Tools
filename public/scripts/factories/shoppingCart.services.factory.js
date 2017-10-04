angular
    .module('ahNuts')
    .factory('shoppingCart', shoppingCart);

shoppingCart.$inject = ['$log', '$http', '$window'];

/* @ngInject */
function shoppingCart($log, $http, $window) {

	var shoppingCartObject = {
		isEmpty: true,
		orderNumber: undefined,
		aquisitionMethod: undefined,
		noOfItems: 0,
		subtotal: 0,
		shippingPrice: 0,
		discounts: 0,
		totalCost: 0,
		aquisitionDetails: {},
		items: {},
		_saveToBrowser: _saveToBrowser,
		_getCart: _getCart, 
		_removeCart: _removeCart,
		init: init,
		addItem: addItem,
		removeItem: removeItem,
		updateAquisitionMethod: updateAquisitionMethod
	};

	function init() {
		//TODO: CLEAN THIS UP LATER, MAYBE ADD AS SEPERATE SERVICE
		var self = this;

		//
		if($window.sessionStorage.getItem('ah-nuts-cart') != null) {
			var savedCart = JSON.parse($window.sessionStorage.getItem('ah-nuts-cart'));

			self.isEmpty = savedCart.isEmpty;
			self.orderNumber = savedCart.orderNumber;
			self.aquisitionMethod = savedCart.aquisitionMethod;
			self.noOfItems = savedCart.noOfItems;
			self.subtotal = savedCart.subtotal;
			self.shippingPrice = savedCart.shippingPrice;
			self.discounts = savedCart.discounts;
			self.totalCost = savedCart.totalCost;
			self.aquisitionDetails = savedCart.aquisitionDetails;
		}

		console.log(self);

	}

	function _saveToBrowser(cart) {
		$window.sessionStorage.setItem('ah-nuts-cart', JSON.stringify(cart));
	};

	function _getCart() {
		return $window.sessionStorage['ah-nuts-cart'];
	};

	function _removeCart() {
		$window.sessionStorage.removeItem('ah-nuts-cart');
	};

	function addItem(newItems) {
		var self = this;

		
		console.log('got these Items', newItems);

		//if we're adding something then the cart can't be empty
		self.isEmpty = false;

		//update the cost subtotal
		self.subtotal = newItems.price * newItems.qty;

		//update the item counter
		self.noOfItems += newItems.qty;
		
		//add the item to the cart
		//self.items.push(newItems);

		self._saveToBrowser({
			isEmpty: self.isEmpty,
			orderNumber: self.orderNumber,
			aquisitionMethod: self.aquisitionMethod,
			noOfItems: self.noOfItems,
			subtotal: self.subtotal,
			shippingPrice: self.shippingPrice,
			discounts: self.discounts,
			totalCost: self.totalCost,
			aquisitionDetails: self.aquisitionDetails,
		});

		return true;
	};

	function removeItem() {}
	function updateAquisitionMethod() {}

	return shoppingCartObject;
}
