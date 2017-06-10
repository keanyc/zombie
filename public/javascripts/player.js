
  var player = {
    top: 100,
    left: 500,
    speed: 10,
    died: false,
    init: function () {
      $('.app').html('<div class="player"></div>');
    },
    moveTo: function (top, left) {
      this.top = top;
      this.left = left;
      $('.player').css('top', top + 'px')
                  .css('left', left + 'px');
    },
    shoot: function (e) {
      var z = e.target.className.split(' ')[1];
      $('.' + z).fadeOut();
      setTimeout(function(){$('.' + z).remove()}, 1000);
    },
    killed: function () {
      clearInterval(zombie.interval);
      player.died = true;
      $('.player').fadeOut();
      $('.zombie').fadeOut();
      $('.app').html('GAME OVER<br>Better luck next time!<br><br><a href="javascript:location.reload();">RESTART</a>');
    }
  }
