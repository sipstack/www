<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, salesFeatures, features, pricing, faq, cta } from "/@src/data/products/whois";
</script>

<template>
	<div>
		<ssHeroProducts
			title="Whois"
			subtitle="CallerID name lookup for everyone"
			button1-title="Create account"
			button1-href="/get-started"
			button2-title="Try now"
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
		<Section id="overview">
			<Container>
				<SideSectionIcons
					subtitle="Overview"
					title="Say goodbye to spammers"
					content="Find out whos calling with trust ratings dynamic for your location. Powered by AI and community users like you."
					:features="salesFeatures"
					image="/assets/img/whois-mobile.png"
					image-width="900"
					image-height="788"
					blob
					reverse
				/>
				<SsBlockWhois></SsBlockWhois>
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
				<CtaBlockJ small-text="Integrate" :title="cta.title" :subtitle="cta.subtitle">
					<form>
						<Field grouped>
							<Control icon="feather:mail" expanded>
								<VInput placeholder="Email" />
							</Control>
							<!-- <Control icon="feather:lock" expanded>
								<VInput placeholder="Password" password />
							</Control> -->
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
