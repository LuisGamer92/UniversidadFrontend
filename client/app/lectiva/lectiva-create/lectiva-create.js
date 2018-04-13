'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lectiva-create', {
        url: '/lectiva-create',
        template: '<lectiva-create></lectiva-create>'
      });
  });
