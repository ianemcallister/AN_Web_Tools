/* upsOptions.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div ups-options></div>
*/

angular
	.module('ahNuts')
	.directive('upsOptions', upsOptions);

/* @ngInject */
function upsOptions() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/upsOptions.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: upsOptionsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    upsOptionsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function upsOptionsController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}