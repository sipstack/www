<script setup lang="ts">
// USED AS A REDIRECT PAGE
// SEND LINKS TO /r?href=https....
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
// import Router from 'vue-router'
const route = useRoute()

onBeforeMount(() => {
  // console.log(route.query)
  if (route.query && route.query.href) {
    window.open(route.query.href, '_blank')
    history.go(-1)
    location.reload()
  }
  //   if (window.location.search) {
  //   var search = window.location.search
  //   var link = search.replace('?href=', '')
  //   // window.location.href = link;
  //   window.open(link, '_blank')
  //   history.go(-1)
  //   location.reload()
  // } else {
  //   window.location.href = '/'
  // }
})
</script>
