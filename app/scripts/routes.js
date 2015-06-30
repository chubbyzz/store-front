app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/products/index.html'
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
    })
    .when('/cart/:id', {
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
