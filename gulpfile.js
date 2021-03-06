var gulp        = require('gulp');
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/bootstrap/scss/_functions.scss', 'src/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src"));
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', '/src/**/*.js'])
        .pipe(gulp.dest("js"));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/bootstrap/scss/_functions.scss', 'src/**/*.scss'], ['sass']);
});

gulp.task('default', ['js','serve']);