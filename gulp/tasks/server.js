'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import inject from 'gulp-inject';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import path from '../paths';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;

//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

let ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';
let OPEN_BROWSER = !!argv.open ? argv.open.toLowerCase() : 'true';

if(!OPEN_BROWSER.match(new RegExp(/true|false/))) {
    LOG(COLORS.red(`Error: The argument 'open' has incorrect value ${OPEN_BROWSER}! Usage: --open=(true|false)`));
    process.exit(1);
} else {
    OPEN_BROWSER = OPEN_BROWSER === 'true';
}

if(!ENV.match(new RegExp(/prod|dev|test/))) {
    LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(dev|test|prod)`));
    process.exit(1);
}


function startBrowserSync(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;
    files = files === undefined ? 'default' : files;

    browserSync({
        files: files,
        open: OPEN_BROWSER,
        port: 8000,
        notify: false,
        server: {
            baseDir: baseDir
        },
        browser: browser
    });
}


//=============================================
//                 TASKS
//=============================================

/**
 * The 'config' task is to configure environment by injecting
 * global env variable into the `index.html`.
 *
 * @return {Stream}
 */
//gulp.task('config', () => {
//    const mock = !!argv.mock ? argv.mock === 'true' : ENV === 'test' || OPTIMIZE === 'true';
//    const env = ENV === TEST_OPTIMIZE ? 'test' : ENV;
//    return gulp.src(path.app.config.conditions)
//        .pipe(inject(gulp.src('.'), {
//            starttag: '/* inject:env */',
//            endtag: '/* endinject */',
//            transform: () => `export var mock = ${mock};\nexport var optimize = ${OPTIMIZE === 'true' || ENV=== 'prod'};\nexport var environment = '${env}';`
//        }))
//        .pipe(gulp.dest(path.app.config.basePath));
//});

/**
 * The 'startBrowserSync' task start BrowserSync and open the browser.
 */
gulp.task('startBrowserSync', () => {
    return startBrowserSync([path.build.dist.basePath]);
});

/**
 * The 'serve' task serve the dev, test and prod environment.
 */
gulp.task('serve', () => {
    let serveTasks;

    switch(ENV) {
        case 'dev':
        case 'test':
            serveTasks = ['build', 'watch'];
            break;
        case 'prod':
            serveTasks = [ 'build'];
            break;
    }

    // this will first run all serveTasks and then startBrowserSync task
    runSequence(
        ['build'],
        ['watch'],
        ['startBrowserSync']
    );
});


