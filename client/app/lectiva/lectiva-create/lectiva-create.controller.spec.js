'use strict';

describe('Component: LectivaCreateComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var LectivaCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LectivaCreateComponent = $componentController('LectivaCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
