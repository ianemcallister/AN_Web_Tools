/* ahHeader.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div ah-header></div>
*/

angular
	.module('ahNuts')
	.directive('ahHeader', ahHeader);

/* @ngInject */
function ahHeader() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ah.header.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ahHeaderController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ahHeaderController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ahHeaderController($scope, $log) {
	    var vm = this;

	    $log.info('in the header directive');

	}

	return  directive;
}