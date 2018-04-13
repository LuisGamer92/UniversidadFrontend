'use strict';
(function(){

class LectivaCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('universidadFrontedApp')
  .component('lectivaCreate', {
    templateUrl: 'app/lectiva/lectiva-create/lectiva-create.html',
    controller: LectivaCreateComponent
  });

})();
