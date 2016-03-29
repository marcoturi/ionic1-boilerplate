/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import path from '../paths';


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
        .pipe(gulp.dest(path.app.styleBasePath));
});
