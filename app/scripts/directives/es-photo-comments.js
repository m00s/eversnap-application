'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoComments
 * @description
 * esPhotoComments render all photo comments, passed as prop to the directive.
 *
 * @restrict E
 * @element ANY
 * @scope
 *
 * @requires templates
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
