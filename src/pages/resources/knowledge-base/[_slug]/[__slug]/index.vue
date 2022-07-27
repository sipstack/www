<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArticle } from "/@src/utils/api/ssArticle";
import { HelpCenterArticle } from "/@src/types";

import { helpCenterCategories } from "/@src/data/resources/knowledge-base";

const route = useRoute();
const router = useRouter();
const slug = route.params.__slug as string; // article slug
const slug_cat = route.params._slug as string; // category slug

// get article data
const article = ref<HelpCenterArticle>();
async function fetchArticle() {
	try {
		article.value = await getArticle(slug, slug_cat, helpCenterCategories);
	} catch {
		router.replace({
			name: "all",
			params: { all: `not-found-${slug_cat}-${slug}` },
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
