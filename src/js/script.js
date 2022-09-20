if ($(window).width() > 992) {
  $('.hero').mousemove(function (e) {
    var amountMovedX = (e.pageX * 1) / 40;
    var amountMovedY = (e.pageY * -1) / 1110;
    var startBgcenterX = 0 + amountMovedX;
    var startBgcenterY = 0 + amountMovedY;
    $('.hero__foto--ice').css(
      'transform',
      'translate' +
        '(' +
        -startBgcenterX +
        'px, ' +
        -startBgcenterY +
        'px' +
        ')'
    );
  });
}
