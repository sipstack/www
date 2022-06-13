<script setup lang="ts">
import { socialLinks } from "/@src/data/sipstack";
</script>
<template>
	<FooterCC
		text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
		color="dark"
		:social-links="socialLinks"
	>
	</FooterCC>
	<ssCookie />
</template>