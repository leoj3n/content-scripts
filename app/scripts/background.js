'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

//
// Reload current tab on extension (re)load
//

chrome.tabs.getSelected( null, function( tab ) {
    chrome.tabs.reload(tab.id);
});

console.log('\'Allo \'Allo! Event Page');
