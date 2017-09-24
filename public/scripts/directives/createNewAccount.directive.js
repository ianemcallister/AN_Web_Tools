/* createNewAccount.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div create-new-account></div>
*/

angular
	.module('ahNuts')
	.directive('createNewAccount', createNewAccount);

/* @ngInject */
function createNewAccount() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/createNewAccount.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: createNewAccountController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    createNewAccountController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function createNewAccountController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the create new account directive');

	    //define viewmodel functions

	}

	return  directive;
}