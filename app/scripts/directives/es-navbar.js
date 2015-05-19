'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esNavbar
 * @description
 * # esNavbar
 */
angular.module('eversnapApp.directives')
  .directive('esNavbar', function (templates) {
    return {
      templateUrl: templates.navbar,
      restrict: 'E',
      link: function postLink() {
      }
    };
  });
