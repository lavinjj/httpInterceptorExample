'use strict';

describe('Service: cookoffData', function () {

  // load the service's module
  beforeEach(module('httpInterceptorExampleApp'));

  // instantiate service
  var cookoffData;
  beforeEach(inject(function (_cookoffData_) {
    cookoffData = _cookoffData_;
  }));

  it('should do something', function () {
    expect(!!cookoffData).toBe(true);
  });

});
