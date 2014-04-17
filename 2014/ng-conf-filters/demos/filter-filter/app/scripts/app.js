/*global angular*/
(function () {

  angular.module('myApp', [
    'ngResource',
    'ngRoute'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());
