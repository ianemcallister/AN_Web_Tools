/* ahHeader.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div ah-header></div>
*/

angular
	.module('ahNuts')
	.directive('ahHeader', ahHeader);

/* @ngInject */
function ahHeader() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ah.header.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ahHeaderController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ahHeaderController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function ahHeaderController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the header directive');

	    //define viewmodel functions
	    vm.navbnt = function(button) {

	    	//tell us which button was clicked
	    	$log.info('clicked', button);

	    	//then redirect there, if not the menu button
	    	if(button != 'menu') {
	    		
	    		$location.path('/' + button);
	    	};
	    	
	    };

	}

	return  directive;
}