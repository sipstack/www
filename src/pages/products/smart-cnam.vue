<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, faq, cta } from "/@src/data/products/smart-cnam";
</script>

<template>
	<div>
		<ssHeroProducts
			title="Smart CNAM"
			subtitle="Caller ID lookups just got smarter"
			button1-title="Create account"
			button1-href="/get-started"
			button2-title="Try Whois"
			button2-href="https://whois.sipstack.com"
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

		<Section id="overview" :bottom-narrow="true">
			<Container>
				<SectionTitle title="Integrate Smart CNAM simply with curl" subtitle="Overview" />
				<ssDevWindows />
				<CollectionTitle
					title="Add CNAM lookup to your call flows"
					subtitle="With a few lines, get real-time CNAM data and risk score, or just pluging free Caller ID"
				></CollectionTitle
				><br />
				<ssTimelineCodeWindow />
				<SsBlockWhois></SsBlockWhois>
			</Container>
		</Section>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Smart CNAM ratings dynamically retreived in real-time" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="3" :limit="8" />
			</Container>
		</Section>

		<Section id="pricing" bordered-bottom>
			<Container>
				<SectionTitle title="Free for everyone" subtitle="Pricing" />
				<div>&nbsp;</div>
				<!-- <PricingSoloCentered :features="pricing.features" :price="pricing.price" link-label="Start searching" link="/" /> -->
				<PricingSolo
					title="Solution pricing"
					subtitle="All features you'll ever need to run a project"
					:features="[
						'Unlimited projects',
						'Desktop and mobile app',
						'Unlimited tasks',
						'Email integration',
						'Unlimited time records',
						'Client management',
						'Task dependencies',
						'Budget tracking',
						'Recurring tasks',
						'Advanced reports',
					]"
					:monthly-price="7"
					:yearly-price="79"
					link-label="Start Free Trial"
					link="/"
				/>
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
				<CtaBlockJ small-text="Get started" :title="cta.title" :subtitle="cta.subtitle">
					<form>
						<Field grouped>
							<Control icon="feather:mail" expanded>
								<VInput placeholder="Email" />
							</Control>
							<Control icon="feather:lock" expanded>
								<VInput placeholder="Password" password />
							</Control>
							<Control>
								<Button size="form" color="primary" :long="2"> Create account </Button>
							</Control>
						</Field>
					</form>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
