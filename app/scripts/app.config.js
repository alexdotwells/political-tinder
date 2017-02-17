
angular.module('politicalTinderApp')
  .config(function($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    var mainState = {
      name: 'main',
      url: '/',
      templateUrl: '/views/main.html'
    };

    var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    };

    // var loginState = {
    //   name: 'login',
    //   url: '/login',
    //   templateUrl: '/views/login.html',
    //   controller: 'LoginCtrl'
    // };
    //
    // var logoutState = {
    //   name: 'logout',
    //   url: '/logout',
    //   controller: 'LogoutCtrl'
    // };

    $stateProvider.state(registerState);
    $stateProvider.state(mainState);
    // $stateProvider.state(loginState);
    // $stateProvider.state(logoutState);


    // $httpProvider.interceptors.push('authInterceptor');

  });
