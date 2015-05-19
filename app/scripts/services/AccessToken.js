'use strict';

angular.module('eversnapApp.services', ['LocalStorageModule'])
  .factory('AccessToken', function AccessToken(localStorageService) {
    var token = localStorageService.get('facebook.session');

    var setToken = function(newToken) {
      localStorageService.set('facebook.session', newToken) ;
      token = newToken;
      return token;
    };

    var isDefined = function() {
      return !!token;
    };

    var getToken = function() {
      return token;
    };

    var destroyToken = function() {
      localStorageService.remove('facebook.session');
      return token = null;
    };

    return {
      get: getToken,
      isDefined: isDefined,
      set: setToken,
      destroy: destroyToken
    };
  });
