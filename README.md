Ionic App Base boilerplate
=====================

##Features
- es6 through babel
- eslint
- Inject only the files really edited instead of re-bundle all js files (vary important in large projects)
- Use browsersync on unix systems and livereload on windows

##Commands
see scripts section in package.json

##Dependences
npm install -g eslint ionic cordova gulp-cli bower ios-sim -g

##Bugs
- There is a bug with livereload on Ios. If you try "ionic state restore" after you clone this repository, to init the project, the livereload function will not work. As a temporary fix you can copy platforms/ and plugins/ from a new project (i.e. ionic start blank blank).