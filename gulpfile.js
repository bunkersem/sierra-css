const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

const jsFiles = ['main.js', 'script.js'];
const scssFiles = ['main.scss'];

require('./gulpfile.development')(jsFiles, scssFiles);
require('./gulpfile.production')(jsFiles, scssFiles);


