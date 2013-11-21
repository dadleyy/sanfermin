module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-smash');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['build']
    },

    smash: { 
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });

  grunt.registerTask('build', ['clean', 'smash']);
  grunt.registerTask('default', ['build']);

};
