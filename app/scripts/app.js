'use strict';

/**
 * @ngdoc overview
 * @name eversnapApp
 * @description
 * # eversnapApp
 *
 * Main module of the application.
 */
angular
  .module('eversnapApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularSpinner',
    'eversnapApp.controllers',
    'eversnapApp.services',
    'eversnapApp.directives'
  ])
  .constant('templates', {
    'main': 'views/main.html',
    'album': 'views/album.html',
    'albumThumbnail': 'views/albumThumbnail.html',
    'photoModal': 'views/photoModal.html',
    'photoComments': 'views/photoComments.html',
    'photoThumbnail': 'views/photoThumbnail.html'
  })
  .config(function (templates, $routeProvider, localStorageServiceProvider, FacebookProvider, usSpinnerConfigProvider) {
    $routeProvider
      .when('/', {
        templateUrl: templates.main,
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/album/:albumId', {
        templateUrl: templates.album,
        controller: 'AlbumCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/#/'
      });

    localStorageServiceProvider
      .setPrefix('eversnap')
      .setStorageType('localStorage');

    usSpinnerConfigProvider.setDefaults({color: 'blue', radius:8, length:0, lines: 20, width: 2, corners: 1, rotate: 0, trail:83, speed:2});

    FacebookProvider.init('722565341155662');
  })
  .run(function (Session, $rootScope) {
    Session.start().then(function() {
      $rootScope.$broadcast('SESSION_STARTED');
    });
  });
