'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the eversnapApp.controllers
 */
angular.module('eversnapApp.controllers')
  .controller('AlbumCtrl', AlbumCtrl);

function AlbumCtrl($routeParams, Facebook, AccessToken, $modal) {

  var vm = this;

  vm.access_token = AccessToken.get();
  vm.photos = [];

  (function fetchPhotos() {
    Facebook.api('/' + $routeParams.albumId + '/photos?access_token=' + vm.access_token, function(response) {
      vm.photos = response.data;
    });
  })();

  vm.open = function (id) {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/photoModal.html',
      controller: 'ModalInstanceCtrl as vm',
      size: 'lg',
      resolve: {
        photoId: function () {
          return id;
        }
      }
    });

    modalInstance.result.then(function (photoId) {
      vm.selected = photoId;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
}
