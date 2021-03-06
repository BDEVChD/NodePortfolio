const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
// const concat = require('gulp-concat')
// const babel = require('gulp-babel')
const watch = require('gulp-watch')
const fsevents = require('fsevents');
const browserSync = require('browser-sync')
const reload = browserSync.reload
var exec = require('child_process').exec;

gulp.task('default', ['styles'], () => {
  gulp.watch('./client/src/sass/**/*', ['styles'])
//   gulp.watch('./assets/js/**/*', ['webpack'])
//   gulp.watch(['./public/**/*', './public/*', '!public/js/**/.#*js', '!public/css/**/.#*css']).on('change', reload)
})

gulp.task('styles', () => {
  gulp.src('./client/src/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(gulp.dest('./client/public/css'))
    // .pipe(browserSync.stream())
})

// gulp.task('browser-sync', ['styles'], function () {
  // THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
  // browserSync.init({
  //   proxy: {
  //     target: 'localhost:3000', // can be [virtual host, sub-directory, localhost with port]
  //     ws: true // enables websockets
  //   },
  //   serveStatic: ['.', './public']
  // })

//   browserSync.init({
//         server: './public',
//         notify: false,
//         open: false //change this to true if you want the broser to open automatically 
//     });
// })

// gulp.task('webpack', (cb) => {
//   exec('webpack', function (err, stdout, stderr) {
//       console.log(stdout);
//       console.log(stderr);
//       cb(err);
//     });
// })