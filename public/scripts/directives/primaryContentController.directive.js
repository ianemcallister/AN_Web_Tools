/* primaryContent.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div primary-content></div>
*/

angular
	.module('ahNuts')
	.directive('primaryContent', primaryContent);

/* @ngInject */
function primaryContent() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/primaryContent.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: primaryContentController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    primaryContentController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function primaryContentController($scope, $log) {
	    var vm = this;

	    $log.info('in the header directive');

	}

	return  directive;
}