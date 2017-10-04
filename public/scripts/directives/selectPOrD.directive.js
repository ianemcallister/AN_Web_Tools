/* selectPOrD.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div select-p-or-d></div>
*/

angular
	.module('ahNuts')
	.directive('selectPOrD', selectPOrD);

/* @ngInject */
function selectPOrD() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/selectPOrD.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: selectPOrDController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    selectPOrDController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function selectPOrDController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}