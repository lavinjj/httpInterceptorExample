'use strict';

angular.module('httpInterceptorExampleApp')
  .factory('timeKeeper', [function () {
    var timeKeeper = {
      request: function (config) {
        config.requestTimestamp = new Date().getTime();
        return config;
      },
      response: function (response) {
        response.config.responseTimestamp = new Date().getTime();
        return response;
      }
    };
    return timeKeeper;
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('timeKeeper');
  }]);
