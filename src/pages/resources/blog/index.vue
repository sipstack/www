<script setup lang="ts">
import { posts } from '/@src/data/resources/blog'
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle title="Our Latest Posts" subtitle="Company Blog">
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <!-- <p class="paragraph rem-115">
									Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.
								</p> -->
              </div>

              <div class="mx-auto max-w-4 mt-4">
                <SubscriptionCompact
                  label="Subscribe"
                  placeholder="Enter your email" />
              </div>
            </template>
          </PageTitle>
        </div>

        <div class="columns">
          <div class="column is-12">
            <ssBlogGrid :posts="posts" upside-down />

            <!-- <div class="load-more py-6">
							<div class="buttons is-centered">
								<Button color="primary" :long="1" raised bold>Load More</Button>
							</div>
						</div> -->
          </div>
          <!-- 
					<div class="column is-4">
						<BlogStickySide>
							<BlogSearch />

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

								]"
							/>

						
							<BlogTags
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
							/>
						</BlogStickySide>
					</div> -->
        </div>
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
