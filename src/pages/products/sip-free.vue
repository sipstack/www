<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, timeline, features, pricing, faq } from "/@src/data/products/sip-free";
</script>

<template>
	<div>
		<ssHeroProducts title="SIP Free" subtitle="Unlimited SIP termination to toll free numbers in North America" button1-title="Create account" button1-href="/get-started" />

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
					text="Simple SIP Trunking with free termination to North Americal Toll-Free destination. Supporting ULAW, G729, G722 and T.38 where available."
					label="Create account"
					placeholder="Enter your email"
				/>

				<TimelineFeatures :items="timeline" />
			</Container>
		</Section>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Plug & play SIP termination" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="6" :limit="2" />
			</Container>
		</Section>

		<Section id="pricing" bordered-bottom>
			<Container>
				<SectionTitle title="Absolutely Free" subtitle="Pricing" />
				<div>&nbsp;</div>
				<ssPricingSoloCentered :features="pricing.features" :price="pricing.price" :price-per="pricing.pricePer" link-label="Integrate SIP Free" link="https://hub.sipstack.com" />
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
					subtitle="Your help will alow us to expand this product by contributing to our sponsorship goals that would allow us to expand this product to additional destinations."
				>
					<Button size="medium" color="dark" :long="2" icon-left="fa:github" href="https://github.com/sponsor/sipstack"> Sponsor us on GitHub </Button>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
