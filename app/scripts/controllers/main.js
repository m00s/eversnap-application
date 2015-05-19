'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eversnapApp.controllers
 */
angular.module('eversnapApp.controllers', [])
  .controller('MainCtrl', AuthController);

function AuthController(Facebook, AccessToken) {

  var vm = this;
  vm.access_token = AccessToken.get();

  vm.login = function() {
    Facebook.login(function(response) {
      console.log('response:\n',response);
      vm.access_token = AccessToken.set(response.authResponse.accessToken);
      vm.getLoginStatus();
    });
  };

  vm.logout = function () {
    Facebook.logout(function(response) {
      vm.access_token = AccessToken.destroy();
      vm.getLoginStatus();
    });
  };

  vm.getLoginStatus = function() {
    Facebook.getLoginStatus(function(response) {
      if(response.status === 'connected')
      {
        vm.loggedIn = true;
        vm.me();
      }
      else{
        vm.loggedIn = false;
      }
    });
  };

  vm.me = function() {
    Facebook.api('/me', function(response) {
      vm.user = response;
      vm.fetchAlbum();
    });
  };

  vm.fetchAlbum = function() {
    Facebook.api('/' + vm.user.id + '/albums',
      function (response) {
        if (response && !response.error) {
          vm.albums = response.data;
        }
        else{
          vm.isError.active = true;
          vm.isError.message = response;
        }
      })
  };

  vm.getLoginStatus();

}
