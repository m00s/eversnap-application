'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esPhotoThumbnail
 * @description
 * # esPhotoThumbnail
 */
angular.module('eversnapApp')
  .directive('esPhotoThumbnail', function () {
    return {
      templateUrl: 'views/photoThumbnail.html',
      restrict: 'E',
      scope: {
        photos: '=',
        onClick: '&'
      },
      controller: angular.identity,
      controllerAs: 'vm',
      bindToController: true
    };
  });
