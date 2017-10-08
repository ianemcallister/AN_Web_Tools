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
		paymentDetails: {},
		items: {},
		_saveToBrowser: _saveToBrowser,
		_getCart: _getCart, 
		_removeCart: _removeCart,
		_addNewItem: _addNewItem,
		_countNoItems: _countNoItems,
		_calcSubtotal: _calcSubtotal,
		init: init,
		addItem: addItem,
		removeItem: removeItem,
		updateAquisitionMethod: updateAquisitionMethod,
		calcTotalCost: calcTotalCost,
		updateItemQty: updateItemQty,
		acqMethIsDefined: acqMethIsDefined
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
			self.items = savedCart.items;
		}

		console.log(self);

	}

	function _saveToBrowser() {
		var self = this;
		var cart = {
			isEmpty: self.isEmpty,
			orderNumber: self.orderNumber,
			aquisitionMethod: self.aquisitionMethod,
			noOfItems: self.noOfItems,
			subtotal: self.subtotal,
			shippingPrice: self.shippingPrice,
			discounts: self.discounts,
			totalCost: self.totalCost,
			aquisitionDetails: self.aquisitionDetails,
			items: self.items
		};
		$window.sessionStorage.setItem('ah-nuts-cart', JSON.stringify(cart));
	};

	function _getCart() {
		return $window.sessionStorage['ah-nuts-cart'];
	};

	function _removeCart() {
		$window.sessionStorage.removeItem('ah-nuts-cart');
	};

	function _addNewItem(newItem) {
		//define local variables
		var returnObject = {};

		//itrate through all the objects, and add them.
		Object.keys(newItem).forEach(function(key) {
			returnObject[key] = newItem[key];
		});

		console.log('adding this new item', returnObject);

		return returnObject;
	};

	function _countNoItems(allItems) {
		//define local variables
		var self = this;
		var newTotal = 0;

		console.log('allItems', allItems);

		//iterate through the items list
		Object.keys(allItems).forEach(function(key) {
			//console.log(key, allItems[key])
			newTotal += allItems[key].qty;
		});

		console.log('_countNoItems', newTotal);

		//if no items where found, make sure cart is designated empty
		if(newTotal == 0) self.isEmpty = true;

		return newTotal;
	};

	function _calcSubtotal(allItems) {
		//define local variables
		var newTotal = 0;

		//iterate through the items list
		Object.keys(allItems).forEach(function(key) {
			newTotal += (allItems[key].qty * allItems[key].price);
		});

		//console.log('_calcSubtotal', newTotal);

		return newTotal;
	};

	function addItem(newItem) {
		//define local variables
		var self = this;
		var itmCode = newItem.code;

		//if we're adding something then the cart can't be empty
		self.isEmpty = false;

		//first, are we adding qty or new product codes
		if(self.items[itmCode] == undefined) {
			// this is an item code that has never been added
			console.log('adding a new item');

			//intialize the object in items list
			self.items[itmCode] = _addNewItem(newItem);

			//update noOfItems
			self.noOfItems = _countNoItems(self.items);

			//update subTotal
			self.subtotal = _calcSubtotal(self.items);

		}  else {
			// this item code has been added before, just update the qty
			console.log('updating a new qty');
		}

		//after saving it to the cart, then save it to the browser session
		self._saveToBrowser();

		return true;
	};

	function removeItem(productId) {
		var self = this;

		//iterate through the list of items
		Object.keys(self.items).forEach(function keySearch(key) {

			//if the key matches the productId, remove it
			console.log(key, productId);

			if(key == productId) delete self.items[key];

		});

		//update the subtotal
		self.noOfItems = self._countNoItems(self.items);

		//update the item number
		self.subtotal = self._calcSubtotal(self.items);

		//update the total cost
		self.calcTotalCost();

		//save changes to the browser
		self._saveToBrowser();	
	};

	function updateAquisitionMethod() {
		//define local variables
		var self = this;

		//save the changes
		self._saveToBrowser();
	};

	function calcTotalCost() {
		//define local variables
		var self = this;

		self.totalCost = self.subtotal + self.shippingPrice + self.discounts;
	};

	function updateItemQty(itemId, qty) {
		//define local variables
		var self = this;

		//if the qty is 0 just remove the item
		if(parseInt(qty) == 0) {
			self.removeItem(itemId);
			return 0;
		}

		//update the value
		self.items[itemId].qty = parseInt(qty);

		//update the subtotal
		self.noOfItems = self._countNoItems(self.items);

		//update the item number
		self.subtotal = self._calcSubtotal(self.items);

		//update the total cost
		self.calcTotalCost();

		//save changes to the browser
		self._saveToBrowser();	

	};

	function acqMethIsDefined() {
		var self = this;

		if(self.aquisitionMethod == undefined) return false;
		else return true;
	};

	return shoppingCartObject;
}
