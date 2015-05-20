'use strict';

angular.module('eversnapApp.services', ['LocalStorageModule', 'facebook'])
  .factory('AccessToken', AccessTokenService);

AccessTokenService.$inject = ['localStorageService'];

function AccessTokenService(localStorageService) {
  var token = localStorageService.get('facebook.session');

  return {
    get: getToken,
    isDefined: isDefined,
    set: setToken,
    destroy: destroyToken
  };

  function setToken(newToken) {
    localStorageService.set('facebook.session', newToken) ;
    token = newToken;
    return token;
  }

  function getToken() {
    return token;
  }

  function isDefined() {
    return !!token;
  }

  function destroyToken() {
    localStorageService.remove('facebook.session');
    return token = null;
  }
}
