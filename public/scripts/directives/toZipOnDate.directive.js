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
			goingTo: "=",
			vipIdentified: '='
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
			if(newValue && (scope.zipcode != "")) scope.completed = true;
			else scope.completed = false;
		});
    }

    toZipOnDateController.$inject = ['$scope', '$log', 'uspsServices'];
    /* @ngInject */
    function toZipOnDateController($scope, $log, uspsServices) {
	    var vm = this;

	    //$log.info('in the header directive');
	    vm.zipcodeFinder = function() {
	    	alert('finding zipcode');
	    };

	    vm.submitZip = function() {
	    	//check for a valid 

	    };

	    vm.checkzipcode = function() {

	    	uspsServices.cityStateLookup(vm.goingTo.zip)
	    	.then(function succes(s) {

	    		//if the result comes back positive, update the values
	    		vm.goingTo.city = s.city;
	    		vm.goingTo.state = s.state;

	    		$scope.$apply();
	    		
	    	}).catch(function error(e) {

	    	});
	    };
	}

	return  directive;
}