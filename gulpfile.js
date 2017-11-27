const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch')
const gutil = require('gulp-util');
const addsrc = require('gulp-add-src');
const revReplace = require('gulp-rev-replace');
const rev = require('gulp-rev');
const collect = require('gulp-rev-collector');
const wait = require('gulp-wait');
const clean = require('del');
const seq = require('gulp-sequence');
const watchSeq = require('gulp-watch-sequence');

var manifestFolder = 'dist/manifest';
var manifestFile = gulp.src(manifestFolder + '/rev-manifest.json');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('tmp/css'));
});

gulp.task('js', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.js', 'src/js/fontawesome-core/*.js', 'src/js/fontawesome/*.js', 'src/js/jquery-ui/*.js', 'src/js/app.js'])
    .pipe(concat('app.js').on('error', gutil.log))
    .pipe(gulp.dest('tmp/js'))
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('version', ["sass", "js"], function() {
    return gulp.src(['tmp/**/*.css', 'tmp/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest(manifestFolder));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('tmp'));
});

gulp.task('collect', function() {
    return gulp.src([manifestFolder + '/*.json', 'tmp/*.html'])
    .pipe(collect({
        replaceReved: true
    }))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cleanEnter', function() {
    return clean([
        'dist/**/*'
    ]);
});

gulp.task('cleanAssets', function() {
    return clean ([
        'dist/css/*.css',
        'dist/js/*.js'
    ])
});

gulp.task('cleanExit', function() {
    return clean([
        'tmp'
    ]);
});

gulp.task('build', function(callback) {
    seq('cleanEnter', 'fonts', 'html', 'version', 'collect', 'cleanExit')(callback);
});

gulp.task('quick', function(callback) {
    seq('cleanAssets', 'html', 'version', 'collect')(callback)
});

gulp.task('watch', function() {
    gulp.watch(['src/scss/**/*.scss', 'src/js/**/*.js', 'src/*.html'], ['quick']);
})

// gulp.task('watch', function(){
//     gulp.watch('src/scss/**/*.scss', ['version, html, collect'])
//     gulp.watch('src/js/**/*.js', ['version, html, collect'])
//     gulp.watch('src/*.html', ['html, collect'])
//     gulp.watch('src/fonts/*.*', ['fonts'])
// });

// gulp.task('watch', function () {

//     var queue = watchSeq(300);
   
//     watch('src/scss/**/*.scss', {
//       name      : 'SCSS',
//       emitOnGlob: false
//     }, queue.getHandler('version, html, collect'));
   
//     watch('src/*.html', {
//       name      : 'HTML',
//       emitOnGlob: false
//     }, queue.getHandler('html, collect'));

//     watch('src/js/**/*.js', {
//         name      : 'JS',
//         emitOnGlob: false
//       }, queue.getHandler('version, html, collect'));
  
//   });