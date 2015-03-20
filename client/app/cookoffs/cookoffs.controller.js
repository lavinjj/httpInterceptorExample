'use strict';

angular.module('httpInterceptorExampleApp')
  .controller('CookoffsCtrl', function ($scope, errors, cookOffData) {
    $scope.message = 'Hello';
    $scope.cookOffs = [];
    $scope.errors = [];
    $scope.cookOff = {};
    $scope.view = 'list';

    $scope.formatDate = function (date) {
      return moment(date).format('MM/DD/YYYY');
    };

    $scope.addNewCookOff = function () {
      $scope.cookOff = {};
      $scope.view = 'edit';
    };

    $scope.editCookOff = function (index) {
      $scope.cookOff = $scope.cookOffs[index];
      $scope.view = 'edit';
    };

    $scope.cancelEdit = function () {
      $scope.cookOff = {};
      $scope.view = 'list';
    };

    $scope.update = function () {
      if ($scope.cookOff._id) {
        cookOffData.updateCookOff($scope.cookOff).then(function (response) {

          //var time = response.config.responseTimestamp - response.config.requestTimestamp;
          //console.log('The request updateCookOff took ' + (time / 1000) + ' seconds.');

          cookOffData.getCookOffs().then(function (response) {
            $scope.cookOffs = response.data;

            //var time = response.config.responseTimestamp - response.config.requestTimestamp;
            //console.log('The request getCookOffs took ' + (time / 1000) + ' seconds.');

          }, function () {
            $scope.errors = errors.getErrorMessages();
          });
          $scope.cookOff = {};
          $scope.view = 'list';
        }, function () {
          $scope.errors = errors.getErrorMessages();
        });
      } else {
        cookOffData.addCookOff($scope.cookOff).then(function (response) {

          //var time = response.config.responseTimestamp - response.config.requestTimestamp;
          //console.log('The request addCookOff took ' + (time / 1000) + ' seconds.');

          cookOffData.getCookOffs().then(function (response) {
            $scope.cookOffs = response.data;

            //var time = response.config.responseTimestamp - response.config.requestTimestamp;
            //console.log('The request getCookOffs took ' + (time / 1000) + ' seconds.');

          }, function () {
            $scope.errors = errors.getErrorMessages();
          });
          $scope.cookOff = {};
          $scope.view = 'list';
        }, function () {
          $scope.errors = errors.getErrorMessages();
        });
      }
    };

    $scope.init = function () {
      cookOffData.getCookOffs().then(function (response) {
        $scope.cookOffs = response.data;

        //var time = response.config.responseTimestamp - response.config.requestTimestamp;
        //console.log('The request getCookOffs took ' + (time / 1000) + ' seconds.');

      }, function () {
        $scope.errors = errors.getErrorMessages();
      });
    };

    $scope.init();
  });
