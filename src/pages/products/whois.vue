<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, pricing, faq } from "/@src/data/products/whois";
</script>

<template>
	<div>
		<ssHeroProducts
			title="Whois"
			subtitle="Advanced CallerID name lookup for everyone"
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
					title="Say goodbye to spam calls"
					content="Find out who is calling with trust ratings dynamic for your location. Powered by AI and community users like you."
					:features="features"
					image="/assets/img/whois-mobile.png"
					image-width="900"
					image-height="788"
					:limit="4"
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
				<ssPricingSoloCentered :features="pricing.features" :price="pricing.price" :price-per="pricing.pricePer" link-label="Start searching" link="/r/whois" />
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
				<CtaBlockJ small-text="Integrate" title="Smarter CNAM Begins Here" subtitle="Integrate your systems with Smart CNAM for Free">
					<!-- <form>
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
					</form> -->
					<Button size="form" color="primary" :long="2" to="/products/smart-cnam"> Learn more </Button>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
