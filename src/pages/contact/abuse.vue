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
      subtitle="Please let us know of any abuse from our network" />

    <!-- <DemoLinks :links="pageLinks" width="400px" /> -->
    <Section>
      <Container>
        <!-- <ssFeatureBlockH :features="abuseTypes" :columns="3" :limit="8" links /> -->
        <ssAbuseForm />
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
