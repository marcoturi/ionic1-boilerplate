'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import sass from 'gulp-sass';
//import concat from 'gulp-concat';
//import minifyCss from 'gulp-minify-css';
//import rename from 'gulp-rename';
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import path from '../paths';

//const argv = util.env;
//const ENV = !!argv.env ? argv.env.toLowerCase() : 'DEV';

/**
 * Compile SASS files into the main.css.
 *
 * @return {Stream}
 */

gulp.task('sass', () => {
    return gulp.src(path.app.ionicStyle)
        .pipe(changed(path.tmp.styles, {extension: '.scss'}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('../styles'))
        .pipe(gulp.dest(path.tmp.styles))
        //todo:
        //.pipe(minifyCss({
        //    keepSpecialComments: 0
        //}))
        //.pipe(rename({ extname: '.min.css' }))
        //.pipe(gulp.dest(path.tmp.styles))
        .pipe(browserSync.reload({stream:true}));
});
