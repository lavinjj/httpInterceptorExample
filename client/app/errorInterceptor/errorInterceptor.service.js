'use strict';

angular.module('httpInterceptorExampleApp')
  .factory('errorInterceptor', ['$q', 'errors', function ($q, errors) {
    var errorInterceptor = {
      responseError: function (response) {
        if (response.status === 404) {
          errors.addErrorMessage(response.data);
        }
        return $q.reject(response.data);
      }
    };
    return errorInterceptor;
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
  }]);
