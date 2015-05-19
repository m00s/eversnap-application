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
    'eversnapApp.services'
  ])
  .config(function ($routeProvider, localStorageServiceProvider, FacebookProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/album/:albumId', {
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    localStorageServiceProvider
      .setPrefix('eversnap')
      .setStorageType('localStorage');

    FacebookProvider.init('722565341155662');
  });
