module.exports = {
  github: {
    src: [
        '<%= config.app %>/sites/github/app/assets/css/dark.css',
        '<%= config.app %>/sites/github/dist/style.css',
        '<%= config.app %>/sites/github/app/assets/css/fun.css'
    ],
    dest: '<%= config.app %>/sites/github/dist/style.css'
  }
};
