<script setup lang="ts">
// import { socialLinks } from "/@src/data/sipstack";
</script>
<template>
	<Section color="grey">
		<Container>
			<CtaBlockJ small-text="Get started" title="Smarter Communications Begin Here" subtitle="Credit card not required to sign up.">
				<form>
					<Field grouped>
						<Control icon="feather:mail" expanded>
							<VInput placeholder="Email" />
						</Control>
						<Control icon="feather:lock" expanded>
							<VInput placeholder="Password" password />
						</Control>
						<Control>
							<Button size="form" color="primary" :long="2"> Create account </Button>
						</Control>
					</Field>
				</form>
			</CtaBlockJ>
		</Container>
	</Section>
</template>