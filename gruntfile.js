'use strict';

const loadGruntTasks = require('load-grunt-tasks');


module.exports = function register(grunt) {
  loadGruntTasks(grunt);

  grunt.initConfig({
    eslint: {
      all: ['lib'],
    },

    clean: {
      all: ['dist'],
    },

    babel: {
      all: {
        files: [{
          expand: true,
          cwd: 'lib/',
          src: '**/*.js',
          dest: 'dist/',
        }],
      },
    },
  });

  grunt.registerTask('prepublish', ['eslint', 'clean', 'babel']);
};
