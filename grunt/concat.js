module.exports = {
    github: {
        src: [
            '<%= config.app %>/sites/github/app/GitHub-Dark/github-dark-github-dark-008080.build.min.css',
            '<%= config.app %>/sites/github/dist/style.css',
            '<%= config.app %>/sites/github/app/assets/css/fun.css'
        ],
        dest: '<%= config.app %>/sites/github/dist/style.css'
    },
//    youtube: {
//        src: [
//            '<%= config.app %>/sites/youtube/app/YouTube-Dark/stylesheets/youtube-dark.css',
//            '<%= config.app %>/sites/youtube/dist/style.css'
//        ],
//        dest: '<%= config.app %>/sites/youtube/dist/style.css'
//    },
    stackoverflow: {
        src: [
            '<%= config.app %>/sites/stackoverflow/app/assets/css/structure.css'
        ],
        dest: '<%= config.app %>/sites/stackoverflow/dist/style.css'
    }
};
