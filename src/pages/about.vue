<script setup lang="ts">
import { customerLogos } from "/@src/data-example/pages/logos";
import { iconValues } from "/@src/data-example/blocks/advanced/values";
import { gridTeam } from "/@src/data-example/blocks/team";
import { founders, longTeam } from "/@src/data-example/blocks/advanced/team";
// import { plantValues } from "/@src/data-example/blocks/advanced/values";
import { press } from "/@src/data-example/blocks/advanced/press";
</script>

<template>
	<div>
		<Section color="grey">
			<Container>
				<CompanyStory
					main-title="Our Story"
					secondary-title="Our Mission"
					main-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
              pellit, qui permulcet sensum voluptate. Hoc non est positum in
              nostra actione. Primum in nostrane potestate est, quid
              meminerimus? Duo Reges: constructio interrete. Respondent extrema
              primis, media utrisque, omnia omnibus. Non risu potius quam
              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut
              etiam non dicente te intellego; Quae tamen a te agetur non melior,
              quam illae sunt."
					secondary-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
              pellit, qui permulcet sensum voluptate. Hoc non est positum in
              nostra actione. Primum in nostrane potestate est, quid
              meminerimus? Duo Reges: constructio interrete. Respondent extrema
              primis, media utrisque, omnia omnibus. Non risu potius quam
              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut
              etiam non dicente te intellego; Quae tamen a te agetur non melior,
              quam illae sunt."
					:images="{
						imageOne: '/assets/img/team-v-5.jpg',
						imageTwo: '/assets/img/team-v-11.jpg',
						imageThree: '/assets/img/team-v-6.jpg',
						imageFour: '/assets/img/team-v-7.jpg',
						imageFive: '/assets/img/team-v-9.jpg',
						imageSix: '/assets/img/team-v-10.jpg',
					}"
					reverse
				/>
			</Container>
		</Section>

		<Section color="grey">
			<Container>
				<SectionTitle title="Our Company Values" subtitle="Dedicated Team" />

				<ValuesIconSection :values="iconValues" polka-dots />

				<LogoMarquee :logos="customerLogos" compact />
			</Container>
		</Section>

		<Section id="team">
			<Container>
				<SectionTitle title="About Our Founder" subtitle="Meet the team" />

				<FoundersSection :founders="founders" :limit="1" />
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="About Our Leaders" subtitle="Meet the team" />

				<TeamBlockC :items="longTeam" bubbles :limit="4" />
			</Container>
		</Section>

		<Section>
			<Container>
				<SectionTitle title="About Our Talent" subtitle="Meet the team" />

				<TeamBlockE :items="gridTeam" :limit="3" squared shapes />
			</Container>
		</Section>

		<Section>
			<Container>
				<!-- <ValuesSection :values="plantValues" image-height="130px" /> -->

				<CtaBlockB
					title-primary="We're Hiring!"
					content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
					cta-primary="Job offers"
					cta-primary-link="/"
					title-secondary="Help us grow"
					content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
					cta-secondary="Sponsor page"
					cta-secondary-link="/"
					boxed
					shapes
					animated
					color="darker"
				/>
			</Container>
		</Section>

		<Section id="media" color="grey">
			<Container>
				<div class="mb-6">
					<SectionTitle title="We are in the press" subtitle="They talk about us" />
				</div>

				<PressSection :releases="press" />

				<CtaBlockA
					title="Media Kit"
					subtitle="Interested in learning more about our products and are a social reviewer?"
					cta-primary="Request kit"
					cta-primary-link="/"
					cta-secondary="Learn More"
					cta-secondary-link="/"
					:logos="customerLogos"
					boxed
					shapes
				/>
			</Container>
		</Section>

		<ssFooter></ssFooter>
	</div>
</template>
