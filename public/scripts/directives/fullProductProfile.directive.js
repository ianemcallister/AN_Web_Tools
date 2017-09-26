/* fullProductProfile.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div full-product-profile></div>
*/

angular
	.module('ahNuts')
	.directive('fullProductProfile', fullProductProfile);

/* @ngInject */
function fullProductProfile() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/fullProductProfile.directive.htm',
		replace: true,
		scope: {
			product: '='
		},
		link: linkFunc,
		controller: fullProductProfileController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    fullProductProfileController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function fullProductProfileController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the fullProductProfileController directive', vm.product);

	    //define viewmodel functions
	    vm.order = function() {
	    	$location.path('/getting-the-product/' + vm.product);
	    };

	}

	return  directive;
}