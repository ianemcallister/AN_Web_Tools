/* toZipOnDate.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div to-zip-on-date></div>
*/

angular
	.module('ahNuts')
	.directive('toZipOnDate', toZipOnDate);

/* @ngInject */
function toZipOnDate() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/toZipOnDate.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: toZipOnDateController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    toZipOnDateController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function toZipOnDateController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}