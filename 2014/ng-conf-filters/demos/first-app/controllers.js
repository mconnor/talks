/*global angular*/
(function () {
    'use strict';

    var controllers;
    var MainCtrl = function( $scope, $location, $routeParams, Host, $filter)  {
      
        //Just some global app vars
        $scope.title = "Hosts";
        $scope.user = {name: 'Sharon'};

        //Initial sort order
        $scope.orderProp = 'title';

        //Get Host 
        /*
        Host.list().then(function (data) {
          $scope.hosts = data;
        });
*/

        Host.list()
            .success( function( data ){
                $scope.hosts = data;
          //$log(angular.toJson( orders, true));
            })
            .error( function ( data, status, headers, config){
                $log.log('error- ' + data.error + ' ' + status);
        });

        //Little function to create the sort order click handler
        $scope.setOrder = function (orderProp) {
            $scope.orderProp = orderProp;
        };

        //Little function to create the host detail click handler
        $scope.getHost = function( host_id ) {
            var newRoute = "/" + host_id;
            $location.path( newRoute );
        };

    };
    MainCtrl.$inject = [ '$scope', '$location', '$routeParams', 'Host', '$filter' ];
    
    angular.module('app.controllers',[])
        .controller('MainCtrl', MainCtrl);

}());