/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

'use strict';

import path from 'path';

const root = path.dirname(__dirname);
const paths = {
    root: root,
    gulpfile: [`${root}/gulpfile.js`, `${root}/gulp/**/*.js`],
    app: {
        basePath: `${root}/src/`,
        fonts: `${root}/src/font/**/*.{eot,svg,ttf,woff,woff2}`,
        styles: `${root}/src/css/**/*.scss`,
        ionicStyle: `${root}/scss/ionic.app.scss`,
        ionicFonts: `${root}/src/lib/ionic/fonts/**`,
        styleBasePath:`${root}/src/css/`,
        images: `${root}/src/img/**/*.{png,gif,jpg,jpeg}`,
        config: `${root}/src/js/core/config.js`,
        scriptBasePath: `${root}/src/js`,
        scripts: [
            `${root}/src/js/**/*module*.js`,
            `${root}/src/js/**/*.js`,
            `${root}/src/js/**/*.spec.js`
        ],
        html: `${root}/src/index.html`,
        templates: `${root}/src/js/**/*.html`,
        json: `${root}/src/js/**/*.json`
    },
    build: {
        basePath: `${root}/www/`,
        dist: {
            basePath: `${root}/www/`,
            fonts: `${root}/www/font/`,
            images: `${root}/www/img/`,
            styles: `${root}/www/css/`,
            scripts: `${root}/www/js/`,
            scriptsBuildOrder: [
                `${root}/www/js/**/*module*.js`,
                `${root}/www/js/**/*.js`,
                `!${root}/www/js/**/*.spec.js`
            ],
            templates: `${root}/www/templates/`
        },
        docs: `${root}/www/docs/`
    },
    fileNames: {
        jsBundle: `app.bundle`,
        jsBundleTest: `app.bundle.test`,
        tplBundle: `tpl.bundle`
    }
};

export default paths;
