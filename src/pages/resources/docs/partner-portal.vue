<script setup lang="ts">
import { content } from '/@src/data/resources/docs/partner-portal'
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <ssHelpCenterHeaderDoc
          title="Partner Portal"
          subtitle="Documentation"
          class="mt-10" />
      </Container>
    </Section>

    <Section overflown>
      <Container>
        <ssHelpCenterDoc :content="content" />
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>

