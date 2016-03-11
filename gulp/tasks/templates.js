import gulp from 'gulp';
import minifyHtml from 'gulp-minify-html';
import templateCache from 'gulp-angular-templatecache';
import rename from 'gulp-rename';
import path from '../paths';
/**
 * @desc Create $templateCache from the html templates
 */
gulp.task('templates', () => {
    return gulp.src(path.app.templates)
        .pipe(minifyHtml({
            empty: true
        }))
        .pipe(templateCache({
            module: 'app.templates',
            standalone: true,
            root: 'js'
        }))
        .pipe(rename(path.fileNames.tplBundle + '.js'))
        .pipe(gulp.dest(path.tmp.templates));
});

/**
 * The 'copy' task for templates
 *
 * @return {Stream}
 */
gulp.task('templates-cp', () => {
    return gulp.src(`${path.tmp.templates}${path.fileNames.tplBundle}.js`)
        .pipe(gulp.dest(path.build.dist.templates));
});