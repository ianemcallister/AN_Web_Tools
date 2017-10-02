/* fullProductProfile.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div full-product-profile></div>
*/

angular
	.module('ahNuts')
	.directive('fullProductProfile', fullProductProfile);

/* @ngInject */
function fullProductProfile() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/fullProductProfile.directive.htm',
		replace: true,
		scope: {
			product: '='
		},
		link: linkFunc,
		controller: fullProductProfileController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    fullProductProfileController.$inject = ['$scope', '$log', '$location', 'shoppingCart'];
    /* @ngInject */
    function fullProductProfileController($scope, $log, $location, shoppingCart) {
	    var vm = this;
	    vm.cart = shoppingCart;
	    vm.itemSelections = vm.product.sizes;

	    //add selected items to cart
	    vm.addToCart = function(itemSelections) {

	    	console.log('vm.itemSelections', vm.itemSelections);

	    	//iterate through each of the sizes, if the qty is greater than 0, add it
	    	vm.itemSelections.forEach(function(size) {

	    		if(size.qty > 0) vm.cart.addItem(size);
	    	});

	    	//then redirect
	    	$location.path('/getting-the-product/' + '10');
	    };

	}

	return  directive;
}