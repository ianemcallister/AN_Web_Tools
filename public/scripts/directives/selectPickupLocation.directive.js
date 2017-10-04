/* selectPickupLocation.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div select-pickup-location></div>
*/

angular
	.module('ahNuts')
	.directive('selectPickupLocation', selectPickupLocation);

/* @ngInject */
function selectPickupLocation() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/selectPickupLocation.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: selectPickupLocationController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    selectPickupLocationController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function selectPickupLocationController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}