<script setup lang="ts">
import { helpCenterTopics } from "/@src/data/resources/knowledge-base/smart-cnam";
// import { genericFaq } from "/@src/data/advanced/faq";
// import { boxedPosts } from "/@src/data/pages/nft";
</script>

<template>
	<div>
		<Section>
			<Container>
				<ssProductsCenterHeader
					title="Products"
					subtitle="Our Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:topics="helpCenterTopics"
				/>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
