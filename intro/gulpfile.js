var gulp = require('gulp')

//INCLUDE ALL PLUGINS WE ARE USING (SASS/LESS/AUTOPREFIXER ETC)
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function(){
    return gulp.src('./style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch',function() {
    gulp.watch('./styles.css', ['styles'],gulp.series(reload));
  });
  