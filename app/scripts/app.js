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
    'facebook',
    'eversnapApp.controllers',
    'eversnapApp.services',
    'eversnapApp.directives'
  ])
  .constant('templates', {
    'navbar': 'views/esNavbar.html',
    'main': 'views/main.html',
    'album': 'views/album.html',
    'albumThumbnail': 'views/albumThumbnail.html',
    'photoModal': 'views/photoModal.html',
    'photoComments': 'views/photoComments.html',
    'photoThumbnail': 'views/photoThumbnail.html'
  })
  .config(function (templates, $routeProvider, localStorageServiceProvider, FacebookProvider) {
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

    FacebookProvider.init('722565341155662');
  })
  .run(function (Session, $rootScope) {
    Session.start().then(function () {
      $rootScope.$broadcast('SESSION_STARTED')
    });
  });
