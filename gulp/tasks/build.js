'use strict';

import del from 'del';
import rev from 'gulp-rev';
import gulp from 'gulp';
import util from 'gulp-util';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import usemin from 'gulp-usemin';
import inject from 'gulp-inject';
import bytediff from 'gulp-bytediff';
import minifyCss from 'gulp-minify-css';
import runSequence from 'run-sequence';
import path from '../paths';
//import {BANNER, CDN_URL, GH_PAGES_BASE_URL} from '../const';

//=============================================
//            UTILS FUNCTIONS
//=============================================
const LOG = util.log;
const COLORS = util.colors;
const argv = util.env;

//=============================================
//                  TASKS
//=============================================
/**
 * The 'clean' task delete 'build' and '.tmp' directories.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('clean', (cb) => {
    const files = [].concat(path.build.basePath, path.tmp.basePath);
    LOG('Cleaning: ' + COLORS.blue(files));

    return del(files, cb);
});

/**
 * The 'copy' task for images
 *
 * @return {Stream}
 */
gulp.task('images', () => {
    return gulp.src(path.app.images)
        .pipe(gulp.dest(path.build.dist.images));
});

/**
 * The 'copy' task for fonts
 *
 * @return {Stream}
 */
gulp.task('fonts', () => {
    return gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.build.dist.fonts));
});


/**
 * The 'compile' task compile all js, css and html files.
 *
 * 1. it inject bundle into `index.html`
 * 2. css      - replace local path with CDN url, minify, add revision number, add banner header
 *    js       - annotates the sources before minifying, minify, add revision number, add banner header
 *    html     - replace local path with CDN url, minify
 *
 * @return {Stream}
 */
gulp.task('compile', ['sass', 'scripts'], () => {
    return gulp.src(path.app.html)
        .pipe(inject(gulp.src(`${path.tmp.scripts}${path.fileNames.jsBundle}.js`, {read: false}), {
            starttag: '<!-- inject:build:js -->',
            ignorePath: [path.app.basePath]
        }))
        .pipe(usemin({
            css: [
                gulpif(argv.prod, minifyCss({keepSpecialComments: 0})),
                gulpif(argv.prod, rev())
            ],
            js: [
                gulpif(argv.prod, rev())
            ],
            html: []
        }))
        .pipe(gulp.dest(path.build.dist.basePath))
        .pipe(size({title: 'compile', showFiles: true}));
});

/**
 * The 'build' task gets app ready for deployment by processing files
 * and put them into directory ready for production.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('build', (cb) => {
    runSequence(
        ['clean'],
        ['compile', 'images', 'fonts'],
        cb
    );
});