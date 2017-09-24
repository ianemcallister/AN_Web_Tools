angular
    .module('ahNuts')
    .controller('mainController', mainController);

mainController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function mainController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the main controller');	//TODO: TAKE THIS OUT LATER
}