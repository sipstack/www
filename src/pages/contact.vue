<script setup lang="ts">
import { contactInfo, faq } from "/@src/data/contact";
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<PageTitle title="Contact" subtitle="Reach Us" />

				<SideContact title="Contact Us" subtitle="Fill out the form below to reach us" :lng="12.550343" :lat="55.665957" :zoom="16" />

				<ContactInfo :infos="contactInfo" />
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Read our FAQs" subtitle="Have a Question?" />

				<FaqListBoxed :items="faq" />

				<CtaBlockB
					title-primary="Start Now!"
					content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
					cta-primary="Free Trial"
					cta-primary-link="/"
					title-secondary="More info?"
					content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
					cta-secondary="Contact Us"
					cta-secondary-link="/"
					boxed
					shapes
					animated
				/>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>