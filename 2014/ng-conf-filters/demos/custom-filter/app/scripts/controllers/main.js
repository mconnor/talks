'use strict';

angular.module('myApp')
    .controller('MainCtrl', function ($scope, $http, $filter) {

        var uniqueFilter = $filter('unique');

        $http.get('http://localhost:3000/api/v1/beers').then(function(results) {
            $scope.beers = results.data;
            console.log(results.data[0]);

            $scope.beerCategories = uniqueFilter($scope.beers, "category", true);

            $scope.filterItems = {};
            angular.forEach($scope.beerCategories, function(beer) {
                if (beer.category) {
                    $scope.filterItems[beer.category] = true
                }
            });

            console.log($scope.beerCategories)
            console.log($scope.filterItems)
        });

        //category filter
        $scope.filterByCategory = function(category) {
            return $scope.filterItems[category.category];
        };

    });
