/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import path from '../paths';

const isWin = /^win/.test(process.platform);

/**
 * Compile SASS files into the main.css.
 *
 * @return {Stream}
 */

gulp.task('sass', () => {
    return gulp.src(path.app.ionicStyle)
        .pipe(changed(path.app.styles, {extension: '.scss'}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest(path.app.styleBasePath))
        .pipe(gulpif(!isWin,browserSync.reload({stream:true})));
});