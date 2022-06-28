<script setup lang="ts">
const submit = () => {
	submit.value = true;
	const form = document.getElementById("form");
	// const formData = new FormData(form);
	var form_data = {};
	Array.from(form.elements).map((el) => {
		if (!el.name) el.name = el.id; // if no element name use id
		if (el.name == "submit") el.value = Date.now();

		form_data[el.name] = el.value;
	});

	// post to api
	(async () => {
		const rawResponse = await fetch("https://api.sipstack.com/v1/f/www/cap/contact", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form_data),
		});
		rawResponse.json();
		// const content = await rawResponse.json();
		// console.log(content); // debug
	})();

	document.getElementById("form").innerHTML =
		"Thank you!<br><br>Your messages has been received.<br><Br>Please allow up to 48 hours for a team member to respond.<br><br>Please visit our <a href='/resources/knowledge-base'>Knowledge Base</a> for more information in the interim.";
};
</script>

<template>
	<div class="contact-form">
		<form id="form" @submit.prevent>
			<div class="columns is-multiline">
				<div class="column is-6">
					<Field>
						<FieldLabel label="First Name">First Name</FieldLabel>
						<Control icon="feather:user">
							<VInput placeholder="Your first name" />
						</Control>
					</Field>
				</div>
				<div class="column is-6">
					<Field>
						<FieldLabel label="Last Name">Last Name</FieldLabel>
						<Control icon="feather:user">
							<VInput placeholder="Your last name" />
						</Control>
					</Field>
				</div>
				<div class="column is-12">
					<Field>
						<FieldLabel label="First Name">Email Address</FieldLabel>
						<Control icon="feather:mail">
							<VInput placeholder="Your mail address" />
						</Control>
					</Field>
				</div>
				<div class="column is-12">
					<Field>
						<FieldLabel label="First Name">Phone Number</FieldLabel>
						<Control icon="feather:phone">
							<VInput placeholder="Your phone number" />
						</Control>
					</Field>
				</div>
				<div class="column is-12">
					<Field>
						<FieldLabel label="First Name">Message</FieldLabel>
						<Control>
							<VTextarea :rows="4" placeholder="Write your message..." />
						</Control>
					</Field>
				</div>
				<div class="column is-12">
					<Control>
						<Button color="primary" bold raised fullwidth @click="() => submit()">
							<span>Send Message</span>
						</Button>
					</Control>
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped lang="scss">
.contact-form {
	position: relative;

	.column {
		padding: 0.4rem;
	}
}
</style>
