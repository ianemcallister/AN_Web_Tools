angular
    .module('ahNuts')
    .config(config);
/* @ngInject */
function config($routeProvider) {
	$routeProvider
	//define the landing route
	.when('/', {
        templateUrl: 'views/landingPage.htm',
        controller: 'landingController',
        controllerAs: 'vm'
    })
    //define the locations route
    .when('/locations', {
        templateUrl: 'views/locationsPage.htm',
        controller: 'locationsController',
        controllerAs: 'vm'
    })
    //define the login route
    .when('/login', {
        templateUrl: 'views/loginPage.htm',
        controller: 'loginController',
        controllerAs: 'vm'
    })
    //define the shopping cart route
    .when('/cart', {
        templateUrl: 'views/cartPage.htm',
        controller: 'cartController',
        controllerAs: 'vm'
    })
    //define the myAccount route
    .when('/MyAccount/:param', {
        templateUrl: 'views/accountsPage.htm',
        controller: 'accountsController',
        controllerAs: 'vm'
    });
}