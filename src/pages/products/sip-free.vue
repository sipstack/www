<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { socialLinks } from '/@src/data/sipstack'
const demoLinks = [
  {
    label: 'Overview',
    target: 't1',
  },
  {
    label: 'Features',
    target: 't2',
  },
  {
    label: 'Pricing',
    target: 't3',
  },
  {
    label: 'FAQs',
    target: 't3',
  },
]
</script>

<template>
  <div>
    <HeroProducts
      title="SIP Free"
      subtitle="Unlimited Toll-free call termination in North America, for FREE"
    />

    <DemoLinks :links="demoLinks" width="400px" />
    <Section id="t1" bordered-bottom>
      <Container>
        <CtaBlockJ
          small-text="14-Day Trial"
          title="Start Building"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        >
          <Field grouped>
            <Control expanded icon="feather:mail">
              <VInput placeholder="Email Address" />
            </Control>
            <Control>
              <Button size="form" color="primary" :long="2" bold raised>
                Get Started
              </Button>
            </Control>
          </Field>
        </CtaBlockJ>
      </Container>
    </Section>
    <Section id="t2" bordered-bottom>
      <Container>
        <CtaBlockJ
          small-text="14-Day Trial"
          title="Start Building"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        >
          <Field grouped>
            <Control expanded icon="feather:mail">
              <VInput placeholder="Email Address" />
            </Control>
            <Control>
              <Button size="form" color="primary" :long="2" bold raised>
                Get Started
              </Button>
            </Control>
          </Field>
        </CtaBlockJ>
      </Container>
    </Section>
    <!-- <Section color="grey" wave="wave-2" shape-color="footer-dark">
      <Container>
        <CompanyGrid class="-mt-6" title="The best insurance deals" />
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
