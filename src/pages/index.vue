<route lang="yaml">
meta:
  layout: default
  transition: fade-slow
</route>

<script setup lang="ts">
import { ssProducts, featuresBeyond, featuresPreview } from "/@src/data/sipstack";
</script>


<template>
	<div>
		<HeroHome />
		<Section wave="wave-2">
			<Container>
				<CollectionTitle
					title="Beyond Marc"
					subtitle="Not just for telecommunication providers, SIPSTACK integrates into any system tapping into telco meta-data like never before."
				></CollectionTitle>
				<ssFeatureBlockJ :features="featuresBeyond" />

				<!-- <SectionTitle title="Beyond Unified Communications" subtitle="Amazing Features" />
				<BoxedFeatures :features="ssProducts" /> -->

				<!-- <SectionTitle title="Beyond Unified Communications" subtitle="Amazing Features" /> -->
				<ssGlobeStats />
				<!-- <BoxedFeatures :features="ssProducts" /> -->

				<!-- <ContentBlockB
          :title="productStacks.title"
          :subtitle="productStacks.subtitle"
          :text="productStacks.text"
          :images="productStacks.images"
        /> -->
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Beyond Unified Communications" subtitle="Amazing Features" />

				<ssBoxedFeatures :features="ssProducts" />
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="Your next UCaaS platform, powered by AI & you" subtitle="Cloud UC" />
				<FeatureBlockC :features="featuresPreview" :limit="3" size="medium" animated />
				<img class="text-center" src="/assets/img/cloud-uc-preview.png" alt="TELAIR Success" />
			</Container>
		</Section>

		<!-- <Section>
			<Container>
				<BoxedSection
					minititle="Join Early Access!"
					title="Your next UCaaS platform, powered by AI & you"
					subtitle="NEXT GENERATION TELECOMMUNICATION SUITE"
					content="The first-ever AI Optimizated UC Platform, designed for connecting a safer, trusted future, today."
					image="/assets/illustrations/chart/circular-people-chart.png"
					dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
					cta="Learn more about our products"
					to="index"
				/>
			</Container>
		</Section> -->

		<!-- <Section>
			<Container>
				<SectionTitle title="Sneak Peek of Cloud UC" subtitle="Preview" />
				<Buttons alignment="centered" class="py-5">
					<Button href="https://discord.cssninja.io/" color="primary" :long="2" icon-left="fa-brands:docker" raised>
						<span>Docker</span>
					</Button>
					<Popover custom spacing="medium" arrow hover>
						<template #popover>
							<IconPopover icon="codicon:github-alt" color="purple" heading="GitHub access" content="Send us your GitHub username at https://support.cssninja.io" />
						</template>
						<Button :long="2" icon-left="fa-brands:github" raised>
							<span>GitHub</span>
						</Button>
					</Popover>
				</Buttons>
				<div class="video-player-container-wrapper pb-6">
					<Player ratio="16by9" source="https://www.youtube.com/embed/H8Hx_1lLh2E?start=20&autoplay=1&mute=1&controls=0&rel=0&fs=0" title="Vulk | Overview & Quickstart" embed />
					<Player
            ratio="16by9"
            source="/assets/video/meeting.mp4"
            poster="/assets/screenshots/vulk-yt-cover.png"
            title="video title"
          />
				</div>
			</Container>
		</Section> -->

		<SsCaseStudyTelair></SsCaseStudyTelair>

		<Section color="grey">
			<Container>
				<ssCtaDefault small-text="Get Started" title="Start Connecting" subtitle="Seen enough? It's free to start now.">
					<!-- <Field grouped>
						<Control expanded icon="feather:mail">
							<VInput placeholder="Email Address" />
						</Control>
						<Control>
							<Button size="form" color="primary" :long="2" bold raised> Create account </Button>
						</Control>
					</Field> -->
				</ssCtaDefault>
			</Container>
		</Section>
		<ssFooter></ssFooter>
	</div>
</template>
