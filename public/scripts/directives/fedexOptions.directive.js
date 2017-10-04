/* fedexOptions.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div fedex-options></div>
*/

angular
	.module('ahNuts')
	.directive('fedexOptions', fedexOptions);

/* @ngInject */
function fedexOptions() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/fedexOptions.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: fedexOptionsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    fedexOptionsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function fedexOptionsController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}