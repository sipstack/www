<!-- <script setup lang="ts">
import { post } from "/@src/data/resources/blog/post";
</script>

<template>
	<div>
		<Section>
			<Container>
				<ssBlogPost :content="post" centered />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template> -->

<script setup lang="ts">
import { post } from "/@src/data/resources/blog/post";
</script>

<template>
	<div>
		<Section>
			<Container>
				<BlogPost :content="post" />
			</Container>
		</Section>
		<!-- <SubscriptionCompact label="Search Now" placeholder="Enter phone number" /> -->
		<ssFooter></ssFooter>
	</div>
</template>
