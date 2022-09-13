<script setup lang="ts">
// import { ref } from 'vue'

const submit = () => {
  submit.value = true
  const form = document.getElementById('form')
  // const formData = new FormData(form);

  var form_data = {}
  Array.from(form.elements).map((el) => {
    if (!el.name) el.name = el.id // if no element name use id
    if (el.name == 'submit') el.value = Date.now()

    form_data[el.name] = el.value
  })

  if (!form_data.email) {
    submitMessage('Please enter your email address and submit again.')
  } else if (form_data.agree && form_data.agree != true) {
    submitMessage('You must agree before submitting your application.')
  } else {
    form_data.slug = window.location.pathname
    // console.log(form_data)
    apiRequest(form_data)
  }
  // post to api
}

function apiRequest(form_data) {
  ;(async () => {
    const rawResponse = await fetch(
      // `https://api.sipstack.com/v1/f/www/cap/jobs`,
      `http://192.168.1.13:3001/v1/f/www/cap/jobs`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form_data),
      }
    )
    // rawResponse.json()
    rawResponse
    // const content = await rawResponse
    // console.log(content) // debug
  })()

  document.getElementById('form').innerHTML =
    'Thank you!<br><br>Your application has been received.<br><Br>Please allow up to 48 hours for a team member to respond.'
}

function submitMessage(text) {
  document.getElementById('submit_message').innerHTML = text
}
</script>

<template>
  <SsHeroSimple
    title="Job Application Form"
    subtitle="Position job name (from api)" />
  <div class="contact-form">
    <Section>
      <container>
        <div id="ss_submit">
          <form id="form" @submit.prevent>
            <div class="columns is-multiline">
              <div class="column is-12">
                <div class="help-container">
                  <div class="help-toolbar">
                    <a
                      class="back-link"
                      @click.prevent="$router.back()"
                      @keydown.space.prevent="() => $router.back()">
                      <i-ph-arrow-left-bold />
                      <span>Back</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name" name="fullname">
                    Full Name
                  </FieldLabel>
                  <Control icon="feather:user">
                    <VInput name="fullname" placeholder="Your full name..." />
                  </Control>
                </Field>
              </div>
              <!-- <div class="column is-6">
              <Field>
                <FieldLabel label="Last Name">Last Name</FieldLabel>
                <Control icon="feather:user">
                  <VInput placeholder="Your last name" />
                </Control>
              </Field>
            </div> -->
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Email" name="email">
                    Email Address
                  </FieldLabel>
                  <Control icon="feather:mail">
                    <VInput name="email" placeholder="Your email address..." />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Phone Number" name="phone">
                    Phone Number
                  </FieldLabel>
                  <Control icon="feather:phone">
                    <VInput placeholder="Your phone number..." />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Resume">Resume</FieldLabel>
                  <Control icon="carbon:user-profile">
                    <!-- <VInput
                      id="myFile"
                      placeholder=""
                      type="file"
                      name="resume" /> -->
                    <VInput placeholder="Link to your resume..." />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="Short Introduction">
                    Short Introduction
                  </FieldLabel>
                  <Control>
                    <VTextarea name="intro" :rows="4" placeholder="" />
                  </Control>
                </Field>
              </div>

              <div class="column is-12">
                <Checkbox
                  id="agree"
                  name="agree"
                  value="true"
                  label="By entering your name, you affirm all information is true and accurate and wish to be considered for this job opportunity." />
              </div>
              <!-- <div class="column is-12"> -->

              <!-- </div> -->

              <div class="column is-12">
                <div id="submit_message" class="pb-3 text-danger center"></div>
                <Control>
                  <Button
                    name="submit"
                    color="primary"
                    bold
                    raised
                    fullwidth
                    @click="() => submit()">
                    <span>Apply now</span>
                  </Button>
                </Control>
              </div>
            </div>
          </form>
        </div>
      </container>
    </Section>
    <ssFooter></ssFooter>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  position: relative;

  .column {
    padding: 0.4rem;
  }
}

.help-container {
  position: relative;
  max-width: 880px;
  margin: -2rem auto 3rem;
  .help-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    .back-link {
      display: inline-flex;
      align-items: center;
      font-family: var(--font);
      color: var(--primary);

      svg {
        vertical-align: middle;
        margin-right: 0.5rem;
        stroke: var(--primary);
        transition: transform 0.3s;
      }

      &:hover {
        svg {
          transform: translateX(-0.25rem);
        }
      }
    }
  }
}
</style>
