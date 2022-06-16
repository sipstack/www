<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, pricing, faq } from "/@src/data/products/cloud-uc";
</script>

<template>
	<div>
		<HeroProducts title="Cloud UC" subtitle="The VoIP management console you've been waiting for" button1-title="Request invite" button1-href="/get-started" />

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
				<ssSideSection
					subtitle="Overview"
					title="Market based DSP managed service"
					content="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
					image="/assets/img/ss-hub-dashboard.jpeg"
					dark-image="/assets/illustrations/features/feature-1-dark.png"
					image-width="800"
					image-height="625"
					to="/"
					image-mockup
				>
					<template #content>
						<QuickFeatures class="mt-4" :features="['Budget efficiency', 'Focus on your work']" />
					</template>
				</ssSideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<SideSection
					reverse
					title="Build campaigns aligned to your goals in minutes"
					content="Start with your business goals at a product level and let us automatically create ad groups and campaigns targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
					image="/assets/illustrations/features/feature-2.png"
					dark-image="/assets/illustrations/features/feature-2-dark.png"
					image-width="967"
					image-height="800"
					blob
					to="/"
				>
					<template #content>
						<QuickFeatures class="mt-4" :benefits="['By product campaigns', 'Buyer targeting']" />
					</template>
				</SideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<SideSection
					title="We find the best keywords based on your parameters"
					content="Automate and customize your keyword selection by setting thresholds on conversions, cost per conversion, and click rates, and free up valuable time you can use for other important business tasks."
					image="/assets/illustrations/features/feature-3.png"
					dark-image="/assets/illustrations/features/feature-3-dark.png"
					image-width="967"
					image-height="800"
					blob
					to="index"
				>
					<template #content>
						<!--Hero Benefits-->
						<QuickFeatures class="mt-4" :benefits="['Add / remove keywords', 'Automatic refine']" />
					</template>
				</SideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<SideSection
					reverse
					title="Understand your business metrics, your way"
					content="Drill and slice into your advertising performance data by different metrics, brand names, campaigns, targeting types, and more."
					image="/assets/illustrations/features/feature-4.png"
					dark-image="/assets/illustrations/features/feature-4-dark.png"
					image-width="967"
					image-height="800"
					blob
					to="index"
				>
					<template #content>
						<!--Hero Benefits-->
						<QuickFeatures class="mt-4" :benefits="['Assess profitability', 'Export bulk data']" />
					</template>
				</SideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<CaseStudy background="data:image/gif;base64,replace_with_your_image">
					<SideSection
						subtitle="Success Stories"
						title="Learn how they built a successful business"
						content="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
						image="/assets/illustrations/features/feature-3.png"
						dark-image="/assets/illustrations/features/feature-3-dark.png"
						image-width="967"
						image-height="800"
						cta="Read success stories"
						inverted
						to="index"
					/>
				</CaseStudy>
			</Container>
		</Section>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Whois does it all" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="3" :limit="8" />
				<SectionTitle title="Three reasons you’ll love our solution" />

				<TabbedSectionCentered />
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
				<CtaBlockJ small-text="Get started" title="See the future" subtitle="Request your access to our limited preview before launch">
					<form>
						<Field grouped>
							<Control icon="feather:mail" expanded>
								<VInput placeholder="Email" />
							</Control>
							<!-- <Control icon="feather:lock" expanded>
								<VInput placeholder="Password" password />
							</Control> -->
							<Control>
								<Button size="form" color="primary" :long="2"> Request invite </Button>
							</Control>
						</Field>
					</form>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
