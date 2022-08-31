<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPost } from '/@src/utils/api/ssPost'

// import { PostItem } from "/@src/components/custom/blog/ssBlogGridItem.vue";

import { posts } from '/@src/data/resources/case-study'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// const post = posts.find(function (data) {
// 	if (data.slug == slug) return true;
// });

const post = ref()
async function fetchPost() {
  try {
    post.value = await getPost(slug, posts)
  } catch {
    // router.replace({
    // 	name: "all",
    // 	params: { all: `not-found-${slug}` },
    // });
    router.replace({
      path: '/resources/blog',
      params: { all: `not-found-${slug}` },
    })
  }
}
onMounted(fetchPost)
onServerPrefetch(fetchPost)
watch(() => route.fullPath, fetchPost)
</script>

<template>
  <div>
    <Section>
      <Container v-if="post">
        <ssBlogPost :content="post" />
      </Container>
    </Section>

    <ssFooter></ssFooter>
  </div>
</template>
