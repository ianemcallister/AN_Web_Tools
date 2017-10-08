/* checkoutBilling.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div checkout-billing></div>
*/

angular
	.module('ahNuts')
	.directive('checkoutBilling', checkoutBilling);

/* @ngInject */
function checkoutBilling() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/checkoutBilling.directive.htm',
		replace: true,
		scope: {
			aquDet: '=',
			payDet: '='
		},
		link: linkFunc,
		controller: checkoutBillingController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    checkoutBillingController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function checkoutBillingController($scope, $log) {
	    var vm = this;
	    vm.payDet = {
	    	name: {
	    		first: "",
	    		last: ""
	    	},
	    	street1: "",
	    	street2: "",
	    	street3: "",
	    	city: "",
	    	state: "",
	    	zip: "",
	    	phone: "",
	    	po: "",
	    	email: ""
	    };

	    $log.info('in the checkoutBilling directive', vm.aquDet, vm.payDet);

	    vm.copyDelAdd = function() {
	    	//copy details will copy details
	    	vm.payDet.name.first = vm.aquDet.deliveryLocation.receiver.first;
	    	vm.payDet.name.last = vm.aquDet.deliveryLocation.receiver.last;
	    	vm.payDet.street1 = vm.aquDet.deliveryLocation.street1;
	    	vm.payDet.street2 = vm.aquDet.deliveryLocation.street2;
	    	vm.payDet.street3 = vm.aquDet.deliveryLocation.street3;
	    	vm.payDet.city = vm.aquDet.deliveryLocation.city;
	    	vm.payDet.state = vm.aquDet.deliveryLocation.state;
	    	vm.payDet.zip = vm.aquDet.deliveryLocation.zip;
	    };

	}

	return  directive;
}