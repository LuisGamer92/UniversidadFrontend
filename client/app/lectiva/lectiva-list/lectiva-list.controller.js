'use strict';
(function(){

class LectivaListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('universidadFrontedApp')
  .component('lectivaList', {
    templateUrl: 'app/lectiva/lectiva-list/lectiva-list.html',
    controller: LectivaListComponent
  });

})();
