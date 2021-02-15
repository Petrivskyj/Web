var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require ("gulp-cssnano"), //мінімізація CSS
    autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в
                                                  //CSS для підтримки 
                                                  //старих браузерів
    imagemin = require ('gulp-imagemin'), //стиснення зображень
    concat = require ("gulp-concat"), //об'єднання файлів - конкатенація
    uglify = require ("gulp-uglify"), //мінімізація javaappipt
    rename = require ("gulp-rename"); //перейменування файлів

gulp.task('hello', function(done) {
	console.log('Hello world!')
	done();
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task ( "html", function () {
    return gulp.src ( "scr/*.html")
    .pipe (gulp.dest ( "dist"));
});

gulp.task ( "sass", function () {
    return gulp.src ( "app/sass/*.sass")
        .pipe (concat ( 'styles.sass'))
        .pipe (sass ())
        .pipe (autoprefixer ({
            browsers: [ 'last 2 versions'],
            cascade: false
         }))
        .pipe (cssnano ())
        .pipe (rename ({suffix: '.min'}))
        .pipe (gulp.dest ( "dist/css"));
});

gulp.task ( "appipts", function () {
    return gulp.src ( "app/js/*.js")
        .pipe (concat ( 'appipts.js'))
        .pipe (uglify ())
        .pipe (rename ({suffix: '.min'}))
        .pipe (gulp.dest ( "dist/js"));
});

gulp.task ( 'imgs', function () {
    return gulp.src ( "app/images/*.+(jpg|jpeg|png|gif)")
        .pipe (imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe (gulp.dest ( "dist/images"))
});

gulp.task ("watch", gulp.series('browserSync'),function(){
    gulp.watch("app/*.html", gulp.series("html"));
    gulp.watch("app/js/*.js", gulp.series("appipts"));
    gulp.watch("app/sass/*.sass", gulp.series("sass"));
    gulp.watch("app/images/*.+(jpg|jpeg|png|gif)", gulp.series("imgs"));
});

gulp.task('default', gulp.series('watch'));
