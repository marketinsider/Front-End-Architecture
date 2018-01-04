var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
// var minify      = require('gulp-minify');
// var csso        = require('gulp-csso');
// var concat   = require('gulp-concat')
// var autoprefixer  = require('gulp-autoprefixer');
// var gcmq = require('gulp-group-css-media-queries');


// gulp.task('scripts', function() {
//     return gulp.src('./lib/*.js')
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('./dist/'));
//   });

// gulp.task('pack-media-screen', function () {
//     gulp.src('Out/gulp-autoprefixer/css/*.css')
//         .pipe(gcmq())
//         .pipe(gulp.dest('Out/gulp-mediascreen/css/*.css'));
// });

// gulp.task('prefixer', function () {
//     gulp.src('Out/gulp-sass/css/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('Out/gulp-autoprefixer/css/*.css'))
// });

// gulp.task('cssmini', function () {
//     return gulp.src('Out/gulp-autoprefixer/css/*.css')
//         .pipe(csso())
//         .pipe(gulp.dest('Build/assets/css/app.min.css'));
// });


// gulp.task('minifyjs', function() {
//     gulp.src('Src/scripts/app.js')
//       .pipe(minify({
//           ext:{
//               src:'-debug.js',
//               min:'min.js'
//           },
//           exclude: ['tasks'],
//           ignoreFiles: ['.combo.js', '-min.js']
//       }))
//       .pipe(gulp.dest('Build/assets/js/app.min.js'))
//   });


gulp.task('sass', function() {
    return gulp.src("Src/styles/app.scss")
        .pipe(sass())
        .pipe(gulp.dest("Out/gulp-sass/css"))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("styles/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve'/*,'minifyjs'*/]);