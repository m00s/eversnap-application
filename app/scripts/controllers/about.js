'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eversnapApp
 */
angular.module('eversnapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
