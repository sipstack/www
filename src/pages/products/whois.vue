<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
// import { socialLinks } from "/@src/data/sipstack";
const demoLinks = [
	{
		label: "Overview",
		target: "overview",
	},
	{
		label: "Features",
		target: "features",
	},
	{
		label: "Pricing",
		target: "pricing",
	},

	{
		label: "FAQs",
		target: "faqs",
	},
];
const salesFeatures: SimpleIconFeature[] = [
	{
		title: "Trust rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:star-outline",
	},
	{
		title: "Name display",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:user-scan",
	},
	{
		title: "Community feedback",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:input-field",
	},
	{
		title: "Caller details",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:journal",
	},
];

const features: IconFeature[] = [
	{
		title: "Name display",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "primary",
		icon: "iconoir:user-scan",
		link: "/",
	},
	{
		title: "Trust rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "yellow",
		icon: "iconoir:star-outline",
		link: "/",
	},

	{
		title: "Caller details",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "purple",
		icon: "iconoir:journal",
		link: "/",
	},
	{
		title: "Community feedback",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "yellow",
		icon: "iconoir:input-field",
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
		title: "Website",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "red",
		icon: "iconoir:www",
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
		title: "Dynamic rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "orange",
		icon: "iconoir:star-half-dashed",
		link: "/",
	},
];

const faq = {
	left: [
		{
			title: "How much does it cost?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "Does it really work anywhere?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "How does it differ from other tools?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
	],
	right: [
		{
			title: "How does it work?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "Can I try it for free?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "How many agents are allowed?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
	],
};
</script>

<template>
	<div>
		<HeroProducts
			title="Whois"
			subtitle="CallerID name lookup for everyone"
			button1-title="Create account"
			button1-href=""
			button2-title="Try now"
			button2-href="https://whois.sipstack.com"
		/>

		<DemoLinks :links="demoLinks" width="400px" />
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
			</Container>
		</Section>
		<HeroWhois color="" size="medium" />

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
				<PricingSoloCentered
					:features="['Unlimited projects', 'Desktop and mobile app', 'Unlimited tasks', 'Email integration', 'Unlimited time records']"
					:price="0"
					link-label="Start searching"
					link="/"
				/>
			</Container>
		</Section>
		<Section id="faqs" color="">
			<Container>
				<SectionTitle title="Frequently Asked Questions" subtitle="FAQs" />
				<DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<CtaBlockJ small-text="Get started" title="Smarter CNAM Begin Here" subtitle="Credit card not required to sign up.">
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
