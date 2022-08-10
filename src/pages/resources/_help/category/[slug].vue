<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getCategory } from "/@src/utils/api/category";
import { helpCenterTopics } from "/@src/data/help/example";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
import { HelpCenterCategory } from "/@src/types";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
console.log(route.params.slug);
// get category data
const category = ref<HelpCenterCategory>();
async function fetchCategory() {
	try {
		category.value = await getCategory(slug);
	} catch {
		router.replace({
			name: "all",
			params: { all: `not-found-${route.params.slug}` },
		});
	}
}

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
