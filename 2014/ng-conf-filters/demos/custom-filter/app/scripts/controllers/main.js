'use strict';

angular.module('customFilterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Beers!"

    $http.get('http://localhost:3000/api/v1/beers').then(function(results) {
        $scope.beers = results.data;
        console.log(results.data[0]);
    });
  });
