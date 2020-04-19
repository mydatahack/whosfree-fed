(function (wfNamespace) {
  // on the windows object, the function will be available in wf.global namespace.
  var wfNamespace = wfNamespace.global || (wfNamespace.global = {});

  // Utility function to toggle active/inactive
  wfNamespace.toggleActive = function (element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
  }

})(window.wf || (window.wf = {}));