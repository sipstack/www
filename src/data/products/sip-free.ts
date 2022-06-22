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

export const timeline = [
	{
		icon: "iconoir:add-user",
		title: "Create your account",
		text: "Following the signing wizard to get create your account, and confirm your email.",
	},
	{
		icon: "iconoir:ip-address",
		title: "Authorize your hosts",
		text: "Enable each of your hosts by authorizing their IP address on our network.",
	},
	{
		icon: "iconoir:password-cursor",
		title: "Connect your hosts",
		text: "Add our SIP Trunk to your system and prioritize your new route for outbound calls.",
	},
	{
		icon: "iconoir:phone",
		title: "Let the calls begin",
		text: "Enjoy free SIP calls with advanced call detail reporting from the partner portal.",
	},
];

export const features: IconFeature[] = [
	{
		title: "Premium Tier",
		text: "SIP Free utelizes premium tier routes only supporting ULAW, G729, G722 & T.38 where available.",
		color: "primary",
		icon: "iconoir:three-stars",
		link: "/",
	},

	{
		title: "Enhanced CDR Reports",
		text: "Call Detail Records with regional & reverse name display help you get the most from our reports.",
		color: "primary",
		icon: "iconoir:google-docs",
		link: "/",
	},
];

export const pricing = {
	features: ["Unlimited calls", "Unlimited minutes", "Premium tier", "Support ULAW, G729, G722 & T.38*", "Enhanced CDR reports"],
	price: 0,
	pricePer: "per minute",
};

export const faq = {
	left: [
		{
			title: "Why is this product free?",
			content:
				"As a data science through telecom company, we offer products that drive data into our AI/ML learning models to help us achieve our primary goals, making a safer connected tomorrow.",
		},
		{
			title: "How does that data help SIPSTACK?",
			content: "Learning more about traffic patterns provide our AI/ML added insight into our dynamic call rating system when providing a call score.",
		},
		{
			title: "Do my calls have to originate from US or Canada?",
			content:
				"No, you can add use SIP Free in your product and originate calls from everywhere as long as the original caller ID number has been authorized on your account. Please see our Terms of Service, Acceptable Use Policy for more details.",
		},
	],
	right: [
		{
			title: "Is there an API to automate DID authorization?",
			content:
				"Yes, from the SIP Free section of the partner portal, links to our API reference pages will help you integrate adding, modifying and removing phone numbers / DID's from your authorized pool.",
		},
		{
			title: "Is there a concurrent call limit?",
			content: "No, while there is no concurrent call limit, there are call limits per minute. Please see our resource center for call limits for more details.",
		},
		{
			title: "Is there a call duration limit?",
			content:
				"Yes, while these are usually never required, we terminate calls at the 8 hour mark. This is really for stale channels or calls to help prevent incorrect call lengths on a call disconnect without proper SIP completions.",
		},
	],
};

export const cta = {
	title: "Smarter CNAM Begin Here",
	subtitle: "Credit card not required to sign up.",
};
