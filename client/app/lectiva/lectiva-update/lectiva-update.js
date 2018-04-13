'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lectiva-update', {
        url: '/lectiva-update',
        template: '<lectiva-update></lectiva-update>'
      });
  });
