'use strict';

describe('Controller: CookoffsCtrl', function () {

  // load the controller's module
  beforeEach(module('httpInterceptorExampleApp'));

  var CookoffsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookoffsCtrl = $controller('CookoffsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
