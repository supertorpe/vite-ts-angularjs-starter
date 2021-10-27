import * as angular from 'angular';

angular.module('app', [])
  .controller('mainCtrl', ['$scope', ($scope) => {
    $scope.greeting = 'Welcome!!!';
  }]);