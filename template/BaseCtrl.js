(function() {
  "use strict";
  angular.module('BaseCtrl', [])
    .controller('BaseCtrl', function($scope) {
      'ngInject';
      var vm = this;
      vm.activated = false;
      $scope.$on('$ionicView.afterEnter', activate);
      function activate() {
        vm.activated = true;
      }
    });
}());
