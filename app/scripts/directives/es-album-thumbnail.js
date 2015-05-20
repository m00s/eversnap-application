'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esAlbumThumbnail
 * @description
 * esAlbumThumbnail render a single album thumbnail, passed as prop to the directive.
 *
 * @restrict E
 * @element ANY
 * @scope
 *
 * @requires templates
 */
angular.module('eversnapApp.directives', [])
  .directive('esAlbumThumbnail', function (templates) {
    return {
      restrict: 'E',
      templateUrl: templates.albumThumbnail,
      scope: {
        album: '='
      },
      controller: albumThumbnailCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
  });

albumThumbnailCtrl.$inject = ['AccessToken'];

function albumThumbnailCtrl(AccessToken) {
  /* jshint validthis: true */
  var vm = this;
  vm.access_token = AccessToken.get();
}
