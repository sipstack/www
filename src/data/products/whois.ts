import type { IconFeature } from "/@src/types";

export const pageLinks = [
	{
		label: "Overview",
		target: "overview",
	},
	{
		label: "Features",
		target: "features",
	},
	{
		label: "Pricing",
		target: "pricing",
	},

	{
		label: "FAQs",
		target: "faqs",
	},
];

export const features: IconFeature[] = [
	{
		title: "Name display",
		text: "Latest caller information including regional & carrier data.",
		color: "purple",
		icon: "iconoir:user-scan",
		link: "/",
	},
	{
		title: "Trust rating",
		text: "Real-time risk score assesment based on AI & community feedback.",
		color: "purple",
		icon: "iconoir:star-outline",
		link: "/",
	},

	{
		title: "Caller details",
		text: "See other phone numbers, website, email & social links at a glance.",
		color: "purple",
		icon: "iconoir:journal",
		link: "/",
	},
	{
		title: "Community feedback",
		text: "Get the latest comments from users like you on recent call activity.",
		color: "purple",
		icon: "iconoir:input-field",
		link: "/",
	},
	{
		title: "Personal Dashboard",
		text: "View recent lookups, reviews & shares at a glance from your dashboard.",
		color: "purple",
		icon: "feather:grid",
		link: "/",
	},

	{
		title: "Social Integrations",
		text: "Help others by sharing recently reviewed calls to your social networks.",
		color: "purple",
		icon: "feather:facebook",
		link: "/",
	},
	{
		title: "My Number",
		text: "Verify your phone number & control information accuracy for others.",
		color: "purple",
		icon: "iconoir:verified-user",
		link: "/",
	},
	{
		title: "Mobile Ready",
		text: "Responsive design with PWA support & native apps coming soon.",
		color: "purple",
		icon: "iconoir:smartphone-device",
		link: "/",
	},
];

export const pricing = {
	features: ["Search 1.1B+ phone numbers", "Dynmic risk rating", "Personal dashboard", "Community feedback", "Social sharing", "Mobile ready"],
	price: 0,
	pricePer: "Always free",
};

export const faq = {
	left: [
		{
			title: "Is it really free?",
			content: "Yes, we believe that everyone should have access to who is calling them. It is the only real way to help identify authentic from fraudulent callers.",
		},
		{
			title: "How does the rating / risk scoring work?",
			content:
				"A broad range of factors are taken into account, and scoring is always changing depending on a broad range of things. Community feedback also is accounted for and is processed by our AI/ML before providing a caller score.",
		},
		{
			title: "How does it differ from other tools?",
			content:
				"Whois by SIPSTACK is the only tool that provides dyanmic call scoring along with any related information from websites, email addresses, locations and social networks.",
		},
	],
	right: [
		{
			title: "How can I manage my own phone number listing?",
			content:
				"In the description card box, you can click 'This is my phone number', which will guide you to creating an account, followed by steps to verify your phone number before being able to update and manage the listing. This option may not be available in all regions yet.",
		},
		{
			title: "How can I improve my phone number call score?",
			content:
				"A number of factors are processed by our AI/ML systems before providing a call score. Additionally people looking up your number from different regions may see different scores depending on how often you call those areas, and how often community members rate your call as OK are some elements accounted for in call scoring process. Scores will always be dynamic.",
		},
		{
			title: "Can I claim multiple phone numbers?",
			content:
				"Yes, this is particularly important for companies and business owners. You can verify multiple phone numbers from a single Whois community account, or have greater control when using a SIPSTACK Cloud UC powered phone system. Talk to your ITSP / MSP about deploying a SIPSTACK powered system for your business.",
		},
	],
};

export const cta = {
	title: "Smarter CNAM Begin Here",
	subtitle: "Credit card not required to sign up.",
};
