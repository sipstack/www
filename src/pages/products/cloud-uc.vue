<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, content3, features, faq } from "/@src/data/products/cloud-uc";
</script>

<template>
	<div>
		<ssHeroProducts title="Cloud UC" subtitle="The VoIP management console you've been waiting for" button1-title="Request invite" button1-href="/get-started" />

		<DemoLinks :links="pageLinks" width="400px" />

		<Section id="overview">
			<Container>
				<ssSideSection
					subtitle="Overview"
					title="Level up your hosted PBX service offering"
					content="Cloud UC is a unified communications platform, open source and asterisk based, that allows you to scale and manage from a single console. Cloud UC augments Smart CNAM and other rich data into all elements of the experience."
					image="/assets/img/console-pbx.jpeg"
					image-width="800"
					image-height="625"
					to="/"
					image-mockup
				>
					<template #content>
						<QuickFeatures class="mt-4" :features="['Multi-brand', 'Multi-tenant', 'Self-hosted']" />
					</template>
				</ssSideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<SideSection
					reverse
					title="Create multiple whitelabel brands"
					subtitle=""
					content="Whether you want to allow re-sellers Cloud UC capabiltities while managing & scaling hosts for them or if you are expanding into different markets, Cloud UC allows the creation of multiple brands for whitelabeling."
					image="/assets/img/create-brand.png"
					dark-image="/assets/img/create-brand.png"
					image-width="967"
					image-height="800"
					blob
				>
				</SideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<SideSection
					title="Multi-tenant access across hosts"
					subtitle=""
					content="Create tenants in the cloud, or on premise & continue to manage and provide access through your branded portal regardless of location. Users can also access their portals through your branded domain and whitelabel portal."
					image="/assets/img/create-pbx.png"
					dark-image="/assets/img/create-pbx.png"
					image-width="967"
					image-height="800"
					blob
					to="index"
				>
				</SideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<ssSideSection
					reverse
					subtitle=""
					title="Branded desktop & mobile experience"
					content="Customize domain, theme color and logo with your own. Offer customers an enhanced experience tailored to your existing brand."
					image="/assets/img/cloud-uc_hamburger.png"
					dark-image="/assets/img/cloud-uc_hamburger.png"
					image-width="383"
					image-height="682"
					blob
					style="width: 200px"
				>
				</ssSideSection>
			</Container>
		</Section>

		<Section>
			<Container>
				<ContentBlockB :title="content3.title" subtitle="" :text="content3.text" :images="content3.images" squared />
			</Container>
		</Section>

		<SsCaseStudyTelair></SsCaseStudyTelair>

		<Section id="features" color="grey">
			<Container>
				<SectionTitle title="Asterisk trusted, AI/ML augmented data" subtitle="Features" />
				<FeatureBlockH :features="features" :columns="3" :limit="4" />
				<!-- <SectionTitle title="Three reasons you’ll love our solution" />
				<TabbedSectionCentered /> -->
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

		<Section color="grey">
			<Container>
				<CtaBlockJ small-text="Get started" title="See the future" subtitle="Request your access to a limited preview">
					<form>
						<Field grouped>
							<Control icon="feather:mail" expanded>
								<VInput placeholder="Email" />
							</Control>
							<!-- <Control icon="feather:lock" expanded>
								<VInput placeholder="Password" password />
							</Control> -->
							<Control>
								<Button size="form" color="primary" :long="2"> Create account & request invite </Button>
							</Control>
						</Field>
					</form>
				</CtaBlockJ>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
