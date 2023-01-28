<script setup lang="ts">
// import { jobTopics } from '/@src/data-example/pages/jobs'
// import { jobs } from '/@src/data/resources/jobs'
import { ref, onBeforeMount } from 'vue'
// import { useRoute } from 'vue-router'
// import type { Job, IconFeature } from '/@src/types'
// import { PostItem } from './ssJobGridItem.vue'

const resp = ref([])
const resp_cat = ref([{}])

// const route = useRoute()
// var slug = route.fullPath.split('/').slice(-1)

const getData = () => {
  fetch(
    `https://api.sipstack.com/v1/f/www/jobs`,

    // `http://192.168.1.13:3001/v1/f/www/jobs`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((response) => {
      // console.log({ response })
      // response.data.description = atob(response.data.description)
      // response.data.extra = atob(response.data.extra)
      resp.value = response.data
      var tmp = []
      response.data.map(function (value, key) {
        // name: 'Business',
        // slug: 'business',
        // postCount: 12,
        // resp_cat.value
        // console.log(value)

        if (!tmp.includes(value.category)) {
          tmp.push(value.category)
          resp_cat.value.push({
            name: value.category,
            slug: value.category,
            postCount: 1,
          })
          // console.log(resp_cat.value)
        }
      })
      // console.log(tmp)
    })
    .catch((error) => {
      console.log('Looks like there was a problem: \n', error)
    })
}
onBeforeMount(() => {
  getData()
})
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle title="We're Hiring" subtitle="Jobs">
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Sipstack is rewriting the rules of telecommunications. If you
                  believe in eliminating fraudulent and spam calling from our
                  future and thrive on problem solving at scale, we want you to
                  join our team.
                </p>
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
              <!-- [
                  {
                    name: 'Business',
                    slug: 'business',
                    postCount: 12,
                  },
                  ] -->
              <SsJobCategories :categories="resp_cat" />
            </BlogStickySide>
          </div>
        </div>
      </Container>
    </Section>
    <SsFooter></SsFooter>
  </div>
</template>
