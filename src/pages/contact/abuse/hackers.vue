<script setup lang="ts"></script>

<template>
  <SsHeroSimple
    title="Report Spam"
    subtitle="Please fill in the boxes below and let us know your concerns" />
  <div class="contact-form">
    <Section>
      <container>
        <form>
          <div class="columns is-multiline">
            <div class="column is-6">
              <Field>
                <FieldLabel label="First Name">First Name</FieldLabel>
                <Control icon="feather:user">
                  <VInput placeholder="Your first name" />
                </Control>
              </Field>
            </div>
            <div class="column is-6">
              <Field>
                <FieldLabel label="Last Name">Last Name</FieldLabel>
                <Control icon="feather:user">
                  <VInput placeholder="Your last name" />
                </Control>
              </Field>
            </div>
            <div class="column is-12">
              <Field>
                <FieldLabel label="First Name">Email Address</FieldLabel>
                <Control icon="feather:mail">
                  <VInput placeholder="Your mail address" />
                </Control>
              </Field>
            </div>
            <div class="column is-12">
              <Field>
                <FieldLabel label="First Name">Message</FieldLabel>
                <Control>
                  <VTextarea :rows="4" placeholder="Write your message..." />
                </Control>
              </Field>
            </div>
            <div class="column is-12">
              <Control>
                <Button color="primary" bold raised fullwidth>
                  <span>Send Message</span>
                </Button>
              </Control>
            </div>
          </div>
        </form>
      </container>
    </Section>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  position: relative;

  .column {
    padding: 0.4rem;
  }
}
</style>
