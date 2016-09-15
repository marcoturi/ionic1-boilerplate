/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

import gulp from 'gulp';
import karma from 'karma';
import util from 'gulp-util';

// karma tasks for TEST

const argv = util.env;
const ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';

console.log('TEST ENV ===> %s', ENV);

const runtest =  (single, done) => {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: single,
        autoWatch: !single,
        reporters: ENV === 'dev' ? 'dots' : 'teamcity'
    }, done).start();
};

gulp.task('test', function (done) {
    runtest(false, done);
});

gulp.task('test-single', function (done) {
    runtest(true, done);
});