## Ionic App Boilerplate - Es6 + Karma + Protractor + CI
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Dependency Status](https://david-dm.org/marcoturi/ionic-es6-boilerplate.svg)](https://david-dm.org/marcoturi/ionic-es6-boilerplate) [![devDependency Status](https://david-dm.org/marcoturi/ionic-es6-boilerplate/dev-status.svg)](https://david-dm.org/marcoturi/ionic-es6-boilerplate#info=devDependencies)
=====================

## Features
  * Use ES6 with Angular 1.x and Ionic 1.x thanks to Babel
  * Mocked Backend Workflow - help with mocking backend-less development
  * Eslint with cordova and airbnb/base, angular, jasmine, protractor rules
  * Bundling system: Inject only the files really edited instead of re-bundle all js files (vary important in large projects)
  * Includes
    - Lodash (see js/pages/home/home.ctrl.js for an example)
    - ngCordova
  * Test with Karma and Protractor
  * Vagrant file
  * Use git best practice with commitizen and standard-version

## <a name="folder-structure"></a>Folder Structure

    src/                          --> source code that goes to production
      |- font/                    --> fonts
      |- img/                     --> image files
      |- js/                      --> ionic app files
      |- css/                     --> css files
      |- lib/                     --> bower libs
      |- index.html               --> app main file

    www/
      |- img/                     --> distribution source code that goes to production
      |- font/                    --> fonts
      |- img/                     --> image files
      |- templates/               --> template
      |  |- tpl.bundle.js         --> template file
      |- vendors/                 --> vendor
      |  |- vendor.bundle.js      --> vendor file
      |- js/                      --> js files: concat, uglify ionic app js files (only in production)
      |- css/                     --> css files
      |- index.html               --> app main file

## <a name="installation-and-configuration"></a>Installation & Configuration

### <a name="platform-and-tools"></a>Platform & Tools
You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) (this project has been tested with npm 3.6.0) for installing NodeJS applications and libraries.

[Install Node.js](http://nodejs.org/download/) (node.js version used 5.6.0)

Tip: on unix systems we suggest to use nvm for manage nodeJs and NPM (https://github.com/creationix/nvm)

## Dependences
After NodeJs and Npm are installed you should run:
npm install eslint ionic cordova gulp-cli bower ios-sim -g

## <a name="installation"></a>Installation

**1.** Clone or [fork](https://github.com/marcoturi/ionic-es6-boilerplate.git) this repository:
```bash
$ git clone https://github.com/marcoturi/ionic-es6-boilerplate.git
$ cd ionic-es6-boilerplate
```

**2.** Install local dependencies
```bash
$ npm install && bower install
```
 **Note:** There is a bug with livereload on Ios. If you try "ionic state restore" after you clone this repository, to init the project, the livereload function will not work. As a temporary fix you can copy platforms/ and plugins/ from a new project (i.e. ionic start blank blank).

## Commands
```bash
$ npm run lint          --> run eslint
$ npm run ios           --> run ionic run ios with livereload and production api
$ npm run android       --> run ionic run android with livereload and production api
$ npm run web           --> run ionic serve with production api
$ npm run web-stage     --> run ionic serve with stage api
$ npm run build         --> build js files with production api (no concat and uglify)
$ npm run build-stage   --> build js files with stage api (no concat and uglify)
$ npm run build-release --> build js files with production api (concat and uglify)
$ npm run fast          --> run ionic serve whitout checking dependeces
$ npm run e2e           --> run protractor tests
$ npm run outdated      --> check npm dependencies
$ npm run babel-doctor  --> check babel status

```

## Optional parameters for npm:
```
--env=prod|dev
prod: will produce a unique boundle uglified and with revision number for js files.
dev: all js files will (not vendors of course) will be just transpiled in es5 and copyed into www/js
--api=prod|stage|mock
prod: inject in the config file (js/core/env.conditions.js) the flag that will make use of prudction url for api
stage: same of prod but will enable the stage url instead
--platform=web|ios|android
web: ionic serve
ios: ionic run ios -l
android: ionic run android -l
 **Note:** always use the npm/gulp tasks, don't use standalone ionic commands (i.e ionic run ios) becuase you need also the tasks of gulp for watching, transpiling and copy the files from the src folder
--open=true|false
Open the web browser (this flag works only on unix systems)
--nochk=true|false
Launch npm install && bower install (usefull on big teams but you get 8-10 sec of delay). Use npm run fast as an alternative of npm run web.
```

**2.** Workflow

1) Code changes
2) Npm run commit
3) Repeat (1) and (2) as many time you need
4) Npm run release -> This command will bump the version of the app according to the previous commits. Also it will generate a changelog and generate agit tag.

Note: Remember to run run npm run release before building the project.

**3.** Todo
Add ngdoc

**4.** License

    Copyright (c) 2016 Marco Turi & Damien Dell'Amico

    Source code is open source and released under the MIT license.
