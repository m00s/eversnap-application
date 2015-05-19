'use strict';

/**
 * @ngdoc service
 * @name eversnapApp.Album
 * @description
 * # Album
 * Service in the eversnapApp.services
 */
angular.module('eversnapApp.services')
  .factory('Album', function (Facebook, Profile, AccessToken, $q) {

    var albums = {};

    function fetchAlbum(profileId) {
      var deferred = $q.defer();

      Facebook.api('/' + profileId + '/albums',
        function (response) {
          if (response && !response.error) {
            albums = response;
            deferred.resolve(albums);
          }
          else {
            console.error(response.error);
            deferred.reject(response.error);
          }
        });

      return deferred.promise;
    }

    function fetchPhotos(id) {
      var deferred = $q.defer();

      if(!id)
        deferred.reject('id required');

      Facebook.api('/' + id + '/photos?access_token=' + AccessToken.get(), function(response) {
        deferred.resolve(response);
      });

      return deferred.promise;
    }

    function destroy() {
      albums = {};
      return albums;
    }

    function searchById(id) {
      for(var i = 0; i < albums.data.length; i++) {
        if(albums.data[i].id == id) {
          return albums.data[i];
        }
      }
      return null;
    }

    function getAlbum(id) {
      return id ? searchById(id) : albums;
    }

    return {
      fetch: fetchAlbum,
      fetchPhotos: fetchPhotos,
      destroy: destroy,
      get: getAlbum
    }
  });
