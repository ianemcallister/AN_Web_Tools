/* sizeQtySelector.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div size-qty-selector></div>
*/

angular
	.module('ahNuts')
	.directive('sizeQtySelector', sizeQtySelector);

/* @ngInject */
function sizeQtySelector() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/sizeQtySelector.directive.htm',
		replace: true,
		scope: {
			size: "="
		},
		link: linkFunc,
		controller: sizeQtySelectorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    sizeQtySelectorController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function sizeQtySelectorController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');
	    vm.incriment = function() { vm.size.qty++; }

	    vm.decriment = function() {
	    	if(vm.size.qty >= 1) vm.size.qty--;
	    }
	}

	return  directive;
}