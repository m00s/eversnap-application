'use strict';

/**
 * @ngdoc service
 * @name eversnapApp.Profile
 * @description
 * # Profile
 * Service in the eversnapApp.services
 */
angular.module('eversnapApp.services')
  .factory('Profile', function (Facebook, $q) {
    var profileUrl = '/me';

    var profile = {};

    function getProfile() {
      return profile
    }

    function fetchProfile() {
      var deferred = $q.defer();

      Facebook.api(profileUrl, function(response){
        profile = response;
        deferred.resolve(response);
      });

      return deferred.promise;
    }

    return {
      get: getProfile,
      fetch: fetchProfile
    }
  });
