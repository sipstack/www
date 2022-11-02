// require("dotenv").config();

const { src, dest, series } = require('gulp')
// Gulp Sass
const fileinclude = require('gulp-file-include')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const gap = require('gulp-append-prepend')
// const urlPrefixer = require("gulp-url-prefixer");
const tap = require('gulp-tap')
const sort = require('gulp-sort')

function res_kb_articles(cb) {
  src([
    'src_content/resources/knowledge-base/api/**/*.json',
    'src_content/resources/knowledge-base/api/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('api.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  src([
    'src_content/resources/knowledge-base/text-messaging/**/*.json',
    'src_content/resources/knowledge-base/text-messaging/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('text-messaging.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  src([
    'src_content/resources/knowledge-base/fax/**/*.json',
    'src_content/resources/knowledge-base/fax/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('fax.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  src([
    'src_content/resources/knowledge-base/regulatory/**/*.json',
    'src_content/resources/knowledge-base/regulatory/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('regulatory.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  src([
    'src_content/resources/knowledge-base/phone-number/**/*.json',
    'src_content/resources/knowledge-base/phone-number/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('phone-number.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  src([
    'src_content/resources/knowledge-base/general/**/*.json',
    'src_content/resources/knowledge-base/general/**/*.jsonc',
  ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('general.articles.json'))
    .pipe(dest('src_content/resources/knowledge-base/'))

  cb()
}
function res_kb_categories(cb) {
  src(['src_content/resources/knowledge-base/*.category.json'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(concat('index.ts'))
    // replace incompatible characters
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
    // prepend / append export for ts file
    .pipe(gap.prependText('export const helpCenterCategories = ['))
    .pipe(gap.appendText(']'))
    .pipe(dest('src/data/resources/knowledge-base/'))
  cb()
}

function res_blog_posts(cb) {
  var slug
  src(['src_content/resources/blog/**/index.json'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(
      // tap(function (file, t) {
      tap(function (file) {
        // console.log(file.path);
        slug = file.path.split('/').slice(-2, -1)[0]
        // console.log(slug);
        return slug
      })
    )
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    // prefix image urls (must have ./ prefix in markdown)
    .pipe(
      replace('./', function () {
        return `/assets/img/resources/blog/${slug}/`
      })
    )
    // .pipe(concat("articles.json"))
    // .pipe(dest("src_content/resources/blog/"));
    // -----
    .pipe(concat('index.ts'))

    // replace incompatible characters
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
    // prepend / append export for ts file
    .pipe(gap.prependText('export const posts = ['))
    .pipe(gap.appendText(']'))
    .pipe(dest('src/data/resources/blog/'))

  cb()
}

function res_blog_images(cb) {
  // var slug;
  src([
    'src_content/resources/blog/**/*.png',
    'src_content/resources/blog/**/*.jpeg',
    'src_content/resources/blog/**/*.jpg',
    'src_content/resources/blog/**/*.svg',
  ])
    // .pipe(
    //  tap(function (file, t) {
    //    slug = file.path.split("/").slice(-2, -1)[0];
    //    console.log(slug);
    //    return slug;
    //  })
    // )
    .pipe(dest('public/assets/img/resources/blog/'))

  cb()
}

function res_cs_posts(cb) {
  var slug
  src(['src_content/resources/case-study/**/index.json'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(
      // tap(function (file, t) {
      tap(function (file) {
        // console.log(file.path);
        slug = file.path.split('/').slice(-2, -1)[0]
        // console.log(slug);
        return slug
      })
    )
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    // prefix image urls (must have ./ prefix in markdown)
    .pipe(
      replace('./', function () {
        return `/assets/img/resources/case-study/${slug}/`
      })
    )
    // .pipe(concat("articles.json"))
    // .pipe(dest("src_content/resources/blog/"));
    // -----
    .pipe(concat('index.ts'))

    // replace incompatible characters
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
    // prepend / append export for ts file
    .pipe(gap.prependText('export const posts = ['))
    .pipe(gap.appendText(']'))
    .pipe(dest('src/data/resources/case-study/'))

  cb()
}

function res_cs_images(cb) {
  // var slug;
  src([
    'src_content/resources/case-study/**/*.png',
    'src_content/resources/case-study/**/*.jpeg',
    'src_content/resources/case-study/**/*.jpg',
    'src_content/resources/case-study/**/*.svg',
  ])
    // .pipe(
    //  tap(function (file, t) {
    //    slug = file.path.split("/").slice(-2, -1)[0];
    //    console.log(slug);
    //    return slug;
    //  })
    // )
    .pipe(dest('public/assets/img/resources/case-study/'))

  cb()
}

function res_docs_doc(cb) {
  var slug
  src(['src_content/resources/docs/**/content.md'])
    .pipe(
      sort({
        asc: false,
      })
    )
    .pipe(
      // tap(function (file, t) {
      tap(function (file) {
        // console.log(file.path);
        slug = file.path.split('/').slice(-2, -1)[0]
        console.log(slug)
        return slug
      })
    )
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    // prefix image urls (must have ./ prefix in markdown)
    .pipe(
      replace('./', function () {
        return `/assets/img/resources/docs/${slug}/`
      })
    )
    // .pipe(concat("articles.json"))
    // .pipe(dest("src_content/resources/blog/"));
    // -----
    // .pipe(concat(`index.ts`))
    .pipe(
      rename(function (path) {
        // Returns a completely new object, make sure you return all keys needed!
        return {
          dirname: path.dirname,
          basename: (path.basename = `index`),
          extname: '.ts',
        }
      })
    )
    // replace incompatible characters
    .pipe(replace('“', '"'))
    .pipe(replace('”', '"'))
    .pipe(replace('‘', "'"))
    .pipe(replace('’', "'"))
    .pipe(replace('```', '\\`\\`\\`')) // eslint-disable-line
    // prepend / append export for ts file
    .pipe(gap.prependText('export const content = `'))
    .pipe(gap.appendText('`'))
    .pipe(dest(`src/data/resources/docs`))

  cb()
}

function res_docs_images(cb) {
  // var slug;
  src([
    'src_content/resources/docs/**/*.png',
    'src_content/resources/docs/**/*.jpeg',
    'src_content/resources/docs/**/*.jpg',
    'src_content/resources/docs/**/*.svg',
  ])
    // .pipe(
    //  tap(function (file, t) {
    //    slug = file.path.split("/").slice(-2, -1)[0];
    //    console.log(slug);
    //    return slug;
    //  })
    // )
    .pipe(dest('public/assets/img/resources/docs/'))

  cb()
}

exports.build_res_kb = series(res_kb_articles, res_kb_categories)
exports.build_res_blog = series(res_blog_posts, res_blog_images)
exports.build_res_cs = series(res_cs_posts, res_cs_images)
exports.build_res_docs = series(res_docs_doc, res_docs_images)
// exports.develop = function () {
//  watch(["src/scss/*.scss", "src/scss/**"], scss);
// };
