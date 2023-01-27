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
const markdownIt = require('markdown-it')
const tap = require('gulp-tap')
const replace = require('gulp-replace')
const gap = require('gulp-append-prepend')

// require markdown-it plugins
const md_abbr = require('markdown-it-abbr')
const md_alerts = require('markdown-it-alerts')
const md_anc = require('markdown-it-anchor')
const md_attrs = require('markdown-it-attrs')
const md_embed = require('markdown-it-block-embed')
const md_fn = require('markdown-it-footnote')
const md_figs = require('markdown-it-implicit-figures')
// const kbd = require("markdown-it-kbd");
const md_prism = require('markdown-it-prism')
const md_toc = require('markdown-it-table-of-contents')
const md_list = require('markdown-it-task-lists')
// const md_table = require('markdown-it-multimd-table')
const sort = require('gulp-sort')

// Markdown-It Options
const options = {
  // preset: 'commonmark',
  html: true,
  // xhtmlOut: true,
  linkify: true,
  // typographer: true,
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return (
  //         '<pre class="hljs"><code>' +
  //         hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
  //         '</code></pre>'
  //       )
  //     } catch (__) {}
  //   }

  //   return (
  //     '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  //   )
  // },
}

const md = new markdownIt(options)
md.use(md_abbr)
md.use(md_alerts)
md.use(md_attrs)
md.use(md_anc)

md.use(md_embed)
md.use(md_fn)
md.use(md_figs, {
  dataType: false, // <figure data-type="image">, default: false
  figcaption: true, // <figcaption>alternative text</figcaption>, default: false
  tabindex: false, // <figure tabindex="1+n">..., default: false
  link: false, // <a href="img.png"><img src="img.png"></a>, default: false
})
// md.use(kbd);
md.use(md_prism, {
  highlightInlineCode: true,
})
md.use(md_toc, {
  containerClass: 'ss-toc-md',
  // containerHeaderHtml: '<div class="col-md-3 col-xl-2">',
  // containerFooterHtml: '</div></div><div class="col-md-9 col-xl-8 mx-auto">',
})
// md.use(md_toc, { includeLevel: [1, 2, 3, 4] })
md.use(md_list)
// md.use(md_table, {
//   multiline: false,
//   rowspan: false,
//   headerless: false,
//   multibody: true,
//   aotolabel: true,
// })

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
  src([paths.src.html.dir, '!src/views/pages/**/_*.html'])
    .pipe(
      tap(function (file) {
        console.log('Compiling file: ' + file.path)
      })
    )
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
  var slug, category
  src('src/views/pages/**/*.md')
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace(' ', ''))
    .pipe(replace('–', '-'))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
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
      // tap(function (file, t) {
      tap(function (file) {
        // console.log(file.path)
        category = file.path.split('views/pages/')[1].split('/')
        category.pop()
        category = category.join('/')
        slug = file.path.split('/').slice(-2, -1)[0] // TODO: can be removed or replaced category name wiht slug
        // console.log(category)
        // console.log(slug)
        return slug
      })
    )
    // prefix image urls (must have ./ prefix in markdown)
    .pipe(
      replace('./', function () {
        // return `/assets/img/resources/blog/${slug}/`
        return `/assets/img/${category}/`
      })
    )

    .pipe(
      dest(function (file) {
        return file.base
      })
    )

  cb()
}

function ss_res_images(cb) {
  src([
    'src/views/pages/resources/blog/**/*.png',
    'src/views/pages/resources/blog/**/*.jpeg',
    'src/views/pages/resources/blog/**/*.jpg',
    'src/views/pages/resources/blog/**/*.svg',
    'src/views/pages/resources/blog/**/*.webp',
  ])
    // .pipe(
    //  tap(function (file, t) {
    //    slug = file.path.split("/").slice(-2, -1)[0];
    //    console.log(slug);
    //    return slug;
    //  })
    // )
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
    .pipe(dest('dist/assets/img/resources/blog/'))

  src([
    'src/views/pages/resources/case-study/**/*.png',
    'src/views/pages/resources/case-study/**/*.jpg',
  ])
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
    .pipe(dest('dist/assets/img/resources/case-study/'))

  src([
    'src/views/pages/resources/docs/**/*.png',
    'src/views/pages/resources/docs/**/*.jpg',
  ])
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
    .pipe(dest('dist/assets/img/resources/docs/'))

  cb()
}

function ss_data(cb) {
  // BLOG ---------------------------------
  src(['src/data/blog/*.json'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(concat('_articles.html'))
    .pipe(
      gap.prependText(
        '@@include("components/sections/blog.posts.html", {categories : ["Business","History", "News", "Regulatory", "Robocall", "Technology"],tags: [],posts: ['
      )
    )
    .pipe(gap.appendText(']})'))
    .pipe(dest('src/views/pages/resources/blog/'))

  // KB / API ----------------------------------------
  src(['src/data/knowledge-base/api/*.json'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(concat('_articles.html'))
    .pipe(
      gap.prependText(
        '@@include("components/sections/kb.articles.html", {articles: ['
      )
    )
    .pipe(gap.appendText(']})'))
    .pipe(dest('src/views/pages/resources/knowledge-base/api/'))

  // KB / Fax ----------------------------------------
  src(['src/data/knowledge-base/fax/*.json'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(concat('_articles.html'))
    .pipe(
      gap.prependText(
        '@@include("components/sections/kb.articles.html", {articles: ['
      )
    )
    .pipe(gap.appendText(']})'))
    .pipe(dest('src/views/pages/resources/knowledge-base/fax/'))

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
  watch(
    [
      'src/views/pages/resources/**/*.jpg',
      'src/views/pages/resources/**/*.jpeg',
      'src/views/pages/resources/**/*.png',
      'src/views/pages/resources/**/*.webp',
    ],
    series(ss_res_images, browsersyncReload)
  )
  watch(['src/views/**/*.md'], series(ss_markdown, html, browsersyncReload))
  // watch(
  //   ['src/data/blog/*.json', 'src/data/knowledge-base/**/*.json'],
  //   series(ss_data, html, browsersyncReload)
  // )
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
  // ss_data,
  html,
  buildCss,
  minifyCss,
  copyVendor,
  copyVendorCss,
  copyImages,
  ss_res_images,
  bundleJs,
  series(buildCss, minifyCss),
  parallel(browserSync, watchFiles)
)
