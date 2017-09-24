angular
    .module('ahNuts')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function locationsController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the locations controller');	//TODO: TAKE THIS OUT LATER
}