/* couponSubmission.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div coupon-submission></div>
*/

angular
	.module('ahNuts')
	.directive('couponSubmission', couponSubmission);

/* @ngInject */
function couponSubmission() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/couponSubmission.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: couponSubmissionController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    couponSubmissionController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function couponSubmissionController($scope, $log) {
	    var vm = this;

	    $log.info('in the coupon-submission directive');

	}

	return  directive;
}