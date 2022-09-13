<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import type { Job } from '/@src/types'

export interface JobDetailsProps {
  job: Job
}
const props = defineProps<JobDetailsProps>()
</script>

<template>
  <Hero
    alignment="center"
    color="grey"
    shape="/assets/img/hero-shape-ss-k.svg"
    shape-orientation="right">
    <template #body>
      <div class="columns is-vcentered py-20">
        <!--Hero Content-->
        <div class="column is-relative">
          <Title tag="h1" :size="1" weight="bold">
            <span class="text-gradient">{{ 'Job Application Form' }}</span>
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            weight="thin"
            class="mx-auto max-w-6 b-centered-tablet-p pt-2">
            {{ props.job.title }}
          </Subtitle>
          <slot name="content"></slot>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero {
  position: static !important;
}
</style>
