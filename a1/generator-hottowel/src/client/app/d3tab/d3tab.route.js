(function() {
  'use strict';

  angular
    .module('app.d3tab')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'd3tab',
        config: {
          url: '/d3tab',
          templateUrl: 'app/d3tab/d3tab.html',
          controller: 'D3tabController',
          controllerAs: 'vm',
          title: 'D3tab',
          settings: {
            nav: 3,
            content: '<i class="fa fa-credit-card"></i> D3tab'
          }
        }
      }
    ];
  }
})();
