<script setup lang="ts"></script>

<template>
  <SsHeroSimple
    title="Report Other"
    subtitle="Please utilize this form to provide HostX with evidence of any abuse outside of our categories listed." />
  <div class="contact-form">
    <Section>
      <container>
        <form>
          <div class="columns is-multiline">
            <div class="column is-6">
              <Field>
                <FieldLabel label="First Name">Full Name</FieldLabel>
                <Control icon="feather:user">
                  <VInput placeholder="Your full name" />
                </Control>
              </Field>
            </div>
            <div class="column is-6">
              <!-- <Field>
                <FieldLabel label="Last Name">Last Name</FieldLabel>
                <Control icon="feather:user">
                  <VInput placeholder="Your last name" />
                </Control>
              </Field> -->
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
                <FieldLabel label="First Name">Description of issue</FieldLabel>
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
            <div class="column is-6">
              <Field>
                <FieldLabel label="First Name">Digital Signature</FieldLabel>

                <VInput placeholder="" />
              </Field>
            </div>
            <Section>
              {{
                'By entering your name, you affirm all information is true and accurate. All information submitted to us may be relayed to the customer during our remediation process.'
              }}
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
