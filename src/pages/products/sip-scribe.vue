<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, faq } from "/@src/data/products/sip-scribe";
</script>

<template>
	<div>
		<ssHeroProducts
			title="SIP Scribe"
			subtitle="Transcribe voice with ease"
			button1-title="Request invite"
			button1-href="/signup"
			button2-title=""
			button2-href=""
		/>

		<DemoLinks :links="pageLinks" width="400px" />
		<!-- <PageTitle
      title="Make it count again"
      subtitle="Get Started"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
    >
      <template #content>
        <Buttons alignment="centered" class="mt-4">
          <Button color="primary" :long="3" bold raised>Get Started</Button>
          <Button :long="3" bold>Learn More</Button>
        </Buttons>
      </template>
    </PageTitle> -->
		<Section id="overview">
			<Container>
				<SectionTitle title="You say it &#8212; we type it" subtitle="Overview" />

				<ssSubscriptionCompactBlock
					text="Leverge our next generation AI/ML algorithms to simply transcribe voicemails or phone calls"
					label="Request invite"
					placeholder="Enter your email"
				/>

			<!--	<TimelineFeatures :items="timeline" /> -->
			</Container>
		</Section>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Plug & play transcription" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="6" :limit="2" />
			</Container>
		</Section>

	    <Section id="pricing" bordered-bottom>
			<Container>
				<SectionTitle title="Pricing not available" subtitle="Pricing" />
				<div>&nbsp;</div>
				<Subtitle tag="h3" :size="6" weight="thin" leading style="text-align: center"> Stay tuned for updates. </Subtitle>
				<!-- <PricingSoloCentered :features="pricing.features" :price="pricing.price" link-label="Start searching" link="/" /> -->
			</Container>
		</Section>


		<Section id="faqs">
			<Container>
				<SectionTitle title="Frequently Asked Questions" subtitle="FAQs" />
				<DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
			</Container>
		</Section>

	<!--	<Section color="grey">
			<Container>
				<CtaBlockJ
					small-text="Help us go further"
					title="Become a supporter"
					subtitle="Your contributions to our sponsorship goals will allow us to expand this product to additional regions & destinations."
				>
					<Button size="medium" color="dark" :long="2" icon-left="fa:github" href="https://github.com/sponsor/sipstack"> Sponsor us on GitHub </Button>
				</CtaBlockJ>
			</Container>
		</Section> -->

		<ssFooter></ssFooter>
	</div>
</template>
