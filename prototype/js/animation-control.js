(function(wfNamespace) {
  
  // on the windows object, the function will be available in wf.public namespace.
  var wfNamespace = wfNamespace.public || (wfNamespace.public = {});
  var navBurgerContainer = document.body.querySelector('.nav-burger-container');
  var bgDark = document.body.querySelector('.bg-dark');

  wfNamespace.initNavBurgerClickEvent = function () {
    navBurgerContainer.addEventListener('click', navBurgerClickEvent);
    bgDark.addEventListener('click', navBurgerClickEvent);
  }

  function navBurgerClickEvent() {
    triggerNavBurgerAnimation();
    toggleFlyoutAnimation();
    toggleBgDark();
  }

  function triggerNavBurgerAnimation() {
    // console.log('.nav-burger-container clicked')
    // Get the actual nav burger element
    var navBurger = navBurgerContainer.querySelector('.nav-burger');
    // Check if it contains animate class
    var containAnimate = navBurger.classList.contains('animate');
    var containAnimateReverse = navBurger.classList.contains('animate-reverse');
    if (!containAnimate && !containAnimateReverse) {
      console.log('no animate or animate-reverse classes');
      navBurger.classList.add('animate');
      navBurger.classList.add('rotate');
    } 
    
    if (!containAnimate && containAnimateReverse) {
      console.log('animate-reverse, but no animate class')
      navBurger.classList.remove('animate-reverse');
      navBurger.classList.remove('rotate-reverse');
      navBurger.classList.add('animate');
      navBurger.classList.add('rotate');
    }
    if ((containAnimate && !containAnimateReverse)) {
      console.log('animate, but no animate reverse')
      navBurger.classList.remove('animate');
      navBurger.classList.remove('rotate');
      navBurger.classList.add('animate-reverse');
      navBurger.classList.add('rotate-reverse');
    }
  }

  function toggleFlyoutAnimation() {
    var flyout = document.body.querySelector('.nav-flyout');
    if (flyout) {
      wf.global.toggleActive(flyout);
    };
  }

  function toggleBgDark() {
    var bgDark = document.body.querySelector('.bg-dark')
    if (bgDark) {
      wf.global.toggleActive(bgDark);
    }
  }

})(window.wf || (window.wf = {}));