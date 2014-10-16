module.exports = {
    js: {
        files: [
            '<%= config.app %>/scripts/{,*/}*.js'
        ],
        tasks: ['jshint'],
        options: {
            livereload: true
        }
    },
    gruntfile: {
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ],
        tasks: ['default'],
        options: {
            livereload: true
        }
    },
    styles: {
        files: [
            '<%= config.app %>/sites/**/assets/**/*.css'
        ],
        tasks: ['concat'],
        options: {
            livereload: true
        }
    },
    less: {
        files: ['<%= config.app %>/sites/**/*.less'],
        tasks: [
            'newer:less',
            'concat'
        ],
        options: {
            livereload: true
        }
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.app %>/manifest.json'
        ]
    }
};
