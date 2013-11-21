module.exports = function(config) {
  
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
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
