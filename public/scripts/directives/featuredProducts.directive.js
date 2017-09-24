/* featuredProducts.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div featured-products></div>
*/

angular
	.module('ahNuts')
	.directive('featuredProducts', featuredProducts);

/* @ngInject */
function featuredProducts() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/featuredProducts.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: featuredProductsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    featuredProductsController.$inject = ['$scope', '$log', '$location'];
    /* @ngInject */
    function featuredProductsController($scope, $log, $location) {
	    var vm = this;

	    $log.info('in the featuredProductsController directive');

	    //define viewmodel functions
	    vm.mrPrdctsBtn = function() {
	    	$location.path('/all-products');
	    }

	}

	return  directive;
}