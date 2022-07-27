<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getCategory } from "/@src/utils/api/ssCategory";
import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
import { HelpCenterCategory } from "/@src/types";

const route = useRoute();
const router = useRouter();
const slug = route.params._slug as string;
// console.log(slug); // debug

// get category data
const category = ref<HelpCenterCategory>();
async function fetchCategory() {
	try {
		category.value = await getCategory(slug, helpCenterCategories);
	} catch {
		router.replace({
			name: "all",
			params: { all: `not-found-${route.params.slug}` },
		});
	}
}
// onBeforeMount(() => {
// 	if (window.location.pathname.substring(window.location.pathname.length - 1) != "/") window.location.href += "/";
// 	// console.log(window.location.pathname);
// });
onMounted(fetchCategory);
onServerPrefetch(fetchCategory);
watch(() => route.fullPath, fetchCategory);
</script>

<template>
	<div>
		<Section color="grey" overflown>
			<Container v-if="category">
				<ssHelpCenterHeader :title="category.name" subtitle="Category" :topics="helpCenterTopics" compact />

				<ssHelpCenterCategoryBlock :category="category" />
			</Container>
		</Section>
		<ssFooter></ssFooter>
	</div>
</template>
