var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('compipleJs', compipleJs);

gulp.task('copyPublic', copyPublic);

gulp.task('watch', function() {
  // sempre que houver uma alteração aos
  // ficheiros js, corre o compileJS (...)
  gulp.watch('src/js/**/*.js', compipleJs);
  gulp.watch('src/public/**/*.js', copyPublic);
});

gulp.task('default', ['compipleJs', 'copyPublic', 'watch']);

function compipleJs() {
  gulp.src('src/js/app.js')
      .pipe(browserify({
        // recebe conteudo do app.js e transforma, tudo o que for JSX e ES6 em JS
        // com o reactify e o babelify respectivamente
        transform: ['reactify', 'babelify']
      }))
      .pipe(gulp.dest('dist/js'));
}

function copyPublic() {
  gulp.src('src/public/**/*')
      .pipe(gulp.dest('dist'));
}
