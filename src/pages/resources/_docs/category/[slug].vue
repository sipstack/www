<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { ref } from "vue";
import VueScrollTo from "vue-scrollto";
import { blockGroups, content } from "/@src/data-example/pages/help";
import Markdown from "vue3-markdown-it";

const scrollTo = VueScrollTo.scrollTo;
const activeMenuItem = ref(0);
</script>

<template>
	<div>
		<SsapiIntroCenterHeader title="API Introduction" subtitle="Subtitle" text="You must read & agree with all the details before you using any of our products or services." />

		<Section overflown>
			<Container>
				<div class="vulk-docs">
					<div class="left">
						<div class="left-menu">
							<ul>
								<li v-for="(group, index) in blockGroups.titles" :key="index" @click="activeMenuItem = index" @keydown.space.prevent="activeMenuItem = index">
									<a
										:class="activeMenuItem === index ? 'is-active' : ''"
										@click.prevent="
											scrollTo(`#components-group-${index}`, 800, {
												offset: -100,
											})
										"
										@keydown.space.prevent="
											() =>
												scrollTo(`#components-group-${index}`, 800, {
													offset: -100,
												})
										"
									>
										{{ group.name }}
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="right">
						<div class="terms-content">
							<Markdown :source="content" breaks="true" />
						</div>
					</div>
				</div>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>


<style lang="scss" scoped>
:deep(.page-title) {
	padding-top: 0;
	padding-bottom: 0;
}

.library-search {
	:deep(.input) {
		height: 52px;
		padding-left: 52px;
		border-radius: 0.85rem;
		border-color: var(--input-base-border-color-hover);
	}

	:deep(.field) {
		position: relative;
	}

	:deep(.control) {
		.form-icon {
			height: 52px;
			width: 52px;

			.iconify {
				font-size: 1.5rem;
			}
		}

		.close-search {
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 52px;
			width: 52px;
			font-size: 1rem;
			background: none;
			border: none;
			padding: none;
			color: var(--light-text);
			cursor: pointer;
			transition: color 0.3s;

			&:hover {
				color: var(--primary);
			}
		}
	}
}

.filter-results {
	position: absolute;
	top: 42px;
	left: 0;
	width: 100%;
	background: var(--input-base-bg-color);
	border: 1px solid var(--input-base-border-color-hover);
	border-radius: 0 0 0.85rem 0.85rem;
	border-top: none;

	.filter-results-inner {
		position: relative;
		width: 100%;
		height: 100%;
		padding-top: 0.75rem;

		ul {
			max-height: 290px;
			overflow-y: auto;

			&::-webkit-scrollbar {
				width: 5px !important;
			}

			&::-webkit-scrollbar-thumb {
				border-radius: 10px !important;
				background: rgb(0 0 0 / 20%) !important;
			}
		}

		.filter-result-item {
			padding: 0.75rem 1rem;
			display: flex;
			align-items: center;
			margin: 0 0.5rem;
			width: calc(100% - 1rem);
			border-radius: 0.75rem;
			margin-bottom: 0.5rem;
			transition: background-color 0.3s;

			.result-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 40px;
				width: 40px;
				min-width: 40px;
				border-radius: 50%;
				background: var(--wrap-muted-color);
				font-size: 1.25rem;
				color: var(--primary);
			}

			.meta {
				margin-left: 0.75rem;
				line-height: 1.2;

				h3 {
					font-family: var(--font-alt);
					font-weight: 600;
					font-size: 0.9rem;
					color: var(--title-color);
				}
			}

			.go-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 36px;
				width: 36px;
				min-width: 36px;
				border-radius: 50%;
				margin-left: auto;
				background: var(--wrap-bg-color);
				box-shadow: var(--spread-shadow);
				font-size: 1.15rem;
				color: var(--primary);
				transform: rotate(235deg) scale(0);
				transition: transform 0.3s;
			}

			&:hover {
				background: var(--wrap-muted-color);

				.go-icon {
					transform: rotate(0) scale(1);
				}
			}
		}

		.search-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 200px;
			text-align: center;

			> div {
				position: relative;
				top: -1rem;
			}

			h3 {
				font-family: var(--font-alt);
				font-weight: 600;
				font-size: 0.9rem;
				color: var(--title-color);
			}

			svg {
				font-size: 1.75rem;
				color: var(--primary);
			}
		}
	}
}

.vulk-docs {
	display: flex;

	.left {
		width: calc(200px - 2rem);
		margin-right: 2rem;
		border-right: 1px solid var(--wrap-border-color);

		.left-menu {
			position: sticky;
			top: 110px;

			ul {
				li {
					a {
						position: relative;
						left: 2px;
						display: flex;
						font-family: var(--font);
						margin-bottom: 1rem;
						color: var(--medium-text);
						border-right: 3px solid transparent;

						&.is-active {
							color: var(--primary);
							border-color: var(--primary);
						}
					}
				}
			}
		}
	}

	.right {
		width: calc(100% - 200px);

		.block-group {
			margin-bottom: 3rem;

			.block-group-header {
				display: flex;
				align-items: center;
				margin-bottom: 2rem;

				.group-icon {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 55px;
					width: 55px;
					min-width: 55px;
					border-radius: 50%;
					background: var(--wrap-muted-color);
					font-size: 1.5rem;
					color: var(--primary);
				}

				.meta {
					margin-left: 0.75rem;

					h3 {
						font-size: 1.25rem;
						font-family: var(--font-alt);
						font-weight: 500;
						color: var(--primary);
					}

					.paragraph {
						font-size: 0.95rem;
					}
				}
			}
		}
	}
}

:deep(.card) {
	.block-head {
		background: var(--component-card-bg-color);
		transition: 600ms ease;

		img {
			display: block;
			max-width: 100%;
			transform: scale(0.8);
			transition: transform 0.3s;
		}
	}

	&:hover {
		.block-head {
			img {
				transform: scale(0.9);
			}
		}
	}
}

.block-link {
	display: flex;
	align-items: center;
	justify-content: space-between;

	.iconify {
		font-size: 1.25rem;
		transform: translateX(-5px);
		color: var(--placeholder);
		transition: opacity 0.3s, transform 0.3s;
	}

	&:hover {
		.iconify {
			color: var(--primary);
			transform: translateX(0);
		}

		:deep(.title) {
			span {
				color: var(--primary) !important;
			}
		}
	}
}

@media only screen and (max-width: 1023px) {
	.vulk-docs {
		.left {
			display: none;
		}

		.right {
			width: 100%;
		}
	}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	.vulk-docs {
		.left {
			width: calc(240px - 2rem);
		}

		.right {
			width: calc(100% - 240px);
		}
	}
}

.terms-content {
	max-width: 740px;
	margin: 0 auto;

	:deep(> div) {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-alt);
			color: var(--title-color);
		}

		p,
		ul {
			font-family: var(--font);
			color: var(--medium-text);
		}
	}
}
</style>