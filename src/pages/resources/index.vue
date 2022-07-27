<script setup lang="ts">
// import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
const helpCenterTopics = [
	{
		icon: "ph:files-duotone",
		iconColor: "primary",
		name: "test1",
		type: "desc",
		title: "Documentation",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "docs/",
	},
	{
		icon: "simple-icons:knowledgebase",
		iconColor: "info",
		title: "Knowledge Base",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "knowledge-base/",
	},
	{
		icon: "carbon:blog",
		iconColor: "secondary",
		title: "Blog",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "blog/",
	},
	{
		icon: "ic:outline-forum",
		iconColor: "warning",
		title: "Forums",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/r/link?href=https://github.com/sipstack/sipstack/discussions",
	},
];
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<ssHelpCenterHeader
					title="Help Center"
					subtitle="Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:topics="helpCenterTopics"
				/>
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
