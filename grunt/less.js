module.exports = {
    github: {
      files: {
        '<%= config.app %>/sites/github/dist/style.css': [
          '<%= config.app %>/sites/github/app/assets/less/structure.less',
          '<%= config.app %>/sites/github/app/assets/less/color-fixes.less'
        ]
      }
    },
    youtube: {
      files: {
        '<%= config.app %>/sites/youtube/dist/style.css': [
          '<%= config.app %>/sites/youtube/app/assets/less/responsive.less'
        ]
      }
    }
};
