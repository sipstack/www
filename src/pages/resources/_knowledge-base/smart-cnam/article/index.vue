<script setup lang="ts">
import { posts } from "/@src/data/resources/blog";
import { ref } from "vue";
// import { blockGroups, content } from "/@src/data/resources/docs/smart-cnam/api";
import { markdownObject } from "/@src/data/resources/knowledge-base/smart-cnam";
import Markdown from "vue3-markdown-it";
const activeRating = ref("");
</script>

<template>
	<div>
		<Section overflown>
			<Container>
				<div class="mx-auto max-w-9">
					<PageTitle title="Our Latest News" subtitle="Article">
						<template #content>
							<div class="mx-auto max-w-6 mt-2">
								<p class="paragraph rem-115">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse.
								</p>
							</div>

							<div class="mx-auto max-w-4 mt-4">
								<SubscriptionCompact label="Subscribe" placeholder="Enter your email" />
							</div>
						</template>
					</PageTitle>
				</div>

				<div class="columns">
					<div class="column is-8">
						<div class="terms-content">
							<!-- <Markdown :source="markdownObject" breaks="true" /> -->
							<ssMarkdown :terms="markdownObject" />
						</div>
						<!-- <BlogGrid :posts="posts" side-grid /> -->

						<!-- <div class="load-more py-6">
							<div class="buttons is-centered">
								<Button color="primary" :long="3" raised bold>Load More</Button>
							</div>
						</div> -->
					</div>

					<div class="column is-4">
						<BlogStickySide>
							<!-- <BlogSearch /> -->
							<div class="help-toolbar">
								<a class="back-link" @click.prevent="$router.back()" @keydown.space.prevent="() => $router.back()">
									<i-ph-arrow-left-bold />
									<span>Back</span>
								</a>
							</div>

							<ssArticlesRelated :posts="posts" />

							<!-- <BlogCategories
								:categories="[
									{
										name: 'Business',
										slug: 'business',
										postCount: 12,
									},
									{
										name: 'Technology',
										slug: 'technology',
										postCount: 23,
									},
									{
										name: 'Startups',
										slug: 'startups',
										postCount: 16,
									},
									{
										name: 'Development',
										slug: 'development',
										postCount: 31,
									},
									{
										name: 'Design',
										slug: 'desgin',
										postCount: 9,
									},
									{
										name: 'Conception',
										slug: 'conception',
										postCount: 11,
									},
								]"
							/>

							<BlogTags
								:tags="[
									{
										name: 'Design',
										slug: 'design',
									},
									{
										name: 'UI/UX',
										slug: 'ui-ux',
									},
									{
										name: 'Development',
										slug: 'development',
									},
									{
										name: 'Apps',
										slug: 'apps',
									},
									{
										name: 'Collaboration',
										slug: 'collaboration',
									},
									{
										name: 'Management',
										slug: 'management',
									},
								]"
							/> -->
						</BlogStickySide>
					</div>
				</div>
				<div class="rating-section">
					<div class="question">Was this article helpful ?</div>
					<div class="rating-buttons">
						<button class="rating-button" :class="activeRating === 'bad' && 'is-active'" @click="activeRating = 'bad'">
							<i-ph-smiley-nervous-duotone />
						</button>
						<button class="rating-button" :class="activeRating === 'neutral' && 'is-active'" @click="activeRating = 'neutral'">
							<i-ph-smiley-blank-duotone />
						</button>
						<button class="rating-button" :class="activeRating === 'good' && 'is-active'" @click="activeRating = 'good'">
							<i-ph-smiley-duotone />
						</button>
						<span class="rating-message is-bad" :class="activeRating === 'bad' && 'is-active'"> Nope, that was bad. </span>
						<span class="rating-message is-neutral" :class="activeRating === 'neutral' && 'is-active'"> Well, that was so so. </span>
						<span class="rating-message is-good" :class="activeRating === 'good' && 'is-active'"> Yes, that was good. </span>
					</div>
				</div>
			</Container>
		</Section>
		<!-- <SsFooter></SsFooter> -->
	</div>
</template>
<style scoped lang="scss">
.rating-section {
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;

	.question {
		padding-top: 25px;
		font-family: var(--font);
		font-size: 1rem;
		font-weight: 500;
		color: var(--light-text);
		margin-bottom: 1.5rem;
	}

	.rating-buttons {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.rating-button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		padding: 0;
		max-width: 60px;
		max-height: 60px;
		margin: 0 0.5rem;
		cursor: pointer;

		svg {
			font-size: 2.5rem;
			color: var(--light-text);
			transition: all 0.3s;
		}

		&:hover,
		&.is-active {
			svg {
				color: var(--primary);
				transform: scale(1.1);
			}

			&:first-child {
				svg {
					color: var(--danger);
				}
			}

			&:nth-child(2) {
				svg {
					color: var(--warning);
				}
			}

			&:nth-child(3) {
				svg {
					color: var(--success);
				}
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
	.rating-message {
		position: absolute;
		bottom: -2rem;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: auto;
		font-family: var(--font);
		font-size: 0.9rem;
		font-weight: 500;
		border-radius: 50rem;
		pointer-events: none;
		transform: translateY(0.5rem);
		opacity: 0;
		transition: transform 0.3s, opacity 0.3s;

		&.is-bad {
			color: var(--danger);
		}

		&.is-neutral {
			color: var(--warning);
		}

		&.is-good {
			color: var(--success);
		}

		&.is-active {
			transform: translateY(0);
			opacity: 1;
		}
	}
}

.help-toolbar {
	display: inside;
	justify-content: flex-end;
	margin-bottom: 1rem;

	.back-link {
		display: inline-flex;
		align-items: center;
		font-family: var(--font);
		color: var(--primary);

		svg {
			vertical-align: middle;
			margin-right: 0.5rem;
			stroke: var(--primary);
			transition: transform 0.3s;
		}

		&:hover {
			svg {
				transform: translateX(-0.25rem);
			}
		}
	}
}
</style>
