'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import ngAnnotate from 'gulp-ng-annotate';
import plumber from 'gulp-plumber';
import path from '../paths';
const isWin = /^win/.test(process.platform);

/**
 * The 'watch' task set up the checks to see if any of the files listed below
 * change, and then to execute the listed tasks when they do.
 */
gulp.task('watch', () => {
    // Watch images and fonts files
    gulp.watch([path.app.images, path.app.fonts], ['images', 'fonts'], [browserSync.reload]);

    // Watch css files
    gulp.watch(path.app.styles, () => {
        runSequence('sass', 'sass-cp', 'bs-reload');
    });

    // Watch js files
    gulp
        .watch(path.app.scripts)
        .on('change', (file) => {
            gulp.src(file.path, {base: path.app.scriptBasePath})
                .pipe(plumber())
                .pipe(sourcemaps.init())
                .pipe(babel())
                .pipe(ngAnnotate({
                    add: true,
                    single_quotes: true
                }))
                .pipe(sourcemaps.write('.', {
                    includeContent: false,
                    sourceRoot: '../../js'
                }))
                .pipe(gulp.dest(path.build.dist.scripts));

            return runSequence('html', 'bs-reload');
        });

    // Watch tpl files
    gulp.watch(path.app.templates, () => {
        return runSequence('templates', 'templates-cp', 'bs-reload');
    });

    // Watch html files
    // we re-build all because if the index.html is edited it's probabily because of a new lib included or
    // edited, so instead of watching /lib we just watch the index.html
    gulp.watch(path.app.html, ['build'], [browserSync.reload]);
});

gulp.task('bs-reload', () => {
    if(isWin) {
        browserSync.reload();
    }
});