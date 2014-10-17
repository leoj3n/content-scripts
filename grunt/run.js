module.exports = {
    github: {
        options: {
            cwd: process.cwd() + '/<%= config.app %>/sites/github/app/GitHub-Dark'
        },
        exec: 'npm install && cp ../build.json . && grunt minify'
    },
    youtube: {
        options: {
            cwd: process.cwd() + '/<%= config.app %>/sites/youtube/app/YouTube-Dark'
        },
        exec: 'npm install && gem install compass && grunt --target=prod'
    }
};


