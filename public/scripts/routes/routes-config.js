angular
    .module('ahNuts')
    .config(config);
/* @ngInject */
function config($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl: 'views/landingPage.htm',
        controller: 'landingController',
        controllerAs: 'vm'
    });
}