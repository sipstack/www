import devalue from "@nuxt/devalue";
import { renderToString } from "vue/server-renderer";
import { renderHeadToString } from "@vueuse/head";

import { createApp } from "/@src/app";
import initCookiesPlugin from "/@src/utils/cookies";
import { IncomingMessage, ServerResponse } from "http";

export async function init(req: IncomingMessage, res: ServerResponse) {
	initCookiesPlugin(req, res);
}

export async function render(url: string, manifest: any, initialState: any = {}) {
	const { app, router, pinia, head } = await createApp();

	// set the router to the desired URL before rendering
	router.push(url);
	await router.isReady();

	// passing SSR context object which will be available via useSSRContext()
	// @vitejs/plugin-vue injects code into a component's setup() that registers
	// itself on ctx.modules. After the render, ctx.modules would contain all the
	// components that have been instantiated during this render call.
	const ctx: any = {
		found: true,
	};
	const appHtml = await renderToString(app, ctx);
	const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head);

	initialState.pinia = pinia?.state.value;

	// the SSR manifest generated by Vite contains module -> chunk/asset mapping
	// which we can then use to determine what files need to be preloaded for this
	// request.
	const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
	return {
		found: ctx.found,
		appHtml,
		headTags,
		htmlAttrs,
		bodyAttrs,
		preloadLinks,
		initialState: devalue(initialState),
	};
}

function renderPreloadLinks(modules: any, manifest: any) {
	let links = "";
	const seen = new Set();
	modules.forEach((id: string) => {
		const files = manifest[id];
		if (files) {
			files.forEach((file: any) => {
				if (!seen.has(file)) {
					seen.add(file);
					links += renderPreloadLink(file);
				}
			});
		}
	});
	return links;
}

function renderPreloadLink(file: string) {
	if (file.endsWith(".js")) {
		return `<link rel="modulepreload" crossorigin href="${file}">`;
	} else if (file.endsWith(".css")) {
		return `<link rel="stylesheet" href="${file}">`;
	} else if (file.endsWith(".woff")) {
		return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
	} else if (file.endsWith(".woff2")) {
		return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
	} else if (file.endsWith(".gif")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
	} else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
	} else if (file.endsWith(".png")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
	} else if (file.endsWith(".svg")) {
		return ` <link rel="prefetch" href="${file}" as="image" type="image/svg+xml"/>`;
	} else {
		console.log("missing preload link for", file);
		return "";
	}
}
