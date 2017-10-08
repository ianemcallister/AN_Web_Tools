/* cartItemsList.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div cart-items-list></div>
*/

angular
	.module('ahNuts')
	.directive('cartItemsList', cartItemsList);

/* @ngInject */
function cartItemsList() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/cartItemsList.directive.htm',
		replace: true,
		scope: {
			cartItems: '=',
			removeItemFn: '='
		},
		link: linkFunc,
		controller: cartItemsListController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    cartItemsListController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function cartItemsListController($scope, $log) {
	    var vm = this;
	    
	    $log.info('in the cartItemsListController directive', vm.cartItems);

	}

	return  directive;
}