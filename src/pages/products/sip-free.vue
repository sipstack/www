<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, workoutTimeline, features, pricing, faq } from "/@src/data/products/sip-free";
</script>

<template>
	<div>
		<HeroProducts title="SIP Free" subtitle="Unlimited SIP termination to toll free numbers in North America" button1-title="Create account" button1-href="/get-started" />

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
				<SectionTitle title="Get Started &#8212; It's Free" subtitle="Overview" />

				<ssSubscriptionCompactBlock
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam."
					label="Create account"
					placeholder="Enter your email"
				/>

				<TimelineFeatures :items="workoutTimeline" />
			</Container>
		</Section>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Whois does it all" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="3" :limit="8" />
			</Container>
		</Section>

		<Section id="pricing" bordered-bottom>
			<Container>
				<SectionTitle title="Free for everyone" subtitle="Pricing" />
				<div>&nbsp;</div>
				<PricingSoloCentered :features="pricing.features" :price="pricing.price" link-label="Start searching" link="/" />
			</Container>
		</Section>

		<Section id="faqs">
			<Container>
				<SectionTitle title="Frequently Asked Questions" subtitle="FAQs" />
				<DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<CtaBlockJ
					small-text="Help us go further"
					title="Become a supporter"
					subtitle="Your help will alow us to expand this product and by meeting sponsorship goals will allow us to expand this product beyond just Toll Free termination."
				>
					<Button size="medium" color="dark" :long="2" icon-left="fa:github"> Sponsor us on GitHub </Button>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
