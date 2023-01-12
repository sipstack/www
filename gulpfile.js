'use strict'
const { src, dest, series, parallel, watch } = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const browsersync = require('browser-sync').create()
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const del = require('del')
const glob = require('glob')
const fileinclude = require('gulp-file-include')
const imagemin = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
// Define paths
var paths = {
  here: './',
  base: {
    base: {
      dest: './',
    },
    node: {
      dest: './node_modules',
    },
  },
  src: {
    base: {
      dir: './src/',
      files: './src/**/*',
      dest: './dist',
    },
    html: {
      dir: './src/pages/*.html',
      files: './src/pages/**/*.html',
      dest: './dist',
      cleanHtml: './dist/*.html',
    },
    js: {
      dir: './src/js',
      files: './src/js/custom/**/*.js',
      theme: './src/js/theme.js',
      dest: './dist/assets/js',
      clean: './dist/assets/js/*.js',
    },
    scss: {
      dir: './src/scss',
      files: './src/scss/**/*',
      main: './src/scss/*.scss',
      dest: './dist/assets/css',
    },
    img: {
      dir: './src/img/**/*',
      dest: './dist/assets/img',
      clean: './dist/assets/img/**/*',
    },
    vendor: {
      files: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-countdown/dist/jquery.countdown.min.js',
        './node_modules/gsap/dist/gsap.min.js',
        './node_modules/swiper/swiper-bundle.min.js',
        './node_modules/splitting/dist/splitting.min.js',
        './node_modules/locomotive-scroll/dist/locomotive-scroll.min.js',
        './node_modules/flatpickr/dist/flatpickr.min.js',
        './node_modules/quill/dist/quill.min.js',
        './node_modules/cleave.js/dist/cleave.min.js',
        './node_modules/simplebar/dist/simplebar.min.js',
        './node_modules/particles.js/particles.js',
        './node_modules/prismjs/prism.js',
        './node_modules/plyr/dist/plyr.min.js',
        './node_modules/clipboard/dist/clipboard.min.js',
        './node_modules/nouislider/dist/nouislider.min.js',
        './node_modules/choices.js/public/assets/scripts/choices.min.js',
        './node_modules/dropzone/dist/min/dropzone.min.js',
        './node_modules/autosize/dist/autosize.min.js',
        './node_modules/bs-stepper/dist/js/bs-stepper.min.js',
      ],
      css: [
        './node_modules/swiper/swiper-bundle.min.css',
        './node_modules/nouislider/dist/nouislider.min.css',
        './node_modules/splitting/dist/splitting.css',
        './node_modules/splitting/dist/splitting-cells.css',
        './node_modules/aos/dist/aos.css',
        './node_modules/plyr/dist/plyr.css',
        './node_modules/locomotive-scroll/dist/locomotive-scroll.min.css',
        './node_modules/flatpickr/dist/flatpickr.min.css',
        './node_modules/quill/dist/quill.snow.css',
        './node_modules/simplebar/dist/simplebar.min.css',
        './node_modules/prismjs/themes/prism-tomorrow.css',
        './node_modules/choices.js/public/assets/styles/choices.min.css',
        './node_modules/dropzone/dist/dropzone.css',
        './node_modules/bs-stepper/dist/css/bs-stepper.min.css',
        './node_modules/glightbox/dist/css/glightbox.min.css',
      ],
      dest: './dist/assets/vendor/node_modules/js',
      destCss: './dist/assets/vendor/node_modules/css',
      clean: './dist/assets/vendor/node_modules',
    },
  },
}
//imagemin
function copyImages() {
  return src(paths.src.img.dir)
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
        imagemin.gifsicle(),
        imagemin.mozjpeg({ quality: 90, progressive: true }),
        imagemin.optipng(),
      ])
    )
    .pipe(dest(paths.src.img.dest))
}
//Clean public folder html,css,js
function cleanUp() {
  //   return del([
  //     paths.src.img.clean,
  //     paths.src.js.clean,
  //     paths.src.vendor.clean,
  //     paths.src.scss.dest,
  //     paths.src.html.cleanHtml,
  //   ])
  return del(['dist'])
}

//Copy vendor to assets/vendor folder
function copyVendor() {
  return src(paths.src.vendor.files)
    .pipe(dest(paths.src.vendor.dest))
    .pipe(browsersync.stream())
}
function copyVendorCss() {
  return src(paths.src.vendor.css)
    .pipe(dest(paths.src.vendor.destCss))
    .pipe(browsersync.stream())
}

//BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: [paths.src.base.dest],
    },
  })
  done()
}

function browsersyncReload(done) {
  browsersync.reload()
  done()
}

function bundleJs() {
  var files = glob.sync('./src/js/theme.js')
  return browserify({
    entries: files,
    debug: true,
    cache: {},
    packageCache: {},
  })
    .transform(babelify, {
      global: true,
      presets: ['@babel/preset-env'],
    })
    .bundle()
    .pipe(source('theme.bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(paths.here))
    .pipe(dest(paths.src.js.dest))
}
//styles
function buildCss() {
  return src(paths.src.scss.main)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(paths.here))
    .pipe(dest(paths.src.scss.dest))
    .pipe(browsersync.stream())
}
function minifyCss() {
  return src(paths.src.scss.main)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(sourcemaps.write(paths.here))
    .pipe(dest(paths.src.scss.dest))
    .pipe(browsersync.stream())
}

//Copy html
function html(cb) {
  src([paths.src.html.dir])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true,
      })
    )
    .pipe(dest(paths.src.html.dest))
    .pipe(
      browsersync.reload({
        stream: true,
      })
    )

  cb()
}

function ss_public(cb) {
  src(['public/*', 'public/**/*']).pipe(dest('dist/'))

  cb()
}

function ss_css(cb) {
  src('src/scss/sipstack.css').pipe(dest('dist/assets/css'))

  cb()
}

// ------------------------------------------------------------------------------
function watchFiles() {
  watch(
    [paths.src.scss.files, 'src/scss/sipstack.css'],
    series(buildCss, ss_css, minifyCss)
  )
  watch(paths.src.js.files, series(bundleJs, browsersyncReload))
  watch(paths.src.img.dir, series(copyImages, browsersyncReload))
  watch(
    [paths.src.html.files, 'src/components/**/*.html'],
    series(html, browsersyncReload)
  )
}

exports.watchFiles = watch
exports.buildCss = buildCss
exports.bundleJs = bundleJs
exports.minifyCss = minifyCss
exports.html = html
exports.copyVendor = copyVendor
exports.copyVendorCss = copyVendorCss
exports.cleanUp = cleanUp
exports.copyImages = copyImages
exports.default = series(
  cleanUp,
  ss_public,
  html,
  buildCss,
  ss_css,
  minifyCss,
  copyVendor,
  copyVendorCss,
  copyImages,
  bundleJs,
  parallel(browserSync, watchFiles)
)
