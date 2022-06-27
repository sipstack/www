<script setup lang="ts">
import { socialLinks } from "/@src/data/sipstack";
</script>
<template>
	<ssFooterCC text="Data sciences through telecom." color="dark" :social-links="socialLinks"> </ssFooterCC>
	<ssCookie />
</template>