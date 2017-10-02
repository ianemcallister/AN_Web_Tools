/* productThumbnails.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div prdct-thmbnail></div>
*/

angular
	.module('ahNuts')
	.directive('prdctThmbnl', prdctThmbnl);

/* @ngInject */
function prdctThmbnl() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/prdctThmbnl.directive.htm',
		replace: true,
		scope: {
			product: '='
		},
		link: linkFunc,
		controller: prdctThmbnlController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    prdctThmbnlController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function prdctThmbnlController($scope, $log) {
	    var vm = this;

	    $log.info('in the prdctThmbnl directive');

	}

	return  directive;
}