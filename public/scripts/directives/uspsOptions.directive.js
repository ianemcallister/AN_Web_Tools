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
		scope: {
			options: "="
		},
		link: linkFunc,
		controller: uspsOptionsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
	
    }

    uspsOptionsController.$inject = ['$scope', '$log', 'shoppingCart'];
    /* @ngInject */
    function uspsOptionsController($scope, $log, shoppingCart) {
	    var vm = this;
	    vm.selectedOption = ''
	    vm.uspsOptions = shoppingCart.aquisitionDetails.deliveryMethod;
	    console.log($scope);
	}

	return  directive;
}