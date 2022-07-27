<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getCategory } from "/@src/utils/api/ssCategory";
import { helpCenterCategories } from "/@src/data/resources/knowledge-base";

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

onMounted(fetchCategory);
onServerPrefetch(fetchCategory);
watch(() => route.fullPath, fetchCategory);
</script>

<template>
	<div>
		<Section color="grey" overflown>
			<Container v-if="category">
				<ssHelpCenterHeader :title="category.name" subtitle="Category" :search="helpCenterCategories" :search-category="slug" compact />

				<ssHelpCenterCategoryBlock :category="category" />
			</Container>
		</Section>
		<ssFooter></ssFooter>
	</div>
</template>
