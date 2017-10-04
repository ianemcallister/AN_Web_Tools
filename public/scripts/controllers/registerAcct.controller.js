angular
    .module('ahNuts')
    .controller('registerAcctController', registerAcctController);

registerAcctController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function registerAcctController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	console.log('in the registerAcctController ');

}