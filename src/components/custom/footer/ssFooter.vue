<script setup lang="ts">
import { socialLinks } from "/@src/data/sipstack";
</script>
<template>
	<FooterCC text="Data science through telecom." color="dark" :social-links="socialLinks"> </FooterCC>
	<ssCookie />
</template>