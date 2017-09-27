/* pickupOrDelivery.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div pickup-or-delivery></div>
*/

angular
	.module('ahNuts')
	.directive('pickupOrDelivery', pickupOrDelivery);

/* @ngInject */
function pickupOrDelivery() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/pickupOrDelivery.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: pickupOrDeliveryController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    pickupOrDeliveryController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function pickupOrDeliveryController($scope, $log) {
	    var vm = this;

	    $log.info('in the pickup-or-delivery directive');

	}

	return  directive;
}