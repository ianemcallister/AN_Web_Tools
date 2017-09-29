/* checkoutPayment.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div checkout-payment></div>
*/

angular
	.module('ahNuts')
	.directive('checkoutPayment', checkoutPayment);

/* @ngInject */
function checkoutPayment() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/checkoutPayment.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: checkoutPaymentController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    checkoutPaymentController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function checkoutPaymentController($scope, $log) {
	    var vm = this;

	    $log.info('in the checkoutPayment directive');

	}

	return  directive;
}