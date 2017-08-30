(function() {
  'use strict';

  angular.module('app.d3tab', [
    'app.core',
    'app.widgets'
  ]);

  angular.module('d3', []);
  //angular.module('app.d3tab.controllers', []);
  angular.module('app.d3tab', ['d3']);

})();
