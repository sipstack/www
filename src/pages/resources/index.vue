<script setup lang="ts">
import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { genericFaq } from "/@src/data-example/blocks/advanced/faq";
// import { boxedPosts } from "/@src/data-example/pages/nft";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<ssHelpCenterHeader
					title="Resources"
					subtitle="Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:topics="helpCenterTopics"
				/>
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
