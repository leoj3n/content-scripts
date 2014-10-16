module.exports = {
    github: {
        options: {
            cwd: process.cwd() + '/<%= config.app %>/sites/github/app/GitHub-Dark'
        },
        exec: 'npm install && cp ../build.json . && grunt minify'
    }
};


