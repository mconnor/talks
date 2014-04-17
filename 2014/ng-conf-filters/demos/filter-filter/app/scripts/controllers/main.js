/*global angular*/
(function () {
    'use strict';

    var MainCtrl = function ($scope, $http) {

        $http.get( 'http://localhost:3000/api/v1/beers' )
        	.then(function(results) {
            $scope.beers = results.data;
        	});
	 };
	 MainCtrl.$inject =[ '$scope', '$http'];

	angular.module('myApp',[])
	    .controller('MainCtrl', MainCtrl );
}());
