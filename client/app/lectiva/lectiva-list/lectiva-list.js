'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lectiva-list', {
        url: '/lectiva-list',
        template: '<lectiva-list></lectiva-list>'
      });
  });
