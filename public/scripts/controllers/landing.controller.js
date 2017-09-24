angular
    .module('ahNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function landingController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the landing controller');	//TODO: TAKE THIS OUT LATER
}