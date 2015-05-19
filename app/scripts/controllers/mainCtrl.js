'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eversnapApp.controllers
 */
angular.module('eversnapApp.controllers', ['ui.bootstrap'])
  .controller('MainCtrl', AuthController);

AuthController.inject = ['AccessToken', 'Session', 'Album', '$rootScope'];

function AuthController(AccessToken, Session, Album, $rootScope) {

  var vm = this;

  vm.albums = {};
  vm.access_token = AccessToken.get();
  vm.session = Session.get();

  fetchAlbum();

  vm.login = function() {
    Session.login().then(fetchAlbum);
  };

  vm.logout = function() {
    Session.logout().then(fetchAlbum);
  };

  function fetchAlbum(){
    vm.albums = Album.get();
  }

  $rootScope.$on('SESSION_STARTED', fetchAlbum);

}
