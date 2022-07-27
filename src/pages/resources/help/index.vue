<script setup lang="ts">
import { onBeforeMount } from "vue";
import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { genericFaq } from "/@src/data-example/blocks/advanced/faq";
// import { boxedPosts } from "/@src/data-example/pages/nft";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
onBeforeMount(() => {
	if (window.location.pathname.substring(window.location.pathname.length - 1) != "/") window.location.href += "/";
	// console.log(window.location.pathname);
});
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<HelpCenterHeader
					title="Help Center"
					subtitle="Our Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:topics="helpCenterTopics"
				/>
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Help Categories" subtitle="Take a look at" />

				<ssHelpCenterCategories :categories="helpCenterCategories" />
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />

				<!-- <FaqListBoxed :items="genericFaq" /> -->

				<!-- <BlogBoxedGrid
					punchline="Easy-Peezy 👌"
					title="Resources to Get Started"
					subtitle="You should definitely subscribe to our news for daily tips and tricks"
					:posts="boxedPosts"
					inverted
				/> -->
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
