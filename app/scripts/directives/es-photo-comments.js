'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoComments
 * @description
 * # esPhotoComments
 */
angular.module('eversnapApp.directives')
  .directive('esPhotoComments', function () {
    return {
      templateUrl: 'views/photoComments.html',
      restrict: 'E',
      scope: {
        comments: '='
      },
      controller: angular.identity,
      controllerAs: 'vm',
      bindToController: true
    };
  });
