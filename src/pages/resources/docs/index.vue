<script setup lang="ts">
import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { genericFaq } from "/@src/data-example/blocks/advanced/faq";
// import { boxedPosts } from "/@src/data-example/pages/nft";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
const topics = [
	{
		icon: "ph:swap-duotone",
		iconColor: "secondary",
		title: "API",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},
	{
		icon: "ph:files-duotone",
		iconColor: "primary",
		title: "Whois",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "whois",
	},
	{
		icon: "ph:atom-duotone",
		iconColor: "info",
		title: "Smart CNAM",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},

	{
		icon: "ph:circles-three-duotone",
		iconColor: "warning",
		title: "SIP Free",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},
];
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<ssHelpCenterHeader
					title="Documentation"
					subtitle="Resources"
					text="We have some nice resources to help you setup your project and get started as fast as possible."
					:topics="topics"
				/>
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
