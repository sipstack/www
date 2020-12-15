require("dotenv").config();
const { src, dest, parallel, series, watch } = require("gulp");
// Gulp Sass
const sass = require("gulp-sass");
const fileinclude = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
sass.compiler = require("node-sass");

const urlPrefixer = require("gulp-url-prefixer");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const environments = require("gulp-environments");
var production = environments.production;

const awspublish = require("gulp-awspublish");
const GulpSSH = require("gulp-ssh");
var gulpSSH = new GulpSSH({
	ignoreErrors: false,
	sshConfig: { host: "corp.sipstack.com", port: 209, username: process.env.SSH_USERNAME, password: process.env.SSH_PASSWORD },
});

function html(cb) {
	src(["src/html/**/*.html", "src/html/**/*.txt", "!src/html/.parts/**"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		// 	.pipe(assetpaths({
		//   newDomain: 'https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/assets',
		//   oldDomain : '',
		//   docRoot : '',
		//   filetypes : ['jpg','jpeg','png','ico','gif','css'],
		//   customAttributes: ['srcset'],
		//   templates: true
		//  }))
		.pipe(
			production(
				urlPrefixer.html({
					tags: ["img", "svg", "link", "script"],
					attrs: ["src", "srcset", "data", "href"],
					prefix: "https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/",
				})
			)
		)
		.pipe(dest("dist"));

	cb();
}

function scss(cb) {
	src(["src/scss/*.scss"])
		// .pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		// .pipe(sourcemaps.write('./'))
		// .pipe(assetpaths({
		// 	newDomain: 'https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/assets',
		// 	oldDomain : '../',
		// 	docRoot : '',
		// 	filetypes : ['jpg','jpeg','png','ico','gif'],
		// 	customAttributes: [],
		// 	templates: true
		// }))
		.pipe(
			production(
				urlPrefixer.css({
					tags: ["background"],
					attrs: ["url"],
					prefix: "https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/",
				})
			)
		)
		.pipe(dest("dist/assets/css"));

	cb();
}

function js_scripts(cb) {
	src(["src/js/*.js", "!src/js/bundle.js", "!src/js/custom/*.js"]).pipe(dest("dist/assets/js"));
	src(["src/js/custom/*.js"]).pipe(concat("custom.js")).pipe(dest("dist/assets/js"));

	cb();
}

function assets(cb) {
	// copy .example assets
	src(["src/assets/css/**"]).pipe(dest("dist/assets/css"));
	src(["src/assets/vendors/**"]).pipe(dest("dist/assets/vendors"));
	src(["src/assets/img/**"]).pipe(dest("dist/assets/img"));
	src([".example/vendors/**"]).pipe(dest("dist/assets/vendors"));

	// upload assets to S3 ---------------------------
	// var options = {
	// headers: {
	// 	'Cache-Control': 'max-age=315360000, no-transform, public',
	// 	'x-amz-acl': 'private'
	// }
	// };
	// gulp.src('./dist/**', {read: false})
	// 	.pipe(s3(AWS, options));

	cb();
}

function web(cb) {
	src(["dist/*.html"]).pipe(gulpSSH.dest("/var/www/html/www/"));
	cb();
}
function cdn(cb) {
	var publisher = awspublish.create(
		{
			region: "ca-central-1",
			params: {
				Bucket: "cdn.sipstack.com",
			},
			credentials: {
				accessKeyId: process.env.AWS_AKEY,
				secretAccessKey: process.env.AWS_SKEY,
				signatureVersion: "v3",
			},
		},
		{
			cacheFileName: "./tmp/cache",
		}
	);

	// define custom headers
	var headers = {
		"Cache-Control": "max-age=315360000, no-transform, public",
	};

	src(["dist/**", "!dist/**/*.html"])
		.pipe(
			rename(function (path) {
				path.dirname = "/www/" + path.dirname;
				// path.basename += "www";
			})
		)
		// // gzip, Set Content-Encoding headers and add .gz extension
		// // .pipe(awspublish.gzip({ ext: ".gz" }))

		// // publisher will add Content-Length, Content-Type and headers specified above
		// // If not specified it will set x-amz-acl to public-read by default
		.pipe(publisher.publish(headers))

		// // create a cache file to speed up consecutive uploads
		.pipe(publisher.cache())

		// // print upload updates to console
		.pipe(awspublish.reporter());

	cb();
}

exports.build = series(html, scss, js_scripts, assets);

exports.publish = series((html, scss, js_scripts, assets, cdn), web);

exports.develop = function () {
	watch(["src/scss/*.scss", "src/scss/**"], scss);
	watch(["src/html/**/*.html", "src/html/.parts/*.html"], html);
	watch(["src/img/**"], assets);
	watch(["src/js/*.js", "src/js/custom/*.js"], js_scripts);
};
