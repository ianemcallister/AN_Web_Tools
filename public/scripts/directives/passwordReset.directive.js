/* passwordReset.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div password-reset></div>
*/

angular
	.module('ahNuts')
	.directive('passwordReset', passwordReset);

/* @ngInject */
function passwordReset() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/passwordReset.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: passwordResetController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    passwordResetController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function passwordResetController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the passwordReset directive');

	    //define viewmodel functions
	    vm.email = '';

	    //define local functions
	    vm.back = function() {
	    	$location.path('/login');
	    };

	    vm.submit = function() {
	    	$log.info('submitting email', vm.email);
	    }
	}

	return  directive;
}