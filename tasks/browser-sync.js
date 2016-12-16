var gulp = require('gulp');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('default',['sass', 'jade'], function() {

  bs ({
    server: './docs/',
    notify:false
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./jade/**/*.jade', ['jade']);
});