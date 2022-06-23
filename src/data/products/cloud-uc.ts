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

export const content3 = {
	title: "Self-hosted & Open Source",

	text: [
		{
			paragraph:
				"SIPSTACK Cloud UC have several major components that make up the platform. The core PBX functions are built on Asterisk and is provided as an open source download in several installer methods and from our GitHub page.",
		},
		{
			paragraph:
				"The API, web portals and email relays are all contained within the SISPTACK network across regional datacenters keeping data within borders where compliance and regulatory board require.",
		},
	],
	images: [
		{
			url: "/assets/img/stack-asterisk.png",
			name: "Asterisk",
			position: "Core PBX funcions",
			description: "Easily migrate existing Asterisk, FreePBX based systems into SIPSTACK Cloud UC.",
		},
		{
			url: "/assets/img/stack-docker.png",
			name: "Docker",
			position: "Preferred installer",
			description: "Docker makes it simple to maintain the latest from SIPSTACK Cloud UC.",
		},
		{
			url: "/assets/img/stack-debian.png",
			name: "Debian 11",
			position: "Installer option",
			description: "Deploy SIPSTACK Cloud UC on Debian with our latest installer scripts.",
		},
		{
			url: "/assets/img/stack-ubuntu.png",
			name: "Ubuntu 22.04",
			position: "Installer option",
			description: "Deploy SIPSTACK Cloud UC on Ubuntu with our latest installer scripts.",
		},
		{
			url: "/assets/img/stack-proxmox.png",
			name: "Proxmox",
			position: "Cloud hypervisor",
			description: "Quick templates for Proxmox, AWS, Azure, GCP, Digitalocean and other clouds.",
		},
	],
};

export const features: IconFeature[] = [
	{
		title: "Mutli-brand",
		text: "Create one or many brands with custom domains, color themes and logos for unique experiences.",
		color: "purple",
		icon: "mdi:hexagon-multiple-outline",
		link: "/",
	},
	{
		title: "Multi-host",
		text: "Scale your hosts in the cloud or on-premise while maintaining full control from a single portal.",
		color: "purple",
		icon: "icon-park-outline:server",
		link: "/",
	},

	{
		title: "Multi-tenant",
		text: "Deploy PBX's across hosts, regions and brands all from a single portal. Easility toggle between active tenants.",
		color: "purple",
		icon: "icon-park-outline:network-tree",
		link: "/",
	},
	{
		title: "Asterisk based",
		text: "Manage customers though Cloud UC portal or use existing CLI on your hosts with commands you already know.",
		color: "purple",
		icon: "ph:asterisk-bold",
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
				"Pricing has not been announced yes as the product is till in beta. Partners who request an invite and get accepted will not be charged until full pricing is announced.",
		},
		{
			title: "Can we contribute to the project?",
			content:
				"Yes, via our GitHub page, you can open issues, contribute to our community forums / discussions. You may also request to join our contribution team, more details availble on our resources section.",
		},
		{
			title: "How does it differ from other portals?",
			content:
				"Cloud UC allows Partners to bring their brands to the latest in management features while continueing to manage and scale the physical hosts within their own borders and environments. Cloud UC bridges all hosts regardless of cloud, public or private, and provides unparalled administration across hosts from a single portal. Cloud UC users will also benefit from augmented caller data across user experiences. For example incoming calls to users on the mobile apps will see enhanced Caller ID information including dynamic call score, and access to website, social, email and other relavant information.",
		},
	],
	right: [
		{
			title: "Is Cloud UC customizable?",
			content:
				"Yes, Cloud UC is designed to embrace asterisk and allow for custom scripts, dialplan execution and agi applications to be managed and maintained from the Brand Portal. Custom scripts can also be manually managed via the host directly using standard Asterisk configuration files.",
		},
		{
			title: "Is the user experince branded?",
			content: "Yes, both administrative and user portals are branded to your domain, theme and logos. Email notifications are also branded and come from the branded domain.",
		},
		{
			title: "Is there desktop and mobile apps available?",
			content:
				"Yes and no. The user experience is currently available as a PWA that can be installed directly from the browser. We are working out how we can offer a true mobile and branded experience without compromise to our Partners and their customers.",
		},
	],
};

export const cta = {
	title: "Smarter CNAM Begin Here",
	subtitle: "Credit card not required to sign up.",
};
