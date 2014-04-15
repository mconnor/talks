/* Services */
/*global angular*/
(function () {
  'use strict';
  var services = angular.module('app.services', []);
  var Host,  Host_Config;
  

  Host = function($http, $log) {
    // Host is a class which we can use for retrieving and 
    // updating data on the server
    /*
    var factory = function(data) { 
      //$log.log(data); 
      return data; //angular.extend(this, data); 
    };
    */
    var factory ={};
    factory.list = function() {
      return $http.get('hosts.json');
    };
    
/*
    factory.list = function() {
    //  return $http.get('http://localhost:2404/hosts/').then(function(response) { return new Host(response.data); })
      return $http.get('hosts.json')
        .then(function(response, status) {
           return new factory( response.data );
            $log.log(response.data); 
          });
    };

    // a static method to retrieve Host by ID
    factory.get = function(id) {
      return $http.get('http://localhost:2404/hosts/' + id.host_id)
        .then(function(response) { 
          return new factory(response.data); 
        });
    };

    

    factory.update = function( data ) {
      return $http.put('http://localhost:2404/hosts/', data )
        .then( function(response) {
           return new factory(response.data);
         })
    };

    factory.create = function( data ) {
      return $http.put('http://localhost:2404/hosts/')
        .then(function(response) { return new factory(response.data); })
    };

    factory.destroy = function(id) {
      return $http.delete('http://localhost:2404/hosts/' + id.host_id)
        .then(function(response) { return new factory(response.data); })
    };

    // an instance method to create a new Host
    factory.prototype.create = function() {
      var host = this;
      return $http.post('http://localhost:2404/hosts/', host)
        .then(function(response) {
          host.id = response.data.id;
          return host;
        });
    };
*/
    return factory;
  };

  Host.$inject = ['$http', '$log'];
  services.factory( 'Host', Host);

  /*
  Host_Config = function($http) {
    var _host_Config = function( data ) { angular.extend(this, data); };

    // a static method to retrieve _host_Config by ID
    _host_Config.get = function(id) {
      return $http.get('http://localhost:2404/host-configs/' + id)
        .then(function(response) {
          return new _host_Config(response.data); 
        });
    };

    // TODO: take the data array and parse it into the query instead of just accepting host_id
    _host_Config.list = function( data ) {
      return $http.get('http://localhost:2404/host-configs/?hostid=' + data.host_id)
        .then(function(response) { return new _host_Config(response.data); })
    };

    _host_Config.create = function( data ) {
      return $http.put('http://localhost:2404/host-configs/')
        .then(function(response) { return new _host_Config(response.data); })
    };

    // an instance method to create a new _host_Config
    _host_Config.prototype.create = function() {
      var host_config = this;
      return $http.post('http://localhost:2404/host-configs/', host_config).then(function(response) {
        host_config.id = response.data.id;
        return host_config;
      });
    };

    return _host_Config;
  };
  Host_Config.$inject = ['$http'];
  services.factory( '_host_Config', Host_Config);
  */
}());