angular
    .module('ahNuts')
    .controller('internalActtsController', internalActtsController);

internalActtsController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function internalActtsController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	//notify us of the location
	$log.info('in the internal controller');	//TODO: TAKE THIS OUT LATER

}