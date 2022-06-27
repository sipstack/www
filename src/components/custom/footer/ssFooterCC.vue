<script setup lang="ts">
import { computed } from "vue";

export type FooterColors = "light" | "dark";

export interface FooterCSocialLink {
	url: string;
	name: string;
	icon: string;
}

export interface FooterCProps {
	text: string;
	color?: FooterColors;
	socialLinks?: FooterCSocialLink[];
	bubbles?: boolean;
	curved?: boolean;
	image?: string;
}

const props = withDefaults(defineProps<FooterCProps>(), {
	color: undefined,
	socialLinks: undefined,
	bubbles: false,
	curved: false,
	image: undefined,
});

const footerClasses = computed(() => [props.color && `footer-${props.color}`, props.curved && `footer-curved`, props.bubbles && "footer-overflow"]);
</script>

<template>
	<footer class="footer" :class="footerClasses">
		<FooterBubbles v-if="props.bubbles" />

		<div class="container footer-inner">
			<div class="columns is-multiline b-only-tablet-p-flex">
				<div class="column is-3">
					<div class="footer-group">
						<a class="footer-logo-left css-ninja" href="/">
							<img class="size-44" src="/assets/logo/ss-logo.svg" alt="Footer logo" style="max-height: 36px" />
							<span class="is-sr-only">Footer logo</span>
						</a>
						<p class="footer-text rem-90 max-w-3 mt-4">{{ props.text }}</p>
						<!-- <div class="level is-mobile py-4 max-w-1">
              <RouterLink
                v-for="(link, index) in props.socialLinks"
                :key="index"
                class="level-item footer-link"
                :to="link.url"
              >
                <span class="icon">
                  <i class="iconify" :data-icon="link.icon"></i>
                  <span class="is-sr-only">{{ link.name }}</span>
                </span>
              </RouterLink>
            </div> -->
					</div>
				</div>
				<div class="column is-8 is-offset-1">
					<div class="columns b-only-tablet-p-flex b-columns-half-mobile">
						<div class="column is-4">
							<div class="footer-group">
								<slot name="column-1">
									<Title tag="h3" :size="6" weight="semi" :inverted="props.color === 'dark'">
										<span>Products</span>
									</Title>
									<ul>
										<li>
											<RouterLink to="/products/cloud-uc" class="level-item footer-link"> Cloud UC </RouterLink>
										</li>
										<li>
											<RouterLink to="/products/smart-cnam" class="level-item footer-link"> Smart CNAM </RouterLink>
										</li>
										<li>
											<RouterLink to="/products/sip-free" class="level-item footer-link"> SIP Free </RouterLink>
										</li>
										<li>
											<RouterLink to="/products/whois" class="level-item footer-link"> Whois </RouterLink>
										</li>
									</ul>
								</slot>
							</div>
						</div>
						<div class="column is-4">
							<div class="footer-group">
								<slot name="column-2">
									<Title tag="h3" :size="6" weight="semi" :inverted="props.color === 'dark'">
										<span>Resources</span>
									</Title>
									<ul>
										<li>
											<RouterLink to="/resources/knowledge-base" class="level-item footer-link"> Knowledge Base </RouterLink>
										</li>
										<li>
											<RouterLink to="/resources/docs" class="level-item footer-link"> Documentation </RouterLink>
										</li>
										<li>
											<RouterLink to="/resources/case-studies" class="level-item footer-link"> Case studies </RouterLink>
										</li>
										<li>
											<a href="https://github.com/sipstack/sipstack/discussions" class="level-item footer-link" target="_blank"> Forums </a>
										</li>
										<li>
											<RouterLink to="/resources/blog" class="level-item footer-link"> Latest posts </RouterLink>
										</li>
									</ul>
								</slot>
							</div>
						</div>
						<div class="column is-4">
							<div class="footer-group xs:pt-6">
								<slot name="column-3">
									<Title tag="h3" :size="6" weight="semi" :inverted="props.color === 'dark'">
										<span>Company</span>
									</Title>
									<ul>
										<li>
											<RouterLink to="/about" class="level-item footer-link"> About us </RouterLink>
										</li>

										<li>
											<a href="/about#media" class="level-item footer-link"> In the media </a>
										</li>
										<li>
											<a href="mailto://invest@sipstack.com" class="level-item footer-link"> Investor Relations </a>
										</li>
										<li>
											<RouterLink to="/contact/us" class="level-item footer-link"> Contact </RouterLink>
										</li>
									</ul>
								</slot>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="props.image" class="footer-img" role="presentation">
			<img :src="props.image" alt="footer-image" />
		</div>
		<div class="container copyright pt-10">
			<div class="columns">
				<div class="column is-4 has-text-left has-text-centered-mobile">
					<span class="footer-text-sub rem-90"> SIPSTACK is a registered trademark of SIPSTACK Inc. </span>
				</div>
				<div class="column is-8 has-text-right has-text-centered-mobile">
					<span id="footer-link-social" class="footer-text rem-90">
						<!-- <RouterLink v-for="(link, index) in props.socialLinks" :key="index" class="footer-link footer-link-social" :to="link.url">
							<span class="icon">
								<i class="iconify" :data-icon="link.icon"></i>
								<span class="is-sr-only">{{ link.name }}</span>
							</span>
						</RouterLink> -->
						<a v-for="(link, index) in props.socialLinks" :key="index" class="footer-link footer-link-social" :href="link.url" target="_blank">
							<span class="icon">
								<i class="iconify" :data-icon="link.icon"></i>
								<span class="is-sr-only">{{ link.name }}</span>
							</span>
						</a>
					</span>
				</div>
			</div>
		</div>
		<hr />
		<div class="container copyright pt-10">
			<div class="columns">
				<div class="column is-4 has-text-left has-text-centered-mobile">
					<!-- <a href="/">
            <img
              class="footer-logo"
              src="/assets/logo/logo.svg"
              alt="Footer
            logo"
              width="36"
            />
          </a> -->
					<span class="footer-text rem-90">
						<span role="img" aria-label="copyright">©</span>
						2022 SIPSTACK Inc.
					</span>
				</div>
				<div class="column is-8 has-text-right has-text-centered-mobile">
					<span class="footer-text rem-90">
						<span id="footer-link-legal">
							<a href="/legal/tos" class="footer-link pr-10">Terms of Service</a>
							<a href="/legal/aup" class="footer-link pr-10">Acceptable Use Policy</a>
							<a href="/legal/privacy" class="footer-link pr-10">Privacy Policy</a>
							<a href="/legal/cookie" class="footer-link pr-10">Cookie Policy</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	position: relative;
	padding-top: 6rem;
	padding-bottom: 3rem;
	background: var(--footer-default-bg-color);

	&.footer-overflow {
		:global(body) {
			//overflow-x: hidden;
		}
	}

	&.footer-curved {
		border-top-left-radius: 50% 20%;
		border-top-right-radius: 50% 20%;
	}

	&.footer-light {
		background: var(--footer-light-bg-color);
	}

	&.footer-dark {
		background: var(--footer-dark-bg-color);

		.title {
			color: var(--white-smoke);
			opacity: 0.6;
		}

		.footer-link {
			color: var(--white-smoke);
			opacity: 0.8;

			&:hover {
				color: var(--primary-light-10) !important;
				opacity: 1;
			}
		}

		.footer-text {
			color: var(--white-smoke);
		}
		// jon added
		.footer-text-sub {
			font-family: var(--font);
			color: var(--light-text);
		}
		// jon
		hr {
			width: 100%;
			opacity: 0.2;
			padding-top: 0px;
			margin-bottom: 0px;
		}
		.footer-logo {
			display: inline;
			vertical-align: middle;
			padding-right: 10px;
		}
	}

	.footer-group {
		text-align: left;
	}

	.footer-link,
	:deep(.footer-link) {
		font-family: var(--font);
		color: var(--medium-text);
		transition: color 0.3s;
		justify-content: flex-start;
		font-size: 0.95rem;

		&:hover {
			color: var(--primary);
		}
	}

	.footer-text {
		font-family: var(--font);
		color: var(--medium-text);
	}
	// jon added #footer-link-legal

	#footer-link-legal a {
		padding-right: 1em;
		padding-left: 1em;
		// border-right: 0.5px solid #fff;
	}
	#footer-link-legal a:last-child {
		border-right: none;
		padding-right: unset;
	}

	// jon added

	#footer-link-social a {
		padding-right: 0.6em;
		padding-left: 0.6em;
		// border-right: 0.5px solid #fff;
	}
	#footer-link-social a:last-child {
		border-right: none;
		padding-right: unset;
	}

	.footer-logo-centered {
		display: block;
		width: 100%;

		img {
			margin: 0 auto;
		}
	}

	.footer-logo-left {
		img {
			display: block;
		}
	}

	.footer-img {
		margin: 20px auto 18px;
		height: 140px;
		width: 100%;
		max-width: 640px;

		img {
			display: block;
			max-width: 100%;
			margin: 0 auto;
		}
	}
}

@media only screen and (max-width: 767px) {
	.footer {
		&.footer-curved {
			border-top-left-radius: 80% 20%;
			border-top-right-radius: 80% 20%;
		}
	}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
	.b-only-tablet-p-flex {
		.column {
			&.is-3 {
				width: 40%;
				max-width: 40%;
				padding-right: 2rem;
			}
		}
	}
}
</style>
