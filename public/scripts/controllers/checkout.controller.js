angular
    .module('ahNuts')
    .controller('checkoutController', checkoutController);

checkoutController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function checkoutController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the checkout controller');	//TODO: TAKE THIS OUT LATER
}