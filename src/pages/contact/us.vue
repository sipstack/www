<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { contactInfo, faq } from '/@src/data/contact/us'
</script>

<template>
  <div>
    <ssHeroProducts
      title="Contact"
      subtitle="Have questions? Please review our resources or contact us."
      button1-title="Knowledge Base"
      button1-href="/resources/knowledge-base"
      button2-title="Frequently Asked Questions"
      button2-href="/contact/us#faq" />

    <!-- <DemoLinks :links="pageLinks" width="400px" /> -->
    <Section>
      <Container>
        <!-- <PageTitle title="Contact" subtitle="Reach Us" /> -->

        <ssSideContact
          title="Contact Us"
          subtitle="General contact or department specific below"
          :lng="12.550343"
          :lat="55.665957"
          :zoom="16" />

        <ContactInfo :infos="contactInfo" />
      </Container>
    </Section>

    <Section id="faq" color="grey">
      <Container>
        <SectionTitle title="Read our FAQs" subtitle="Have a Question?" />

        <FaqListBoxed :items="faq" />

        <CtaBlockB
          title-primary="Start Now!"
          content-primary="Seen enough? It's free to open an account and get started with SIPSTACK."
          cta-primary="Create account"
          cta-primary-link="/signup"
          title-secondary="Become a Contributor."
          content-secondary="Want to help contribute to Cloud UC open source code or community support?"
          cta-secondary="Join the team"
          cta-secondary-link="/r?href=https://github.com/sipstack/sipstack/discussions"
          boxed
          shapes
          animated />
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
