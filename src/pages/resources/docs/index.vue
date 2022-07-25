<script setup lang="ts">
import { docCenterTopics } from "/@src/data/resources/knowledge-base/smart-cnam";
// import { genericFaq } from "/@src/data/advanced/faq";
// import { boxedPosts } from "/@src/data/pages/nft";
</script>

<template>
	<div>
		<Section>
			<Container>
				<ssHelpCenterHeader title="Documentation" subtitle="Subtitle" :topics="docCenterTopics" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
