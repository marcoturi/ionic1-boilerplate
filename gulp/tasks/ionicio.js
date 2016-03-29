/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import shell from 'gulp-shell';
import del from 'del';
import path from '../paths';

/**
 * The 'ionic config build' task  needed if you use the ionic.io libraries
 */
gulp.task('ionicConfigBuild', shell.task([
    `ionic config build`
]));

/**
 * The 'copy' task for the ionic.io config from src to dist
 *
 * @return {Stream}
 */
gulp.task('cpConfigToDist', () => {
    return gulp.src(path.app.ionicIo + '**')
        .pipe(gulp.dest(path.build.dist.ionicIo));
});

/**
 * The 'copy' task for the ionic.io config from dist to src
 *
 * @return {Stream}
 */
gulp.task('cpDistToConfig', () => {
    return gulp.src(path.build.dist.ionicIo + '**')
        .pipe(gulp.dest(path.app.ionicIo));
});

/**
 * The 'clean' task delete dist ionic lib directory.
 *
 * @param {Function} cb - callback when complete
 */
gulp.task('cleanIonicLib', (cb) => {
    const files = [].concat(path.app.ionicIo);

    return del(files, cb);
});

/**
 * The 'copy' task for the ionic.io config
 *
 * @return {Stream}
 */
gulp.task('doIonicConfigBuild', (cb) => {
    runSequence(['cpConfigToDist'], ['ionicConfigBuild', 'cleanIonicLib'], ['cpDistToConfig'], ['clean'], cb);
});

