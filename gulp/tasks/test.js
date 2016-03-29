/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

import gulp from 'gulp';
import karma from 'karma';
// karma tasks for TEST

const runtest =  (single, done) => {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: single,
        autoWatch: !single
    }, done).start();
};

gulp.task('test', function (done) {
    runtest(false, done);
});

gulp.task('test-single', function (done) {
    runtest(true, done);
});