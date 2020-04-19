(function(wfNamespace) {
  // assigning public namespace
  var wfNamespace = wfNamespace.public || (wfNamespace.public={});
  var navBar = document.body.querySelector('.nav-container');
  wfNamespace.initNavbarScrollEvent = function () {
    window.addEventListener('scroll', function() {
      triggerNavbarAnimation(navBar);
    })
  }

  function triggerNavbarAnimation(targetElem) {
    // console.log('scrolled')
    if (window.scrollY > 0 && targetElem.classList.contains('active')) {
      // console.log('not triggering toggle Active');
      
    } else if (window.scrollY > 0 && !targetElem.classList.contains('active')) {
      wf.global.toggleActive(targetElem);
    } else if (window.scrollY === 0 && targetElem.classList.contains('active')) {
      wf.global.toggleActive(targetElem);
    }
  }


})(window.wf || (window.wh = {}))