/* selectDeliveryMethod.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div select-delivery-method></div>
*/

angular
	.module('ahNuts')
	.directive('selectDeliveryMethod', selectDeliveryMethod);

/* @ngInject */
function selectDeliveryMethod() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/selectDeliveryMethod.directive.htm',
		replace: true,
		scope: {
			usps: "="
		},
		link: linkFunc,
		controller: selectDeliveryMethodController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    selectDeliveryMethodController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function selectDeliveryMethodController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}