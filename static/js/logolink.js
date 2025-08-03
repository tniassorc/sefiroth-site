document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('logolink');
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  var mobileUrl = link.getAttribute('data-mobile-url');
  var desktopUrl = link.getAttribute('data-desktop-url');

  if (isTouchDevice) {
    link.href = mobileUrl;
  } else {
    link.href = desktopUrl;
  }
});
