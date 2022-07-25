<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getCategory } from "/@src/utils/api/category";
import { articles } from "/@src/data/resources/knowledge-base/smart-cnam";

import { HelpCenterCategory } from "/@src/types";
import { computed } from "@vue/reactivity";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

// get category data
const category = ref<HelpCenterCategory>();
async function fetchCategory() {
	try {
		category.value = await getCategory(slug);
	} catch {
		router.replace({
			name: "all",
			params: { all: `not-found-${route.params.slug}` },
		});
	}
}
// search bar
const filter = ref("");

const filteredData = computed(() => {
	if (filter.value === "") {
		return [];
	} else {
		return articles.filter((item) => {
			return item.title.match(new RegExp(filter.value, "i"));
		});
	}
});
onMounted(fetchCategory);
onServerPrefetch(fetchCategory);
watch(() => route.fullPath, fetchCategory);
</script>

<!-- <template>
	<div>
		<ssHeroSimple title="Smart CNAM" subtitle="Caller ID lookups just got smarter" overflown class="z-3">
			<template #content>
				<div class="library-search mx-auto max-w-4 pt-4">
					<Field>
						<Control icon="feather:search">
							<VInput v-model="filter" type="text" placeholder="Search library..." />
							<button v-if="filter.length > 0" class="close-search" @click="filter = ''">
								<i-feather-x />
							</button>
						</Control>
						<div v-if="filter.length > 0" class="filter-results">
							<div class="filter-results-inner">
								<ul v-if="filteredData.length">
									<li v-for="result in filteredData" :key="result.title" overflown>
										<RouterLink to="/resources/knowledge-base/smart-cnam/article">
											<div class="filter-result-item">
												<div class="meta">
													<h3>{{ result.title }}</h3>
												</div>
												<div class="go-icon">
													<i-ph-arrow-circle-right-duotone />
												</div>
											</div>
										</RouterLink>
									</li>
								</ul>
								<div v-else-if="!filteredData.length">
									<div class="search-placeholder">
										<div>
											<i-iconoir-google-docs />
											<h3>Nothing Found</h3>
											<p class="paragraph rem-90">We couldn't find any matching results</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Field>
				</div>
			</template>
		</ssHeroSimple>

		<Section overflown>
			<Container v-if="category">
				<SsKBCategory :category="category" />
			</Container>
		</Section>
	</div>
	<SsFooter></SsFooter>
</template> -->

<template>
	<Section overflown> </Section>
	<div>
		<Section overflown>
			<Container v-if="category">
				<PageTitle title="Smart-CNAM" subtitle="Articles" compact />
				<div class="library-search mx-auto max-w-4 pt-4">
					<Field>
						<Control icon="feather:search">
							<VInput v-model="filter" type="text" placeholder="Search library..." />
							<button v-if="filter.length > 0" class="close-search" @click="filter = ''">
								<i-feather-x />
							</button>
						</Control>
						<div v-if="filter.length > 0" class="filter-results">
							<div class="filter-results-inner">
								<ul v-if="filteredData.length">
									<li v-for="result in filteredData" :key="result.title" overflown>
										<RouterLink to="/resources/knowledge-base/smart-cnam/article">
											<div class="filter-result-item">
												<div class="meta">
													<h3>{{ result.title }}</h3>
												</div>
												<div class="go-icon">
													<i-ph-arrow-circle-right-duotone />
												</div>
											</div>
										</RouterLink>
									</li>
								</ul>
								<div v-else-if="!filteredData.length">
									<div class="search-placeholder">
										<div>
											<i-iconoir-google-docs />
											<h3>Nothing Found</h3>
											<p class="paragraph rem-90">We couldn't find any matching results</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Field>
				</div>
				<Section overflown> <HelpCenterCategoryBlock :category="category" /></Section>
			</Container>
		</Section>
	</div>
	<SsFooter></SsFooter>
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
	// border-top: 2px solid green;
	border-top: none;
	z-index: 9;

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
		width: calc(300px - 2rem);
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
		width: calc(100% - 300px);

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
</style>