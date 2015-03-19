'use strict';

angular.module('httpInterceptorExampleApp')
  .factory('cookOffData', ['$http', function ($http) {
    return {
      getCookOffs: function () {
        return $http.get('api/cookoffs');
      },

      addCookOff: function (cookOff) {
        return $http.post('api/cookoffs', cookOff);
      },

      updateCookOff: function (cookOff) {
        return $http.put('api/cookoffs/' + cookOff._id, cookOff);
      },

      deleteCookOff: function (cookOff) {
        return $http.delete('api/cookoffs/' + cookOff._id);
      }
    };
  }]);
