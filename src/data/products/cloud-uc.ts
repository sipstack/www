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
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "primary",
		icon: "iconoir:user-scan",
		link: "/",
	},
	{
		title: "Trust rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "yellow",
		icon: "iconoir:star-outline",
		link: "/",
	},

	{
		title: "Caller details",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "purple",
		icon: "iconoir:journal",
		link: "/",
	},
	{
		title: "Community feedback",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "yellow",
		icon: "iconoir:input-field",
		link: "/",
	},
	{
		title: "Personal Dashboard",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "info",
		icon: "feather:grid",
		link: "/",
	},
	{
		title: "Website",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "red",
		icon: "iconoir:www",
		link: "/",
	},
	{
		title: "Social Integrations",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "success",
		icon: "feather:facebook",
		link: "/",
	},
	{
		title: "Dynamic rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
		color: "orange",
		icon: "iconoir:star-half-dashed",
		link: "/",
	},
];

export const pricing = {
	features: ["Unlimited projects", "Desktop and mobile app", "Unlimited tasks", "Email integration", "Unlimited time records"],
	price: 0,
};

export const faq = {
	left: [
		{
			title: "How much does it cost?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "Does it really work anywhere?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "How does it differ from other tools?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
	],
	right: [
		{
			title: "How does it work?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "Can I try it for free?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
		{
			title: "How many agents are allowed?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.",
		},
	],
};

export const cta = {
	title: "Smarter CNAM Begin Here",
	subtitle: "Credit card not required to sign up.",
};
