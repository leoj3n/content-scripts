module.exports = {
    all: {
        files: [{
            dot: true,
            src: [
                '<%= config.app %>/sites/github/dist/style.css',
                '<%= config.app %>/sites/stackoverflow/dist/style.css',
                '<%= config.app %>/sites/youtube/dist/style.css'
            ]
        }]
    }
};
