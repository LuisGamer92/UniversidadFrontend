'use strict';

describe('Component: LectivaListComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var LectivaListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LectivaListComponent = $componentController('LectivaListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
