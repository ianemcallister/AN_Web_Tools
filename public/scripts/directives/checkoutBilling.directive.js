/* checkoutBilling.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div checkout-billing></div>
*/

angular
	.module('ahNuts')
	.directive('checkoutBilling', checkoutBilling);

/* @ngInject */
function checkoutBilling() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/checkoutBilling.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: checkoutBillingController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    checkoutBillingController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function checkoutBillingController($scope, $log) {
	    var vm = this;

	    $log.info('in the checkoutBilling directive');

	}

	return  directive;
}