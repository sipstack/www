<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, faq } from '/@src/data/products/sip-guard'
</script>

<template>
  <div>
    <ssHeroProducts
      title="SIP Guard"
      subtitle="Protect your voice infrastructure"
      button1-title="Request invite"
      button1-href="/signup"
      button2-title=""
      button2-href="" />

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
        <SectionTitle title="Hackers &#8212; no more" subtitle="Overview" />

        <ssSubscriptionCompactBlock
          text="Protect your voice infrastructure, in cloud or on-premise from bad actors. Become (FCC) compliant with the TRACED Act by stopping robocalls, unauthorized SIP registrations, provisioning server scraping, and spoofing with SIP Guard by SIPSTACK"
          label="Request invite"
          placeholder="Enter your email" />

        <!--	<TimelineFeatures :items="timeline" /> -->
      </Container>
    </Section>

    <Section id="features" color="grey">
      <Container>
        <SectionTitle
          title="Choose one or choose them all"
          subtitle="Features" />
        <FeatureBlockH :features="features" :columns="6" :limit="4" />
      </Container>
    </Section>

    <Section id="pricing" bordered-bottom>
      <Container>
        <SectionTitle title="Pricing not available" subtitle="Pricing" />
        <div>&nbsp;</div>
        <Subtitle
          tag="h3"
          :size="6"
          weight="thin"
          leading
          style="text-align: center">
          Stay tuned for updates.
        </Subtitle>
        <!-- <PricingSoloCentered :features="pricing.features" :price="pricing.price" link-label="Start searching" link="/" /> -->
      </Container>
    </Section>

    <Section id="faqs">
      <Container>
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQs" />
        <!-- <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons /> -->
        <div>&nbsp;</div>
        <Subtitle
          tag="h3"
          :size="6"
          weight="thin"
          leading
          style="text-align: center">
          Stay tuned for updates.
        </Subtitle>
      </Container>
    </Section>

    <!--	<Section color="grey">
			<Container>
				<CtaBlockJ
					small-text="Help us go further"
					title="Become a supporter"
					subtitle="Your contributions to our sponsorship goals will allow us to expand this product to additional regions & destinations."
				>
					<Button size="medium" color="dark" :long="2" icon-left="fa:github" href="https://github.com/sponsor/sipstack"> Sponsor us on GitHub </Button>
				</CtaBlockJ>
			</Container>
		</Section> -->

    <ssFooter></ssFooter>
  </div>
</template>
