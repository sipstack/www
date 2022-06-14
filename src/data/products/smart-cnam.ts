// import type { PostItem } from "/@src/components/advanced/blog/blog-grid-item/BlogGridItem.vue";
import type { SimpleIconFeature } from "/@src/types";

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

export const salesFeatures: SimpleIconFeature[] = [
	{
		title: "Trust rating",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:star-outline",
	},
	{
		title: "Name display",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:user-scan",
	},
	{
		title: "Community feedback",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:input-field",
	},
	{
		title: "Caller details",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
		icon: "iconoir:journal",
	},
];

export const posts = [
	{
		id: 0,
		image: "/assets/illustrations/blog/commerce-1.svg",
		title: "Increase conversion rates and learn how to manage abandonned carts",
		likes: "112",
		categories: [
			{
				name: "Commerce",
			},
			{
				name: "Conversion",
			},
			{
				name: "Profit",
			},
		],
		date: "March 17th, 2022",
		duration: 2,
		link: "tttt",
	},
	{
		id: 1,
		image: "/assets/illustrations/blog/commerce-2.svg",
		title: "How order bumps can help increasing your revenue and conversions",
		likes: "319",
		categories: [
			{
				name: "Orders",
			},
			{
				name: "Checkout",
			},
			{
				name: "Conversion",
			},
		],
		date: "March 17th, 2022",
		duration: 2,
		link: "",
	},
	{
		id: 2,
		image: "/assets/illustrations/blog/commerce-3.svg",
		title: "How a rich and well maintained catalogue easily converts customers",
		likes: "519",
		categories: [
			{
				name: "Conversion",
			},
			{
				name: "Sales",
			},
			{
				name: "Products",
			},
		],
		date: "March 17th, 2022",
		duration: 2,
		link: "",
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
