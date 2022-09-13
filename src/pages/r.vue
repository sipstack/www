<script setup lang="ts">
// USED AS A REDIRECT PAGE
// SEND LINKS TO /r?href=https....
</script>

<script>
export default {
  mounted() {
    if (window.location.search) {
      var search = window.location.search
      var link = search.replace('?href=', '')
      // window.location.href = link;
      window.open(link, '_blank')
      history.go(-1)
      location.reload()
    } else {
      window.location.href = '/'
    }
  },
}
</script>