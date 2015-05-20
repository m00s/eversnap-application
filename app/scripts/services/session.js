'use strict';

/**
 * @ngdoc service
 * @name eversnapApp.Session
 * @description
 * # Session
 * Service in the eversnapApp.services
 */
angular.module('eversnapApp.services')
  .factory('Session', SessionService);

SessionService.$inject = ['Facebook', 'AccessToken', 'Album', 'Profile', '$q'];

function SessionService(Facebook, AccessToken, Album, Profile, $q) {

  var session = {
    loggedIn: false
  };

  var sessionPromise = $q.defer();
  var promise = sessionPromise.promise;

  return {
    login: login,
    logout: logout,
    start: startSession,
    get: getSession,
    started: getPromise
  };

  function getSession() {
    return session;
  }

  function getPromise() {
    return promise;
  }

  function login() {
    var deferred = $q.defer();
    sessionPromise = $q.defer();
    promise = sessionPromise.promise;

    Facebook.login(function(response) {
      AccessToken.set(response.authResponse.accessToken);
      startSession().then(function(){
        deferred.resolve();
      }, function (e) {
        deferred.reject(e);
      });
    });

    return deferred.promise;
  }

  function logout() {
    var deferred = $q.defer();

    Facebook.logout(function() {
      AccessToken.destroy();
      Album.destroy();
      startSession();
      deferred.resolve();
    });

    return deferred.promise;
  }

  function startSession() {
    var deferred = $q.defer();

    Facebook.getLoginStatus(function(response) {
      if(response.status === 'connected') {

        if(!AccessToken.isDefined()){
          AccessToken.set(response.authResponse.accessToken);
        }

        session.loggedIn = true;

        Profile.fetch()
          .then(function(profile) {
            Album.fetch(profile.id)
              .then(function(){
                sessionPromise.resolve();
                deferred.resolve();
              }, function(e){
                sessionPromise.reject(e);
              });
          }, function(e){
            sessionPromise.reject(e);
          });
      }
      else {
        session.loggedIn = false;
        deferred.reject();
        sessionPromise.reject();
      }
    });

    return deferred.promise;
  }
}
