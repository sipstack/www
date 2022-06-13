<script setup lang="ts">
// import { useRegisterSW } from 'virtual:pwa-register/vue'
import { ref } from 'vue'
import VueCookies from 'vue-cookies'
// import { useI18n } from 'vue-i18n'

export interface VReloadPromptProps {
  appName: string
}

// const loading = ref(false)

// const props = defineProps<VReloadPromptProps>()

// const { t } = useI18n()
// const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const cookie = ref(true)
const close = () => {
  //   loading.value = false
  //   offlineReady.value = false
  //   needRefresh.value = false
  cookie.value = false
  $cookies.set('cookie_name', 'cookie_value')
  VueCookies.set('name', name, '1h')
}

// const update = async () => {
//   loading.value = true
//   await updateServiceWorker()
//   loading.value = false
// }
</script>

<template>
  <Transition name="from-bottom">
    <!-- v-if="offlineReady || needRefresh" -->
    <Card v-if="cookie" class="pwa-toast" role="alert" radius="smooth">
      <div class="pwa-message">
        <slot name="logo"></slot>
        <div class="container">
          <div class="columns">
            <p class="column is-10 paragraph rem-90">
              We use cookies to provide our services and for analytics and
              marketing. To find out more about our use of cookies, please see
              our Privacy Policy.
              <br />
              By continuing to browse our website, you agree to our use of
              cookies.
            </p>
            <Buttons
              class="column is-2 has-text-right has-text-centered-mobile"
            >
              <Button
                color="primary"
                icon="ion:reload-outline"
                raised
                @click="() => close()"
              >
                Accept
              </Button>
              <!-- <Button icon="feather:x" @click="() => close()">Close</Button> -->
            </Buttons>
          </div>
        </div>
      </div>
    </Card>
  </Transition>
</template>

<style lang="scss" scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  // max-width: 350px;
  width: 100vw;
  max-width: 100vw;
  margin: 0px;
  border: 1px solid #8885;
  border-radius: 0px !important;
  z-index: 9999;
  text-align: left;
  box-shadow: var(--spread-shadow);
}

.pwa-message {
  display: flex;
  align-items: center;
  // margin-bottom: 1rem;
  font-size: 1.1rem;

  :deep(img) {
    max-width: 42px;
  }
}

:deep(.button) {
  min-width: 90px;
  min-height: 34px;
}
.buttons .button {
  vertical-align: middle;
}
</style>
