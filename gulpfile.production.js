const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function (jsFiles, scssFiles) {
    gulp.task('prod', ['prodjs', 'prodcss']);

    gulp.task('prodcss', function () {
        gulp.src(scssFiles.map(p => `src/scss/${p}`))
            .pipe(sass({ outputStyle: 'compressed' }))
            .pipe(concat('sierra-css.min.css'))
            .pipe(gulp.dest('dist/css'));
    });

    gulp.task('prodjs', function () {
        gulp.src(jsFiles.map(p => `src/js/${p}`))
            .pipe(babel({ comments: false }))
            .pipe(uglify())
            .pipe(concat('sierra-css.min.js'))
            .pipe(gulp.dest('dev/js'));
    });

};