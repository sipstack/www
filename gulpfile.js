const { src, dest, parallel, series, watch } = require("gulp");
// Gulp Sass
const sass = require("gulp-sass");
const fileinclude = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
sass.compiler = require("node-sass");

const urlPrefixer = require("gulp-url-prefixer");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

function html(cb) {
	
	src(["src/html/**/*.html", "!src/html/.parts/**"])
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
	.pipe(urlPrefixer.html({
    	tags: ['img'],
		attrs: ['src','srcset'],
     	prefix: 'https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/assets/'
    }))
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
		.pipe(urlPrefixer.css({
			tags: ['background'],
			attrs: ['url'],
			prefix: 'https://s3.ca-central-1.amazonaws.com/cdn.sipstack.com/www/assets/'
		}))
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

exports.build = series(html, scss, js_scripts, assets);

exports.develop = function () {
	watch(["src/scss/*.scss", "src/scss/**"], scss);
	watch(["src/html/**/*.html", "src/html/.parts/*.html"], html);
	watch(["src/img/**"], assets);
	watch(["src/js/*.js", "src/js/custom/*.js"], js_scripts);
};
