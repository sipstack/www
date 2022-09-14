<script setup lang="ts">
// import { ref } from 'vue'
// const options = [
//   {
//     value: 'whois',
//     label: 'Hamburger',
//   },
//   {
//     value: 'Cheeseburger',
//     label: 'Cheeseburger',
//   },
// ]
// const selectOneValue = ref()

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
    // } else if (form_data['checkbox-agree'] != 'on') {
    //   console.log(form_data)
    //   submitMessage('Please check agreement terms.')
  } else {
    apiRequest(form_data)
  }
  // post to api
}

function apiRequest(form_data) {
  ;(async () => {
    const rawResponse = await fetch(
      'https://api.sipstack.com/v1/f/www/cap/abuse',
      // 'http://192.168.1.13:3001/v1/f/www/cap/abuse',
      {
        method: 'POST',
        // credentials: 'include',
        headers: {
          // Accept: 'application/json',
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
    "Thank you!<br><br>Your report has been received.<br><Br>Please allow up to 48 hours for a team member to respond.<br><br>Please visit our <a href='/resources/knowledge-base'>Knowledge Base</a> for more information in the interim."
}

function submitMessage(text) {
  document.getElementById('submit_message').innerHTML = text
}
</script>

<template>
  <div class="contact-form">
    <form id="form" @submit.prevent>
      <div class="columns is-multiline">
        <div class="column is-6">
          <Field>
            <FieldLabel label="Full Name">Full Name</FieldLabel>
            <Control icon="feather:user">
              <VInput name="full_name" placeholder="Your full name" />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="Company">Company</FieldLabel>
            <Control icon="ep:office-building">
              <VInput name="company" placeholder="Your company name" />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="Email">Email Address</FieldLabel>
            <Control icon="feather:mail">
              <VInput
                name="email"
                placeholder="Your mail address"
                aria-required="true"
                required />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="First Name">Phone Number</FieldLabel>
            <Control icon="feather:phone">
              <VInput name="phone_number" placeholder="Your phone number" />
            </Control>
          </Field>
        </div>
        <!-- <div class="column is-12">
          <Field>
            <FieldLabel label="Choose a report option"></FieldLabel>
            <Control>
              <VSelect v-model="selectOneValue" :options="options" />
            </Control>
          </Field>
        </div> -->
        <div class="column is-12">
          <Field>
            <FieldLabel label="First Name">Message</FieldLabel>
            <Control>
              <VTextarea
                name="message"
                :rows="2"
                placeholder="Write your message indicating type of abuse..." />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <FieldLabel label="First Name">Log</FieldLabel>
            <Control>
              <VTextarea
                name="log"
                :rows="4"
                placeholder="Include any logs or packet capture relating to this report..." />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <Control>
              <Checkbox
                name="agree"
                label="By entering your email, you affirm all information is true and accurate." />
            </Control>
          </Field>
        </div>
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
              <span>Send Message</span>
            </Button>
          </Control>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  position: relative;

  .column {
    padding: 0.4rem;
  }
}

.center {
  text-align: center;
}
</style>
