<script setup lang="ts">
// import { jobTopics } from '/@src/data-example/pages/jobs'
import { jobs } from '/@src/data/resources/jobs'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import type { Job, IconFeature } from '/@src/types'
import { PostItem } from './ssJobGridItem.vue'

const resp = ref(true)

const route = useRoute()
// var slug = route.fullPath.split('/').slice(-1)

const getData = () => {
  fetch(`http://192.168.1.13:3001/v1/f/www/jobs`, {
    headers: { 'Content-type': 'application/json' },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log({ response })
      // response.data.description = atob(response.data.description)
      // response.data.extra = atob(response.data.extra)
      resp.value = response.data
    })
    .catch((error) => {
      console.log('Looks like there was a problem: \n', error)
    })
}
onBeforeMount(() => {
  getData()
})
// import { socialLinks } from '/@src/data/blocks/advanced/social'

// http://192.168.1.13:3001/v1/f/www/jobs

// const resp: PostItem[] = [
//   {
//     slug: 'technical-writer',
//     category: 'Marketing',
//     tags: [],
//     location: 'Toronto, ON',
//     title: 'Technical Writer',
//     abstract:
//       'Voice over internet protocol (VoIP) is the capability to transmit voice signals in real time over the internet and telephone network.',
//     created: '18/05/2021',
//     updated: '',
//   },
//   {
//     slug: 'ai-engineer',
//     category: 'Engineering',
//     tags: [],
//     location: 'Toronto, ON',
//     title: 'AI Engineer',
//     abstract:
//       'Voice over internet protocol (VoIP) is the capability to transmit voice signals in real time over the internet and telephone network.',
//     created: '18/05/2021',
//     updated: '',
//   },
// ]
// const resp = {
//   data: [
//     {
//       slug: 'technical-writer',
//       category: 'Marketing',
//       tags: [],
//       location: 'Toronto, ON',
//       title: 'Technical Writer',
//       abstract:
//         'Voice over internet protocol (VoIP) is the capability to transmit voice signals in real time over the internet and telephone network.',
//       created: '18/05/2021',
//       updated: '',
//     },
//     {
//       slug: 'ai-engineer',
//       category: 'Engineering',
//       tags: [],
//       location: 'Toronto, ON',
//       title: 'AI Engineer',
//       abstract:
//         'Voice over internet protocol (VoIP) is the capability to transmit voice signals in real time over the internet and telephone network.',
//       created: '18/05/2021',
//       updated: '',
//     },
//   ],
// }
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle title="Jobs" subtitle="">
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Sipstack is rewriting the rules of telecommunications. If you
                  believe in eliminating fraudulent and spam calling from our
                  future and thrive on problem solving at scale, we want you to
                  join our team.
                </p>
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
          <div class="column is-8">
            <ssJobGrid :posts="resp" side-grid upside-down />
            <!-- {{ resp.title }} -->
            <div class="load-more py-6">
              <div class="buttons is-centered">
                <!-- <Button color="primary" :long="3" raised bold>Load More</Button> -->
              </div>
            </div>
          </div>

          <div class="column is-4">
            <BlogStickySide>
              <!-- <BlogSearch /> -->

              <!-- <BlogRecentPosts :posts="posts" /> -->

              <SsJobCategories
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
                ]" />

              <!-- <BlogTags
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
                ]" /> -->
            </BlogStickySide>
          </div>
        </div>
      </Container>
    </Section>
    <SsFooter></SsFooter>
  </div>
</template>
