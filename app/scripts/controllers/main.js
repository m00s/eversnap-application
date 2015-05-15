'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eversnapApp
 */
angular.module('eversnapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
