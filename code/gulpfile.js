const gulp = require('gulp');
const imgmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const runSequence = require('gulp4-run-sequence');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const lazypipe = require('lazypipe');
const order = require('gulp-order');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript2');
const rollupUglify = require('rollup-plugin-uglify').uglify;
const rollupNodeResolve = require('rollup-plugin-node-resolve');

// File path constant values
// (1) Source path
const sassSrcPath = 'src/style/main.scss'
const sassSrcWatchPath = 'src/style/**/*.scss'
const tsSrcInputPath = 'src/scripts/main.ts';
// for watch
const tsSrcPath = 'src/scripts/**/*.ts';

// (2) Dist path
const sassDistPath = '../assets/css'
const tsDistPathAndFileName = '../assets/js/main.min.js';

// Default task only gets executed when typed only gulp
gulp.task('default', async () => {
  console.log('Please add the task name. Default task is not defined.');
});

// (3) Process SASS and deploy to asset folder
gulp.task('deploy-css', () => {
  return gulp.src(sassSrcPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(sassDistPath));
});

// (4) Compile TypeScript and deploy to asset folder
gulp.task('deploy-js', () => {
  return rollup.rollup({
    input: tsSrcInputPath,
    plugins: [
      rollupTypescript({
        cacheRoot: '.rollupcache',
        tsconfigOverride: {
          compilerOptions: {
            removeComments: true,
          }
        }
      }),
      rollupNodeResolve({}),
      rollupUglify({
        compress: {
          drop_console: false
        }
      })
    ]
  }).then(bundle => {
    return bundle.write({
      file: tsDistPathAndFileName,
      format: 'iife',
      // extend whosfree namespace instead of replace
      name: 'whosfree',
      extend: true,
      sourcemap: false,
      globals: {
        // map module 'jquery' to global 'jQuery'
        // jquery: 'jQuery'
      }
    });
  });
});

// Watch source file change and reload browser for development
gulp.task('watch', () => {
  browserSync.init({
    server: '../_site',
    port:8080,
    ui: {port: 8081}
  });

  gulp.watch(tsSrcPath, gulp.series('deploy-js'));
  gulp.watch(sassSrcWatchPath, gulp.series('deploy-css'));

  //reloader
  gulp.watch(tsSrcPath).on('change', browserSync.reload);
  gulp.watch(sassSrcWatchPath).on('change', browserSync.reload);
});

gulp.task('checkDist', function() {
  browserSync.init({
    server: './dist',
    port:8080,
    ui: {port: 8081}
  });
});


/////////////////////////////////////////////////////////
/////////////// Deploy main sequence job ////////////////
/////////////////////////////////////////////////////////

gulp.task('deploy', (callback) => {
  runSequence(['deploy-css', 'deploy-js'], callback);
});

gulp.task('react-deploy', function(done) {
  gulp.src('../react/dist/*.js')
    .pipe(gulp.dest('../../wwwroot/js'))
  done();
})