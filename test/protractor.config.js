exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security']
        }
    },
    specs: [
        'e2e//*.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    baseUrl: 'http://localhost:8100/',
    allScriptsTimeout: 20000,
    onPrepare: function () {
        require('babel-core/register')({presets: ['es2015']});
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }
};
