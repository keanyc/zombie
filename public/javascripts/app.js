var app;

(function(){

  'use strict';

  app = {
    init: function () {
      player.init();
      zombie.init(20);
      this.bindEvents();
    },
    bindEvents: function () {
      document.onmousemove = handleMouseMove;
      $('.zombie').on('click', player.shoot);
    }
  };

  // app.init();
})();
