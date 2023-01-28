<script setup lang="ts">
import { content } from '/@src/data/resources/docs/smart-cnam'
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <ssHelpCenterHeaderDoc
          title="Smart CNAM"
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

