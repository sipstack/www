<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
// import { contactInfo, faq } from '/@src/data/contact/us'
// import { features } from '/@src/data-example/blocks/features'
import { abuseTypes } from '/@src/data/contact/abuse'
</script>

<template>
  <div>
    <SsHeroSimple
      title="Report Abuse"
      subtitle="Please review the options listed below and let us know your concerns" />

    <!-- <DemoLinks :links="pageLinks" width="400px" /> -->
    <Section>
      <Container>
        <!-- <PageTitle title="Contact" subtitle="Reach Us" /> -->

        <ssFeatureBlockH :features="abuseTypes" :columns="3" :limit="8" links />

        <!-- <ContactInfo :infos="contactInfo" /> -->
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
