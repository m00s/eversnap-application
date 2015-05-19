'use strict';

/**
 * @ngdoc function
 * @name eversnapApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the eversnapApp.controllers
 */
angular.module('eversnapApp.controllers')
  .controller('AlbumCtrl', function ($scope, $routeParams, Facebook, AccessToken) {

    $scope.access_token = AccessToken.get();
    $scope.photos = [];

    $scope.fetchPhotos = function() {
      Facebook.api('/' + $routeParams.albumId + '/photos?access_token=' + $scope.access_token, function(response) {
        $scope.photos = response.data;
        console.log('photos:',$scope.photos);
      });
    };

    $scope.fetchPhotos();
  });
