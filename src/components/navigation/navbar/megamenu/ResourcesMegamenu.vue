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
							<div class="media-left is-resources">
								<span class="iconify" data-icon="heroicons-outline:collection" data-inline="false"></span>
							</div>
							<div class="media-content">
								<h3>Resources</h3>
								<p>Read our latest posts, knowledge base articles, and case studies.</p>
								<RouterLink v-preload-link to="/blocks">
									<span>Open knowledge base</span>
									<i class="iconify" data-icon="feather:arrow-right" data-inline="false"></i>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4>Learn</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/resources/knowledge-base" class="list-link"> Knowledge base </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/resources/docs" class="list-link"> Documentation </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/resources/case-studies" class="list-link"> Case Studies </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/resources/blog" class="list-link"> Latest posts </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-2">
					<div class="megamenu-block ml-6">
						<h4>Community</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/blocks/features" class="list-link"> Forums </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/blocks/team" class="list-link"> Feature requests </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/blocks/content" class="list-link"> Feedback </RouterLink>
							</li>

							<li>
								<RouterLink v-preload-link to="/blocks/testimonials" class="list-link"> Contribute </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="column is-3">
					<div class="megamenu-block ml-6">
						<h4>Legal</h4>
						<ul>
							<li>
								<RouterLink v-preload-link to="/legal/tos" class="list-link"> Terms of Service </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/legal/aup" class="list-link"> Acceptable Use Policy </RouterLink>
							</li>
							<li>
								<RouterLink v-preload-link to="/legal/privacy" class="list-link"> Privacy Policy </RouterLink>
							</li>

							<li>
								<RouterLink v-preload-link to="/legal/cookie" class="list-link"> Cookie Policy </RouterLink>
							</li>
						</ul>
					</div>
				</div>
				<!-- <div class="column is-4 b-hidden-mobile b-hidden-tablet-p">
          <div class="megamenu-block is-left-bordered">
            <div class="image-block">
              <DarkImage
                src="/assets/img/nav-tile.jpeg"
                alt="Megamenu image"
                width="500"
                height="309"
              />
              <div class="inner-block">
                <p class="paragraph rem-85">
                  Get started and discover tips to grow your business and
                  increase your income.
                </p>
                <ActionLink
                  label="Learn more"
                  link="/blog"
                  size="small"
                  narrow
                  heavy
                />
              </div>
            </div>
          </div>
        </div> -->
			</div>
		</Container>
	</div>
</template>
