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
		_addNewItem: _addNewItem,
		_countNoItems: _countNoItems,
		_calcSubtotal: _calcSubtotal,
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

	function _addNewItem(newItem) {
		//define local variables
		var returnObject = {};

		//itrate through all the objects, and add them.
		Object.keys(newItem).forEach(function(key) {
			returnObject[key] = newItem[key];
		});

		return returnObject;
	};

	function _countNoItems(allItems) {
		//define local variables
		var newTotal = 0;

		//iterate through the items list
		Object.keys(allItems).forEach(function(key) {
			//console.log(key, allItems[key])
			newTotal += allItems[key].qty;
		});

		//console.log('_countNoItems', newTotal);

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

		//TODO: TAKE THIS OUT LATER
		//console.log('got these Items', newItem, self);

		//if we're adding something then the cart can't be empty
		self.isEmpty = false;

		//first, are we adding qty or new product codes
		if(self.items[itmCode] == undefined) {
			// this is an item code that has never been added
			//intialize the object in items list
			self.items[itmCode] = _addNewItem(newItem);

			//update noOfItems
			self.noOfItems = _countNoItems(self.items);

			//update subTotal
			self.subtotal = _calcSubtotal(self.items);

		}  else {
			// this item code has been added before, just update the qty
		}

		//update the cost subtotal
		//self.subtotal = newItems.price * newItems.qty;

		//update the item counter
		//self.noOfItems += newItems.qty;
		
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
