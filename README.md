----
# vuejs starter kit
using:
* webpack
* vue-loader
* babel-loader
* karma and jasmine to test
* standardjs for linting
* sass
* jsdoc for documentation
* nightwatch for e2e testing

# production installation
* run
```bash
$ cd path/to/this/folder
$ npm install --production
$ node index.js
// application is running on localhost:3000 now
```

## development

### install dependencies
* install node and npm 
* get into this directory using your command line and run

```bash
$ npm install
```
So thats it. You can start developing and checking out whats going on under the hood.

### available commands

```bash
$ npm start
```
runs the application in dev mode with hot module replacement and webpack functions


```bash
$ npm run build
```
Build the application with webpack


```bash
$ npm run jslint // lints the javascript via js-standard
$ npm run sasslint // lints the sass/scss code in ./src/style
```

Linting utilities


```bash
$ npm run test:e2e
// or
$ gulp e2e
```
Some e2e testing.. Runs gulp under the hood to orchestrate the following steps
* run the index.js over gulp-static and make it available for the e2e test under localhost:3000
* start selenium and nightwatch to run the e2e tests
* fail on error
* stop process on success

Info: you need a java version above 1.6 and java sdk version >=8 to run the tests

```bash
$ npm run test:unit
$ npm run test:unit:watch // keeps karma alive and updates when the sources is updatet 
```
Unit Testing

```bash
$ npm run test
```
runs both, unit and e2e tests. For the e2e tests it first does the webpack build step to provide the dist folder.

```bash
$ npm run  build
```
* Lints sass and js
* Runs the unit tests
* Runs the webpack build
* Runs the e2e tests
* writes [docs](./docs/jsdoc/api.md)
