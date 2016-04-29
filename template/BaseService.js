(function() {
  'use strict';

  angular.module('BaseService', [])
    .factory('BaseService', BaseService);

  function BaseService( $q, $http) {
    'ngInject';
    var service = {
    };
    return service;


  }

}());
