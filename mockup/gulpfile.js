var gulp = require('gulp');
var ejs = require("gulp-ejs");
var log = require('fancy-log');

gulp.task('default', function() {
    return gulp.src('src/templates/*.ejs')
        .pipe(ejs({}, {}, {ext:'.html'})).on('error', log)
        .pipe(gulp.dest('dist/'))
});