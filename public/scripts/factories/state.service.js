angular
    .module('ahNuts')
    .factory('stateService', stateService);

stateService.$inject = ['$log'];

/* @ngInject */
function stateService($log) {

	var stateServiceObject = {
		aquisitionDetails: {
			delZipIdentified: false,
			delDateIdentified: false,
			shippedOrPUSelected: false,
			willShip: false,
			willPU: false,
			puLocSelected: false,
			delMthSelected: false
		}
	};


	return stateServiceObject;
}
