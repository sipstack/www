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
								<!-- <span
                  class="iconify"
                  data-icon="heroicons-outline:fast-forward"
                  data-inline="false"
                ></span> -->
								<img src="/assets/logo/logo.svg" alt="SIPSTACK" width="35" height="35" />
							</div>
							<div class="media-content">
								<h3 class="text-primary">SIPSTACK</h3>
								<p>Data sciences through telecom.<br />Building a safer connected tomorrow, today.</p>
								<RouterLink to="/about">
									<span>More about us</span>
									<i class="iconify" data-icon="feather:arrow-right" data-inline="false"></i>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4>WHO WE ARE</h4>
						<ul>
							<li>
								<!-- <RouterLink v-preload-link to="/about#story" class="list-link"> Our story </RouterLink> -->
								<a href="/about#story" class="list-link"> Our story </a>
							</li>
							<li>
								<!-- <RouterLink v-preload-link to="/about#team" class="list-link"> Meet the team </RouterLink> -->
								<a href="/about#team" class="list-link"> Meet the team </a>
							</li>

							<li>
								<!-- <RouterLink v-preload-link to="/about#media" class="list-link"> In the media </RouterLink> -->
								<a href="/about#media" class="list-link"> In the media </a>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4>REACH US</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/contact/us" class="list-link"> Contact </RouterLink>
							</li>

							<li>
								<a href="https://www2.sipstack.com/jobs/" class="list-link"> Careers </a>
							</li>
							<li>
								<RouterLink v-preload-link to="/contact/abuse" class="list-link"> Report Abuse </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-4 b-hidden-mobile b-hidden-tablet-p">
					<div class="megamenu-block is-left-bordered">
						<div class="image-block">
							<DarkImage src="/assets/img/office-20.jpg" alt="Megamenu image" width="500" height="309" />
							<div class="inner-block">
								<p class="paragraph rem-85">We're hiring.</p>
								<ActionLink label="Job Offers" link="/jobs" size="small" narrow heavy />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>
