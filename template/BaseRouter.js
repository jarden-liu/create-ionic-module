(function() {
  'use strict';

  angular.module('BaseRouter', [])
    .config(BaseRouter);


  function BaseRouter($stateProvider, USER_ROLES, $urlRouterProvider) {
    'ngInject';
    $stateProvider
      .state('Base', {
        url: "/base",
        templateUrl: 'Base/Base.html',
        controller: 'BaseCtrl',
        controllerAs: 'vm',
        allowAnonymous: true,
        authorizedRoles: [USER_ROLES.all]
      });
  }
}());
