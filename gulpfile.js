const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const gutil = require('gulp-util');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('js', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.js', 'src/js/**/*.js'])
    .pipe(concat('app.js').on('error', gutil.log))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
})

gulp.task('build', ['sass', 'js', 'fonts', 'html']);

gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', ['sass'])
    gulp.watch('src/*.html', ['html'])
    gulp.watch('src/fonts/*.*', ['fonts'])
    gulp.watch('src/js/*.js', ['js'])
})
