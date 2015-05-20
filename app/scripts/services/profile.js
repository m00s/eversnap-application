'use strict';

/**
 * @ngdoc service
 * @name eversnapApp.services.Profile
 * @description
 * Service in the eversnapApp.services that fetch user's profile from Facebook api
 *
 * @requires Facebook
 * @requires $q
 */
angular.module('eversnapApp.services')
  .factory('Profile', ProfileService);

ProfileService.$inject = ['Facebook', '$q'];

function ProfileService(Facebook, $q) {
  var profile = {};
  var profileUrl = '/me';

  return {
    get: getProfile,
    fetch: fetchProfile
  };

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
}
