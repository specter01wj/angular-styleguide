(function() {
  'use strict';

  angular
    .module('app.d3tab')
    .controller('D3tabController', D3tabController);

  D3tabController.$inject = ['logger'];
  /* @ngInject */
  function D3tabController(logger) {
    var vm = this;
    vm.title = 'James Wang\'s D3 Playground!';
    vm.d3Data = [
      {name: "Greg", score:98, color: '#000'},
      {name: "Ari", score:96, color: '#000'},
      {name: "Loser", score: 48, color: '#000'}
    ];


    vm.d3OnClick = function(item){
      //alert('Bar name: ' + item.name + ', Color: ' + item.color);
      //$(item).attr('color', '#CF174B');
      //$(item).attr('fill', '#CF174B');
      //item.color = '#CF174B';
      /*vm.$apply(function () {
        item.color = '#CF174B';
      });*/
      item.color = '#CF174B';
      /*if( !vm.isWatchAdded ) {
        item.$watch('vm.d3Data', function () {
          item.color = '#CF174B';
        }, true);    
        vm.isWatchAdded = true;
      }*/
      console.log('Bar name: ' + item.name + ', Color: ' + item.color);
    };

    activate();

    function activate() {
      logger.info('Activated D3tab View');
    }


  }
})();
