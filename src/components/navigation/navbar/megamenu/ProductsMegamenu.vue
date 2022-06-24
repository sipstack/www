<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<template>
	<div class="megamenu-inner">
		<button class="close-button" @click="emit('close')">
			<i class="iconify" data-icon="feather:arrow-left"></i>
		</button>
		<Container>
			<div class="columns">
				<div class="column is-4">
					<div class="megamenu-block">
						<div class="media">
							<div class="media-left is-company">
								<span class="iconify" data-icon="iconoir:internet" data-inline="false"></span>
								<!-- <img
                  src="/assets/logo/logo.svg"
                  alt="SIPSTACK"
                  width="35"
                  height="35"
                /> -->
							</div>
							<div class="media-content">
								<h3>Products</h3>
								<p>The most modern & advanced unified SIP based communication tools ever.</p>
								<RouterLink v-preload-link to="/about">
									<span>About SIPSTACK</span>
									<i class="iconify" data-icon="feather:external-link" data-inline="false"></i>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4>VoIP</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/products/cloud-uc" class="list-link">
									Cloud UC
									<!-- <Tag label="Default" class="rem-50">Coming soon</Tag> -->
								</RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/products/smart-cnam" class="list-link"> Smart CNAM </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/products/sip-free" class="list-link"> SIP Free </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4 class="">Apps</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/products/whois" class="list-link"> Whois </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-4">
					<div class="megamenu-block is-left-bordered">
						<div class="media">
							<div class="media-content">
								<h3>Developer documentation</h3>
								<p>Learn more about how you can get the most from the SIPSTACK platform and API library.</p>
								<a href="https://docs.cssninja.io/vulk">
									<span>Read Documentation</span>
									<i class="iconify" data-icon="feather:arrow-right" data-inline="false"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>
