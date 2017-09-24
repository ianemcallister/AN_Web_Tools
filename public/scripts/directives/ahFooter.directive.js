/* ahFooter.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div ah-footer></div>
*/

angular
	.module('ahNuts')
	.directive('ahFooter', ahFooter);

/* @ngInject */
function ahFooter() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ah.footer.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ahFooterController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ahFooterController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ahFooterController($scope, $log) {
	    var vm = this;

	    $log.info('in the header directive');

	}

	return  directive;
}