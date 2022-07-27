<script setup lang="ts">
import { helpCenterCategories } from "/@src/data/resources/knowledge-base";

import { blocks } from "/@src/data/resources/docs"; // for search bar
</script>

<template>
	<div>
		<Section color="grey" bottom-narrow>
			<Container>
				<ssHelpCenterHeader
					title="Knowledge Base"
					subtitle="Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:search="blocks"
				/>
			</Container>
		</Section>

		<Section color="grey" top-narrow>
			<Container>
				<!-- <SectionTitle title="Categories" subtitle="Product" /> -->

				<ssHelpCenterCategories :categories="helpCenterCategories" />
			</Container>
		</Section>

		<!-- <Section color="grey">
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />

			</Container>
		</Section> -->

		<ssFooter></ssFooter>
	</div>
</template>
