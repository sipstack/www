<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
// import { pageLinks, salesFeatures, features, pricing, faq, cta } from "/@src/data/products/whois";
import { termsOfService } from "/@src/data/legal/tos";

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
		<ssHeroSimple title="Legal" subtitle="Terms of Service" />

		<ssLinksHref :links="pageLinks" width="700px" />

		<Section id="overview">
			<Container>
				<ssTermsBlock
					title="Terms Of Service"
					subtitle="You must read through the entire Terms of Service below and agree with all the details before you use any of our sites."
					updated="March 22, 2022"
					image="/assets/illustrations/hero/terms-hero.svg"
					dark-image="/assets/illustrations/hero/terms-hero.svg"
					image-height="1152"
					image-width="517"
					:terms="termsOfService"
				/>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
