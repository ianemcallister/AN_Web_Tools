/* checkoutFollowup.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div checkout-followup></div>
*/

angular
	.module('ahNuts')
	.directive('checkoutFollowup', checkoutFollowup);

/* @ngInject */
function checkoutFollowup() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/checkoutFollowup.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: checkoutFollowupController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    checkoutFollowupController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function checkoutFollowupController($scope, $log) {
	    var vm = this;

	    $log.info('in the checkoutFollowupController directive');

	}

	return  directive;
}