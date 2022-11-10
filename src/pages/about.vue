<script setup lang="ts">
// import { customerLogos } from "/@src/data-example/pages/logos";
import { iconValues, founders, longTeam, gridTeam } from '/@src/data/about'
</script>

<template>
  <div>
    <Section id="story" color="grey">
      <Container>
        <CompanyStory
          main-title="Our Story"
          secondary-title="Our Mission"
          main-text="While every aspect of our lives are changing, from social to econimcal, we are all apart of the same transition. While spending over two decades imrpoving managed telecom solutions, many problems in the industry were identified that continue to persist without real solutions. SIPSTACK was founded to begin solving some of these problems by creating a unified management platform for Asterisk that is elastic by nature, and could scale and adapt while maintaining a single point of administration and access. This has become Cloud UC, the PBX management tool every carrier and provider has been waiting for. Although efforts have been made to stop fraudulent calls with technology, it is a 55 billion dollar industry in the US alone."
          secondary-text="Our products are designed with two purposes, first to provide next generation experiences and services to the telecommunications industry, and secondly to eradicate fraudulent and spam calling, period. By driving authentic data through our AI/ML models, community feedback and various other data collection methods, we are able to provide hyper-accurate call ratings that are dynamic to the recipient of the call. While our efforts are only in the beginning stages, we will be targeting this epidemic from all levels and angles to end this era of fraud for good."
          :images="{
            imageOne: '/assets/img/team-v-5.jpg',
            imageTwo: '/assets/img/team-v-11.jpg',
            imageThree: '/assets/img/team-v-6.jpg',
            imageFour: '/assets/img/team-v-7.jpg',
            imageFive: '/assets/img/team-v-9.jpg',
            imageSix: '/assets/img/team-v-10.jpg',
          }"
          reverse />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Our Company Values" subtitle="Dedicated Team" />

        <ValuesIconSection :values="iconValues" polka-dots />

        <!-- <LogoMarquee :logos="customerLogos" compact /> -->
      </Container>
    </Section>

    <Section id="team">
      <Container>
        <SectionTitle title="About Our Founder" subtitle="Meet the team" />

        <ssFoundersSection :founders="founders" :limit="1" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle title="About Our Leaders" subtitle="Meet the team" />

        <ssTeamBlockC :items="longTeam" bubbles :limit="4" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle title="About Our Talent" subtitle="Meet the team" />

        <ssTeamBlockE :items="gridTeam" :limit="6" shapes />
      </Container>
    </Section>

    <Section>
      <Container>
        <!-- <ValuesSection :values="plantValues" image-height="130px" /> -->

        <ssCtaBlockB
          title-primary="We're Hiring!"
          content-primary="Interested in changing the world? Check our our current job offers regularly."
          cta-primary="Job offers"
          cta-primary-link="/jobs"
          title-secondary="Help us grow"
          content-secondary="Like what we're doing and want to contribute to our products and offers?"
          cta-secondary="Sponsor page"
          cta-secondary-link="https://github.com/sponsors/sipstack"
          boxed
          shapes
          animated
          color="darker" />
      </Container>
    </Section>

    <Section id="media" color="grey">
      <Container>
        <div class="mb-6">
          <SectionTitle title="Recent articles" subtitle="Media" />
        </div>

        <!-- <PressSection :releases="press" /> -->

        <CtaBlockA
          title="Media Kit"
          subtitle="Interested in learning more about our products and are a social reviewer?"
          cta-primary="Request kit"
          cta-primary-link="/contact/us"
          cta-secondary="Learn More"
          cta-secondary-link="/resources/media-kit"
          boxed
          shapes />
        <!-- :logos="customerLogos" -->
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
