'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoComments
 * @description
 * # esPhotoComments
 */
angular.module('eversnapApp.directives')
  .directive('esPhotoComments', function (templates) {
    return {
      templateUrl: templates.photoComments,
      restrict: 'E',
      scope: {
        comments: '='
      },
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true
    };
  });
