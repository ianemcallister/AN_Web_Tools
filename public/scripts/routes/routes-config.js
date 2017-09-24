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
    //define the myAccount route for customers
    .when('/MyAccount/:param', {
        templateUrl: 'views/accountsPage.htm',
        controller: 'accountsController',
        controllerAs: 'vm'
    })
    //define the teamMember route
	.when('/teamMember/:param', {
        templateUrl: 'views/internalActtsPage.htm',
        controller: 'internalActtsController',
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            authentication: authentication
        }
    });
}

//Required functions
function authentication() {

    console.log('authenticating');	//TODO: TAKE THIS OUT LATER
};