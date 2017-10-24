const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function (jsFiles, scssFiles) {
    gulp.task('scss', function () {
        gulp.src(scssFiles.map(p => `src/scss/${p}`))
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('sierra-css.min.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dev/css'));
    });

    gulp.task('js', function () {
        gulp.src(jsFiles.map(p => `src/js/${p}`))
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(concat('sierra-css.min.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dev/js'));
    });

    gulp.task('watch', function () {
        gulp.watch('src/js/**/*.js', ['js']);
        gulp.watch('src/scss/**/*.scss', ['scss']);
    });

    gulp.task('default', ['js', 'scss', 'watch']);
};