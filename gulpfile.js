// require("dotenv").config();
const { src, dest, series } = require("gulp");
// Gulp Sass
const fileinclude = require("gulp-file-include");
const replace = require("gulp-replace");
// const rename = require("gulp-rename");
const concat = require("gulp-concat");
const gap = require("gulp-append-prepend");
// const urlPrefixer = require("gulp-url-prefixer");

function res_kb_articles(cb) {
	src(["src_content/resources/knowledge-base/api/*.json"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(concat("api.articles.json"))
		.pipe(dest("src_content/resources/knowledge-base/"));

	src(["src_content/resources/knowledge-base/text-messaging/*.json"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(concat("text-messaging.articles.json"))
		.pipe(dest("src_content/resources/knowledge-base/"));

	cb();
}
function res_kb_categories(cb) {
	src(["src_content/resources/knowledge-base/*.category.json"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(concat("index.ts"))
		// replace incompatible characters
		.pipe(replace("“", '"'))
		.pipe(replace("”", '"'))
		.pipe(replace("‘", "'"))
		.pipe(replace("’", "'"))
		.pipe(replace("```", '\\`\\`\\`')) // eslint-disable-line
		// prepend / append export for ts file
		.pipe(gap.prependText("export const helpCenterCategories = ["))
		.pipe(gap.appendText("]"))
		.pipe(dest("src/data/resources/knowledge-base/"));
	cb();
}

exports.build_res_kb = series(res_kb_articles, res_kb_categories);

// exports.develop = function () {
// 	watch(["src/scss/*.scss", "src/scss/**"], scss);
// };
