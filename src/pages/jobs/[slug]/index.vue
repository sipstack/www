<script setup lang="ts">
// import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const resp = ref(true)

const route = useRoute()
var slug = route.fullPath.split('/').slice(-1)

const getData = () => {
  fetch(`http://192.168.1.13:3001/v1/f/www/jobs/${slug}`, {
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
</script>
  
  <template>
  <div>
    <Section overflown>
      <Container v-if="resp">
        <ssJobDetails :job="resp"></ssJobDetails>
      </Container>
    </Section>

    <SsFooter></SsFooter>
  </div>
</template>
  