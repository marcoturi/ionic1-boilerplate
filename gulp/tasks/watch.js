'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from '../paths';

/**
 * The 'watch' task set up the checks to see if any of the files listed below
 * change, and then to execute the listed tasks when they do.
 */
gulp.task('watch', () => {
    // Watch images and fonts files
    gulp.watch([path.app.images, path.app.fonts], ['build'], [browserSync.reload]);

    // Watch css files
    gulp.watch(path.app.styles, ['build'], [browserSync.reload]);

    // Watch js files
    gulp.watch(path.app.scripts,  ['build'], [browserSync.reload]);

    // Watch tpl files
    gulp.watch(path.app.templates,  ['build'], [browserSync.reload]);

    // Watch html files
    gulp.watch(path.app.html, ['build'], [browserSync.reload]);
});
