/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import gulp from 'gulp';
import pkg from '../../package.json';
import shell from 'gulp-shell';

/**
 * Manage bumps
 *
 */

gulp.task('bump', require('gulp-cordova-bump'));

gulp.task('bumpConfigXml', shell.task([
        `gulp bump --setversion=${pkg.version} --bowerjson="./bower.json" --configxml="./config.xml"`
]));