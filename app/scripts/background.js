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

//
// Disable CSP on GitHub
//

chrome.webRequest.onHeadersReceived.addListener(function(details) {
    for (var i = 0; i < details.responseHeaders.length; i++) {
        if (details.responseHeaders[i].name.toUpperCase() === 'CONTENT-SECURITY-POLICY') {
            var begin = details.responseHeaders[i].value.split('img-src', 2);
            var end = begin[1].split(';', 2);
            details.responseHeaders[i].value = begin[0] + 'img-src \'self\' data: *;' + end[1];
        }
    }
    return {
        responseHeaders: details.responseHeaders
    };
}, {
    urls: [ '*://*.github.com/*' ],
    types: [ 'main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'object', 'xmlhttprequest', 'other' ]
}, [ 'blocking', 'responseHeaders' ]);

console.log('background.js Event Page');
