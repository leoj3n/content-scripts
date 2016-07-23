module.exports = {
    github: {
        src: [
            '<%= config.app %>/sites/github/app/GitHub-Dark/github-dark-tomorrow-night-bright-FF8C00.build.min.css',
            '<%= config.app %>/sites/github/dist/style.css'
        ],
        dest: '<%= config.app %>/sites/github/dist/style.css'
    },
    stackoverflow: {
        src: [
            '<%= config.app %>/sites/stackoverflow/app/assets/css/structure.css'
        ],
        dest: '<%= config.app %>/sites/stackoverflow/dist/style.css'
    },
    youtube: {
        src: [
            '<%= config.app %>/sites/youtube/app/Dark-youtube-plugin-chrome/dark.css',
            '<%= config.app %>/sites/youtube/dist/style.css'
        ],
        dest: '<%= config.app %>/sites/youtube/dist/style.css'
    }
};
