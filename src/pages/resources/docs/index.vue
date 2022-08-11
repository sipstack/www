<script setup lang="ts">
// import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { genericFaq } from "/@src/data-example/blocks/advanced/faq";
// import { boxedPosts } from "/@src/data-example/pages/nft";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
const topics = [
  {
    icon: 'ph:swap-duotone',
    iconColor: 'secondary',
    title: 'API',
    text: 'Check out our API Reference docs for everything SIPSTACK!',
    link: 'api',
  },
  {
    icon: 'ph:files-duotone',
    iconColor: 'primary',
    title: 'Whois',
    text: 'Say goodbye to fraudsters & spammers with Whois.',
    link: 'whois',
  },
  {
    icon: 'ph:atom-duotone',
    iconColor: 'info',
    title: 'Smart CNAM',
    text: 'Integrate intelligent call lookups into any voice network.',
    link: 'smart-cnam',
  },

  {
    icon: 'ph:circles-three-duotone',
    iconColor: 'warning',
    title: 'SIP Free',
    text: 'Lower your operational costs with enhanced SIP Trunks.',
    link: 'sip-free',
  },
]
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <ssHelpCenterHeader
          title="Documentation"
          subtitle="Resources"
          text="Guides to help you setup SIPSTACK products to get started as fast as possible."
          :topics="topics" />
      </Container>
    </Section>
    <!-- 
    <Section color="grey">
      <Container>
        <SectionTitle title="Read our FAQs" subtitle="Have a Question?" />
      </Container>
    </Section> -->

    <ssFooter></ssFooter>
  </div>
</template>
