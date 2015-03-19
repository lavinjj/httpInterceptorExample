'use strict';

angular.module('httpInterceptorExampleApp')
  .factory('errors', function () {
    var errors = [];

    function addErrorMessage(msg) {
      errors.push(msg);
    };

    function getErrorMessages() {
      var response = errors;
      errors = [];
      return response;
    }

    return {
      addErrorMessage: addErrorMessage,
      getErrorMessages: getErrorMessages
    };
  });
