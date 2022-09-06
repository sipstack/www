<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueCookies from 'vue-cookies'

const options = ref([''])

const email = ref()
const submit = ref(false)

const isSubmit = () => {
  submit.value = true
  const form = document.getElementById('form')
  // const formData = new FormData(form);
  var form_data = {}
  Array.from(form.elements).map((el) => {
    if (!el.name) el.name = el.id // if no element name use id
    if (el.name == 'submit') el.value = Date.now()

    form_data[el.name] = el.value
  })

  // post to api
  ;(async () => {
    const rawResponse = await fetch(
      'https://api.sipstack.com/v1/f/www/cap/invite',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form_data),
      }
    )
    rawResponse.json()
    // const content = await rawResponse.json();
    // console.log(content); // debug
  })()

  // console.log(window.btoa(JSON.stringify(form_data)));
  VueCookies.remove('ss_signup') // remove previous cookie, updates current
  VueCookies.set('ss_signup', window.btoa(JSON.stringify(form_data)), '1y')

  // console.log(formData);
  document.getElementById('title').innerHTML = 'Thank you'
  document.getElementById('description').innerHTML =
    'Your request has been received. <Br><Br>We will send you an email once your request has been approved.'

  document.getElementById('form-div').remove()
}

onMounted(() => {
  if (window.location.search) {
    var search = window.location.search
    email.value = search.replace('?email=', '')
    return {
      email: email.value,
    }
  }
})
</script>



<template>
  <div class="auth-wrapper columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div
      class="column login-column is-7 is-hidden-mobile h-hidden-tablet-p hero-banner">
      <div
        v-background="{
          src: '/assets/img/bg/auth-left.jpg',
        }"
        class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body ss-img-overlay">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="left-content">
                  <!-- <Title tag="h2" :size="1" weight="bold" > Partner Portal </Title> -->
                  <h2>Partner Portal</h2>
                  <p>
                    Welcome to the
                    <b>SIPSTACK</b>
                    Partner Portal
                  </p>
                  <br />
                  <p>
                    Registration currently limited to invite only.
                    <br />
                    Please complete the registration form to the right to create
                    your SIPSTACK account. You will receive a welcome email upon
                    review of information. Invitation requests could take up to
                    30 days to review while we are experiencing a very high
                    volume of registrations.
                  </p>
                  <br />
                  <p>We appreciate your understanding & support.</p>
                  <br />
                  <p>SIPSTACK Regisration Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Form section -->
    <div class="form-column column is-5">
      <div class="hero is-fullheight">
        <div class="hero-heading">
          <div class="auth-logo">
            <RouterLink to="/" class="header-item">
              <img class="top-logo" src="/assets/logo/logo.svg" alt="logo" />
            </RouterLink>
          </div>
          <div class="dark-mode">
            <ThemeToggle />
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <Title id="title" tag="h2" :size="3" weight="thin" narrow>
                    Get Started
                  </Title>
                  <p id="description">Please complete the form below</p>
                </div>
                <div id="form-div" class="auth-form-wrapper auth-content">
                  <a href="https://hub.sipstack.com/">
                    I already have an account
                  </a>
                  <br />
                  <br />
                  <form id="form" @submit.prevent>
                    <div class="login-form">
                      <Field>
                        <FieldLabel label="Email" />
                        <Control icon="feather:mail">
                          <VInput
                            v-model="email"
                            name="email"
                            placeholder="Email address..." />
                        </Control>
                      </Field>

                      <Field>
                        <FieldLabel label="Company Name" />
                        <Control icon="ion:business-outline">
                          <VInput
                            name="company"
                            type="company"
                            placeholder="Company name..." />
                        </Control>
                      </Field>
                      <Field>
                        <FieldLabel label="Company Phone Number" />
                        <Control icon="ic:baseline-numbers">
                          <VInput
                            name="phone"
                            type="phonenumber"
                            placeholder="Company phone number..." />
                        </Control>
                      </Field>
                      <Field>
                        <FieldLabel label="Company Website" />
                        <Control icon="iconoir:www">
                          <VInput
                            name="website"
                            type="website"
                            placeholder="Company website..." />
                        </Control>
                      </Field>

                      <div class="setting-item">
                        <Checkbox
                          v-model="options"
                          color="primary"
                          name="tos"
                          label="I agree to the Terms of Service"
                          value="yes" />
                      </div>

                      <Control class="mt-4">
                        <Button
                          color="primary"
                          fullwidth
                          bold
                          raised
                          name="submit"
                          @click="() => isSubmit()">
                          Request Invite
                        </Button>
                      </Control>
                    </div>
                  </form>
                  <!-- <div class="forgot-link has-text-centered">
										<RouterLink to="/auth/signup-2"> Forgot Password? </RouterLink>
									</div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.auth-nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  .left,
  .right {
    display: flex;
    align-items: center;
    width: 20%;
  }

  .right {
    justify-content: flex-end;

    .dark-mode {
      transform: scale(0.7);
    }
  }

  .center {
    flex-grow: 2;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        max-width: 40px;
      }
    }
  }
}

