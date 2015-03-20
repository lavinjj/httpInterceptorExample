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

        var time = response.config.responseTimestamp - response.config.requestTimestamp;
        console.log('The request ' + response.config.url + ' took ' + (time / 1000) + ' seconds.');

        return response;
      }
    };
    return timeKeeper;
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('timeKeeper');
  }]);
