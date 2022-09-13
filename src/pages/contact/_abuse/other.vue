<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueCookies from 'vue-cookies'

const options = ref([''])

const email = ref()
const submit = ref(false)
const options1 = ref(['Option 1'])

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
      'https://api.sipstack.com/v1/f/www/cap/abuse/spam',
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

  // console.log(formData);

  document.getElementById('ss_submit').innerHTML =
    'Your request has been received. <Br><Br>We will provide additional correspondance via your email provided in the form. Thank you..'
}
</script>

<template>
  <SsHeroSimple
    title="Report Other"
    subtitle="Please utilize this form to provide HostX with evidence of any abuse outside of our categories listed." />
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
                  <FieldLabel label="First Name">Full Name</FieldLabel>
                  <Control icon="feather:user">
                    <VInput placeholder="Your full name" />
                  </Control>
                </Field>
              </div>

              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name">Email Address</FieldLabel>
                  <Control icon="feather:mail">
                    <VInput placeholder="Your mail address" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="First Name">
                    Description of issue
                  </FieldLabel>
                  <Control>
                    <VTextarea :rows="4" placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="First Name">Evidence URLs</FieldLabel>
                  <Control>
                    <VTextarea :rows="4" placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="First Name">Comments</FieldLabel>
                  <Control>
                    <VTextarea :rows="4" placeholder="" />
                  </Control>
                </Field>
              </div>

              <Section>
                <container>
                  <Checkbox
                    id="checkbok"
                    v-model="options1"
                    name="checkbox-1"
                    value="Option 1"
                    label="By entering your name, you affirm all information is true and accurate. All information submitted to us may be relayed to the customer during our remediation process." />
                </container>
              </Section>
              <div class="column is-12">
                <Control>
                  <Button color="primary" bold raised fullwidth>
                    <span>Report Abuse</span>
                  </Button>
                </Control>
              </div>
            </div>
          </form>
        </div>
      </container>
    </Section>
    <SsFooterCC></SsFooterCC>
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
