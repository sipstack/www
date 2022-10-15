<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks, features, faq } from '/@src/data/products/smart-cnam'
// import { pricingBlockPlans } from '/@src/data-example/blocks/advanced/pricing'
const pricingBlockPlans = [
  {
    name: 'Score / Risk',
    text: '0.000 - 4.999 risk rating',
    monthlyPrice: 0.001,
    yearlyPrice: 0,
    features: ['Risk Score', '--', '--', '--', '--', '--'],
  },
  {
    name: 'CNAM',
    text: 'Caller ID Name lookup',
    monthlyPrice: 0.003,
    yearlyPrice: 0,
    features: ['CallerID Name', '--', '--', '-', '--', '--'],
  },
  {
    name: 'Regional',
    text: 'Geo location',
    monthlyPrice: 0.002,
    yearlyPrice: 0,
    features: [
      'City',
      'Region (State / Province)',
      'Country',
      'Longitude',
      'Latitude',
      '--',
    ],
  },
  {
    name: 'Telco',
    text: 'Carrier & phone type',
    monthlyPrice: 0.002,
    yearlyPrice: 0,
    features: [
      'Carrier (ILEC)',
      'Company (OC(N))',
      'Provider (Reseller)',
      'Line Type',
      'Lata / Lir',
      'Ratecenter & Switch',
    ],
  },
]
</script>

<template>
  <div>
    <ssHeroProducts
      title="Smart CNAM"
      subtitle="Caller ID lookups just got smarter"
      button1-title="Create account"
      button1-href="/signup"
      button2-title="Try Whois"
      button2-href="https://whois.sipstack.com" />

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
        <SectionTitle
          title="Integrate Smart CNAM anywhere"
          subtitle="Overview" />
        <ssDevWindows />
        <CollectionTitle
          title="Add CNAM lookup to your call flows"
          subtitle="With a few lines, get real-time CNAM data and risk score, or simply request Caller ID only."></CollectionTitle>
        <br />
        <ssTimelineCodeWindow />
        <SsBlockWhois></SsBlockWhois>
      </Container>
    </Section>

    <Section id="features" color="grey">
      <Container>
        <SectionTitle
          title="Smart CNAM ratings dynamically retreived in real-time"
          subtitle="Features" />
        <FeatureBlockH :features="features" :columns="6" :limit="2" />
        <!-- <ssFeatureBlockJ :features="features" /> -->
      </Container>
    </Section>

    <Section id="pricing" bordered-bottom>
      <Container>
        <SectionTitle title="Smart CNAM Solutions" subtitle="Pricing" />
        <div>&nbsp;</div>
        <!-- <PricingSoloCentered :features="pricing.features" :price="pricing.price" link-label="Start searching" link="/" /> -->
        <ssPricingBlock :plans="pricingBlockPlans" />
        <!-- <ssPricingSolo
          title="Smart CNAM pricing"
          subtitle="Free API requests for Partners when destination included in query."
          monthly-tab="Partner billing"
          yearly-tab="Vertical billing"
          :features="[
            'Caller ID Name',
            'Dynamic call score',
            'Regional data',
            'Website (+)',
            'Address (+)',
            'Emails (+)',
            'Social (+)',
            'Community Feedback (+)',
            'Caller Badges (+)',
          ]"
          :monthly-price="0"
          :yearly-price="0.001"
          monthly-per="Starting from, per request"
          yearly-per="Starting from, per request"
          link-label="Start Free Trial"
          link="/signup" /> -->
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
        <SsCtaDefault
          small-text="Get started"
          title="Smarter CNAM Begin Here"
          subtitle="Credit card not required to sign up."></SsCtaDefault>
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
