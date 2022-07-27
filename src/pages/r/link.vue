<script setup lang="ts">
</script>

<script>
export default {
	mounted() {
		if (window.location.search) {
			var search = window.location.search;
			var link = search.replace("?href=", "");
			// window.location.href = link;
			window.open(link, "_blank");
			history.go(-1);
			location.reload();
		}
	},
};
</script>