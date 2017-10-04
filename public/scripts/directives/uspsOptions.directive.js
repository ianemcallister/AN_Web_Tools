/* uspsOptions.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div usps-options></div>
*/

angular
	.module('ahNuts')
	.directive('uspsOptions', uspsOptions);

/* @ngInject */
function uspsOptions() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/uspsOptions.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: uspsOptionsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    uspsOptionsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function uspsOptionsController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}