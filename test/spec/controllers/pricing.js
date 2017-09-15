'use strict';

describe('Controller: PricingCtrl', function () {

  // load the controller's module
  beforeEach(module('babyBelugaApp'));

  var PricingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PricingCtrl = $controller('PricingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PricingCtrl.awesomeThings.length).toBe(3);
  });
});
