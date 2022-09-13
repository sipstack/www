<script setup lang="ts">
// import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    class="marketing-hero"
    alignment="left"
    size="fullheight"
    shape="/assets/img/hero-shape-ss-k.svg"
    shape-orientation="right">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold">
            Smart Telecom Tools
            <span class="text-primary">AI/ML Powered</span>
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            Post-modern suite of Telecommunication & VoIP tools. AI / ML at it's
            core, provides unprecedented meta data across the platform.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold to="signup">
              Get Started
            </Button>
            <!-- <Button elevated bold :long="2">Demo</Button> -->
          </div>
        </div>
        <div class="column is-7 is-offset-1">
          <!-- src="/assets/illustrations/apps/hero-app-screen.png"
            src-dark="/assets/illustrations/apps/hero-app-screen-dark.png" -->
          <DarkImage
            class="mx-auto has-light-shadow app-mockup"
            src="/assets/img/ss-hub-dashboard.jpeg"
            src-dark="/assets/img/ss-hub-dashboard-d.jpeg"
            alt="SIPSTACK HUB | Dashboard"
            width="1519"
            height="949" />
        </div>
      </div>
      <!-- <NumbersSection :numbers="mentorStats" animated /> -->
    </template>
    <!-- <template #footer>
      <div class="seen-on mx-auto max-w-8">
        <div class="tabs is-centered pb-4">
          <LogoSection
            class="seen-on2"
            title="As seen on"
            :logos="customerLogos"
            :limit="4"
          />
        </div>
      </div>
    </template> -->
  </Hero>
</template>

<style lang="scss" scoped>
.app-mockup {
  display: block;
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  box-shadow: var(--light-box-shadow);
}

.is-dark {
  .app-mockup {
    border: none;
  }
}

@media only screen and (max-width: 767px) {
  .marketing-hero {
    text-align: center;

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }

    .seen-on {
      display: none;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .marketing-hero {
    text-align: center;

    :deep(.subtitle) {
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }

    .buttons {
      justify-content: center;
    }
    .top-bg {
      display: none;
    }
  }
}

/* stylelint-disable */
//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

/* stylelint-enable */
</style>
