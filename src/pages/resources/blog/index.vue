<script setup lang="ts">
import { posts } from "/@src/data/resources/blog";
</script>

<template>
	<div>
		<Section color="grey" overflown>
			<Container>
				<div class="mx-auto max-w-9">
					<PageTitle title="Our Latest News" subtitle="Company Blog">
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
						<ssBlogGrid :posts="posts" side-grid upside-down />

						<div class="load-more py-6">
							<div class="buttons is-centered">
								<Button color="primary" :long="3" raised bold>Load More</Button>
							</div>
						</div>
					</div>

					<div class="column is-4">
						<BlogStickySide>
							<BlogSearch />

							<ssBlogRecentPosts :posts="posts" />

							<!-- TODO: figure out categories -->
							<!-- <ssBlogCategories
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

								]"
							/> -->

							<!-- TODO: figure out tags -->
							<!-- <BlogTags
								:tags="[
									{
										name: 'Design',
										slug: 'design',
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
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
