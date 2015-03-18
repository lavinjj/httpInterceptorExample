'use strict';

angular.module('httpInterceptorExampleApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teams', {
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
      });
  });
