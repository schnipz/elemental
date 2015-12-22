# Elemental

[![Dependency Status](https://david-dm.org/schnipz/pretty-focus.svg)](https://david-dm.org/schnipz/elemental)
[![Dev Dependencies](https://david-dm.org/schnipz/pretty-focus/dev-status.svg)](https://david-dm.org/schnipz/elemental#info=devDependencies)

> A scratch build start point for front-end developers.

## Setup

- Install required GEM packages: `gem install sass scss_lint`
- Install required global NPM dependencies: `npm install -g jscs jshint requirejs`
- Run `npm install` to install all local dependencies

## Usage

- Run `gulp develop` to start automatic build scripts
- Start building your app...

Remember To:

- Update the `.htaccess` file to have your required environment configuration.
- Update `dist/index.html` `theme-color` meta tag with your desired colour.
- Duplicate and modify the `src/js/imports/modules/_module.js` template to create your own JavaScript modules (don't forget to add the files to `src/js/app.js`, and their dependencies to `src/js/imports/main.js` if they need methods to be called on ready, load or resize).

## Notes

- Uses NPM for package management and Gulp for automated tasks
- Uses RequireJS for JavaScript modulisation
- Includes underscore.js by default (because it's just so dang useful!)
- Uses SCSS for CSS pre-prosessing
- Has JavaScript and CSS linting

## TODO

- Asset caching based on package.json version number

## License
Licensed under the [MIT license](LICENSE).
Copyright &copy; 2015 Mike Parsons