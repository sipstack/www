<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueCookies from 'vue-cookies'
import { onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Job } from '/@src/types'

import { getJob } from '/@src/utils/api/job'
// import { jobs } from '/@src/data/resources/jobs'

// import { socialLinks } from '/@src/data/blocks/advanced/social'
// import type { Job } from '/@src/types'

export interface JobDetailsProps {
  job: Job
}

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

const options = ref([''])

const email = ref()
const submit = ref(false)
const options1 = ref(['Option 1'])
const props = defineProps<JobDetailsProps>()

const isSubmit = () => {
  submit.value = true
  const form = document.getElementById('form')
  // const formData = new FormData(form);
  var form_data = {}
  Array.from(form.elements).map((el) => {
    if (!el.name) el.name = el.id // if no element name use id
    if (el.name == 'submit') el.value = Date.now()

    form_data[el.name] = el.value
  })(
    //   const rawResponse = await fetch( // ;(async () => { // post to api
    // `https://api.sipstack.com/v1/f/www/cap/jobs/${slug}`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(form_data),
    //     }
    //   )
    //   rawResponse.json()
    // })()

    // console.log(window.btoa(JSON.stringify(form_data)));

    // console.log(formData);

    (document.getElementById('ss_submit').innerHTML =
      'Your request has been received. <Br><Br>We will provide additional correspondance via your email provided in the form. Thank you..')
  )
}
const job = ref<Job>()
async function fetchJob() {
  try {
    job.value = await getJob(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchJob)
onServerPrefetch(fetchJob)
watch(() => route.fullPath, fetchJob)
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
                  <FieldLabel label="First Name">Full Name</FieldLabel>
                  <Control icon="feather:user">
                    <VInput placeholder="" />
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
                  <FieldLabel label="First Name">Email Address</FieldLabel>
                  <Control icon="feather:mail">
                    <VInput placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name">Phone Number</FieldLabel>
                  <Control icon="feather:phone">
                    <VInput placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name">Portfolio</FieldLabel>
                  <Control icon="dashicons:portfolio">
                    <VInput placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="First Name">Short Introduction</FieldLabel>
                  <Control>
                    <VTextarea :rows="4" placeholder="" />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name">Resume</FieldLabel>
                  <Control>
                    <VInput
                      id="myFile"
                      placeholder=""
                      type="file"
                      name="filename" />
                  </Control>
                </Field>
              </div>

              <!-- <div class="column is-12"> -->
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
              <!-- </div> -->

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
