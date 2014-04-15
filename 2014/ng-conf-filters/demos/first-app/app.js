/*global angular*/
(function () {
    'use strict';

     angular.module('host-app', ['app.controllers', 'app.services'])
      .config([ '$routeProvider', function( $routeProvider ) {
        // routes
          $routeProvider.
              when('/', {templateUrl: 'host_list.html', controller: 'MainCtrl' }).
              when('/:host_id', {
                  templateUrl: 'host_editor.html',
                  controller: 'HostEditCtrl'}).
              otherwise({
                redirectTo: '/', 
                templateUrl: 'host_list.html', 
                controller: 'MainCtrl'
              });
      }]);
}());