'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
  chrome.browserAction.onClicked.addListener(startReload);
  startReload();
});

var connection;
var LIVERELOAD_PORT = 35729;
var LIVERELOAD_HOST = 'localhost:';
function startReload (tab) {
  if (typeof connection !== 'undefined' && connection.readyState === 1) {
    connection.close();
  } else {
    try {
      connection = new WebSocket(
          'ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload'
        );

      connection.onopen = function (error) {
        chrome.browserAction.setIcon({
          path : {
            "19": "images/reload-green-19.png",
            "38": "images/reload-green-38.png"
          }
        });
      }

      connection.onclose = function (error) {
        chrome.browserAction.setIcon({
          path : {
            "19": "images/reload-gray-19.png",
            "38": "images/reload-gray-38.png"
          }
        });
      };

      connection.onerror = function (error) {
        console.log('reload connection got error' + JSON.stringify(error));
      };

      connection.onmessage = function (e) {
        if (e.data) {
          var data = JSON.parse(e.data);
          console.log(data);
          if (data && data.command === 'reload') {
            chrome.runtime.reload();
          }
        }
      };
    } catch (error) {
      console.log('No livereload server available for content-scripts extension!' +
                  ' Start one with `grunt debug` in project directory then try again' +
                  ' from tab with URL ' + tab.url);
    }
  }
}

//
// Reload current tab on extension (re)load
//

chrome.tabs.getSelected( null, function( tab ) {
  if (!tab.url.includes('chrome://') && !tab.url.includes('chrome-devtools://')) {
    chrome.tabs.reload(tab.id);
  }
});

//
// Disable CSP on GitHub
//

/* jk: causing problems in 2016
chrome.webRequest.onHeadersReceived.addListener(function(details) {
  for (var i = 0; i < details.responseHeaders.length; i++) {
    if (details.responseHeaders[i].name.toUpperCase() === 'CONTENT-SECURITY-POLICY') {
      var begin = details.responseHeaders[i].value.split('img-src', 2);
      if (typeof begin[1] !== 'undefined') {
        var end = begin[1].split(';', 2);
        details.responseHeaders[i].value = begin[0] + 'img-src \'self\' data: *;' + end[1];
      }
    }
  }
  return {
    responseHeaders: details.responseHeaders
  };
}, {
  urls: [ '*://*.github.com/*' ],
  types: [ 'main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'object', 'xmlhttprequest', 'other' ]
}, [ 'blocking', 'responseHeaders' ]);
*/

