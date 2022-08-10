

<script setup lang="ts">
import { posts } from "/@src/data/resources/blog";
// import "/@src/vue-select/dist/vue-select.css";
// import BlogSearch from "/@src/components/advanced/blog/blog-meta/BlogSearch.vue";
</script>




<template>
	<div>
		<Section overflown>
			<Container>
				<div class="mx-auto max-w-9">
					<PageTitle title="Our Latest News" subtitle="Company Blog">
						<template #content>
							<div class="mx-auto max-w-6 mt-2">
								<p class="paragraph rem-115">Stay updated</p>
							</div>

							<div class="mx-auto max-w-4 mt-4">
								<SubscriptionCompact label="Subscribe" placeholder="Enter your email" />
							</div>
						</template>
					</PageTitle>
				</div>

				<div class="columns">
					<div class="column is-8">
						<ssBlogList id="ttt" :posts="posts" single-list side-list :limit="1" />
						<!-- <BlogList :posts="posts" /> -->

						<div class="load-more py-6">
							<div class="buttons is-centered">
								<Button color="primary" :long="3" raised bold>Load More</Button>
							</div>
						</div>
					</div>

					<div class="column is-4">
						<BlogStickySide>
							<!-- <BlogSearch /> -->

							<ssBlogRecentPosts :posts="posts" />

							<ssBlogCategories
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
							/>
						</BlogStickySide>
					</div>
				</div>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
