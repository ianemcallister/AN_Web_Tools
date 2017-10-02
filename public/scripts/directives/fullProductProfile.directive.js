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
	    
	    //console.log('aProduct from fullProductProfileController', vm.product);
	    //vm.product = aProduct;

	    vm.imageUrl = '/../assets/img/nut_cones.jpg';
	    vm.itemSelections = {
	    	code: vm.product.code,
	    	size: undefined,
	    	qty: 1
	    };

	    //$log.info('in the fullProductProfileController directive', vm.product);

	    //define viewmodel functions
	    vm.selectSize = function(index) {

	    	$log.info('got this size', index);

	    	vm.itemSelections.code = vm.product.sizes[index].code;
	    };

	    vm.addToCart = function(itemSelections) {

	    	console.log('vm.itemSelections', vm.itemSelections);

	    	//add each of the elements to shopping cart object
	    	vm.cart.addItem(itemSelections);

	    	//then redirect
	    	$location.path('/getting-the-product/' + vm.product);
	    };

	}

	return  directive;
}