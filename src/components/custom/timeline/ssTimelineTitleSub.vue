<script setup lang="ts">
import { computed } from "vue";

export type TitleGradient = "primary" | "secondary" | "accent";

export interface TimelineTitleProps {
	title: string;
	subtitle: string;
	inverted?: boolean;
	spaced?: boolean;
	color?: TitleGradient;
}

const props = withDefaults(defineProps<TimelineTitleProps>(), {
	title: undefined,
	subtitle: undefined,
	inverted: false,
	spaced: false,
	color: "primary",
});

const titleClasses = computed(() => [props.inverted && `is-inverted`]);

const blockClasses = computed(() => [props.spaced && "mb-16"]);

const subtitleClasses = computed(() => [props.color && `text-gradient-${props.color}-static`]);
</script>

<template>
	<div>
		<div class="has-text-centered" :class="blockClasses" style="margin-top: -50px">
			<slot name="subheading"></slot>

			<Subtitle tag="h3" :size="3" weight="bold">
				<span :class="subtitleClasses">
					<slot name="subtitle">{{ props.subtitle }}</slot>
				</span>
			</Subtitle>
			<Title tag="h2" :size="8" weight="bold" :class="titleClasses">
				<span>
					<slot>{{ props.title }}</slot>
				</span>
			</Title>
		</div>
		<slot name="content"></slot>
	</div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
	:deep(.title) {
		&.is-8 {
			font-size: 3rem !important;
		}
	}
}
</style>
