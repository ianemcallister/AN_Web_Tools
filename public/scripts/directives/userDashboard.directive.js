/* userDashboard.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div user-dashboard></div>
*/

angular
	.module('ahNuts')
	.directive('userDashboard', userDashboard);

/* @ngInject */
function userDashboard() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/userDashboard.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: userDashboardController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    userDashboardController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function userDashboardController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the userDashboard directive');

	    //define viewmodel functions

	}

	return  directive;
}