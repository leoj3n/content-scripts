//
// Send Porter to bottom
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
};

var targetNode = document.getElementsByClassName('repository-content');
observer.observe(targetNode[0], observerConfig);

