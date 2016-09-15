/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import runSequence from 'run-sequence';
import shell from 'gulp-shell';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;

//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

let ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';
let PLATFORM = !!argv.platform ? argv.platform.toLowerCase() : 'web';

if (!ENV.match(new RegExp(/prod|dev|test/))) {
    LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(dev|test|prod)`));
    process.exit(1);
}

if (!PLATFORM.match(new RegExp(/android|ios|web/))) {
    LOG(COLORS.red(`Error: The argument 'platform' has incorrect value ${PLATFORM}! Usage: --platform=(android|ios|web)`));
    process.exit(1);
}

//=============================================
//                 TASKS
//=============================================

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
 * The 'serve' task serve the dev and prod environment.
 */
gulp.task('serve', () => {
    let shouldRun = [];

    if (PLATFORM === 'web') {
        shouldRun.push('ionicserve');
    } else {
        shouldRun.push('ionicrun');
    }

    runSequence(
        ['build'],
        ['watch'],
        shouldRun
    );
});
