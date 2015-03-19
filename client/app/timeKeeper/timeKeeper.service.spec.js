'use strict';

describe('Service: timeKeeper', function () {

  // load the service's module
  beforeEach(module('httpInterceptorExampleApp'));

  // instantiate service
  var timeKeeper;
  beforeEach(inject(function (_timeKeeper_) {
    timeKeeper = _timeKeeper_;
  }));

  it('should do something', function () {
    expect(!!timeKeeper).toBe(true);
  });

});
