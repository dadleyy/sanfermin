var grunt = require('grunt'),
    config = require('../Gruntfile.js');

config(grunt);    

grunt.task.run('build');
