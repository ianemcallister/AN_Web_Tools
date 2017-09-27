/* cartNavigation.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div cart-navigation></div>
*/

angular
	.module('ahNuts')
	.directive('cartNavigation', cartNavigation);

/* @ngInject */
function cartNavigation() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/cartNavigation.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: cartNavigationController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    cartNavigationController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function cartNavigationController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the cart navigation directive');

	    vm.shopMore = function() {
	    	$location.path('/all-products');
	    }
	    vm.checkout = function() {
	    	$location.path('/checkout');
	    }
	}

	return  directive;
}