Ionic App Base Boilerplate
=====================

## Features
  * Use ES6 with Angular 1.x and Ionic 1.x
  * Mocked Backend Workflow - help with mocking backend-less development
  * Eslint with cordova and airbnb/base rules
  * Bundling system: Inject only the files really edited instead of re-bundle all js files (vary important in large projects)
  * Use browsersync on unix systems and livereload on windows

##<a name="folder-structure"></a>Folder Structure

    src/
      |- img/                     --> source code that goes to production
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

##<a name="installation-and-configuration"></a>Installation & Configuration

###<a name="platform-and-tools"></a>Platform & Tools
You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) (this project has been tested with npm 3.6.0) for installing NodeJS applications and libraries.

[Install Node.js](http://nodejs.org/download/) (node.js version used >= 5.6.0)

Tip: on unix systems we suggest to use nvm for manage nodeJs and NPM (https://github.com/creationix/nvm)

## Dependences
After NodeJs and Npm are installed you should run:
npm install -g eslint ionic cordova gulp-cli bower ios-sim -g

##<a name="installation"></a>Installation

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

##Commands
```bash
$ npm run lint          --> run eslint
$ npm run ios           --> run ionic run ios with livereload and production api
$ npm run android       --> run ionic run android with livereload and production api
$ npm run web           --> run ionic serve with production api
$ npm run web-stage     --> run ionic serve with stage api
$ npm run build         -->  build js files with production api (no concat and uglify)
$ npm run build-stage   -->  build js files with stage api (no concat and uglify)
$ npm run build-release -->  build js files with production api (concat and uglify)
```

##Optional parameters for npm:
--env=prod|dev
prod: will produce a unique boundle uglified and with revision number for js files.
dev: all js files will (not vendors of course) will be just transpiled in es5 and copyed into www/js
--api=prod|stage
prod: inject in the config file (js/core/env.conditions.js) the flag that will make use of prudction url for api
stage: same of prod but will enable the stage url instead
--platform=web|ios|android
web: ionic serve
ios: ionic run ios -l
android: ionic run android -l
 **Note:** always use the npm/gulp tasks, don't use standalone ionic commands (i.e ionic run ios) becuase you need also the tasks of gulp for watching, transpiling and copy the files from the src folder
--open=true|false
Open the web browser (this flag works only on unix systems)

## License

    Copyright (c) 2016 Marco Turi & Damien Dell'Amico

    Source code is open source and released under the GNU GPL v3 license.