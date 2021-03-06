/*
 * Grunt Local Dependencies Update
 * https://github.com/virtser/grunt-local-deps-update
 *
 * Copyright (c) 2016 Erwan Jegouzo, David Virtser
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp', '.pkg']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('shelljs');
  grunt.loadTasks('tasks/');

  grunt.registerTask('test', ['clean', 'nodeunit']); //, 'clean'
  grunt.registerTask('autoupdate-test', ['autoupdate', 'jshint']);
  grunt.registerTask('default', ['jshint', 'test', 'clean']);

};
