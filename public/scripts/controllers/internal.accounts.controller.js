angular
    .module('ahNuts')
    .controller('internalActtsController', internalActtsController);

internalActtsController.$inject = ['$log', '$routeParams', '$location', 'dataServices'];

/* @ngInject */
function internalActtsController($log, $routeParams, $location, dataServices) {

	//define view model variable
	var vm = this;
	var data = dataServices;

	//notify us of the location
	$log.info('in the internal controller');	//TODO: TAKE THIS OUT LATER

	vm.submit = function() {
		console.log('submitting');
		data.post('/api/shiftEarnings', {"test":"test"})
		.then(function(response) {
			console.log('got this response', response);
		});
	}
}	