/* globals Docute */

new Docute({
	target: "#docute",
	sourcePath: "/docs/md",
	title: "SIPSTACK Docs",
	// logo:`<span>{{ $store.getters.config.title }}</span>`,
	highlight: ["typescript", "bash", "json", "markdown"],
	// editLinkBase: "https://github.com/...",
	// editLinkText: "Edit this page on GitHub",
	// router: {
	// 	mode: "history",
	// },
	detectSystemDarkTheme: true,
	darkThemeToggler: true,
	banner: `Please <a href="https://donate.com/link">
  donate</a> <ExternalLinkIcon /> to support this project!`,
	versions: {
		"v2 (Latest)": {
			link: "/",
		},
		v3: {
			link: "docs/",
		},
	},
	nav: [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "About",
			link: "/about",
		},
	],
	sidebar: [
		{
			title: "Organization",
			links: [
				{
					title: "About   ",
					link: "/about",
				},
				{
					title: "Installation",
					link: "/installation",
				},
			],
		},
	],
});
