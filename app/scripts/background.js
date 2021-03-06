'use strict';

var connection;
var LIVERELOAD_PORT = 35729;
var LIVERELOAD_HOST = 'localhost';
function startReload (tab) {
  if (typeof connection !== 'undefined' && connection.readyState === 1) {
    connection.close();
  } else {
    try {
      connection = new WebSocket(
          'ws://' + LIVERELOAD_HOST + ':' + LIVERELOAD_PORT + '/livereload'
        );

      connection.onopen = function() {
        chrome.browserAction.setIcon({
          path : {
            '19': 'images/reload-green-19.png',
            '38': 'images/reload-green-38.png'
          }
        });
      };

      connection.onclose = function() {
        chrome.browserAction.setIcon({
          path : {
            '19': 'images/reload-gray-19.png',
            '38': 'images/reload-gray-38.png'
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
// Reload most current normal tab on extension (re)load
//

chrome.tabs.getSelected( null, function ( tab ) {
  if (!tab.url.includes('chrome://') && !tab.url.includes('chrome-devtools://')) {
    chrome.tabs.reload(tab.id);
  }
});

//
// Bootstrap reload functions
//

chrome.runtime.onInstalled.addListener(function() {
  //
  // Listen for button click
  //

  chrome.browserAction.onClicked.addListener(startReload);

  //
  // Try connecting to livereload on startup
  //

  startReload({ url: 'initial' });
});

