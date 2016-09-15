// Karma configuration
module.exports = function (config) {
    config.set({

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/jasmine-async-sugar/jasmine-async-sugar.js',
            'www/vendors/vendor.bundle.js',
            'src/lib/angular-mocks/angular-mocks.js',
            'src/lib/karma-read-json/karma-read-json.js',
            {pattern: 'src/js/**/*.json', included: false},
            'www/templates/tpl.bundle.js',
            'src/js/**/*module*.js',
            'src/js/**/*.js'
        ],
        preprocessors: {
            'src/js/**/*.js': ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            //filename: function (file) {
            //    return file.originalPath.replace(/\.js$/, '.es5.js');
            //},
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: [/*'progress', */'story'],   // comment out 'story' and uncomment 'progress' for concise output
        reporters: 'dots',
        //reporters: 'teamcity',

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });

};
