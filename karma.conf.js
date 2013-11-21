module.exports = function(config) {
  
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'bower_components/**/*.js',
      'src/**/*.js',
      'spec/**/*_spec.js'  
    ],

    exclude: [
      
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: true 
  });

};
