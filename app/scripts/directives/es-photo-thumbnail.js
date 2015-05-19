'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoThumbnail
 * @description
 * # esPhotoThumbnail
 */
angular.module('eversnapApp.directives')
  .directive('esPhotoThumbnail', function(templates) {
    return {
      templateUrl: templates.photoThumbnail,
      restrict: 'E',
      scope: {
        photos: '=',
        onClick: '&'
      },
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true
    };
  });
