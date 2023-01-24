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
// added -----------------------------------------
const concat = require('gulp-concat')
// const markdown = require('gulp-markdown-it') //
const markdownIt = require('markdown-it')
const tap = require('gulp-tap')
const replace = require('gulp-replace')

// require markdown-it plugins
// const abbr = require("markdown-it-abbr");
// const alerts = require("markdown-it-alerts");
const md_anc = require('markdown-it-anchor')
const md_attrs = require('markdown-it-attrs')
// const embed = require("markdown-it-block-embed");
// const fn = require("markdown-it-footnote");
// const figs = require("markdown-it-implicit-figures");
// const kbd = require("markdown-it-kbd");
// const prism = require("markdown-it-prism");
const md_toc = require('markdown-it-table-of-contents')
const md_list = require('markdown-it-task-lists')

// Markdown-It Options
const options = {
  preset: 'commonmark',
  html: true,
  xhtmlOut: true,
  linkify: true,
  // typographer: true,
}

const md = new markdownIt()
// md.use(abbr);
// md.use(alerts);
md.use(md_attrs)
md.use(md_anc)

// md.use(embed);
// md.use(fn);
// md.use(figs);
// md.use(kbd);
// md.use(prism);
md.use(md_toc, {
  containerClass: 'ss-toc-md',
  // containerHeaderHtml: '<div class="col-md-3 col-xl-2">',
  // containerFooterHtml: '</div></div><div class="col-md-9 col-xl-8 mx-auto">',
})
// md.use(md_toc, { includeLevel: [1, 2, 3, 4] })
md.use(md_list)

function markdownToHtml(file) {
  const result = md.render(file.contents.toString())
  // file.contents = new Buffer(result)
  file.contents = Buffer.from(result)
  // file.path = replaceExt(file.path, '.html')
  return
}

// Define paths ----------------------------------
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
      dir: './src/views/pages/**/*.html',
      files: './src/views/pages/**/*.html',
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
        './node_modules/jquery/dist/jquery.min.js',
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
        './node_modules/prismjs/themes/*.css',
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
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    open: false,
  })
  done()
}

function browsersyncReload(done) {
  browsersync.reload()
  done()
}

function bundleJs(cb) {
  var files = glob.sync('./src/js/theme.js')
  browserify({
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

  src(['src/js/sipstack/*.js'])
    .pipe(concat('sipstack.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(paths.here))
    .pipe(dest(paths.src.js.dest))

  cb()
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
function minifyCss(cb) {
  src(paths.src.scss.main)
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

  src(['src/scss/sipstack/*.css'])
    .pipe(concat('sipstack.css'))
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

  cb()
}

//Copy html
function html(cb) {
  src([paths.src.html.dir])
    .pipe(
      fileinclude({
        prefix: '@@',
        // basepath: '@file',
        basepath: 'src/views',
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

// function ss_css(cb) {
//   src('src/scss/sipstack.css')
//   .pipe(dest('dist/assets/css'))

//   cb()
// }

function ss_markdown(cb) {
  src('src/views/pages/**/*.md')
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace(' ', ''))
    .pipe(replace('–', '-'))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
    // .pipe(
    //   markdown({
    //     options: {
    //       html: true,
    //       linkify: true,
    //       breaks: true,
    //       // typographer: true,
    //     },
    //     plugins: ['markdown-it-github-headings'],
    //   })
    // )
    .pipe(tap(markdownToHtml))
    .pipe(replace('<p></p>', ''))
    .pipe(
      rename(function (path) {
        // Updates the object in-place
        // path.dirname += "/ciao";
        // path.basename += "-goodbye";
        path.extname = '.html'
      })
    )
    .pipe(
      dest(function (file) {
        return file.base
      })
    )

  cb()
}

// ------------------------------------------------------------------------------
function watchFiles() {
  watch(
    [paths.src.scss.files, 'src/scss/sipstack/*.css'],
    series(buildCss, minifyCss)
  )
  watch(
    [paths.src.js.files, 'src/js/sipstack/*.js'],
    series(bundleJs, browsersyncReload)
  )
  watch(paths.src.img.dir, series(copyImages, browsersyncReload))
  watch(
    [paths.src.html.files, 'src/views/components/**/*.html'],
    series(html, browsersyncReload)
  )
  watch(['src/views/**/*.md'], series(ss_markdown, html, browsersyncReload))
}

exports.test = ss_markdown

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
  ss_markdown,
  html,
  buildCss,
  minifyCss,
  copyVendor,
  copyVendorCss,
  copyImages,
  bundleJs,
  series(buildCss, minifyCss),
  parallel(browserSync, watchFiles)
)
