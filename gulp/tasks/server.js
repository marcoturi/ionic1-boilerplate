'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import inject from 'gulp-inject';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import shell from 'gulp-shell';
import gulpif from 'gulp-if';
import path from '../paths';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;
const isWin = /^win/.test(process.platform);


//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

let ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';
let PLATFORM = !!argv.platform ? argv.platform.toLowerCase() : 'web';
let OPEN_BROWSER = !!argv.open ? argv.open.toLowerCase() : 'true';
if (PLATFORM !== 'web') {
    OPEN_BROWSER = 'false';
}

if (!OPEN_BROWSER.match(new RegExp(/true|false/))) {
    LOG(COLORS.red(`Error: The argument 'open' has incorrect value ${OPEN_BROWSER}! Usage: --open=(true|false)`));
    process.exit(1);
} else {
    OPEN_BROWSER = OPEN_BROWSER === 'true';
}

if (!ENV.match(new RegExp(/prod|dev|test/))) {
    LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(dev|test|prod)`));
    process.exit(1);
}

if (!PLATFORM.match(new RegExp(/android|ios|web/))) {
    LOG(COLORS.red(`Error: The argument 'platform' has incorrect value ${PLATFORM}! Usage: --env=(android|ios|web)`));
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
    if (isWin) {
        return startBrowserSync([path.build.dist.basePath]);
    } else {}
});


/**
 * The 'ionic run {platform}' task
 */
gulp.task('ionicrun', shell.task([
    `ionic run ${PLATFORM} -l`
]));

/**
 * The 'ionic serve' task
 */
gulp.task('ionicserve', shell.task([
    `ionic serve`
]));


/**
 * The 'serve' task serve the dev, test and prod environment.
 */
gulp.task('serve', () => {
    let serveTasks;

    switch (ENV) {
        case 'dev':
        case 'test':
            serveTasks = ['build', 'watch'];
            break;
        case 'prod':
            serveTasks = ['build'];
            break;
    }



    let shouldRun = [];
    if(isWin) {
        LOG(COLORS.green(`PLATFORM WINDOWS: RUNNING LIVERELOAD INSTEAD OF BROWSERSYNC`));
        if(PLATFORM === 'web') {
            shouldRun.push('ionicserve');
        } else {
            shouldRun.push('ionicrun');
        }

    } else {
        LOG(COLORS.green(`PLATFORM UNIX: RUNNING BROWSERSYNC`));
        shouldRun.push('startBrowserSync');
        if(PLATFORM !== 'web') {
            shouldRun.push('ionicrun');
        }
    }


    // this will first run all serveTasks and then startBrowserSync task
    runSequence(
        ['build'],
        ['watch'],
        shouldRun
    );
});


