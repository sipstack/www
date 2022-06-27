// import type { PostItem } from "/@src/components/advanced/blog/blog-grid-item/BlogGridItem.vue";
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
		title: "Simple text response",
		text: "Returns a 20-character string response including a prefixed score followed by caller name.",
		color: "purple",
		icon: "iconoir:text",
		link: "/",
	},
	{
		title: "Advanced JSON response",
		text: "When more details are required, JSON responses can be returned with rich data sets.",
		color: "purple",
		icon: "iconoir:code-brackets",
		link: "/",
	},
];

// export const pricing = {
// 	features: ["Unlimited projects", "Desktop and mobile app", "Unlimited tasks", "Email integration", "Unlimited time records"],
// 	price: 0,
// };

export const faq = {
	left: [
		{
			title: "What is the difference between a Partner & Vertical?",
			content:
				"Partners are typically telecom related entities that integrate Smart CNAM into their call flows. API requests are typically sent with a destination phone number in order to return an accurate dynamic call score. While Vertical markets may not have a destination number to provide however, may wish to receive caller information. They can do so without a destination number for a minimial cost. Our AI/ML is enhanced by Partner integrations which contribute to hyper accurate realtime call ratings.",
		},
		{
			title: "How accurate is the information returned?",
			content:
				"Very accurate! Our AI/ML is constantly learning and adapting ensuring that caller information is up to date, and any meta data such as websites, emails, social, etc... are all current. Caller badges indicate call details are verified, however call ratings will always be dynamic.",
		},
		{
			title: "How does it differ from regular CNAM lookup tools?",
			content: "Smart CNAM is a next generation lookup tool. Smart CNAM goes way beyond just a name response and can include a tremendous amount of information when requested.",
		},
	],
	right: [
		{
			title: "Why some people receive different scores?",
			content:
				"Depending on many factors, our AI/ML will determine the distance between callers, how often a caller makes calls to those regions or numbers just to list a few that makeup the learning conditions. Call rating will always be dynamic.",
		},
		{
			title: "Why is a caller suddently receiving lower scores?",
			content:
				"If the same number is calling the same destination and the score changes dramatically, this could indicate that abnormal or fraudulent call behaviours have been suspected and community feedback has been verified. Scoring is adaptive and much like turning on any new system, there is a warm up phase.",
		},
		{
			title: "Are there any limitations?",
			content: "Yes, please read through our Terms of Service, Acceptable Use Policy and our API Rate limits from our Resource center.",
		},
	],
};

export const cta = {
	title: "Smarter CNAM Begin Here",
	subtitle: "Credit card not required to sign up.",
};
