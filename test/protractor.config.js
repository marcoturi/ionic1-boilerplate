require('babel-core/register')({presets: ['es2015']});
const path = require('path');
const SSReporter = require('protractor-jasmine2-screenshot-reporter');

const root = path.dirname(__dirname);
const screenshotReporter = new SSReporter ({
    dest: `${root}/test/screenshots/`,
    pathBuilder: function(currentSpec, suites) {
        var name = currentSpec.fullName;
        return name.replace(/\s+/g, '-').toLowerCase();
    },
    filename: 'index.html',
    reportTitle: 'e2e tests'
});

exports.config = {
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-web-security', '--window-size=1024,768', 'no-sandbox']
        }
    },
    framework: 'jasmine',
    specs: [
        'e2e//*.spec.js'
    ],
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true, // If true, print colors to the terminal.
        defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
        isVerbose: true,
        showTiming: true
    },
    baseUrl: 'http://localhost:8090',
    allScriptsTimeout: 30000,
    // hook into screenshotReporter's beforeLaunch
    beforeLaunch: function() {
        return new Promise(function(resolve){
            screenshotReporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        // Add screenshot reporter
        jasmine.getEnv().addReporter(screenshotReporter);
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(414, 736);
    },
    // hook into screenshotReporter's afterLaunch
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};