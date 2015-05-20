'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoThumbnail
 * @description
 * esPhotoThumbnail render all album's photos thumbnail.
 * A callback is passed as prop to the directive.
 *
 * @restrict E
 * @element ANY
 * @scope
 *
 * @requires templates
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
