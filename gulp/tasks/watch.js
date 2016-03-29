/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import ngAnnotate from 'gulp-ng-annotate';
import plumber from 'gulp-plumber';
import path from '../paths';

/**
 * The 'watch' task set up the checks to see if any of the files listed below
 * change, and then to execute the listed tasks when they do.
 */
gulp.task('watch', () => {
    // Watch images and fonts files
    gulp.watch([path.app.images, path.app.fonts], ['images', 'fonts']);

    // Watch css files
    gulp.watch(path.app.styles, () => runSequence(['sass'], ['html']));

    gulp.watch(path.app.json, ['fixtures']);

    // Watch js files and re-work only the SINGLE JS file edited + index.html. NOT ALL FILES
    gulp
        .watch(path.app.scripts)
        .on('change', (file) => {
            gulp.src(file.path, {base: path.app.scriptBasePath})
                .pipe(plumber()) //for prevent error to stop the task
                .pipe(sourcemaps.init())
                .pipe(babel())
                .pipe(ngAnnotate({
                    add: true,
                    single_quotes: true
                }))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(path.build.dist.scripts));

            return runSequence(['html']);
        });

    // Watch tpl files
    gulp.watch(path.app.templates, ['templates']);

    // Watch html files
    // we re-build all because if the index.html is edited it's probabily because of a new lib included or
    // edited, so instead of watching /lib we just watch the index.html
    gulp.watch(path.app.html, ['build']);
});
