
  function handleMouseMove(event) {
      var dot, eventDoc, doc, body, pageX, pageY;

      event = event || window.event; // IE-ism

      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Use event.pageX / event.pageY here
      clearInterval(player.interval);
      if (!player.died) {
        player.interval = setInterval(function(){
          var position = forwardTo(player.top, player.left, event.pageY, event.pageX);
          player.moveTo(position.top, position.left);
        }, player.speed);
      }
  }

  function random(start, end) {
    return Math.floor((Math.random() * end) + start);
  }

  function forwardTo(aTop, aLeft, bTop, bLeft) {
    var top = aTop;
    var left = aLeft;
    var stepSize = 1;

    if (top > bTop)
      top = top - stepSize;
    else
      top = top + stepSize;

    if (left > bLeft)
      left = left - stepSize;
    else
      left = left + stepSize;

    return { top: top, left: left };
  }
