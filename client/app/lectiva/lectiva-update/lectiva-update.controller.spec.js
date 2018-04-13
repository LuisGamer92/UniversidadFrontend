'use strict';

describe('Component: LectivaUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var LectivaUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LectivaUpdateComponent = $componentController('LectivaUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
