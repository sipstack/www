<script setup lang="ts">
export interface HeroProductsProps {
	title: string;
	subtitle: string;
}

const props = defineProps<HeroProductsProps>();
</script>

<template>
	<Hero alignment="center" color="grey" shape="/assets/img/hero-shape-ss-k.svg" shape-orientation="right">
		<template #body>
			<div class="columns is-vcentered py-20">
				<!--Hero Content-->
				<div class="column is-relative">
					<Title tag="h1" :size="1" weight="bold">
						<span class="text-gradient">{{ props.title }}</span>
					</Title>
					<Subtitle tag="p" :size="5" weight="thin" class="mx-auto max-w-6 b-centered-tablet-p pt-2">
						{{ props.subtitle }}
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
