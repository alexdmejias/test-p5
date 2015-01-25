'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      options: {
        livereload: true,
        port: 35729
      },
      js: {
        files: ['script.js'],
        tasks: [],
      },

    },
  });


  grunt.registerTask('default', ['watch']);
};
