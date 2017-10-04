angular
    .module('ahNuts')
    .run(['shoppingCart', function(shoppingCart) {
		shoppingCart.init();
	}]);