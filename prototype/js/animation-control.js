(function(wfNamespace) {
  
  // on the windows object, the function will be available in wf.public namespace.
  var wfNamespace = wfNamespace.public || (wfNamespace.public = {});
  var navBurgerContainer = document.querySelector('.nav-burger-container');

  wfNamespace.initNavBurgerClickEvent = function () {
    navBurgerContainer.addEventListener('click', navBurgerClickEvent);
  }

  function navBurgerClickEvent() {
    console.log('.nav-burger-container clicked')
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

})(window.wf || (window.wf = {}));