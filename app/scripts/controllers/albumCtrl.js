'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:AlbumCtrl
 * @description
 * Controller of the eversnapApp.controllers.
 * Handle modal open passing a callback to inner directive.
 *
 * @requires $routeParams
 * @requires $modal
 * @requires templates
 * @requires Album
 * @requires $rootScope
 * @requires $location
 * @requires Session
 */
angular.module('eversnapApp.controllers')
  .controller('AlbumCtrl', AlbumCtrl);

AlbumCtrl.$inject = ['$routeParams', '$modal', 'templates', 'Album', '$rootScope', '$location', 'Session'];

function AlbumCtrl($routeParams, $modal, templates, Album, $rootScope, $location, Session) {

  var vm = this;

  vm.albumId = $routeParams.albumId;
  vm.session = Session.get();
  vm.photos = [];

  $rootScope.$on('SESSION_STARTED', fetchPhotos);

  function fetchPhotos() {
    Album.fetchPhotos(vm.albumId).then(function(response){
      vm.photos = response.data;
      if (Album.get().data) {
        vm.album = Album.get(vm.albumId);
        if(!vm.album){
          goHome();
        }
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
    });
  };

  function goHome() {
    $location.path('/');
  }

  Session.started().then(fetchPhotos, goHome);
}
