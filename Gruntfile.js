'use strict';

module.exports = function( grunt ) {

  //
  // Time how long tasks take
  //

  require('time-grunt')(grunt);

  //
  // Configurable paths
  //

  var config = {
    app: 'app',
    manifest: grunt.file.readJSON('app/manifest.json')
  };

  //
  // Load grunt tasks automatically
  //

  require('load-grunt-config')( grunt, {
    data: {
      config: config
    }
  });

};
