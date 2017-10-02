/* productSizePicker.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <product-size-picker></div>
*/

angular
	.module('ahNuts')
	.directive('productSizePicker', productSizePicker);

/* @ngInject */
function productSizePicker() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/productSizePicker.directive.htm',
		replace: true,
		scope: {
			sizes: '='
		},
		link: linkFunc,
		controller: productSizePickerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    productSizePickerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function productSizePickerController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');

	}

	return  directive;
}