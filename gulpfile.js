// require("dotenv").config();
const { src, dest, series } = require("gulp");
// Gulp Sass
const fileinclude = require("gulp-file-include");

// const urlPrefixer = require("gulp-url-prefixer");
const concat = require("gulp-concat");

function res_kb(cb) {
	src(["src_content/resources/knowledge-base/**/*.json"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(dest("tmp/"));

	cb();
}

exports.build = series(res_kb);

// exports.develop = function () {
// 	watch(["src/scss/*.scss", "src/scss/**"], scss);
// };
