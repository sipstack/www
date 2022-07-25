<script setup lang="ts">
import { helpCenterTopics, helpCenterCategories } from "/@src/data-example/pages/help";
// import { genericFaq } from "/@src/data/advanced/faq";
// import { boxedPosts } from "/@src/data/pages/nft";
</script>

<template>
	<div>
		<Section>
			<Container>
				<ssHelpCenterHeader title="Documentation" subtitle="Subtitle" :topics="helpCenterTopics" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
