'use strict';

angular.module('httpInterceptorExampleApp')
  .factory('apiKeyInjector', function () {
    var apiKeyInjector = {
      request: function (config) {
        if (config.url.indexOf('api/') !== -1) {
          if (!config.params) {
            config.params = {};
          }
          config.params.apiKey = '41d27c46-f837-40bf-8b1b-f7fb37d26c09';
        }
        return config;
      }
    };
    return apiKeyInjector;
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('apiKeyInjector');
  }]);
