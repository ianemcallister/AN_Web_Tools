/* toZipOnDate.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div to-zip-on-date></div>
*/

angular
	.module('ahNuts')
	.directive('toZipOnDate', toZipOnDate);

/* @ngInject */
function toZipOnDate() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/toZipOnDate.directive.htm',
		replace: true,
		scope: {
			zipcode: "=",
			completed: '='
		},
		link: linkFunc,
		controller: toZipOnDateController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
		scope.$watch("form.zipcode.$valid", function zipMonitor(newValue, oldValue) {
			console.log('$valid', newValue);
		});
		scope.$watch("form.zipcode.$pristine", function pristineMonitor(newValue, oldValue) {
			console.log('$pristine', newValue);
		});
    }

    toZipOnDateController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function toZipOnDateController($scope, $log) {
	    var vm = this;

	    //$log.info('in the header directive');
	    vm.zipcodeFinder = function() {
	    	alert('finding zipcode');
	    };

	    vm.submitZip = function() {
	    	//check for a valid 

	    }
	}

	return  directive;
}