<script setup lang="ts">
// import { ref, onMounted, onServerPrefetch, watch } from "vue";
// import { useRoute, useRouter } from "vue-router";

// import { getArticle } from "/@src/utils/api/blog-post"; // will modify for blog
// import { HelpCenterArticle } from "/@src/types";
import { post } from "/@src/data/resources/blog/post";

// const route = useRoute();
// const router = useRouter();
// const slug = route.params.slug as string;

// get article data
// const article = ref<HelpCenterArticle>();
// async function fetchArticle() {
// 	try {
// 		article.value = await getArticle(slug);
// 	} catch {
// 		router.replace({
// 			name: "all",
// 			params: { all: `not-found-${route.params.slug}` },
// 		});
// 	}
// }

// onMounted(fetchArticle);
// onServerPrefetch(fetchArticle);
// watch(() => route.fullPath, fetchArticle);
</script>

<template>
	<div>
		<Section>
			<Container>
				<ssBlogPost :content="post" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
