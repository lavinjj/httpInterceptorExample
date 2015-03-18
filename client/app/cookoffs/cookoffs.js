'use strict';

angular.module('httpInterceptorExampleApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cookoffs', {
        templateUrl: 'app/cookoffs/cookoffs.html',
        controller: 'CookoffsCtrl'
      });
  });
