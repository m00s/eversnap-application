'use strict';

/**
 * @ngdoc service
 * @name eversnapApp.Session
 * @description
 * # Session
 * Service in the eversnapApp.services
 */
angular.module('eversnapApp.services')
  .factory('Session', function (Facebook, AccessToken, Album, Profile, $q) {

    var session = {
      loggedIn: false
    };

    var sessionPromise = $q.defer();
    var promise = sessionPromise.promise;

    function getSession() {
      return session;
    }

    function login() {
      var deferred = $q.defer();

      Facebook.login(function(response) {
        AccessToken.set(response.authResponse.accessToken);
        deferred.resolve(response);
      });

      return deferred.promise;
    }

    function logout() {
      var deferred = $q.defer();

      Facebook.logout(function() {
        AccessToken.destroy();
        Album.destroy();
        getLoginStatus();
        deferred.resolve();
      });

      return deferred.promise;
    }

    function getLoginStatus() {
      var deferred = $q.defer();

      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          session.loggedIn = true;

          Profile.fetch()
            .then(function(profile) {
              Album.fetch(profile.id)
                .then(function(){
                  sessionPromise.resolve();
                  deferred.resolve();
                }, function(){
                  console.log('error in fetching album');
                });
            }, function(){
              console.log('error in fetching profile');
            });
        }
        else{
          session.loggedIn = false;
          deferred.reject();
        }
      });

      return deferred.promise;
    }

    function getPromise() {
      return promise;
    }

    return {
      login: login,
      logout: logout,
      start: getLoginStatus,
      get: getSession,
      getPromise: getPromise
    }

  });
