module.exports = {
    github_dark: {
        options: {
            cwd: process.cwd() + '/<%= config.app %>/sites/github/app/GitHub-Dark'
        },
        exec: 'npm install && cp ../build.json . && grunt minify'
    },
    github_timeline: {
        options: {
            cwd: process.cwd() + '/<%= config.app %>/sites/github/app/github-timeline'
        },
        exec: 'cp github-timeline.js ../../dist/github-timeline.js'
    }
};


