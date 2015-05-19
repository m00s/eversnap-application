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

AlbumCtrl.$inject = ['$routeParams', 'AccessToken', '$modal', 'templates', 'Album', '$rootScope'];

function AlbumCtrl($routeParams, AccessToken, $modal, templates, Album, $rootScope) {

  var vm = this;

  vm.access_token = AccessToken.get();
  vm.photos = [];
  vm.albumId = $routeParams.albumId;

  $rootScope.$on('SESSION_STARTED', fetchPhotos);

  function fetchPhotos() {
    console.log('fetchPhotos()');
    Album.fetchPhotos(vm.albumId).then(function(response){
      vm.photos = response.data;
      if (Album.get().data) {
        console.log('full');
        vm.album = Album.get(vm.albumId);
      }
      else {
        Album.fetch().then(function () {
          vm.album = Album.get(vm.albumId);
        });
      }
    });
  }

  vm.open = function (id) {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: templates.photoModal,
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

  fetchPhotos();
}
