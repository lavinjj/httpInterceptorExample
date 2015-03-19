'use strict';

describe('Service: cryptoInterceptor', function () {

  // load the service's module
  beforeEach(module('httpInterceptorExampleApp'));

  // instantiate service
  var cryptoInterceptor;
  beforeEach(inject(function (_cryptoInterceptor_) {
    cryptoInterceptor = _cryptoInterceptor_;
  }));

  it('should do something', function () {
    expect(!!cryptoInterceptor).toBe(true);
  });

});
