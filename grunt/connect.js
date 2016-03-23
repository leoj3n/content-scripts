module.exports = {
    options: {
        port: 49260,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
    },
    chrome: {
        options: {
            open: false,
            base: [
                '<%= config.app %>'
            ]
        }
    }
};
