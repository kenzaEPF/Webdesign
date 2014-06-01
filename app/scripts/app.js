'use strict';

angular
  .module('webdesignApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/english',{
        templateUrl: 'views/english.html',
        controller: 'EnglishCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
