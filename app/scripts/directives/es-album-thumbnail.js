'use strict';

/**
 * @ngdoc directive
 * @name eversnapApp.directive:esAlbumThumbnail
 * @description
 * # esAlbumThumbnail
 */
angular.module('eversnapApp.directives', [])
  .directive('esAlbumThumbnail', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/albumThumbnail.html',
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
  var vm = this;
  vm.access_token = AccessToken.get();
}
