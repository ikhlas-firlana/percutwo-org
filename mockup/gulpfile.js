var gulp = require('gulp');
var ejs = require("gulp-ejs");
var log = require('fancy-log');
var browserSync = require('browser-sync').create();

gulp.task('default', ['ejs'], function() {
    browserSync.init({
        server: ["./dist", "./"]
    });

    gulp.watch("src/**/*.ejs", ['ejs', browserSync.reload]);
});

gulp.task('ejs', function () {
    return gulp.src('src/*.ejs')
        .pipe(ejs({}, {}, {ext:'.html'})).on('error', log)
        .pipe(gulp.dest('dist/'))
});