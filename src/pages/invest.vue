<!-- <route lang="yaml">
meta:
  layout: inverted-nav
</route> -->

<script setup lang="ts">
import { pageLinks } from "/@src/data/products/whois";
import { starterTemplates } from "/@src/data-example/pages/development";
import { techLogos, customerLogos } from "/@src/data-example/pages/logos";
// import { socialLinks } from "/@src/data-example/blocks/advanced/social";
</script>

<template>
	<div>
		<HeroProducts
			title="Investor Relations"
			subtitle="CallerID name lookup for everyone"
			button1-title="Create account"
			button1-href="/get-started"
			button2-title="Try now"
			button2-href="https://whois.sipstack.com"
		/>

		<DemoLinks :links="pageLinks" width="400px" />
		<!-- <PageTitle
      title="Make it count again"
      subtitle="Get Started"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
    >
      <template #content>
        <Buttons alignment="centered" class="mt-4">
          <Button color="primary" :long="3" bold raised>Get Started</Button>
          <Button :long="3" bold>Learn More</Button>
        </Buttons>
      </template>
    </PageTitle> -->
		<Section>
			<Container>
				<TimelineTitle title="We are API first" subtitle="Foundation" color="primary" :step="1">
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
					</template>
				</TimelineTitle>

				<ssDevWindows />
				<!-- <ssTimelineTitleSub title="Talent constructs our Glory" subtitle="Team" color="primary"> -->
				<TimelineTitle title="Talent defines our Glory" subtitle="Team" color="primary" :step="2">
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
						<CtaBlockF
							title="Talent & Glory"
							subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini quae cum dixisset."
							background="/assets/img/team-3.jpg"
							overlay
							alignment="right"
							cta="Meet the Team"
							cta-link="index"
						/>
					</template>
				</TimelineTitle>

				<TimelineTitle title="We are Cloud Native" subtitle="Advantage" minititle="Infrastructure" color="primary" :step="3">
					<template #subheading>
						<div class="is-flex is-justify-content-center py-4">
							<AvatarGroup :avatars="techLogos" :limit="5" boxed />
						</div>
					</template>
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
					</template>
				</TimelineTitle>

				<ssTimelineInvest />

				<TimelineTitle title="Very BIG Data" subtitle="Data" color="primary" :step="3">
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
					</template>
				</TimelineTitle>

				<ssGlobeStats />

				<TimelineTitle title="Everything is changing" subtitle="Importance" minititle="Connecting Tomorrow" color="primary" :step="5">
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
					</template>
				</TimelineTitle>

				<TimelineTitle title="Support our future" subtitle="Contribute" color="primary" :step="6">
					<template #content>
						<div class="py-6 mx-auto max-w-9">
							<div class="columns b-columns-half-tablet-p">
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
								<div class="column is-6">
									<p class="paragraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Recte, inquit, intellegis.
										Quod autem ratione actum est, id officium appellamus.
									</p>
								</div>
							</div>
						</div>
					</template>
				</TimelineTitle>

				<ssDualBoxes :templates="starterTemplates" />
			</Container>
		</Section>

		<Section>
			<template #background>
				<SectionMap light />
			</template>
			<Container>
				<CompanyGrid title="We help people work faster at" :logos="customerLogos" :limit="20" />
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
