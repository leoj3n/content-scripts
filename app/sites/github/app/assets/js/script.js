//
// Send Porter to bottom of page
//

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
    var added = mutation.addedNodes[0];
    if ( added.className === 'porter-plug' ) {
      added.parentNode.appendChild(added);
      observer.disconnect();
    }
	});
});

var observerConfig = {
	childList: true,
  subtree: true
};

observer.observe(document.getElementById('js-repo-pjax-container'), observerConfig);

