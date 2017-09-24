/* heroBanner.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div hero-banner></div>
*/

angular
	.module('ahNuts')
	.directive('heroBanner', heroBanner);

/* @ngInject */
function heroBanner() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/heroBanner.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: heroBannerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    heroBannerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function heroBannerController($scope, $log) {
	    var vm = this;

	    $log.info('in the hero banner directive');

	}

	return  directive;
}