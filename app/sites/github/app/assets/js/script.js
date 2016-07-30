//
// Send Porter to bottom of page
//

var container = document.getElementById('js-repo-pjax-container');

if (!! container) {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var added = mutation.addedNodes[0];
      if ( !! added.className && added.className === 'porter-plug' ) {
        added.parentNode.appendChild(added);
        observer.disconnect();
      }
    });
  });

  var observerConfig = {
    childList: true,
    subtree: true
  };

  observer.observe(container, observerConfig);
}

