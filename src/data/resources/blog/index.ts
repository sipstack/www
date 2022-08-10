export const posts = [
{
    slug: "announcing-ucs-transition-into-open-source",
    image: "/assets/posts/post-23.svg",
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

![ibm-gross-negligence](/assets/img/resources/blog/20210712-announcing-ucs-transition-into-open-source/ibm-gross-negligence-half.png)

While our teams have been working overtime re-configuring our code to remove any IBM / Softlayer architecture & SDK integration to fully prepare the solution for use on any network, with any voice provider, we expect to release the code to github within 90 days of this announcement.

We fully understand the depth and impact this decision has, but re-iterate our team remains fully committed to the platform and the community. Please continue to follow us on our website and social media for upcoming announcements.

You can read more about the event that occurred on our github page here: [https://github.com/sipstack/ibm_softlayer-gross-negligence](https://github.com/sipstack/ibm_softlayer-gross-negligence). Official announcement available on this page.
`
},
{
    slug: "voip-timeline",
    image: "/assets/posts/post-7.svg",
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
![VOIP](/assets/img/resources/blog/20210518-voip-timeline/voipp.png)
Timeline of VoIP History


`
},
{
    slug: "the-evolution-of-voip",
    image: "/assets/posts/post-24.svg",
    category: "VoIP History",
    tags: [],
    views: 0,
    title: "The Evolution of VoIP",
    abstract: "Trace the evolution of VoIP from the traditional private branch exchange to a unified communication platform hosted on the cloud.",
    created: "05/05/2021", //dd/mm/yyyy
    updated: "",
    duration: 4, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
Over the last two decades, VoIP has transitioned from hardware reliant technology to a unified communication platform that can be hosted on the cloud. Now that we understand [the history of VoIP](http://sipstack.com/resources/blog/the-history-of-voip) and [how VoIP works](http://sipstack.com/resources/blog/voip-technology-explaned), we can dive into how this shift from hardware-dependence to software-first philosophy changed the landscape of VoIP.

![Voip](/assets/img/resources/blog/20210505-the-evolution-of-voip/voip.png)

## PBX
Have you ever called a business, and selected numbers from menu options, or dialed an office extension? Then, you've used a PBX.

PBX stands for Private Branch Exchange. Just as [the telephone exchange](http://sipstack.com/resources/blog/telephone-technology-explaned) connects landline phones on the [PSTN network](http://sipstack.com/resources/blog/telephone-technology-explaned), the private branch exchange connects all the stations (physical phones, fax machines, printers, credit card terminals, and modems) within a private organization to each other, and to the PSTN network. The biggest advantage of a PBX is that internal calls (between two stations) can be made without any cost to the business.

## History of the PBX
In the mid-1970s, a decade after PBX technology became available, automatic switches could be developed because of two main reasons:

1. Advancements in semiconductor technology.
2. Invention of the integrated circuit.

The switches transformed the PBX from behemoth mechanical machines into efficient, automated systems.

The automated systems were called PABX or Private Automatic Branch Exchange. Over time, these electromechanical PABX systems were replaced by electronic PBXs. The cost of producing automated switches came down, and eventually, automation became sophisticated enough to entirely eliminate the need for a human operator.

Automation also paved the way for feature development. By adding functionality and convenience, the following features were instrumental in increasing the popularity of the PBX:

- Automatic call routing of incoming calls
- Active call transfer capability between stations
- The flexibility to accept or deny calls
- Voice messaging
- Call queuing

The next iteration of the PBX was called the Time Division Multiplexing (TDM) system. The TDM PBX used computer technology to route and manage telephone calls and drove the shift from [analog to digital transmission](http://sipstack.com/resources/blog/voip-technology-explaned). While the ease of automation the TDM PBX provided was valuable, businesses also had to invest in new TDM-compatible phones and switchboards to avail of the technology.

## IP-PBX
A new era of telecommunications began when the internet was invented. VoIP technology evolved in tandem, and advancements in one field impacted the other.

Telecom hardware manufacturers started mass-producing phones that could directly route phone connections over the internet. Since these telephones used the internet protocol (IP) to route connections, they were called IP phones.

IP phones could facilitate the analog-digital conversion required to switch calls between the PSTN network and the internet without the need for any additional hardware.

Once IP phones entered the market, it was clear that the PBX, which connected the various IP phones, could also use an overhaul.

In 1999, Mark Spencer, the founder of a Linux tech support startup, determined that the traditional PBX was too expensive for his needs. He implemented the functions of the PBX into a software program, and the first IP-PBX. This open-sourced, Linux-based IP-PBX was called Asterisk after the symbol (*), one of the two hotkeys used to dial an extension.

IP-PBXs included several advanced features including the following:

- Call switching and routing
- Unified messaging
- Voicemail to email capability

The IP-PBX had a couple of key advantages over a TDM PBX:

1. **Hardware Agnostic:** Since the TDM PBX worked at the hardware layer, it heavily restricted a company's ability to switch vendors after the system had been set up. The IP-PBX, however, was implemented at the software layer. This voided the need for expensive, proprietary solutions, and reduced a company's reliance on a particular hardware supplier.
2. **Scalability:** The IP-PBX lent itself to scalability. While businesses would've had to add more switchboards to add more phone lines with a TDM PBX, adding phone numbers and extensions to an IP-PBX was a breeze. Businesses could simply add more phones to their network to expand.
The first IP-PBX systems were housed on site. Several factors, however, drove the shift towards virtual solutions:

1. As the network of printers, faxes, phones and modems became more complex, the task of maintaining a PBX required specialized skills.
2. In the late 2000s, with the emergence of cloud computing, business solutions could be moved to the cloud.
3. As computers took over more and more of the PBX's functions, it eliminated the need for companies to invest in expensive hardware to own a fully functioning PBX.

Businesses found it easier to outsource the management of the entire PBX system and chose to use a Hosted PBX in place of a physical system.

## What is a Hosted PBX?
A Hosted PBX is a telephone switching system hosted in the cloud; it is often managed by a third-party service provider who charges a monthly fee for maintenance and real-time support. Access to a Hosted PBX is established over the internet.

A Hosted PBX includes all the features of a regular phone system as well as advanced call routing and distribution, voicemail, faxing, automated greeting and conference capabilities.

A Hosted PBX also make it easier for companies to scale as they grow- adding a new phone line or a user to the network is as easy as clicking a few buttons on the screen.

## What is Hosted VoIP and how is it different from Hosted PBX?
It is easy enough to distinguish between VoIP and PBX. Any technology that uses the internet protocol to transmit voice is categorized as VoIP. A PBX is a private telephone network used within an organization. However, as both these services move to the cloud, the distinction starts to blur.

A Hosted PBX is a type of Hosted VoIP solution. A hosted VoIP solution, however, provides a multitude of extensive features beyond PBX capabilities, such as:

- Mobile & desktop access to Hosted PBX
- CRM & other integrations
- Advanced call analytics
- Call Centre capabilities such as call queuing and
- Voicemail-to-email (voice-to-text transcription)
- Audio and video conference calling
- Data sharing
## Unified Communications as a Service
These layers of abstraction, however, help us build amazing, innovative solutions. Today, customers can use voice, text, email, video, messaging, chat, fax, voicemail, conferencing, data sharing, screensharing and other communication capabilities as part of one integrated solution.

While each of these capabilities had to be configured at the hardware and software level in the past, now, they can be hosted on the cloud and run on your device as a distinct application. And now that hosted VoIP (Hosted PBX with superpowers) has transformed into a completely virtual application-based solution, this technology deserves new coinage: Unified Communications as a Service (UCaaS).

SIPSTACK offers a dynamic UCaas solution that can be completely customized for each unique business case. Check out our fully stacked feature list, designed to evolve with your needs.


`
},
{
    slug: "voip-technology-explained",
    image: "/assets/posts/post-15.svg",
    category: "VoIP History",
    tags: [],
    views: 0,
    title: "VoIP Technology Explained",
    abstract: "VoIP emerged as a result of decades of experimentation with different scientific ideas and technologies such as packet switching, Linear Predictive Coding, TCP/IP and the internet.",
    created: "16/04/2021", //dd/mm/yyyy
    updated: "",
    duration: 4, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
As a Technical Writer at a cloud communication company, I'm invested in understanding technologies fundamental to the telecommunications industry. Now that I have written about the [invention of the telephone](http://sipstack.com/resources/blog/history-of-the-phone) and [the history of VoIP](http://sipstack.com/resources/blog/the-history-of-voip), I set out to answer a few fundamental questions about VoIP, such as how VoIP technology is different from [telephone technology](http://sipstack.com/resources/blog/telephone-technology-explained), and whether VoIP works over the telephone network or the internet.

## What is VoIP?
**Voice Over Internet Protocol (VoIP)** is the capability to transmit voice signals in real time over the internet and telephone network.

## How does VoIP work?
Unlike the telephone, VoIP was not [invented](http://sipstack.com/resources/blog/the-history-of-voip) in one stroke. VoIP emerged as a result of decades of experimentation with different scientific ideas and technologies such as packet switching, Linear Predictive Coding, TCP/IP and the internet.

I will thread a needle through the stories behind these technologies to help explain how the technology behind VoIP works.

## Circuit Switching and Packet Switching
![PS](/assets/img/resources/blog/20210416-voip-technology-explained/packet-switching.jpeg)
<sup>Photo by [Spencer](https://unsplash.com/@spen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/circuit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</sup>

Remember, how, in the movie Up, the grandpa flies his entire air-balloon house to Paradise Falls? He used **circuit switching** (a form of [analog technology]((http://sipstack.com/resources/blog/analog-technology))) to move his house. Instead, if he had shipped parts of the house to Paradise Falls in chunks, along different routes, he would've used **packet switching** technology.

Packet switching works by breaking up data into tiny pieces or packets. To transfer voice over a data network, the human voice is packetized and each piece is marked with the destination it's supposed to reach. Once every piece knows where it's going, the route it chooses to reach its destination doesn't matter — the point is, an open line is no longer needed to transfer data. The process of packetization compresses the caller's voice signal, transfers it over the IP network, and decompresses it at the other end.

Packet switching is a much more efficient way of sending and receiving data because it brings down cost dramatically while being able to transfer more data.

## Linear Predictive Coding
In 1966, two Japanese researchers invented a way to convert speech into a digital signal so that it could be stored and played back on computers. This ability to synthesize and transmit speech is called the Linear Predictive Coding (LPC) method and is used in VoIP to this day.

## The Internet and the World Wide Web
![PS2](/assets/img/resources/blog/20210416-voip-technology-explained/internet.jpeg)
<sup>Photo by [Kvistholt](https://unsplash.com/@freeche?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) Photography on [Unsplash](https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</sup>

In 1969, the US Department of Defence funded the creation of ARPANET (Advanced Research Projects Agency Network), a decentralized phone network that would not be disrupted by a global war. The ARPANET connected computers via modems at numerous locations across the United States, and used TCP/IP to switch packets of data between different locations over a telephone line. Eventually, more computers were added to this network, and the network was made publicly available.

This collection of standalone computers and computer networks, which has been linked together using copper and fibre-optic cables, is called the **internet**.

The World Wide Web was invented by a group of researchers led by Tim Berners-Lee at CERN, an international scientific organization in 1989. The **World Wide Web** is an information system that can be accessed on the internet.

## What is TCP/IP and how does it work?
TCP/IP refers to Transmission Control Protocol/Internet Protocol. It is a standard form used to transfer information across the internet. As the name suggests, the TCP/IP protocol consists of two parts: the Transmission Control Protocol and the Internet Protocol.

The **Transmission Control Protocol** sorts out how packets of data move back and forth between one computer and another. The TCP allows data to be broken into pieces, transmitted, and reassembled in the correct order at the other end.

The **Internet Protocol (IP)** is the Internet's addressing system. Each machine on the internet is identified by a unique IP address which takes the form of a series of digits separated by dots or colons.

## The Evolution of VoIP
![Evolution](/assets/img/resources/blog/20210416-voip-technology-explained/evolution.jpeg)
Photo by [NordWood Themes](https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) Photography on [Unsplash](https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Each of these technologies — packet switching, LPC, internet and TCP/IP has shaped VoIP as we know it today. While LPC provided a way to record and transmit speech digitally, packet switching allowed data to be transmitted without an open line. TCP/IP provided a protocol for packets of data to travel across the internet to specific destinations.

Today's VoIP solutions do much more than transmit voice — they support audio and video conferencing, faxing, voicemail functions, and text messaging. A good VoIP platform will also support a wide range of integrations with third-party applications. The best VoIP solutions are powerful and agile enough to power customizations at scale.

SIPSTACK is at the forefront of pushing the boundaries of VoIP. Stay ahead of your communication needs by [partnering with us](https://www.sipstack.com/partner).
`
},
{
    slug: "the-history-of-voip",
    image: "/assets/posts/post-5.svg",
    category: "VoIP History",
    tags: [],
    views: 0,
    title: "The History of VoIP",
    abstract: "VoIP technology was invented to overcome the limitations of the telephone. The first VoIP solutions used the internet to establish connections and transmit data.",
    created: "08/04/2021", //dd/mm/yyyy
    updated: "",
    duration: 3, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
The history of telecommunication dates back to 1662, when Robert Hooke discovered that sound could be transmitted over a string into an attached earpiece or mouthpiece.

The telephone was invented two centuries later, in 1876. To understand how the invention of the telephone changed the world, read our blog on the [history of the phone](http://sipstack.com/resources/blog/history-of-the-phone).

The history of VoIP (Voice over Internet Protocol) begins a whole century after the telephone was invented. While the telephone was invented to overcome the limitations of the telegraph, [VoIP was invented](http://sipstack.com/resources/blog/history-of-the-phone) to overcome the limitations of the landline phone.

## Limitations of Landline Phones
![phone](/assets/img/resources/blog/20210408-the-history-of-voip/phone.jpeg)
Photo by [Debby Hudson](https://unsplash.com/@hudsoncrafted?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Telephone systems are extremely reliable. Until the late 1900s, they were the most widely used form of communication. However, they had three big limitations:

1. Long distance calling was expensive.
2. A landline phone only worked from one geographical location.
3. Technology was aging and unsustainable at scale in the modern world.

## Internet Calling
The first VoIP solutions used the internet to establish connections and transmit data. Initially, VoIP connections could only be established via a software application installed on both devices. This was called a Peer-to-Peer (P2P) connection. This technology was quite limiting because it meant that in order to connect, both users needed to have access to the same software application and be online at the same time.

Soon after dialup internet became widely available, in 1995, VocalTec Communications came out with the first commercial VoIP solution, and called it the Internet Phone. VocalTec capitalized on the biggest limitation of the telephone — they saved customers big on international and long-distance calling rates.

## Interfacing with PSTN
![wires](/assets/img/resources/blog/20210408-the-history-of-voip/wires.jpeg)
Photo by [Lars Kienle](https://unsplash.com/@larskienle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

While it was exciting to be able to make voice calls over the internet, it wasn't convenient enough for the widespread adoption of VoIP yet. People still used the telephone and its underlying PSTN (Public Switched Telephone Network) as the primary form of communication.

## Hardware Reliance
Initially, a piece of hardware facilitated this analog-digital conversion and acted as a gateway between the PSTN and the internet. In the late 1990s, hardware manufacturers began producing equipment that supported analog-digital conversion. Although this made VoIP technology less reliant on computers, it was still tethered VoIP to physical devices.

For Telephone Service Providers (TSP) who were slowly transitioning their legacy PSTN to VoIP, this was an expensive but inevitable option. TSPs were completely reliant on the vendor's hardware to deliver their service. TSPs could also not afford to build their own features, manufacture their own equipment and install it throughout their network. Essentially, the investment needed put feature creation out of reach for everyone in the telecommunications community except the biggest players.
## Interfacing with PSTN
![phone2](/assets/img/resources/blog/20210408-the-history-of-voip/phone2.jpeg)
Photo by [Julian Hochgesang](https://unsplash.com/@julianhochgesang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Initially, a piece of hardware facilitated this analog-digital conversion and acted as a gateway between the PSTN and the internet. In the late 1990s, hardware manufacturers began producing equipment that supported analog-digital conversion. Although this made VoIP technology less reliant on computers, it was still tethered VoIP to physical devices.

For Telephone Service Providers (TSP) who were slowly transitioning their legacy PSTN to VoIP, this was an expensive but inevitable option. TSPs were completely reliant on the vendor's hardware to deliver their service. TSPs could also not afford to build their own features, manufacture their own equipment and install it throughout their network. Essentially, the investment needed put feature creation out of reach for everyone in the telecommunications community except the biggest players.

## What is SIP and how did it accelerate the adoption of VoIP?
In 1996, a Columbia University professor, Henning Schulzrinne designed the Session Initiation Protocol (SIP). SIP defines a set of protocols using which two or more devices on the internet can initiate an audio or video session.

SIP describes the following elements for a session:

- How to locate the other party
- Which CODEC (piece of software used to convert analog voice into digital signals, and vice versa) to use
- How to construct and send IP signalling packets
- How to manage the call

SIP is an open protocol that's free and available for anyone to use. Because SIP is also hardware and software agnostic, it voids the need for any proprietary VoIP hardware. SIP also allows for easier software upgrades and third-party integrations.

SIP has made VoIP easy to use. It has also made VoIP accessible to the broader telecommunications community, including TSPs, MSPs and ISPs.

## The Future of VoIP
![tablets](/assets/img/resources/blog/20210408-the-history-of-voip/tablets.jpeg)
Photo by [HalGatewood.com](https://unsplash.com/@halacious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Although VoIP has been around for over two decades, the technology is just maturing. The scope of VoIP has exceeded well beyond its original definition. VoIP has become a malleable and resourceful tool that can be employed differently for different use cases.

As VoIP technology continues to evolve at breakneck speeds, we invite the telecommunications community to [join SIPSTACK](https://www.sipstack.com/signup) in our mission to uphold the original values that VoIP was founded on — making communication solutions accessible to everyone.


`
},
{
    slug: "telephone-technology-explained",
    image: "/assets/posts/post-24.svg",
    category: "VoIP History",
    tags: [],
    views: 0,
    title: "Telephone Technology Explained",
    abstract: "When you make a telephone call on a landline phone, you lift a receiver or press a button and listen for a dial tone. This opens up a circuit between your home phone and the telephone exchange.",
    created: "01/04/2021", //dd/mm/yyyy
    updated: "",
    duration: 1, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
![phonebooth](/assets/img/resources/blog/20210401-telephone-technology-explained/phonebooth.jpeg)
Photo by [Paul Carmona](https://unsplash.com/@sydneylens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

When you make a telephone call on a landline phone, you lift a receiver or press a button and listen for a dial tone. This opens up a circuit between your home phone and the telephone exchange. When you dial the phone number, a second circuit is opened between the telephone exchange and the person you're calling. For as long as you're on the phone, the circuit remains open, and data (in the form of your voice) is sent and received over that open line. This [analog](http://sipstack.com/resources/blog/analog-technology) technology is called **circuit switching**.

Landline telephones are connected to the **Public Switched Telephone Network** (PSTN), a network of physical copper and fibre-optic cables that carry electric signals across vast distances.
`
},
{
    slug: "analog-technology",
    image: "/assets/posts/post-18.svg",
    category: "VoIP History",
    tags: [],
    views: 0,
    title: "What is Analog Technology?",
    abstract: "Analog technology, as the name suggests, refers to technologies that are analogous to the process occurring behind the technology.",
    created: "31/03/2021", //dd/mm/yyyy
    updated: "",
    duration: 1, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
![tech](.tech.jpeg)
Photo by [Julius Drost](https://unsplash.com/@juliusdrost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Analog technology, as the name suggests, refers to technologies that are **analogous** to the process occurring behind the technology. Consider, for example, the process of converting a piece of film into a developed photograph. The film negative is used to print a representation of the scene you photographed. The developed photograph, therefore, is an **analogy** of the image you captured.

Similarly, the process of taking an audio signal (the human voice), and translating it into pulses over the telephone wire, and translating back to an audio signal (the same human voice) is an analogous process.

All analog technologies are limited by their physicality. How many songs you can record on an audio cassette depends on how long the plastic reel of the cassette is. How many transcontinental telephone calls you can make at the same time is limited by the number of copper and fibre optic lines laid beneath the oceans.
`
},
{
    id: 2,
    slug: "dedicated-phone number",
    image: "/assets/posts/post-1.svg",
    category: "VoIP for Business",
    tags: [],
    views: 0,
    title: "Your Business Needs a Dedicated Phone Number. Here's Why.",
    abstract: "Setting up a dedicated business line can have a positive influence on your brand image and a positive impact on your bottom line.",
    created: "24/03/2021", //dd/mm/yyyy
    updated: "",
    duration: 3, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
![phone3](/assets/img/resources/blog/20210324-dedicated-phone-number/phone3.jpeg)
Photo by [Adomas Aleno](https://unsplash.com/@aleno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

In the post-pandemic era, how robust your communication is will perhaps be the biggest determiner of how well your business will fare. Setting up a dedicated business line can have a positive influence on your brand image and a positive impact on your bottom line.

Here are three good business practices a dedicated business line will help you adapt.

## 1. Protect Your Personal Identity
When starting a new business, some measures are usually taken to safeguard oneself from personal liability . These include incorporating a business and creating a separate email address. Another important way to protect yourself personally is by setting up a dedicated business phone line.

It may feel convenient to use the same phone number for business and personal use, especially in the early stages of establishing a business. But listing your personal phone numbers on a Facebook Business Page, Craigslist ad or even the Better Business Bureau can prove to be risky. All the data that can be accessed using your personal phone number, including credit cards and any two factor authentications for email, online banking and cloud storage becomes vulnerable to attack by telemarketers, phishing scams, hackers and robocalls.

Additionally, if the same phone number is associated with your personal and business banking, making your number publicly accessible puts your business at risk as well.

By setting up a dedicated business line, you can draw clear distinctions between your personal life and professional life from the very beginning without jeopardizing the safety of one for the other.

## 2. Present your business professionally
Have you had one of these frustrating experiences? You call a business, and it goes to a personal voicemail with a personal greeting — *'This is Mike. Leave a Message.'* Or it gets forwarded to a different number which doesn't exist. Or worse, the call gets redirected to an automated voice mailbox, which is, no surprise, full.

None of these scenarios inspire confidence in a customer who's trying to reach a business. Appearing professional and creating a frictionless customer experience goes a long way towards establishing trust in your brand.

A dedicated business line allows you to build a bridge of trust between you and your customer in the following ways:

### Business Voicemail and Business Hours
Social media, 24 hours news channels, and the ability to stream any content on any device at any time has turned us into impatient customers. We've come to expect instantaneous responses to our questions. If we don't find the answer we're looking for, we simply move on.

When you have a dedicated business line, staying receptive to customers' needs (even outside of business hours) becomes very easy — simply set up a custom greeting for each situation with information your customers may be looking for.

Large corporations do this very effectively. When you call a Home Depot or a Walmart, for example, their elaborate phone tree is set up to help you reach the department who can answer your question.

With [SIPSTACK](https://www.sipstack.com/), setting up a custom phone trees and extensions on your PBX is a breeze.

Here are a few simple modifications you can make to your voicemail greeting to establish credibility with your customer.

- If a customer calls when you're open, greet them with a 'Thank you for calling [Insert Business Name], someone will answer your call shortly, until their call can be directed to the right person.
- If you're closed but have an emergency line, you could include that information after you list your business hours and direct your customers to a support channel.
- If a customer calls when you're closed or on a stat holiday, give them your business hours, and provide them an option to leave a voicemail, and assure them that you will respond within a specific time (usually 24–48 business hours).

## Call Screening
A business line has more advanced capabilities than a personal phone number. Today's VoIP business lines can streamline your sales process by sending you notifications and allowing you to screen calls before receiving them.

Call screening allows you to prepare for every call before you answer it. When you receive an incoming call, you will be notified via email or text message (based on the preferences you set), while the person at the other end of the line hears regular ringing. You can also set up a custom greeting for every incoming customer call, giving you more time to answer the phone. Any calls you ignore will be redirected to voicemail.

Setting up a business line and a business voicemail (which lists your business hours) guarantees that you won't miss a single lead!

### Consistency in Branding
The simplest way to achieve brand recognition is to stay consistent. By using one phone number across all your business communications, promotional collateral and social media channels, your customers will never have questions about how to reach you.

You never have to worry about losing business because your old cell phone number was listed on a piece of collateral.

## 3. Empower Your Remote Staff
As more businesses embrace remote work into their work culture, it's become more important than ever to empower your employees with the flexibility to work from anywhere.

Listing one phone number streamlines the sales process. Today, VoIP technology has evolved to significantly improve the end user experience. You can create incredibly complex solutions in the backend while appearing intuitive and straightforward to the customer. For example, one business phone number could be set up to receive multiple calls simultaneously. You could program each call to ring on multiple devices, allowing your sales team to respond according to their schedule, and do what they do best — sell.

SIPSTACK gives our [partners](https://www.sipstack.com/find-a-partner) the tools to set up a dedicated business lines in minutes, making it is easier than ever for your customers to reach you.

If you're looking for a comprehensive VoIP solution for your business or want to be a SIPSTACK partner [contact us](https://www.sipstack.com/contact/us) and we will be able to help you.
`
},
{
    slug: "history-of-the-phone",
    image: "/assets/posts/post-17.svg",
    category: "VoIP Innovation",
    tags: [],
    views: 0,
    title: "3 Takeaways from the Invention of the Telephone",
    abstract: "The telegraph made the world faster. The telephone made the world closer. The telephone exchange made the world smaller. Read the story behind these incredible nineteenth century innovations that dramatically changed our civilization.",
    created: "27/02/2021", //dd/mm/yyyy
    updated: "",
    duration: 4, // minute read
    author: {
        name: "Kanasu Nagathihalli",
        role: "Author",
        photo: "/assets/img/team/kanasu.png",
    },
    content: `
![lampphone](/assets/img/resources/blog/20210227-history-of-the-phone/lampphone.jpeg)
Photo by [Johnny Briggs](https://unsplash.com/@johnnyboylee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/tqdyMlJk7Wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Everyone probably remembers from middle school that Alexander Graham Bell invented the telephone in 1876. However, the other nineteenth century technologies that came before the telephone (the telegraph, improvements to multiple telegraphy) and after the telephone (the switchboard, the telephone exchange, long distance calling) are equally influential and important.

In fact, the more I read about the innovators, the private companies and the milieu of the nineteenth century, the more amazed I am about the infinite and ever-changing possibilities of the communications industry.

Each invention dramatically changed our civilization. The telegraph made the world faster. The telephone made the world closer. The telephone exchange made the world smaller.

My intention, however, is not merely to recount the science behind and the history of these inventions, but to extract from the story of telecommunication, important takeaways on what drives innovation, and how SIPSTACK fits into the story of innovation.

After all, isn't the purpose of history to learn from it?

## The Electric Telegraph
>### "The most successful men in the end are those whose success is the result of steady accretion."
>
>*Alexander Graham Bell*

The invention of the telegraph changed the world by achieving two very significant feats.

The **first** feat is obvious. By enabling the immediate transmission of messages between long distances, it severed communication's dependence on transportation, and made the world a smaller place.

The **second** feat is awe-inspiring. The invention of the telegraph spawned further technological development. Developments in multiple telegraphy and telephony were founded on the scientific principles that made the telegraph a possibility.

This brings me to the first big takeaway.

### BIG TAKEAWAY #1: Technology is built on the shoulders of giants.
Thomas Alva Edison used the principles behind Joseph Stearns's Duplex (a telegraph that could simultaneously send and receive one message over a single wire) to invent the Quadruplex (a telegraph that could simultaneously send up to four messages over a single wire).

Alexander Graham Bell and Elisha Gray used the principles behind the telegraph to invent the Harmonic Telegraph, which was capable of subdividing a telegraph line into several channels.

While each inventor was driven by the need to make his predecessor's work obsolete, none of them could've afforded to reinvent the wheel. Each scientist had to begin where a predecessor left off, and find inventive ways around problems that had felt unsolvable in the past.

Each new invention makes the next one possible. Nobody creates in a vacuum. We all need a community of thinkers to excel.

## The Invention of the Telephone
>### "One of history's few iron laws is that luxuries tend to become necessities and to spawn new obligations."
>
>*Yuvan Noah Harari, Sapiens: A Brief History of Humankind*

Once multiple telegraphy was a reality, it was simply a matter of time before inventors would leapfrog to the idea of transmitting speech over an electric wire.

In the summer of 1874, both Alexander Graham Bell and Elisha Gray were working on developing a system that could subdivide a telegraph into ten or more channels.

Their approach to the problem, however, was very different.

While Bell saw the creation of the telegraph as a stepping stone for the creation of the telephone, Gray was driven by the prospect of acquiring a large sum of money from The Western Union for making significant improvements to multiple telegraphy.

## The Telephone Exchange
More than a decade after the first commercial manual telephone exchange had been developed in New Haven by George Coy, a telegraph manager, Almon Brown Strowger would yet again change the field of telecommunication by inventing the automatic telephone exchange.

While the science behind the automatic telephone exchange is quite straightforward, the story behind the invention is soaking in entrepreneurial spirit.

Strowger was not motivated by some altruistic need to make the world a better place. He was an undertaker trying to reclaim his business. Strowger's competitor's wife worked at the local telephone exchange and directed calls asking for Strowger's services to her husband. When complaints to the telephone company proved to be futile, Strowger took matters into his own hands and created an automatic switchboard that voided the necessity of human interaction (in this case, misdirection) to complete a call.

This brings me to my second big takeaway.

### BIG TAKEAWAY #2: Innovation is often powered by personal motivation.
The stories of Bell and Strowger show that the grandest and best ideas emerge when we're trying to solve for ourselves first.

## Making the Telephone Ubiquitous
The history of the pure sciences is peppered with tales of scientists who questioned the nature of reality and challenged long-held beliefs about the inner workings of the universe.

Innovations in technology, however, have always been sparked and nurtured by private entities. Just as artists were commissioned to create paintings and sculptures during the Renaissance, private companies offered lucrative commissions to inventors who improved their technologies.

If efforts to improve the telegraph were sparked by Western Union, efforts to make the telephone ubiquitous were driven by AT&T. Even when an independent creator developed an innovative solution, AT&T made every effort to acquire it.

The first impediment to the expansion of the telephone was distance. As the physical distance between the two telephones increased, sound became more distorted. This problem was solved by George Ashley Campbell, an AT&T Engineer who developed loading coils that would keep the signal clear as it traveled over long distances. Because Michael Pupin, a professor from Columbia University patented the invention before Campbell, AT&T bought his patent for $435,000.

Transcontinental telephony, however, required an even more reliable system than loading coils. When Lee Dee Forest invented the triode vacuum tube and the regenerative circuit, AT&T acquired their technology by negotiating through an intermediary, even though Forest was not keen on selling his invention to AT&T.

It was AT&T who announced the intention of creating a transcontinental telephone system. Once they'd acquired Forest's technology, they dispatched teams of workers through blizzards and unknown terrain to string the first continuous telephone line between the coasts.

This brings me to my third big takeaway.

### BIG TAKEAWAY #3: Innovation is fuelled by private companies.
While companies such as The Western Union, Bell Telephone Company and AT&T encouraged innovation because it directly impacted their bottom lines, their competitive spirit is directly responsible for the evolution of telecommunications.

## The Impact of Innovation in a Post-Pandemic World
The history of the telephone shows us that innovation emerges from the tug of war between private companies and their endeavor to be the best and offer the most competitive services.

The pandemic has shown us that communications is perhaps the biggest marker of a successful business. Businesses that have adapted their communication technologies to support remote work have survived; businesses who have resisted change have not.

As we head into a post-pandemic world, the landscape of the communications industry will continue to evolve at a massive rate.

[SIPSTACK](https://www.sipstack.com/) helps you stay ahead of your communication needs by

- Cultivating a [community](https://www.sipstack.com/community/) that builds, develops and improves on existing technologies
- Encouraging [collaborators](https://www.sipstack.com/partner) to address issues particular to them, and then making those solutions accessible to everyone
- Building platforms where companies can innovate freely and share in each other's innovations.

Become part of our origin story. [Partner](https://www.sipstack.com/signup) with SIPSTACK to stay ahead of the game.
`
},
]