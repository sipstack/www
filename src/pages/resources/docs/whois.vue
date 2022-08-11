<script setup lang="ts">
// import { blockGroups, content } from '/@src/data/resources/docs/smart-cnam/api'
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <ssHelpCenterHeaderDoc
          title="Whois"
          subtitle="Documentation"
          class="mt-10" />
      </Container>
    </Section>

    <Section overflown>
      <Container>
        <!-- <ssHelpCenterDoc :sections="blockGroups" :content="content" /> -->
        <ssHelpCenterDoc />
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>

