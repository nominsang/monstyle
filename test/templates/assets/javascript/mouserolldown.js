window.onload = function() {
  var mousewheelevt = (/Firefox/i.test(navigator.userAgent))
    ?"DOMMouseScroll" : "mousewheel";
  if(document.attachEvent) {/* IE 方法*/
    document.attachEvent("on" + mousewheelevt, function(e){
      mousewheel_event(e.wheelDelta);
    });
  }else if(document.addEventListener) {/*非 IE 方法*/
    document.addEventListener(mousewheelevt, function(e){
      mousewheel_event(e.detail);
    }, false);
  }

  var scroll_width = 100;
  function mousewheel_event(delta) {

    if(delta > 0) {
      document.getElementsByTagName("html")[0].scrollLeft
        += scroll_width;
    }

    else {
      document.getElementsByTagName("html")[0].scrollLeft
        -= scroll_width;
    }
  }
};