.auth-wrapper {
  overflow: hidden !important;
  width: 100%;
  padding: 0;
  margin: 0;

  &.is-gapless:not(:last-child) {
    margin-bottom: 0 !important;
  }

  &.is-single {
    background: var(--wrap-muted-color);
    min-height: 100vh;
  }

  .hero-banner {
    background: var(--wrap-muted-color);
  }

  .hero-heading {
    position: relative;
    max-width: 360px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 0 0;

    .dark-mode {
      position: absolute;
      top: 38px;
      right: 20px;
      z-index: 2;
    }

    .auth-logo {
      display: flex;
      justify-content: center;

      .top-logo {
        height: 42px;
      }
    }
  }

  .hero {
    background-size: cover;
    background-repeat: no-repeat;

    .hero-body {
      .login {
        padding: 10px 0;
        background: rgba(39, 62, 84, 0.82);
      }
    }
    .ss-img-overlay {
      background-color: var(--primary);
      opacity: 0.85;
    }
  }

  .auth-content {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: -40px;
    margin-bottom: 40px;

    p {
      font-size: 1rem;
      margin-bottom: 8px;
      color: var(--medium-text);
    }

    a {
      font-size: 0.8rem;
      font-family: var(--font-alt);
      font-weight: 500;
      color: var(--primary);
    }
  }

  .left-content {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    margin-top: -40px;
    margin-bottom: 40px;
    h2 {
      font-size: 3rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.99);
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 8px;
      color: var(--medium-text);
      color: rgba(255, 255, 255, 0.99);
    }

    a {
      font-size: 0.8rem;
      font-family: var(--font-alt);
      font-weight: 500;
      color: var(--primary);
    }
  }

  .auth-form-wrapper {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }

  .forgot-link {
    margin-top: 10px;

    a {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      color: var(--light-text);
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }

  .setting-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .single-form-wrap {
    min-height: 690px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-wrap {
      width: 100%;
      max-width: 400px;
      margin: 2.75rem auto 0;

      .auth-head {
        max-width: 320px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        text-align: center;

        p {
          font-size: 1rem;
          margin-bottom: 8px;
          color: var(--medium-text);
        }

        a {
          font-size: 0.8rem;
          font-family: var(--font-alt);
          font-weight: 500;
          color: var(--primary);
        }
      }

      .form-card {
        background: var(--card-bg-color);
        border: 1px solid var(--card-border-color);
        border-radius: 0.9rem;
        padding: 3.25rem;
        margin-bottom: 1rem;
      }
    }
  }

  .signup-image-wrap {
    width: 100%;

    img {
      display: block;
      max-height: 610px;
      margin: 0 auto;
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .login-column {
    display: none;
  }

  .form-column {
    width: 100% !important;
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .login-column {
    display: none;
  }

  .form-column {
    width: 100% !important;
  }
}

/* stylelint-enable */
</style>
