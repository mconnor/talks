'use strict';

angular.module('magicalDemoApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {

    var uniqueFilter = $filter('unique');

    $scope.count = 300;

    $scope.setCount = function () {
        console.log("Finding " + $scope.count + " items");
        $scope.status = "finding...";
        $scope.query = '';
        $http.get('http://localhost:3000/api/v1/dns?limit=' + $scope.count).then(function (results) {
            $scope.status = "done.";
            $scope.items = results.data;
            
            $scope.countries = uniqueFilter($scope.items, "country_code", true);
            $scope.filterItems = {}
            angular.forEach($scope.countries, function (dns_entry) {
                $scope.filterItems[dns_entry.country_code] = true;
            });
        });
    }

    $scope.setCount(300);

    //registrar filter
    $scope.filterByCountry = function(dns) {
        return $scope.filterItems[dns.country_code];
    };

});