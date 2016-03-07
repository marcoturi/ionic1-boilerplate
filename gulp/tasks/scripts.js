/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import ngAnnotate from 'gulp-ng-annotate';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import path from '../paths';
const argv = util.env;

// scripts - clean dist dir then annotate, uglify, concat
gulp.task('scripts',  () => {

    return gulp.src(path.app.scripts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat(`${path.fileNames.jsBundle}.js`))
        .pipe(ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(gulpif(argv.prod, uglify()))
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../../js'
        }))
        .pipe(gulp.dest(path.tmp.scripts));
});
