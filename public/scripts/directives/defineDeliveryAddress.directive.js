/* defineDeliveryAddress.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div define-delivery-address></div>
*/

angular
	.module('ahNuts')
	.directive('defineDeliveryAddress', defineDeliveryAddress);

/* @ngInject */
function defineDeliveryAddress() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/defineDeliveryAddress.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: defineDeliveryAddressController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    defineDeliveryAddressController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function defineDeliveryAddressController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}