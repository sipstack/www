export const posts = [
	{
		slug: "announcing-ucs-transition-into-open-source",
		image: "/assets/posts/post-3.svg",
		category: "Press",
		tags: ["announcement"],
		views: 0,
		title: "Announcing UCS transition into Open Source",
		abstract: "Keeping businesses, customers and people connected has never been as important as it has been in the past 16 months.",
		created: "12/06/2021", //dd/mm/yyyy
		updated: "",
		duration: 2, // minute read
		author: {
			name: "Jonathan Geller",
			role: "CEO & Founder",
			photo: "/assets/img/team/jon.jpg",
		},
		content: `
Keeping businesses, customers and people connected has never been as important as it has been in the past 16 months. With the rise of the Covid-19 pandemic, the world began working from home, making all efforts to continue their operations at any capacity. For some businesses, these changes were effortless, but for most, the struggle and cost to adapt was staggering. SIPSTACK by design, is built to enable any business to adapt and rise to the new communication challenges with confidence by bringing secure, managed and affordable telecommunication environments to meet these pivotal demands. 

Our technology started off like most have in today's environment – in the virtual clouds only to make its way to IBM / Softlayer, a cloud company that brings high end Metal-as-a-Service (MaaS) coupled with their global secured network, truly enabling our services to scale world-wide within their one-of-a-kind offering that no other company can match.

Recently, an event at the IBM / Softlayer TOR01 datacenter occurred affecting our  Lenovo SR630 ThinkSystem equipment within our environment. IBM / Softlayer reported that the reason for the series of component failures were likely a result of firmware updates and advisories ignored. Advisories from Lenovo pre-dating our systems deployment. While technicians quickly rebuilt new systems, recovery of affected equipment containing data became top priority of ours to secure and recover. As a regulated company by the CRTC, we worked very hard to recover damaged equipment containing sensitive data to ensure public interests were protected, and any proprietary code. Despite several attempts at recovery, IBM / Softlayer refused to cooperate unless SIPSTACK Inc. waived an addendum limiting "IBM's gross negligence" for damages. We were only able to physically secure the damaged equipment weeks later that contained sensitive data after SIPSTACK retained special legal counsel and intervened. The data contents were completely inaccessible and without risk during that time due to the nature of the damages to the equipment.

As a result of this event, and with our pleading attempts to resolve this matter amicably with IBM / Softlayer, we unfortunately remain at a standstill while all our contracted services remain unsupported, leading us to announce today that SIPSTACK Inc. will no longer be able to provide secure managed hosts across the IBM / Softlayer global network and will be releasing our unified communication software as open source for anyone to download and run within their local environments.

![ibm-gross-negligence](/assets/img/resources/blog/announcing-ucs-transition-into-open-source/ibm-gross-negligence-half.png)

While our teams have been working overtime re-configuring our code to remove any IBM / Softlayer architecture & SDK integration to fully prepare the solution for use on any network, with any voice provider, we expect to release the code to github within 90 days of this announcement.

We fully understand the depth and impact this decision has, but re-iterate our team remains fully committed to the platform and the community. Please continue to follow us on our website and social media for upcoming announcements.

You can read more about the event that occurred on our github page here: https://github.com/sipstack/ibm_softlayer-gross-negligence. Official announcement available on this page.
`,
	},
	{
		slug: "voip-timeline",
		image: "/assets/posts/post-2.svg",
		category: "VoIP History",
		tags: [],
		views: 0,
		title: "VoIP Timeline - An Infographic look",
		abstract: "Voice over internet protocol (VoIP) is the capability to transmit voice signals in real time over the internet and telephone network.",
		created: "18/05/2021", //dd/mm/yyyy
		updated: "",
		duration: 1, // minute read
		author: {
			name: "Kanasu Nagathihalli",
			role: "Author",
			photo: "/assets/img/team/kanasu.png",
		},
		content: `

`,
	},
];
