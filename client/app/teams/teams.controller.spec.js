'use strict';

describe('Controller: TeamsCtrl', function () {

  // load the controller's module
  beforeEach(module('httpInterceptorExampleApp'));

  var TeamsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamsCtrl = $controller('TeamsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
