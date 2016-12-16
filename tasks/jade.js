var gulp = require('gulp');
var jade = require('gulp-jade');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('jade', function() {
    gulp.src(['./jade/**/*.jade', '!./jade/layout/default.jade'])
      .pipe(jade({
        pretty: true
      }))
    .pipe(gulp.dest('./docs/'))
    .pipe(reload({stream: true}));
});