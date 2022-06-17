<route lang="yaml">
meta:
  layout: default
  transition: fade-slow
</route>

<script setup lang="ts">
import { ssProducts } from "/@src/data/sipstack";
import { features8 } from "/@src/data-example/blocks/features";

const features: IconFeature[] = [
	{
		title: "Campaigns",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "primary",
		icon: "feather:mail",
		link: "/",
	},
	{
		title: "Task Management",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "green",
		icon: "feather:briefcase",
		link: "/",
	},
	{
		title: "Personal Dashboard",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "info",
		icon: "feather:grid",
		link: "/",
	},
	{
		title: "Payment Gateways",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "purple",
		icon: "feather:credit-card",
		link: "/",
	},
	{
		title: "Time Management",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "yellow",
		icon: "feather:clock",
		link: "/",
	},
	{
		title: "Notifications",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "red",
		icon: "feather:bell",
		link: "/",
	},
	{
		title: "Social Integrations",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "success",
		icon: "feather:facebook",
		link: "/",
	},
	{
		title: "Instant Messaging",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "orange",
		icon: "feather:message-circle",
		link: "/",
	},
];
</script>


<template>
	<div>
		<HeroHome />
		<Section wave="wave-2">
			<Container>
				<CollectionTitle
					title="Beyond Telecom"
					subtitle="Not just for telecommunication providers, SIPSTACK integrates into any system tapping into data like never before."
				></CollectionTitle>
				<ssFeatureBlockJ :features="features8" links />

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

				<BoxedFeatures :features="ssProducts" />
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="Sneak Peek of Cloud UC" subtitle="Preview" />
				<FeatureBlockC :features="features" :limit="3" size="medium" links animated />
			</Container>
		</Section>

		<Section>
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
		</Section>

		<Section>
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
					<!-- <Player
            ratio="16by9"
            source="/assets/video/meeting.mp4"
            poster="/assets/screenshots/vulk-yt-cover.png"
            title="video title"
          /> -->
				</div>
			</Container>
		</Section>

		<Section>
			<Container>
				<CaseStudy background="/assets/img/1.jpeg">
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

		<Section color="grey">
			<Container>
				<CtaBlockJ small-text="Get Started" title="Start Connecting" subtitle="Seen enough? It's free to start now.">
					<Field grouped>
						<Control expanded icon="feather:mail">
							<VInput placeholder="Email Address" />
						</Control>
						<Control>
							<Button size="form" color="primary" :long="2" bold raised> Create account </Button>
						</Control>
					</Field>
				</CtaBlockJ>
			</Container>
		</Section>
		<ssFooter></ssFooter>
	</div>
</template>
