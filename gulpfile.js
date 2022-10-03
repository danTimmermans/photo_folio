var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
// const minify = require('gulp-minify');
 
gulp.task('compress', function() {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path){
        path.basename += ".min";
    }))
    .pipe(gulp.dest('min.js'));
});