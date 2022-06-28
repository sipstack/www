<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
// import { pageLinks, salesFeatures, features, pricing, faq, cta } from "/@src/data/products/whois";
import { fromMarkdown } from "/@src/data/legal/tos";

const pageLinks = [
	{
		label: "Terms of Service",
		target: "/legal/tos",
	},
	{
		label: "Acceptable Use Policy",
		target: "/legal/aup",
	},
	{
		label: "Privacy Policy",
		target: "/legal/privacy",
	},

	{
		label: "Cookie Policy",
		target: "/legal/cookie",
	},
];
</script>

<template>
	<div>
		<ssHeroSimple title="Terms of Service" subtitle="You must read & agree with all the details before you using any of our products or services." />

		<ssLinksHref :links="pageLinks" width="700px" />

		<Section id="overview">
			<Container>
				<ssTermsBlock :terms="fromMarkdown" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
