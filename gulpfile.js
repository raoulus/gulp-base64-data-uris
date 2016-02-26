'use strict';
const gulp = require('gulp');
const convert = require('./index.js');
const del = require('del');
const seq = require('gulp-sequence');

gulp.task('clean', function() {
  return del('./tmp');
});

gulp.task('convert', function() {
  return gulp.src('./images/*')
              .pipe(convert('images.json'))
              .pipe(gulp.dest('./tmp'));
});

gulp.task('test', seq('clean', 'convert'));
