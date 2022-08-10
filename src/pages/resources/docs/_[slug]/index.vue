<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getArticle } from "/@src/utils/api/ssDoc";
import { HelpCenterArticle } from "/@src/types";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

// get article data
const article = ref<HelpCenterArticle>();
async function fetchArticle() {
	try {
		article.value = await getArticle(slug);
	} catch {
		router.replace({
			name: "all",
			params: { all: `not-found-${route.params.slug}` },
		});
	}
}

onMounted(fetchArticle);
onServerPrefetch(fetchArticle);
watch(() => route.fullPath, fetchArticle);
</script>

<template>
	<div>
		<Section color="grey" overflown>
			<Container v-if="article">
				<ssHelpCenterHeader :title="article.title" subtitle="Article" compact />

				<ssHelpCenterArticleBlock :article="article" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
