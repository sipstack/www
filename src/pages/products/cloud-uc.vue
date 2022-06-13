<!-- <route lang="yaml">
meta:
  layout: default
</route> -->

<script setup lang="ts">
import { socialLinks } from '/@src/data/sipstack'
</script>

<template>
  <div>
    <!-- <HeroCloudUC /> -->

    <FooterCC
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    ></FooterCC>
  </div>
</template>
