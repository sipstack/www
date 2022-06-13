<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
// import {
//   meetingFeatures,
//   statistics,
//   testimonials,
//   posts,
// } from '/@src/data/pages/meetings'
// import { customerLogos } from '/@src/data/pages/logos'
// import { heroFeatures } from '/@src/data/products/whois'
import { socialLinks } from '/@src/data/sipstack'
</script>

<template>
  <div>
    <HeroWhois />

    <!-- <Section>
      <Container>
        <SectionTitle
          title="Say Hello to Productive Meetings"
          subtitle="Hi Performing Application"
        />

        <AppSection
          :features="heroFeatures"
          image="/assets/illustrations/apps/meeting-app.png"
          dark-image="/assets/illustrations/apps/meeting-app-dark.png"
        />
      </Container>
    </Section> -->

    <FooterCC
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    >
      <!-- <cookie1></cookie1> -->
    </FooterCC>
  </div>
</template>
