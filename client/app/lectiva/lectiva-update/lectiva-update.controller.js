'use strict';
(function(){

class LectivaUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('universidadFrontedApp')
  .component('lectivaUpdate', {
    templateUrl: 'app/lectiva/lectiva-update/lectiva-update.html',
    controller: LectivaUpdateComponent
  });

})();
