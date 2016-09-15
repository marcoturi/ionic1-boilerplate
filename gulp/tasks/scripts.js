/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import ngAnnotate from 'gulp-ng-annotate';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import rev from 'gulp-rev';
import path from '../paths';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;

let ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';
if (!ENV.match(new RegExp(/prod|dev|test/))) {
    LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(dev|test|prod)`));
    process.exit(1);
}

/**
 * Manage js files. This task is run only on BUILD task (i.e. only once), for watch see the watch task.
 *
 * @return {Stream}
 */
gulp.task('scripts', () => {

    return gulp.src(path.app.scripts)
        .pipe(plumber()) //for prevent error to stop the task
        .pipe(gulpif(ENV !== 'prod', sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(ENV === 'prod', concat(`${path.fileNames.jsBundle}.js`)))
        .pipe(ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(gulpif(ENV === 'prod', uglify()))
        .pipe(gulpif(ENV !== 'prod', sourcemaps.write('.')))
        .pipe(gulpif(ENV === 'prod', rev()))
        .pipe(gulp.dest(path.build.dist.scripts));
});