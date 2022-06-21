// import type { IconFeature, CompleteFeature, ImageFeature } from '/@src/types'
import type { IconFeature } from "/@src/types";

export const ssProducts = [
	{
		icon: "iconoir:settings-cloud",
		title: "Cloud UC",
		text: "Self-hosted multi-tenant open-source pbx, managed whitelabel web portals.",
	},
	{
		icon: "iconoir:shield-search",
		title: "Smart CNAM",
		text: "AI/ML & Community driven CNAM / Caller ID Name lookup, absolutely FREE!",
	},
	{
		icon: "iconoir:glass-empty",
		title: "SIP Free",
		text: "TF SIP trunk temination. Available for any SIP based system, 100% FREE!",
	},
	{
		icon: "iconoir:pc-check",
		title: "Whois",
		text: "Public CNAM / Caller ID Name lookup, because everyone deserves to know.",
	},
	// {
	// 	icon: "iconoir:shield-check",
	// 	title: "Whois Mobile",
	// 	text: "",
	// },
	// {
	// 	icon: "iconoir:headset-help",
	// 	title: "e911 Plus",
	// 	text: "",
	// },
	// {
	// 	icon: "simple-line-icons:screen-smartphone",
	// 	title: "Connect",
	// 	text: "VoIP augments over cellular mobile app.",
	// },
	// {
	// 	icon: "iconoir:view-grid",
	// 	title: "Cloud UC App Store",
	// 	text: "...",
	// },
];

export const featuresBeyond: IconFeature[] = [
	{
		title: "Origin",
		text: "Every phone number cites origin data including regional, switch and carrier details.",
		color: "primary",
		icon: "feather:mail",
		link: "/",
	},
	{
		title: "CallerID Name",
		text: "Receive the most accurate CallerID Name information including any website, email and social links.",
		color: "info",
		icon: "feather:grid",
		link: "/",
	},
	{
		title: "Risk Scoring",
		text: "Real-time risk scoring is provided on every phone number lookup when querying with a destination.",
		color: "green",
		icon: "feather:briefcase",
		link: "/",
	},

	{
		title: "Community Feedback",
		text: "Access up to date remarks about phone numbers from our community using our Whois applications.",
		color: "purple",
		icon: "feather:credit-card",
		link: "/",
	},
];

export const featuresPreview: IconFeature[] = [
	{
		title: "Multi-Tenant",
		text: "Deploy one or many hosts to serve multiple PBX from a single 'branded' management web portal.",
		color: "primary",
		icon: "iconoir:server",
		link: "/",
	},
	{
		title: "Multi-Brand",
		text: "Expand your reach to resellers and channels by allowing sub-whitelabeling without compromise. ",
		color: "primary",
		icon: "iconoir:multi-window",
		link: "/",
	},
	{
		title: "Self-Hosted",
		text: "Open source and self hosted allows you to deploy hosts in cloud or on premise with your own equipment.",
		color: "primary",
		icon: "iconoir:server-connection",
		link: "/",
	},
];

export const socialLinks = [
	{
		name: "Facebook",
		url: "https://facebook.com/sipstack",
		icon: "fa:facebook",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/mysipstack",
		icon: "fa:twitter",
	},
	{
		name: "Youtube",
		url: "https://youtube.com/sipstack",
		icon: "fa:youtube",
	},
	{
		name: "Instagram",
		url: "https://instagram.com/sipstack",
		icon: "fa:instagram",
	},
	{
		name: "Linkedin",
		url: "https://linkedin.com/sipstack",
		icon: "fa:linkedin",
	},
	{
		name: "GitHub",
		url: "https://github.com/sipstack",
		icon: "fa:github",
	},
];
