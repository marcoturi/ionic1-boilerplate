'use strict';

import path from 'path';

const root = path.dirname(__dirname);
const paths = {
    root: root,
    /**
     * The 'gulpfile' file is where our run tasks are hold.
     */
    gulpfile: [`${root}/gulpfile.js`, `${root}/gulp/**/*.js`],
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'ionicStyle'   contains the ionic scss files
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except config-env.js and unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     * - 'config'       contains Angular app config files
     */
    app: {
        basePath: `${root}/src/`,
        fonts: `${root}/src/font/**/*.{eot,svg,ttf,woff,woff2}`,
        styles: `${root}/src/css/**/*.scss`,
        ionicStyle: `${root}/scss/ionic.app.scss`,
        images: `${root}/src/img/**/*.{png,gif,jpg,jpeg}`,
        config: {
            basePath: `${root}/src/js/core/config/`,
            conditions: `${root}/src/js/core/config/env.conditions.js`
        },
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
    /**
     * The 'tmp' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    tmp: {
        basePath: `${root}/.tmp/`,
        styles: `${root}/.tmp/styles/`,
        scripts: `${root}/.tmp/scripts/`,
        templates: `${root}/.tmp/templates/`
    },
    /**
     * The 'build' folder is where our app resides once it's
     * completely built.
     *
     * - 'dist'         application distribution source code
     * - 'docs'         application documentation
     */
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
