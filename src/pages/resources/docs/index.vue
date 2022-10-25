<script setup lang="ts">
// import { helpCenterTopics, helpCenterCategories } from "/@src/data/help/example";
// import { genericFaq } from "/@src/data-example/blocks/advanced/faq";
// import { boxedPosts } from "/@src/data-example/pages/nft";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
const topics = [
  {
    icon: 'iconoir:app-window',
    iconColor: 'primary',
    title: 'Partner Portal',
    text: 'Access all of our products through one centralized portal.',
    link: 'partner-portal',
  },
  //   {
  // icon: 'arcticons:live-transcribe',
  //     iconColor: 'primary',
  //     title: 'SIPSTACK UC',
  //     text: 'Manage your unified communications offering throught one central platform!',
  //     link: 'sipstack-uc',
  //   },
  {
    icon: 'iconoir:pc-check',
    iconColor: 'primary',
    title: 'Whois',
    text: 'Say goodbye to fraudsters & spammers with Whois Profiles.',
    link: 'whois',
  },
  {
    icon: 'iconoir:shield-search',
    iconColor: 'primary',
    title: 'Smart CNAM',
    text: 'Integrate intelligent call lookups into any voice network.',
    link: 'smart-cnam',
  },

  {
    icon: 'iconoir:glass-empty',
    iconColor: 'primary',
    title: 'SIP Free',
    text: 'Lower your operational costs with enhanced SIP Trunks.',
    link: 'sip-free',
  },
  //   {
  // icon: 'arcticons:live-transcribe',
  //     iconColor: 'purple',
  //     title: 'SIP Scribe',
  //     text: 'Transcribe phone calls and voicemails with our AI powered service!',
  //     link: 'sip-scribe',
  //   },
  //   {
  // icon: 'arcticons:eset-security',
  //     iconColor: 'danger',
  //     title: 'SIP Guard',
  //     text: 'Secure your communication offering with our propriety security product!',
  //     link: 'sip-scribe',
  //   },
  //   {
  // icon: 'ph:swap-duotone',
  //     iconColor: 'secondary',
  //     title: 'API',
  //     text: 'Check out our API Reference docs for everything SIPSTACK!',
  //     link: 'api',
  //   },
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
