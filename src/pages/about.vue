<script setup lang="ts">
// import { customerLogos } from "/@src/data-example/pages/logos";
import { iconValues, founders, longTeam } from '/@src/data/about'
</script>

<template>
  <div>
    <Section id="story" color="grey">
      <Container>
        <CompanyStory
          main-title="Our Story"
          secondary-title="Our Mission"
          main-text="While every aspect of our lives are changing, from social to econimcal, we are all apart of the same transition. While spending over 2 decades proving managed telecom solutions, many problems in the industry were identified and continue to persist without real solutions. SIPSTACK was started to begin solving some of these problem allowing by creating a unified management platform for Asterisk, elastic by nature, could scale an adapt while maintaining single point of administration and access. This has become Cloud UC, the PBX management tool every carrier and provider has been waiting for. Fraudulent calls has always bee a problem attempted to be fixed by technology, however efforts have failed to stop this 55 billion dollar industry (US alone). "
          secondary-text="Our products are designed with 2 purposes, first to provide next generation experiences and services to the telecommunications industry, and secondly eradicate fraudulent and spam calling, period. By driving authentic data through our AI/ML models, in addition to various other data collection methods including community feedback, we are able to provide hyper-accurate call ratings that are dynamic to the recipient of the call. While our efforts are only in the begining stages, we will be targeting this epidemic from all levels and angles to end this era of fraud over voice and text messaging for good."
          :images="{
            imageOne: '/assets/img/team-v-5.jpg',
            imageTwo: '/assets/img/team-v-11.jpg',
            imageThree: '/assets/img/team-v-6.jpg',
            imageFour: '/assets/img/team-v-7.jpg',
            imageFive: '/assets/img/team-v-9.jpg',
            imageSix: '/assets/img/team-v-10.jpg',
          }"
          reverse
        />
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

        <TeamBlockC :items="longTeam" bubbles :limit="4" />
      </Container>
    </Section>

    <!-- <Section>
			<Container>
				<SectionTitle title="About Our Talent" subtitle="Meet the team" />

				<TeamBlockE :items="gridTeam" :limit="3" shapes />
			</Container>
		</Section> -->

    <Section>
      <Container>
        <!-- <ValuesSection :values="plantValues" image-height="130px" /> -->

        <CtaBlockB
          title-primary="We're Hiring!"
          content-primary="Interested in changing the world? Check our our current job offers regularly."
          cta-primary="Job offers"
          cta-primary-link="/r/link?href=https://www2.sipstack.com/jobs"
          title-secondary="Help us grow"
          content-secondary="Like what we're doing and want to contribute to our products and offers?"
          cta-secondary="Sponsor page"
          cta-secondary-link="/r/link?href=https://github.com/sponsor/sipstack"
          boxed
          shapes
          animated
          color="darker"
        />
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
          shapes
        />
        <!-- :logos="customerLogos" -->
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
