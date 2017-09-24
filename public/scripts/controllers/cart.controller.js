angular
    .module('ahNuts')
    .controller('cartController', cartController);

cartController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function cartController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the cart controller');	//TODO: TAKE THIS OUT LATER
}