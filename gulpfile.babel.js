const gulp         = require('gulp');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const cssnano      = require('cssnano');
const cleancss     = require('gulp-clean-css');
const concatcss    = require('gulp-concat-css');
const autoprefixer = require('autoprefixer');
const del          = require('del');
const imagemin     = require('gulp-imagemin');
const svgo         = require('gulp-svgo');
const rename       = require('gulp-rename');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const browserSync  = require('browser-sync').create();

const includePaths = {
  // Compile files/globs into build.
  js: [
    './node_modules/jquery/dist/jquery.js'
  ],
  // Add paths to `@import` mixin.
  stylesheets: []
}

const globs = {
  html: './**/*.html',
  js: [
    ...includePaths.js,
    './_assets/js/**/*.js'
  ],
  stylesheets: './_assets/scss/**/*.scss',
  images: './_assets/images/**/*.{png,gif,jpg,jpeg,svg,mp4,ico}',
  fonts: './_assets/fonts/**/*.{eot,ttf,woff,otf}',
  svg: './_assets/svg/**/*.svg'
}

const paths = {
  build: './assets',
  js: './assets/js',
  stylesheets: './assets/stylesheets',
  images: './assets/images',
  fonts: './assets/fonts',
  svg: './assets/svg'
}


// BrowserSync reload
gulp.task('bs-reload', () => {
  browserSync.reload();
});

// JavaScripts
gulp.task('js', () => {
  return gulp.src(globs.js)
    // .pipe(concat('application.js'))
    // .pipe(rename('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));
});

// SASS
gulp.task('sass', () => {
  return gulp.src(globs.stylesheets)
    .pipe(sass(
      {
        includePaths: includePaths.stylesheets
      }
    ).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.stylesheets));
});

// Images
gulp.task('images', () => {
  return gulp.src(globs.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images))
});

// Fonts
gulp.task('fonts', () => {
  return gulp.src(globs.fonts)
    .pipe(gulp.dest(paths.fonts))
});

// SVG
gulp.task('svg', () => {
  return gulp.src(globs.svg)
    .pipe(svgo())
    .pipe(gulp.dest(paths.svg))
});

gulp.task('prefix', () => {
  return gulp.src(globs.stylesheets)
    .pipe(autoprefixer({
      browsers: ['last 99 versions'],
      cascade: false
  }))
  .pipe(gulp.dest('style'))
});

// Clean
gulp.task('clean', () => {
  return del([paths.build]);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './_site'
    }
  });
})

gulp.task('build',  gulp.series(
  'clean',
  gulp.parallel('js', 'sass', 'images', 'fonts', 'svg'),
));

gulp.task('watch', () => {
  gulp.watch(globs.html, gulp.series('bs-reload'));
  gulp.watch(globs.js, gulp.series('js'));
  gulp.watch(globs.stylesheets, gulp.series('sass'));
  gulp.watch(globs.images, gulp.series('images'));
  gulp.watch(globs.fonts, gulp.series('fonts'));
  gulp.watch(globs.svg, gulp.series('svg'));
});

gulp.task('default', gulp.series('build', gulp.parallel('browser-sync', 'watch')))