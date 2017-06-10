
  var zombie = {
    speed: 50,
    init: function (zombies) {
      this.amount = zombies;
      this.spawn(zombies);
      this.interval = setInterval(function(){
        for (var i = 0; i < zombie.amount; i++) {
          var top = parseInt($('.zombie' + i).css('top'));
          var left = parseInt($('.zombie' + i).css('left'));
          var position = forwardTo(top, left, player.top, player.left);
          zombie.moveTo(i, position.top, position.left);
        }

      }, this.speed);
    },
    spawn: function (zombies) {
      for (var i = 0; i < zombies; i++) {
        var top = random(500, 1000);
        var left = random(0, 3000);
        $('body').append('<div class="zombie zombie'+i+'" style="top:'+top+'px;left:'+left+'px;"></div>');
      }
    },
    moveTo: function (i, top, left) {
      $('.zombie' + i).css('top', top + 'px')
                      .css('left', left + 'px');
      var topDistance = player.top - top;
      var leftDistance = player.left - left;
      if (topDistance < 0)
        topDistance = topDistance * -1;
      if (leftDistance < 0)
        leftDistance = leftDistance * -1;
      var distance = topDistance + leftDistance;
      if (distance < killDistance) {
        player.killed();
      }
    }
  }
