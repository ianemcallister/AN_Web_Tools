/* deliveryDetails.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div delivery-details></div>
*/

angular
	.module('ahNuts')
	.directive('deliveryDetails', deliveryDetails);

/* @ngInject */
function deliveryDetails() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/deliveryDetails.directive.htm',
		replace: true,
		scope: {
			deliverTo: '='
		},
		link: linkFunc,
		controller: deliveryDetailsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    deliveryDetailsController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function deliveryDetailsController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the deliveryDetails directive', vm.deliverTo);

	    //
	    vm.changeDetails = function() {
	    	$location.path('/getting-the-product/' + '10');
	    };
	}

	return  directive;
}