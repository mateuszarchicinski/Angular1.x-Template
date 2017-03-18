// Karma configuration
// Generated on Sun Jan 15 2017


// PROJECT CONFIG
var PROJECT_CONFIG = require('../project.config');


module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

            // bower components
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/jquery/dist/jquery.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular/angular.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-ui-router/release/angular-ui-router.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-animate/angular-animate.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-aria/angular-aria.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-messages/angular-messages.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-material/angular-material.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/bower_components/angular-mocks/angular-mocks.js',

            // application initialize / configuration
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/app.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/app.config.js',

            // application controllers
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/controllers/readmeController.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/controllers/notfoundController.js',
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/controllers/translateController.js',

            // application directives


            // application services
            PROJECT_CONFIG.DIRECTORY.WORK_DIR + '/js/services/urlParamsProvider.js',

            // application tests
            PROJECT_CONFIG.DIRECTORY.TEST_DIR + '/spec/**/*.js'

        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        specReporter: {
            maxLogLines: 10,
            suppressErrorSummary: false,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: false,
            showSpecTiming: false
        },
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}