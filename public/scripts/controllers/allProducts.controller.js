angular
    .module('ahNuts')
    .controller('allProductsController', allProductsController);

allProductsController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function allProductsController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	$log.info('in the all Products controller');	//TODO: TAKE THIS OUT LATER
}