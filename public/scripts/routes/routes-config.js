angular
    .module('ahNuts')
    .config(config);
/* @ngInject */
function config($routeProvider) {
	$routeProvider
	//define the landing route
	.when('/', {
        templateUrl: 'views/landingPage.htm',      //'views/mainPage.htm'
        controller: 'landingController',           //'mainController'
        controllerAs: 'vm'
    })
    //define the all products route
    .when('/all-products', {
        templateUrl: 'views/allProductsPage.htm',
        controller: 'allProductsController',
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            productList: productList
        }
    })
    //define the single product route
    .when('/product/:prdctId', {
        templateUrl: 'views/aProductPage.htm',
        controller: 'aProductController',
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            aProduct: aProduct
        }
    })
    //define the delivery specifications route
    .when('/getting-the-product/:itemId', {
        templateUrl: 'views/productGettingPage.htm',
        controller: 'productGettingController',
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
    //define the checkout route
    .when('/checkout', {
        templateUrl: 'views/checkoutPage.htm',
        controller: 'checkoutController',
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            squareCreds: squareCreds
        }
    })
    //define the checkout route
    .when('/order-confirmation/:confId', {
        templateUrl: 'views/orderConfirmationPage.htm',
        controller: 'orderConfirmationController',
        controllerAs: 'vm'
    })
    //define the myAccount route for customers
    .when('/registerUser', {
        templateUrl: 'views/registrationPage.htm',
        controller: 'registerAcctController',
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
    //}).otherwise({
    //    redirectTo: '/'
    });
}

//Required functions
function authentication() {

    console.log('authenticating');	//TODO: TAKE THIS OUT LATER
};

function squareCreds(dataServices) {
    //define local variables
    var data = dataServices;

    console.log('getting square creds');    //TODO: TAKE THIS OUT LATER

    
    //TODO: WHY DOES THIS RESOLVE SOMETIMES AND NOT OTHERS
    return new Promise(function(resolve, reject) {

        //reach out to endpoint
        data.post('/api/square-creds', { key:'owine91n-sn#bsinwi#k'} )
        .then(function success(s) {
            console.log('got this', s);
            resolve(s);
        }).catch(function error(e) {
            resolve(e);
        });

    });

};

/*
*   PRODUCT LIST
*
*   This function loads a list of products
*/
function productList(dataServices, $route) {

    //define local variables
    var data = dataServices;
    var path = '/api/productlist';

    if($route.current.params != undefined) {
        path += '?filter=' + $route.current.params.filter;
    };

    //alert('$route.current.params', $route.current.params);

    //return the promise of async work
    return new Promise(function(resolve, reject) {

        //reach out to the endpoint
        data.get(path)
        .then(function success(s) {
            resolve(s);
        }).catch(function error(e) {
            reject(e);
        });

    });
};

/*
*   A PRODUCT
*
*   This function loads a single product
*/
function aProduct(dataServices, $route) {

    //define local variables
    var data = dataServices;
    var path = '/api/productlist?select=' + $route.current.params.prdctId;

    console.log('path', path);


    //alert('$route.current.params', $route.current.params);

    //return the promise of async work
    return new Promise(function(resolve, reject) {

        //reach out to the endpoint
        data.get(path)
        .then(function success(s) {
            //console.log('got this product', s);
            resolve(s);
        }).catch(function error(e) {
            reject(e);
        });

    });

};
