grunt.loadNpmTasks('grunt-gh-pages');

grunt.initConfig({
  'gh-pages': {
    options: {
      base: 'app'
    },
    src: [
      '**/*'
    ]
  }
});

grunt.registerTask('deploy', ['gh-pages']);