export const helpCenterCategories = [
  {
    slug: 'api',
    icon: 'eos-icons:api',
    iconColor: 'yellow',
    name: 'API',
    text: 'General information on API and use.',
    contributors: [
      {
        name: 'Kanasu Nagathihalli',
        picture: '/assets/img/team/kanasu.png',
      },
    ],
    articles: [
      {
        slug: 'rate-limits',
        title: 'API Rate Limits',
        subtitle:
          'This article gives you all the information you need to know about SIPSTACK API Rate Limits.',
        abstract: '',
        created: '16/04/2021', //dd/mm/yyyy
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## What is a Rate Limit?
A "rate limit" is a policy that affects the frequency with which an API can be called. They are put in place to protect server infrastructure from being abused or misused. SIPSTACK employs rate limits to enable consistent load allocation with our platform.

## Applying Rate Limits
SIPSTACK assigns API requests into four different policies where each policy is restricted to a different rate limit. This allows SIPSTACK to optimize and distribute load across the platform to better secure and protect it. The four policies are described in Table 1 below:

| API Policy | Rate Limit | Throttle Level |
|---|---|---|
| Light | 50 requests/minute | 60 seconds |
| Medium | 40 requests/minute | 60 seconds |
| Heavy | 10 requests/minute | 60 seconds |
| Auth | 5 requests/minute | 0 seconds |
*Table 1*

Within the above presented limits, your API requests are allowed to send 10 heavy, 40 medium, 50 light and 5 authorization requests per user / per minute. If you exceed these limits, the server returns the '429 Too Many Requests' HTTP error code. It means that the client is throttled by the server due to the high request rate. The retry period (in seconds) after which more requests can be sent, is specified in Retry-After response header.

How best to detect and respond to rate limits

Rate Limits are returned in specific headers in response to each request, unless the request is unlimited. Those headers are:

| Header | Description | 
| --- | --- |
| X-Rate-Limit-Policy | API category of the given request (Light, Medium, Heavy, Auth) |
| X-Rate-Limit-Limit | 	Current rate limit for the given request |
| X-Rate-Limit-Remaining | 	The number of requests left for the time interval (window) of this rate limit |
| X-Rate-Limit-Window | 	Time interval in seconds for the given request rate limit | 
*Table 2*

These headers are returned in order to enable apps to preemptively respond to circumstances in which their requests may be impacted by a rate limit enforcement.

\`\`\`
HTTP/1.1 200 OK
X-Rate-Limit-Policy: light

X-Rate-Limit-Limit: 1000
X-Rate-Limit-Remaining: 999
X-Rate-Limit-Window: 60
Content-Language: en-US

Content-Type: application/json; charset=UTF-8

{
    "meta" : {},
    "data: {},
    "link" : {}
}
\`\`\`

## What to do when your requests hit a rate limit?
Consider the following two use cases in which you might hit a rate limit.

1. Simple single-threaded use case
    - If you encounter a HTTP Response Header X-Rate-Limit-Remaining that reaches 0, then wait the number of seconds defined in X-Rate-Limit-Window HTTP Response Header. 
    - If you encounter a HTTP Response Status code of 429, wait the number of seconds defined in the Retry-After HTTP Response header.
If X-Rate-Limit-Remaining is working properly, your app should never encounter a 429 error, which is desirable. In other words, if you build your app to be aware of this HTTP header and to respond accordingly, you can prevent your app from being impacted, or at least alert SIPSTACK about the issue.

2. Server is overloaded
If you encounter a HTTP Response Header 503, wait a default amount of time and retry once. Then have your app support the following configuration options:

    - Default retry time
    - Max number of retries
`,
      },
    ],
  },
  {
    slug: 'fax',
    icon: 'fa:fax',
    iconColor: 'orange',
    name: 'Fax',
    text: 'General information on fax and use.',
    contributors: [
      {
        name: 'Kanasu Nagathihalli',
        picture: '/assets/img/team/kanasu.png',
      },
    ],
    articles: [
      {
        slug: 'common-fax-issues',
        title: 'Common Fax Issues',
        subtitle: ' ',
        abstract: '',
        created: '7/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
The table below outlines error messages, likely causes and potential workarounds to troubleshoot common fax errors.
| Error | Description | Likely Cause | Workaround |
|---|---|---|---|
| Connection failed	| There was no receiver on the other end of the call to connect to. | The destination is not configured to receive transactions. | Retry, then contact the number to confirm compatibility and connectivity. |
| Document generation error | There was an error while generating the document. This could be because the file was deleted before it was sent. | Internal Service Error | Retry, if the issue persists, contact SIPSTACK support. |
| Failed to train with any of the compatible modems | A remote fax machine was deleted but the sending and receiving modems could not establish communication. | Connectivity Issues | Retry, if the issue persists, contact SIPSTACK support. |
| Fax transmission not established | This could be because either no fax machine was detected at the receiving end or there was a lack of call clarity. | Connectivity issues, Carrier issues, T.38 Incompatibility issue | Retry, then determine whether remote side was configured for T.38. |
| Long entry lost | The call started but the log entry for the call was lost or incomplete. In practice, this is rate, and may indicate a system-wide problem. | Internal Service Error | Retry, if the issue persists, contact SIPSTACK support. |
| No response after sending a page | The remote fax machine did not acknowledge that it received a page of the fax. Depending on the remote machine's behavior, it may still have printed the page and any preceding pages. | Connectivity issues | Retry, then contact destination to ensure delivery. |
| Received no response to DCS or TCF | The bulk fax service could not successfully determine the remote machine's fax capabilities. | T.38 Incompatibility issue | Determine whether remote side was configured for T.38. |
| The call dropped prematurely | The call dropped due to a non-fax transmission error. It is likely that the receiver hung up. | **Inbound:** The destination is a voice number or is not set up to receive faxes. **Outbound:** The destination is a voice number, or the destination rings for so long that the transmission times out before the handshake can be established. | Retry |
| The HDLC carrier did not stop in a timely manner | The fax service initiated a fax transmission with the receiver, but there was a synchronization (timing) error that could not be resolved. | Likely low-quality routes. | Retry, if network conditions persist, contact SIPSTACK support so we can contact our carrier partner for additional insight. |
| Timed out waiting for initial communication | A call was established with the receiver, and the bulk fax service attempted to establish a fax session. However, there was no fax response from the receiver. This could be due to there being no fax machine on the receiving end or a lack of call clarity. | No remote fax machine or poor-quality routes | Retry, if network conditions persist, contact SIPSTACK support so we can contact our carrier partner for additional insight. |
| Unexpected DCN while waiting for DCS or DIS | The remote fax machine unexpectedly sent a disconnect message when the fax service asked for the remote fax machine's fax capabilities. | T.38 Incompatibility issue | Determine whether remote side was configured for T.38 only. |
| Disconnected after permitted retries | The fax service attempted to send the same message multiple times unsuccessfully. this may be due to a call clarity issue. | Poor network conditions | Retry, if network conditions persist, contact SIPSTACK support so we can contact our carrier partner for additional insight. |
| Far end cannot receive at the resolution of the image | The remote fax machine does not have the capability to support faxes in that resolution. | Quality is too high | Try lowering quality and resend fax. |
| Received a DCN from remote after sending a page | The remote fax machine responded with a disconnect message after a page was sent successfully. Depending on the remote machine's behavior, it may have still printed the sent page and any preceding pages. | Poor network conditions | Retry, if network conditions persist, contact SIPSTACK support so we can contact our carrier partner for additional insight. |
| Unexpected message received | The fax service received a message that it did not expect given the current context. | Protocol failure | Determine whether the expected number of pages matches the number of successfully transmitted pages. Failure may have been in tearing down the call. |
| Unexpected DCM after EOM or MPS sequence | The remote fax machine disconnected unexpectedly after receiving a page of a multi-page fax. Depending on the remote machine's behavior, it may have still printed the sent page and any preceding pages. | Poor network conditions | Retry, if network conditions persist, contact SIPSTACK support so we can contact our carrier partner for additional insight. |
| Document loading error | The fax service attempted to generate the message to send, but a document was missing. | Internal service error | Retry, if the issue persists, contact SIPSTACK support. |
| Invalid ECM response received from receiver | The fax service received an invalid error correction message from the remote fax machine. | T.38 Incompatibility issue | Retry, if failures only occur with one number, there's a chance that the remote fax machine is incompatible with our infrastructure. |
| Unexpected DCN after RR/RNR sequence | The remote fax machine disconnected unexpectedly after indicating that it was not ready to initiate a fax session. | Unexpected failure | Retry, if failures only occur with one number, there's a chance that the remote fax machine is incompatible with our infrastructure. |
*Table 1*
**Notes:**

1. SIPSTACK only supports faxes sent using the T.30 protocol.
2. SIPSTACK fax only supports the transmission of PDFs to Fax-enabled destinations.

`,
      },
    ],
  },
  {
    slug: 'general',
    icon: 'fa:book',
    iconColor: 'purple',
    name: 'General',
    text: 'General information',
    contributors: [
      {
        name: 'Anjana Uthayakumaran',
        picture: '/assets/img/team/anjanaa.jpg',
      },
      {
        name: 'Jeff Sager',
        picture: '/assets/img/team/jeffsa.jpg',
      },
    ],
    articles: [
      {
        slug: 'glossary-sipstack',
        title: 'SIPSTACK Glossary',
        subtitle: 'A comprehensive and growing list of all things SIPSTACK.',
        abstract: '',
        created: '04/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
[**Brand**](https://www.sipstack.com/resources/docs/partner-portal)  
Your brand is the domain that you have registered with SIPSTACK, you can create multiple brands within your [partner portal]( https://www.sipstack.com/resources/docs/partner-portal).   
[**Carrier**](https://www.sipstack.com/resources/docs/smart-cnam)  
The telecom provider of the incoming caller is provided when using the Telco/Carrier lookup tool in Smart CNAM.  
[**Cloud UC**]( https://www.sipstack.com/products/cloud-uc)  
Cloud **U**nified **C**ommunications is an Asterisk based, open source platform, that allows you to scale and manage from a single console.  
[**Domain**](https://www.sipstack.com/resources/docs/smart-cnam)  
The name of the website belonging to the incoming caller is provided when using the Domain lookup tool in Smart CNAM.   
[**Lookup**](https://www.sipstack.com/resources/docs/smart-cnam)  
The Lookup types offered by Smart CNAM offer the following up to date information: Risk score, Caller ID, Regional, Telco/Carrier, Online Profiles.     
[**Message SSID**](https://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid)   
Every message successfully created by SIPSTACK API generates a unique SSID. The SSID is a 34-character string.  
[**Partners**](https://www.sipstack.com/products/smart-cnam#faqs)  
Partners are typically telecom related entities that create an account with SIPSTACK and integrate our products into their call flows.   
[**Region**](https://www.sipstack.com/resources/docs/smart-cnam)  
Region describes the following information of the incoming caller when using the Regional lookup tool in Smart CNAM: city, region (province/territory/state) and country.   
[**SIPSTACK Cookie Policy**](https://www.sipstack.com/legal/privacy)  
Read our cookie policy, an exhaustive list of all the cookies used to enhance your user experience, before using our products of services.   
[**SIPSTACK Partner Account**](https://www.sipstack.com/resources/docs/partner-portal)   
Creating an account makes you a SIPSTACK partner, and gives you access to our ever-evolving suite of products.  
[**SIPSTACK Partner Portal**](https://www.sipstack.com/resources/docs/partner-portal)   
The SIPSTACK Partner Portal is the central hub that gives you access to all the products in the SIPSTACK ecosystem.   
[**SIPSTACK privacy policy**](https://www.sipstack.com/legal/privacy)   
Read our privacy policy, that outlines how we securely manage your private information, before using our products or services. 
[**SIPSTACK terms of service**](https://www.sipstack.com/legal/tos)  
Read and agree with our terms of service, that outlines our responsibilities as a service provider, as well as user obligations, before using our products or services.   
[**Smart CNAM**](https://www.sipstack.com/resources/docs/smart-cnam)  
Smart **C**aller **Nam**e is the next generation lookup tool. Smart CNAM goes way beyond just a name response and can include a tremendous amount of information when requested.  
[**Source/Risk score**](https://www.sipstack.com/resources/docs/smart-cnam)  
SIPSTACK's proprietary algorithm uses artificial intelligence and machine learning to uniquely weigh a number of factors to determine a safety score assigned to each individual call.  
[**Users**](https://www.sipstack.com/resources/docs/partner-portal)  
Users of an organization are authorized and given access through the SIPSTACK Partner Portal.  
[**Vertical**](https://www.sipstack.com/products/smart-cnam#faqs)  
Vertical markets may not have a destination number to provide however, may wish to receive caller information. They can do so without a destination number for a minimial cost.   
[**Whois**](https://whois.sipstack.com/)  
Whois is the world's most advanced lookup tool, proving information and trust ratings based on the incoming Caller ID number.  
[**Whois Profiles**](https://www.sipstack.com/resources/docs/partner-portal)  
Whois profiles is a directory containing phone numbers that you own, and any relevant information. Registering a number allows you to enhance the score rating of those phone numbers, as well as utilize the Source/Risk lookup function.  

`,
      },

      {
        slug: 'glossary-telco',
        title: 'Telecommunications Glossary',
        subtitle:
          'A comprehensive and growing list of all things telecommunications.',
        abstract: '',
        created: '04/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
[**10DLC**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-A2P-10DLC)  
 **10** **D**igit **L**ong **C**ode, a phone number.    
[**A2P Messaging**](https://www.sipstack.com/resources/blog/analog-technology)  
**A**pplication-to-**P**erson Messaging. Businesses and enterprises send SMS communications through software applications to a customer's device.  
[**AI**](https://www.sipstack.com/products/smart-cnam#faqs)  
**A**ritifical **I**ntelligence is the simulation/replication of human intelligence processes by machines.  
[**ARPANET**](https://www.sipstack.com/resources/blog/voip-technology-explained)   
The **A**dvanced **R**esearch **P**roject **A**gency **N**etwork is a decentralized phone network created by the US Department Defence so as to not be disrupted by a global war.  
[**Analog technology**](https://www.sipstack.com/resources/blog/analog-technology)  
Technologies that are analogous to the process occurring behind the technology. Consider, for example, the process of converting a piece of film into a developed photograph. The film negative is used to print a representation of the scene you photographed. The developed photograph, therefore, is an analogy of the image you captured.  
[**CAFC**](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada)  
The **C**anadian **A**nti-**F**raud **C**entre collects information on fraud and identity theft, providing information on past and current scams affecting Canadians.   
[**Circuit switching**](https://www.sipstack.com/resources/blog/voip-technology-explained)
A form of analog technology.  
**CITA**  
**C**anadian **I**ndependent **T**elecommunication **A**ssociation. Canada-wide association of companies that provides telecommunication services throughout Canada.  
[**CID**](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam)   
**C**aller **ID** is the phone number of an incoming phone call  
[**CNAM**](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam)   
 The **C**aller **Nam**e of an incoming phone call.    
[**CRTC**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken)   
The **C**anadian **R**adio-television **T**elecommunications **C**ommission is an independent public authority in charge of regulating and supervising Canadian broadcasting and telecommunications.  
[**CTIA**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-A2P-10DLC)   
 **C**ellular **T**elecommunications and **I**nternet **A**ssociation. Represents the U.S. wireless communications industry and companies throughout the mobile ecosystem.  
[**E-911**](https://www.sipstack.com/resources/knowledge-base/general/what-is-enhanced-911)  
Enhanced 911 or E-911 is a system utilized in North America that provides the caller's location to emergency services.  
[**FCC**](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US)  
The **F**ederal **C**ommunications **C**ommission is an independent U.S. government agency overseen by Congress, the Commission is the federal agency responsible for implementing and enforcing America's communications law and regulations.  
[**Hosted PBX**](https://www.sipstack.com/resources/blog/the-evolution-of-voip)  
A Hosted **P**rivate **B**ranch **E**xchange is a telephone switching system hosted in the cloud; it is often managed by a third-party service provider who charges a monthly fee for maintenance and real-time support.  
[**IP**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
The **I**nternet **P**rotocol  is the Internet's addressing system.  
[**LPC**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
**L**inear **P**redictive **C**oding was invented in 1996 by two Japanese researchers as a way to convert speech into a digital signal so that it could be stored and played back on computers.  
[**Local Numbers**](https://www.sipstack.com/resources/knowledge-base/phone-numbers/phone-number-types-and-capabilities)     
Local numbers are telephone numbers which are assigned to a specific geographic region. These numbers are typically used by individuals and local businesses.  
[**ML**](https://www.sipstack.com/products/smart-cnam#faqs)  
**M**achine **L**earning is a branch of artificial intelligence that uses data and algorithms to continuously improve its accuracy.  
[**MMS**](https://www.sipstack.com/resources/knowledge-base/text-messaging/supported-mms-content-types)    
Multimedia Messaging Service. A message that includes multimedia content from a mobile phone to another.   
[**National Numbers**](https://www.sipstack.com/resources/knowledge-base/phone-numbers/phone-number-types-and-capabilities)   
National numbers are telephone numbers which are not region-specific, and were designed to be reachable from an entire country at the same cost.     
[**P2P Messaging**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-A2P-10DLC)  
 **P**erson-to-**P**erson messaging is defined as a two-way conversation between two mobile devices sent by humans without any applications.     
[**Packet switching**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
Packet switching works by breaking up data into tiny pieces or packets. To transfer voice over a data network, the human voice is packetized and each piece is marked with the destination it's supposed to reach.  
[**PBX**](https://www.sipstack.com/resources/blog/the-evolution-of-voip)  
The **P**rivate **B**ranch **E**xchange connects all the stations (physical phones, fax machines, printers, credit card terminals, and modems) within a private organization to each other, and to the PSTN network.   
[**PSTN**](https://www.sipstack.com/resources/blog/telephone-technology-explained)     
**P**ublic **S**witched **T**elephone **N**etwork, is a network of physical copper and fibre-optic cables that carry electric signals across vast distances for landlines.  
[**Rate Limit**](https://www.sipstack.com/resources/knowledge-base/api/rate-limits)   
A policy that affects the frequency with which an API can be called. They are put in place to protect server infrastructure from being abused or misused.  
[**SIP**](https://www.sipstack.com/resources/blog/the-history-of-voip)  
The **S**ession **I**nitiaion **P**rotocol, designed by Henning Schulzrinne in 1996 outlines  a set of protocols through which two or more devices on the internet can initiate an audio or video session.  
[**Short Codes**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-A2P-10DLC)
A five/six digit telephone number that allows high-throughput, and two-way messaging.  
**SMS**  
 **S**hort **M**essaging **S**ervice. A text message of up to 160 characters sent from one mobile device to another.  
[**STIR/SHAKEN**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken)   
 **S**ecure **T**elephony **I**dentity **R**evisited and **S**ignature-based **H**andling of **A**sserted information using to**KEN**s. They are two separate initiatives that work to verify the identity of an inbound call in efforts to deter illegal caller ID spoofing.    
[**TCP**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
The **T**ransmission **C**ontrol **P**rotocol sorts out how packets of data move back and forth between one computer and another.  
[**TCR**](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-A2P-10DLC)   
 The Campaign Registry is the governing authority for A2P 10DLC.   
[**Toll-free Numbers**](https://www.sipstack.com/resources/knowledge-base/phone-numbers/phone-number-types-and-capabilities)  
Toll-free numbers are telephone numbers that are free of charge for the calling party, and are typically used by businesses when they prefer to fully take on the cost of calls for their users.  
[**TSP**](https://www.sipstack.com/resources/blog/the-history-of-voip)   
**T**elephone **S**ervice **P**roviders  
[**VoIP**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
**V**oice **O**ver **I**nternet **P**rotocol is the capability to transmit voice signals in real time over the internet and telephone network.  
[**WWW**](https://www.sipstack.com/resources/blog/voip-technology-explained)  
 The **W**orld **W**ide **W**eb is an information system that can be accessed on the internet.  

`,
      },

      {
        slug: 'what-is-wangiri-fraud',
        title: 'What is Wangiri Fraud?',
        subtitle:
          'Wangiri is a Japanese term that translates to one ring and cut, referring to a phone call that rings just one time before disconnecting.',
        abstract: '',
        created: '26/10/2022', //dd/mm/yyyy
        updated: '',
        author: {
          name: 'Jeff Sager',
          picture: '/assets/img/team/jeffsa.jpg',
        },
        content: `
Canadians have reported losses of $383 million in 2021 alone to telecommunication fraud, costing victims exponentially more money than ever before.<sup>1</sup> As spam calling and texting has become a growing concern, it's important to be aware of the prevalent scams both in the [US](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US) and [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada). Increased awareness helps protect ourselves and loved ones against fraud. One of the most prevalent of these telecommunications scams is called Wangiri.  

Wangiri is a Japanese term that translates to _one ring and cut_, referring to a phone call that rings just one time before disconnecting. Typically, these calls will occur at nighttime or working hours in order to intentionally go unanswered and be displayed as a missed call in the call log. The intention is to have victims call the number back, which is then re-routed to an IPRN, International Premium Rate Number, or another number that charges excessively high fees.<sup>2</sup>  Oftentimes, victims receive multiple calls from the same premium-rate number, or even text messages, to influence them to call the number back.<sup>3</sup> This is known as the first leg of the Wangiri attack.  

The second leg occurs once the victim actually calls the number back. The motivation of the scammer then becomes to keep the caller on the line for as long as possible. To this end, they typically use a recording centered around a lottery win, gambling, or other adult-themed content to entice the victim to stay on the line.<sup>4</sup> The longer the call is, the more expensive the fees are, most of which are paid to the scammer.
 

## Signs of a Wangiri Call
Here are a few telltale signs to look out for:
1)	The phone will ring for only a short amount of time before disconnecting.
2)	The call occurs at nighttime or working hours.
3)	The number has an unusual international country code.

## Takeaways and Tips to Protect Yourself
Keep the following in mind to keep yourself safe against Wangiri fraud:
1)	If you notice you have a missed call from a number unfamiliar to you, do not call back. As tempting as it may be to want to know whose call you missed, it's important to remember that legitimate callers trying to reach you will often leave a voicemail.
2)	If you are receiving a lot of these calls, report it to your phone provider. 
3)	If you have already been charged for calling one of these numbers back, you can report the crime to the police.<sup>5</sup>


#### References
<sup>1 <a href="https://www.antifraudcentre-centreantifraude.ca/index-eng.htm" target="_blank">https://www.antifraudcentre-centreantifraude.ca/index-eng.htm</a></sup>  
<sup>2 <a href="https://www.enghousenetworks.com/enghouse-resources/blog/infographics/detect-protect-against-wangiri-callback-fraud" target="_blank">https://www.enghousenetworks.com/enghouse-resources/blog/infographics/detect-protect-against-wangiri-callback-fraud</a></sup>   
<sup>3 <a href="https://www.europol.europa.eu/sites/default/files/documents/wangiri_final_2.pdf" target="_blank">https://www.europol.europa.eu/sites/default/files/documents/wangiri_final_2.pdf</a></sup>   
<sup>4 <a href="https://abhandshake.com/wangiri" target="_blank">https://abhandshake.com/wangiri</a></sup>   
<sup>5 <a href="https://www.europol.europa.eu/sites/default/files/documents/wangiri_final_2.pdf" target="_blank">https://www.europol.europa.eu/sites/default/files/documents/wangiri_final_2.pdf</a></sup>  
`,
      },

      {
        slug: 'what-is-call-spoofing',
        title: 'What is Call Spoofing?',
        subtitle:
          'Call spoofing refers to the altering of either the Caller ID (CID) phone number or Caller Name (CNAM) displayed to the person receiving the call.',
        abstract: '',
        created: '18/11/2022', //dd/mm/yyyy
        updated: '',
        author: {
          name: 'Jeff Sager',
          picture: '/assets/img/team/jeffsa.jpg',
        },
        content: `
Telecommunication fraud continues to grow exponentially, with reported losses in 2021 of $383 million in [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada)<sup>1</sup> and a whopping $30 billion in the [United States](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US)<sup>2</sup>. There are several different types of spam calling and texting scams that have contributed to these losses. One of the most frequent is known as Call Spoofing.
 
Call spoofing refers to the altering of either the Caller ID (CID) phone number or Caller Name [(CNAM)](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam) displayed to the person receiving the call. In some cases, caller ID spoofing can be used for legitimate purposes, such as call centres who have permission to do so. The call spoofing that we will discuss in this article, however, refers to spammers illegally replicating a CID without permission for illegitimate purposes. 
 
The spammer's intention is to appear as a trustworthy and local caller or texter, so the recipient of the call will be more likely to answer and fall for whatever scam they are attempting. These scams usually involve the caller fraudulently impersonating government agencies or companies asking for personal information or money. In some cases, the caller may even specifically target senior citizens, pretending to be a grandchild or other family member asking for money.
 
## Common Examples of Caller ID Spoofing
There are different ways a call like this may appear on your phone. Here are a few examples:
1.	Neighbouring: The caller ID is displayed as the first 6 digits of the number it is calling. This gives the impression that it is a local call, potentially even from a neighbour<sup>3</sup>.
2.	Mirroring: The caller ID is displayed to match the exact phone number it is calling<sup>4</sup>.
3.	The caller ID is displayed as the number of another individual or recognizable organization to make it seem like the call is coming from them<sup>5</sup>.
 
## Tips to Identify Call Spoofing
1.	The text message or caller will give you a generic greeting rather than using your real name.
2.	The caller may use a recording asking you to press certain buttons to continue the call. This helps them identify potential targets.
3.	The caller acts as though there is an urgent situation that demands you give them money or personal information, including social security numbers/social insurance numbers, passwords, or credit cards.
 
## Tips to Protect Yourself Against Call Spoofing
1.	Avoid answering calls or returning missed calls from unknown numbers, even if they appear to be from a local caller.
2.	Be skeptical, and if you feel suspicious during a call, hang up immediately.
3.	Block the phone number to ensure they cannot call your phone again.
4.	Report these calls to your phone provider, national anti-fraud centre, or the police.

## How SIPSTACK Fights Fraud
Using the latest technology and machine learning, SIPSTACK's systems authenticates all activity in real time against variables that affect your security. When a carrier implements SIPSTACK's Risk Rating Score, they are able to customize a threshold for calls to pass through, based on their specific needs. At SIPSTACK we take an active role in ensuring we are building a secure and connected tomorrow. [Contact us](https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.
 
### References
<sup>1 <a href="https://www.antifraudcentre-centreantifraude.ca/index-eng.htm" target="_blank">https://www.antifraudcentre-centreantifraude.ca/index-eng.htm</a></sup>  
<sup>2 <a href="https://firstorion.com/2021-scam-call-trends/" target="_blank">https://firstorion.com/2021-scam-call-trends/</a></sup>  
<sup>3, 4, 5 <a href="https://crtc.gc.ca/eng/phone/telemarketing/identit.htm" target="_blank">https://crtc.gc.ca/eng/phone/telemarketing/identit.htm</a></sup>  

`,
      },

      {
        slug: 'what-is-call-stretching',
        title: 'What is Call Stretching?',
        subtitle:
          'Call stretching is a method utilized by fraudulent carriers to inflate the duration of a call, and effectively charge more money directly from legitimate carriers.',
        abstract: '',
        created: '12/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
Call stretching is a method utilized by fraudulent carriers to inflate the duration of a call, and effectively charge more money directly from legitimate carriers. It is amongst the five most prevalent telecommunications schemes in the [US]( https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US) and [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada). As telecom operators and government agencies work to target a specific type of fraud, more complex and innovative methods are utilized by scammers.  Call stretching manages to bypass most skilled fraud management systems.<sup>1</sup> 

This is carried out in one of two ways. The basic scenario is continuing to keep the line active for several seconds after the call has been terminated by the other party. The more intricate scheme involves the recording of a portion of live conservation. A portion of the other party's voice is played immediately after the originating party disconnects. It often takes many seconds, or even a few minutes before the party realizes this and hangs up.

Although seeming minuscule, when conducted on a massive scale this method generates over a billion dollars annually.<sup>2</sup> Detection of this fraud is difficult as the call themselves are legitimate, and the profit per call is small. Because originating carriers measure pay out according to the duration of the call, they end up paying more to the fraudulent carriers than they actually owe. Recording a private conversation poses a massive breach in privacy. Call stretching results in carriers having to manage disgruntled subscribers and high customer turnover. 

## What is the solution?
If you are receiving a lot of these calls, report it to your phone provider. Don't feel obligated to answer each and every call from unknown numbers. It's important to remember that legitimate callers trying to reach you will often leave a voicemail. If you are expecting a call, and you aren't sure whether it is safe, use [Whois]( https://whois.sipstack.com/)  by SIPSTACK. 
Entering the Caller ID displayed will instantaneously provide a score rating out of five stars, as well as other relevant information to help you determine whether the call is safe. 


#### References
<sup>1 <a href="https://cfca.org/the-key-to-stopping-call-stretching-fraud-a-real-time-handshake-between-operators/" class="ss-reference" target="_blank">https://cfca.org/the-key-to-stopping-call-stretching-fraud-a-real-time-handshake-between-operators/</a></sup>  
<sup>2 <a href=" https://community.abhandshake.com/call-stretching
" class="ss-reference" target="_blank"> https://community.abhandshake.com/call-stretching</a></sup> 

`,
      },

      {
        slug: 'what-is-cnam',
        title: 'What is CNAM?',
        subtitle:
          'Simply put, CNAM is the Caller Name of an incoming phone call. This is displayed on the screen of a mobile or home device.',
        abstract: '',
        created: '22/09/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
Simply put, CNAM is the **C**aller **Nam**e of an incoming phone call. This is displayed on the screen of a mobile or home device. The 15 available characters are indicative of either an individual or an organization. <sup>1</sup> CNAM presents itself in replacement of, or in accompaniment with CLID, **C**aller **ID**. Caller ID is the phone number of an incoming phone call.

## Why does it exist?

There is a variety of fraudulent scams that are rapidly advancing within the ever evolving sphere of telecommunications. A common misconception is that the majority of victims are seniors, given their vulnerable status. Yet millennials are also largely targeted, given the rise in cell phone owners and decline of land line owners. <sup>2</sup>

A 2014 survey revealed that within the last 12 months, in the United States alone, over $8.6 billion dollars were lost to phone fraud.<sup>3</sup> As a result, people have grown distrustful and no longer feel safe answering unknown numbers. Important and relevant calls are missed due to the fear of falling prey to a scam call.

Preventative measures, such as CNAM, work to provide callers with a sense of security.

## Not sure a call is safe?

CNAM is not an automated feature granted to cellphone users. Additionally, there is no centralized database, meaning the name displayed may vary depending on the database chosen by the receiver's carrier. That is where Whois comes in! If an unknown number is attempting to contact you, and you aren't sure whether it is safe, use [Whois](https://whois.sipstack.com/) by SIPSTACK. By entering the Caller ID displayed, you will be able to receive reliable information on the security level of the number.

#### References
<sup>1 [https://rdi-it.com/user-guides/the-basics-of-caller-id/](https://rdi-it.com/user-guides/the-basics-of-caller-id/)</sup>  
<sup>2 Tabron, Judith L. _Creating urgency in tech support scam telephone conversations_. Hofstra University, 2016.</sup>  
<sup>3 [https://today.com/money/americans-lost-8-6-billion-phone-fraud-last-year-survey-1D80108259](https://today.com/money/americans-lost-8-6-billion-phone-fraud-last-year-survey-1D80108259)</sup>  

`,
      },

      {
        slug: 'what-is-pbx-hacking',
        title: 'What is PBX Hacking?',
        subtitle:
          'While it is not widely known or understood, it stands to be of the most common and significant threats to telecommunications safety for businesses.',
        abstract: '',
        created: '11/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
**PBX**, **P**rivate **B**ranch **E**xchange, Hacking is one of five prevalent advancement in technology leveraged in scams in the [US]( https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US) and [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada). While it is not widely known or understood, it stands to be of the most common and significant threats to telecommunications safety for businesses. In 2021 alone US enterprises reported a loss of $1.82 billion USD to the **CFCA**, **C**ommunications **F**raud **C**ontrol **A**ssociation.<sup>1</sup>

A PBX is a private telephone system used within an organization to communicate internally between users, while also connecting to an external network through shared number of phone lines. While reducing operating costs for businesses, they provide ample opportunity for hacking and fraud through initiating international calls resulting in unauthorized charges for the PBX owner if left unprotected. Users are often unaware of the threat PBX hacking poses and fail to implement protective measures. 


## How to protect yourself 

-	**Change passwords:** Avoid using the default passwords provided by your service provider, as they can be found online and in user manuals. Also, regularly change voicemail passcodes, to non-generic ones. 
-	**Do not post a public call directory:** Although you would like your staff to be available to clients, providing a complete list of **DID**, **d**irect **i**nward **d**ialing numbers (phone numbers), will provide hackers a plethora of options to attempt hacking into, or target individuals directly by name and phone number. 
-	**Use secure VoIP methods:** Using [VoIP]( https://www.sipstack.com/resources/blog/voip-technology-explained) over secure transports (similar to SSL for websites), **VPN** **V**irtual **P**rivate **N**etwork, or non-standard [**SIP**](https://www.sipstack.com/resources/knowledge-base/general/glossary-telco), **S**ession **I**nterent **P**rotocol, ports deters hackers exponentially. SIP uses **TLS**, **T**ransport **L**ayer **S**ecurity to encrypt traffic and packets between client devices and SIP servers. VPN allows SIP traffic to flow between client devices and SIP servers over public internet as if they exist in the same network. Use of non-standard SIP ports can help hide SIP devices/access from port scanners and sniffers when TLS or VPN is not available.
-	**Close unactive accounts:** When an employee is no longer working for the company it is important to swiftly disable their access and close their mailbox.
-	**Restrict password attempts:** Configure your system so access to outgoing calls and voicemails are locked after three failed password attempts. 
-	**Choose SIPSTACK:** Enabling and managing security measures on every aspect of your telecommunications can be overwhelming. SIPSTACK provides its clients with the utmost security so that you can focus on making your business a success. [Contact us](https://www.sipstack.com/contact/us) to learn more.

#### References
<sup>1 <a href="https://cfca.org/wp-content/uploads/2021/12/CFCA-Fraud-Loss-Survey-2021-2.pdf" class="ss-reference" target="_blank">https://cfca.org/wp-content/uploads/2021/12/CFCA-Fraud-Loss-Survey-2021-2.pdf</a></sup>  

`,
      },

      {
        slug: 'what-is-short-stopping',
        title: 'What is Short Stopping?',
        subtitle:
          'Short Stopping refers to a scam where hackers hijack a call before it reaches its target destination.',
        abstract: '',
        created: '18/11/2022', //dd/mm/yyyy
        updated: '',
        author: {
          name: 'Jeff Sager',
          picture: '/assets/img/team/jeffsa.jpg',
        },
        content: `
As telecommunication fraud continues to grow each year, with reported losses in 2021 of $383 million in [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada)<sup>1</sup> and $30 billion in the [United States](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US)<sup>2</sup>, it's becoming increasingly important to stay informed and vigilant. Total telecom-related losses in 2021 amounted to $39.89 billion, a 28% increase from 2020. Of those total losses, $4 billion were at the hands of a scam called Short Stopping. 

Short Stopping refers to a scam where hackers hijack a call before it reaches its target destination. By working with a rogue carrier on the call's path, the hacker redirects the call to an expensive destination country, causing the victim to get surcharged. The hackers and the rogue carriers then share the revenue generated by the fraudulent calls by billing either the end customer or another carrier in the routing flow.

Once a call has been short-stopped, the motivation of the hacker becomes to keep the caller on the line for as long as possible. The longer the call, the higher the charge. To this end, scammers use a number of different tactics. 

## Potential Tactics to Watch Out For
•	Providing a false ring tone or a fake network announcement that might say something like, "The person you are calling has not responded. Please try again later."
•	Playing a prerecorded message such as, "Hello? Hello? I can't hear you. Hold on…"
•	Rerouting the call to a call center where a real person attempts to keep the conversation going with similar tactics. 

## How Short Stopping Impacts Callers
Because these recordings or conversations are meant to seem legitimate, callers are often not even aware that any fraud has taken place until they receive an exorbitant bill for calls to a destination they never dialed. A further inconvenience is that some operators will block the numbering plans of costly countries altogether in order to protect themselves from this scam. This makes customers who legitimately need to reach these countries unable to do so.

## Why Short Stopping is Difficult to Stop
Short Stopping is difficult both to detect and crack down upon because the fraud happens after a legitimate call is placed. The fraudulent element of the call is able to conveniently hide within the initial legitimate call, allowing it to go unnoticed by the systems put in place to catch it. It is especially difficult to track because the per-call profit margin is so small that it goes unnoticed. Unfortunately, the millions of small-scale calls being hijacked on a global scale allow the fraudsters' cumulative profits to add up substantially. To put it simply, detecting Short Stopping is like trying to find a needle in a haystack. 

## How SIPSTACK Fights Fraud
Using the latest technology and machine learning, SIPSTACK's systems authenticates all activity in real time against variables that affect your security. When a carrier implements SIPSTACK's Risk Rating Score, they are able to customize a threshold for calls to pass through, based on their specific needs. At SIPSTACK we take an active role in ensuring we are building a secure and connected tomorrow. [Contact us](https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.

### References
<sup>1<a href="https://www.antifraudcentre-centreantifraude.ca/index-eng.htm" target="_blank">https://www.antifraudcentre-centreantifraude.ca/index-eng.htm</a></sup>  
<sup>2 <a href="https://firstorion.com/2021-scam-call-trends/" target="_blank">https://firstorion.com/2021-scam-call-trends/</a></sup> 


`,
      },

      {
        slug: 'risk-score',
        title: 'What do Score/Risk Calculations mean?',
        subtitle:
          "Our Smart CNAM's 'Risk Score' allows requestions to interpret the score of a calling phone number.",
        abstract: '',
        created: '04/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
Amongst the various [Smart CNAM lookup types](https://www.sipstack.com/resources/docs/smart-cnam), the score/risk lookup function provides a dynamic score on a scale from 0.000-5.000.  SIPSTACK's proprietary algorithm uses artificial intelligence and machine learning to uniquely weigh a number of factors to determine the score assigned to each call. It is important to note that carriers have internal scores, contributing to the risk calculations. As the carrier continues to interact with our [partner portal]( https://www.sipstack.com/resources/docs/partner-portal), [cloud UC]( https://www.sipstack.com/products/cloud-uc) and continue to use other services, their internal score will go up. This strengthens the trust behind their clients' phone numbers and as a result, provide their clients with higher scores. Conversely, deceitful actions of the carrier, not only lowers the carrier's score but all of their clients scores as well. The algorithm is ever-evolving to provide the best possible security to our customers. 

| Score | Remarks| 
|---|---|   
| <1  | Blacklisted |  
| 1-1.499 | Fraud |  
| 1.5-1.999 | Spam |  
| 2-2.499 | Spam Likely |  
| 2.5-3 | Spam Possible/Recovering |  
| 3-4 | Safe |  
| 4-5 | Trusted |  

*Table 1 - SIPSTACK's suggested remarks based on score ranges*


### Steps to take 
Carriers can determine their own safety threshold, in relation to the risk calculations and offer customers the option to block calls below this threshold. Alternatively, carriers can let individual customers determine what score they deem is safe, for their unique needs, and block calls below their individually determined safety threshold. Remarks associated with our risk calculations are automatically provided to the carrier, in association with the score. Carriers can display these to their customers at their discretion. Ultimately, SIPSTACK allows individual carriers to interpret scores and determine safety thresholds independently. 

Visit Smart CNAM product documentation to [learn more](https://www.sipstack.com/resources/docs/smart-cnam) or [contant us](https://www.sipstack.com/contact/us).

`,
      },

      {
        slug: 'what-is-enhanced-911',
        title: 'What is Enhanced 911?',
        subtitle:
          "Enhanced 911 or E-9-1-1 is a system utilized in North America that provides the caller's location to emergency services.",
        abstract: '',
        created: '02/11/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
Enhanced 911 or E-9-1-1 is a system utilized in North America that provides the caller's location to emergency services. 9-1-1 dispatchers are able to retrieve physical addresses of landlines, and geographic coordinates of wireless callers, which is then passed on to police officers, firefighters, paramedics, and other services as deemed fit. Enhanced location information works to improve the effectiveness and reliability of wireless 911 services.  

### Canada mandates the following from local [VoIP service providers](https://www.sipstack.com/resources/blog/voip-technology-explained): 

1. To provide either basic or E-9-1-1 service to their customers.    
2. To provide customers with adequate and accessible notifications of any service limitations with respect to their 9-1-1 or E-9-1-1 services.    
3. To register with the **CRTC**, **C**anadian **R**adio-television and **T**elecommunications **C**ommission, as a reseller. If the company owns and controls transmission facilities, it has to register with the Commission as a **CLEC**, **C**ompetitive **L**ocal **E**xchange **C**arrier.    
4. To obtain a **BITS**, **B**asic **I**nternational **T**elecommunication **S**ervice, license from the CRTC, if the company operates internationally.  
5. Companies are required to keep up to date with all ongoing regulatory filings to maintain their BITS license and registration. Failure to do so could lead to deregistration and loss of the BITS license.  

Having a hard time keeping up to date with ever-evolving mandatory guidelines and regulations as a carrier? [Contact us]( https://www.sipstack.com/contact/us) today and we will make sure you are exceeding industry standards in building a secure connected tomorrow.  

`,
      },
    ],
  },
  {
    slug: 'phone-numbers',
    icon: 'carbon:phone-voice-filled',
    iconColor: 'purple',
    name: 'Phone Numbers',
    text: 'General information on phone numbers and use.',
    contributors: [
      {
        name: 'Kanasu Nagathihalli',
        picture: '/assets/img/team/kanasu.png',
      },
    ],
    articles: [
      {
        slug: 'phone-number-types-and-capabilities',
        title: 'SIPSTACK Phone Number Types and Their Capabilities',
        subtitle:
          'SIPSTACK offers a range of phone number types that differ in their costs and capabilities. The details of each of the options are listed below',
        abstract: '',
        created: '14/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## Local numbers
Local numbers are telephone numbers which are assigned to a specific geographic region. These numbers are typically used by individuals and local businesses. In Canada and US, these regions are represented by area codes. For example, +1 (416) XXX-XXXX numbers are located in the Toronto area.

Outside Canada and US, phone numbers are mapped in ranges to a specific region. Ranges can vary in length between 1 and up to 6 digits of the phone number. For example, a +44 20 XXXX XXXX number is located in London, UK while a +44 151 XXX XXX number is located in Liverpool, UK.

## National numbers
National numbers are telephone numbers which are not region-specific, and were designed to be reachable from an entire country at the same cost. This type of number is more common outside Canada and US, and is commonly used for larger businesses that want to easily be reached from around the country. Since national phone numbers are not tied to a particular local area, the geo-data for a national number is listed as the country.

The cost for your user to call a national number is often regulated and priced the same as a local call. However, this varies based on the carrier initiating the call (i.e. the mobile carrier of the incoming caller, or the provider of the user's local phone service) and the regulations of each country. In some countries, national numbers can only be reached from within the country, although this varies based on the network of the phone provider and country from which a national number is being dialed.

## Toll-free numbers
Toll-free numbers are telephone numbers that are free of charge for the calling party, and are typically used by businesses when they prefer to fully take on the cost of calls for their users. Similar to a geographic area code, toll free numbers are organized in ranges such as +1 888 XXX-XXXX in Canada and US and +44 800 XXX XXXX in the UK. SIPSTACK currently provides toll free numbers in Canada and US. Toll-free numbers in both Canada and US are enabled for both voice and text messaging.

## Mobile numbers
In most countries, mobile numbers are assigned to a particular range within the country's telephone numbering plan so they can be easily distinguished from local numbers. They are often the only type of number in the given country that can be used for sending and receiving messages. This is not the case in Canada and US. In  Canada and US, most mobile numbers cannot be distinguished from local numbers.
`,
      },
    ],
  },
  {
    slug: 'regulatory',
    icon: 'carbon:rule-cancelled',
    iconColor: 'blue',
    name: 'Regulatory',
    text: 'General information on Regulatory boards.',
    contributors: [
      {
        name: 'Jeff Sager',
        picture: '/assets/img/team/jeffsa.jpg',
      },
      {
        name: 'Anjana Uthayakumaran',
        picture: '/assets/img/team/anjanaa.jpg',
      },
    ],
    articles: [
      {
        slug: 'what-is-A2P-10DLC',
        title: 'What is A2P 10DLC?',
        subtitle:
          'A2P, Application-to-Person, messaging in the United States allows businesses to leverage a preapproved 10DLC, 10 Digit Long Code, a phone number, to send mass text messages to consumers .',
        abstract: '',
        created: '14/10/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
**A2P**, Application-to-Person, messaging in the United States allows businesses to leverage a preapproved **10DLC, 10 D**igit **L**ong **C**ode, a phone number, to send mass text messages to consumers. Businesses can register with carriers whom work with **TCR** [**T**he **C**ampaign **R**egistry](https://www.campaignregistry.com/) to offer integrated registration for approval, or directly with the TCR themselves. Businesses must acquire approval for both their brand and each campaign as per **CITA**, **C**ellular **T**elecommunications and **I**nternet **A**ssociation guidelines, in the larger effort to increase transparency in the telecommunication ecosystem.

## Existing Alternatives

While 10DLC is not the only option for businesses, each alternative comes with its own caveats.

**Toll-free long codes**: While 1-800 numbers are an affordable option with a high throughput rate of thousands a day, it requires a separate step of obtaining approval for the third party number. Additionally, using a toll-free number significantly reduces customer engagement and experience as it appears impersonal and foreign to consumers.

**Short codes**: While using this 5/6 digit option has an impressive throughput rate of millions a day, purchasing short codes is an expensive ordeal. Acquiring approval for short codes is a long process, unfit for today's fast paced trends.

**Local long codes**: Standard phone numbers come at no additional cost, but with little applicability. As they are not designed for A2P but rather **P2P** **P**erson-to-**P**erson use, the throughput rate is significantly lower, sitting at a few hundred a day. More importantly A2P messaging with unapproved long codes is against CITA, guidelines and so these unsanctioned texts are often filtered out by carriers.

## Benefits of 10DLC

A2P 10DLC offers a happy medium of mass text messaging management with low overhead costs, providing an accessible option to US businesses. While allotted throughput is dependent on a Trust Score assigned upon registration, its capacity is still impressively sitting in the thousands between toll-free long codes and short codes. Compliance with CITA guidelines improves deliverability rates but also brand image and reputation. A2P 10DLC enables campaign data management through tracking keyword performance, allowing for better business practices. Businesses are able to use an exisiting [dedicated phone number](https://www.sipstack.com/resources/blog/dedicated-phone%20number), translating to quick approval times and reduced costs. Ultimatly, utilizing A2P 10DLC significantly improves customer engagement and experiences.

`,
      },

      {
        slug: 'telephone-consumer-protection-act-tcpa',
        title: 'A Brief History of the TCPA',
        subtitle:
          'In 1991, congress in Canada and the US enacted the TCPA (Telephone Consumer Protection Act).',
        abstract: '',
        created: '30/11/2022', //dd/mm/yyyy
        updated: '',
        author: {
          name: 'Jeff Sager',
          picture: '/assets/img/team/jeffsa.jpg',
        },
        content: `
Our society may be objectively divided, but there is one thing pretty much everybody can agree on: Robocalls suck! While many businesses rely on robocalls for legitimate customer reach, from the consumer's point of view, being solicited for something over the phone by a prerecorded message is a universal nuisance.That's why in 1991, congress in Canada and the US enacted the TCPA (Telephone Consumer Protection Act). 

## 1991: What is the TCPA?                  

Essentially the TCPA placed regulations and restrictions on robocalls made by telemarketers, businesses, debt collectors, and political campaigns to help protect consumers. Included in the protection of this act were robocalls to residential phone lines/landlines, unsolicited faxes, and cell phones. 

## 1992: The Invention of "Do-Not-Call Lists" 

One year later, Congress amended the act by including the requirement that telemarketers create and maintain company-specific do-not-call lists, which consumers were able to add themselves to.

## 2003: The Invention of the National Do-Not-Call Registry

Years later, the FCC and FTC established the national <a href="https://www.donotcall.gov/" class="ss-reference" target="_blank">Do-Not-Call registry</a>, which covers all telemarketers (with the exception of certain nonprofit organizations), and applies to both interstate and intrastate calls across the nation.

## 2012: Most Recent Amendments to the TCPA             

Since 2012, telemarketers have been required to obtain written consent from consumers prior to robocalling them, and they are not allowed to rely on an "established business relationship" to avoid receiving said consent. Furthermore, each robocall must provide an automated, interaction "opt-out" option for the consumer. 

## 2015: TCPA Weakened by "Budget Bill" Provision               

The Budget Bill of 2015 saw congress making an exception to the TCPA, which allowed debt collectors to make robocalls in instances when debt is owed, or even just guaranteed by, the federal government. This allowed debt collectors to make robocalls to millions of Americans with education, mortgage, tax, and other federally-backed debt, which debt collectors were able to aggressively take advantage of. 

## 2020: TCPA Upheld, Debt Loophole Eliminated              

On July 5th, 2020 the Supreme Court upheld the TCPA and struck down the aforementioned debt collector provision in the 2015 budget bill. A win all around!

## So Why Do You Still Get So Many Robocalls?             

We know what you're thinking. Despite this protection, you still get robocalls that annoy you to no end, right? Us too. Simply put, the TCPA is meant to protect consumers from legitimate business and call centres who use telemarketing. Unfortunately, it does not account for illegitimate telecommunications fraud, which are conducted by people who obviously have no regard for the law. This illegitimate industry continues to grow exponentially, reporting losses in 2021 of $383 million in [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada)<sup>1</sup> and $30 billion in the [United States](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US) <sup>2</sup> . 
There are a number of different scams used that contribute to these losses, but one of the most prevalent ones for robocalls in particular is known as [Caller ID Spoofing](https://www.sipstack.com/resources/knowledge-base/general/what-is-call-spoofing)). With so many scams out there, and the limitations of protection that the TCPA can offer, it's never been more important to stay informed and vigilant.

## How SIPSTACK Fights Fraud                      

Using the latest technology and machine learning, SIPSTACK's systems authenticates all activity in real time against variables that affect your security. When a carrier implements SIPSTACK's Risk Rating Score, they are able to customize a threshold for calls to pass through, based on their specific needs. At SIPSTACK we take an active role in ensuring we are building a secure and connected tomorrow. [Contact us](https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.

### References

<sup>1 <a href="https://www.antifraudcentre-centreantifraude.ca/index-eng.htm" class="ss-reference" target="_blank">https://www.antifraudcentre-centreantifraude.ca/index-eng.htm</a></sup>  
<sup>2 <a href="https://firstorion.com/2021-scam-call-trends/" class="ss-reference" target="_blank">https://firstorion.com/2021-scam-call-trends/</a></sup> 

`,
      },

      {
        slug: 'what-is-robocall-mitigation-compliance',
        title: 'What is Robocall Mitigation Compliance?',
        subtitle:
          'A robocall mitigation program, or RMP for short, refers to programs that are used by voice service providers to prevent unlawful robocalls from originating on their network.',
        abstract: '',
        created: '30/11/2022',
        updated: '',
        author: {
          name: 'Jeff Sager',
          picture: '/assets/img/team/jeffsa.jpg',
        },
        content: `
Telecommunication fraud continues to grow each year, with reported losses in 2021 of $383 million in [Canada](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada),<sup>1</sup> and $30 billion in the [United States](https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-canada)<sup>2</sup>. Total telecom-related losses in 2021 amounted to $39.89 billion, a 28% increase from 2020.<sup>3</sup> Clearly, it's never been more important to stay informed and vigilant when it comes to the various scams that contribute to these losses. One of the best ways to do this is through the compliance of robocall mitigation programs.

## What is a Robocall Mitigation Program?
A robocall mitigation program, or RMP for short, refers to programs that are used by voice service providers to prevent unlawful robocalls from originating on their network. These RMPs can come in many different forms. 

## Examples of RMPs
1) **Blocklists:** A collection of phone numbers that have originated spam calls, which will get blocked automatically in both incoming and outgoing calls. 
2) **Caller ID Reputation:** Services that attribute a reputation or rating to any phone number in order to help decide whether or not to pick up incoming calls or place outgoing calls. For example, [Whois by SIPSTACK](https://whois.sipstack.com/) and our [SmartCNAM](https://www.sipstack.com/products/smart-cnam) platform uses a growing database of customer feedback to offer an advanced Risk Rating Score.
3) **Dynamic Traffic Analysis:** A process that identifies patterns in calls and callers to determine which ones are most likely to be operated by scammers. For example, numbers with high answer rates but short average call durations typically belong to scammers.
4) **Call Screening:** Services designed to let call recipients know who's calling and **why**, to help them decide if they wish to answer the call. For example, CAPTCHA gateways can prompt the caller to answer a question via text and only allow the call to go through if the caller answers the prompt correctly. This limits scammers by slowing them down and preventing them from reaching certain targets altogether. 

## Challenges to RMPs: Caller-ID Spoofing
One common spamming method that poses a major challenge to these RMPs is a trick known as [Caller-ID Spoofing](https://www.sipstack.com/resources/knowledge-base/general/what-is-call-spoofing). This refers to the altering of either the Caller ID (CID) phone number or Caller Name ([CNAM](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam)) displayed to the person receiving the call. Obviously, when a phone number is altered, many of these RMPs are limited in the protection they can offer. 

## STIR/SHAKEN
That's why in 2020, the [Canadian Radio-Television and Telecommunications Commission (CRTC)](https://crtc.gc.ca/eng/home-accueil.htm) and the [Federal Communications Commission (FCC)](https://www.fcc.gov/) implemented two separate initiatives that work to verify the identity of an inbound call, known as [STIR and SHAKEN](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken). Their intention is to deter illegal caller ID spoofing and to generally end robocalls on Voice over Internet Protocol (VoIP) networks. Compliance with these two initiatives are mandated for phone carriers in North America.

STIR stands for **S**ecure **T**elephone **I**dentity **R**evisited. SHAKEN stands for **S**ignature-based **H**andling of **A**sserted Information Using to**KEN**s. Both initiatives require carriers to certify with the [Robocall Mitigation Database](https://www.fcc.gov/robocall-mitigation-database), which ensures they have taken every precaution not to originate spam calls on their voice networks.

STIR leverages three levels of verification, each corresponding to different levels of security, in order to determine whether a call should be trusted via VoIP systems. This authentication system verifies information at several points in the call, disabling hackers from beating them to the punch.
SHAKEN was created to address non-VoIP systems, such as conventional cellphones, which provide users with information about whether or not callers are verified.

## RMPs Now Mandatory

Voice service providers (VSPs) now have a legal obligation under the **T**elephone **R**obocall **A**buse **C**riminal **E**nforcement and **D**eterrence (TRACED) Act to take action to stop robocalls. As quoted by the FCC:

>As of April 20, 2021, the FCC requires that all providers certify in the >Robocall Mitigation Database that they have fully implemented STIR/SHAKEN >or have instituted a robocall mitigation program to ensure that they are >not originating illegal robocalls… Filings in the Robocall Mitigation >Database are due June 30, 2021.

That means VSPs must either implement a robocall mitigation program, comply with the FCC's STIR/SHAKEN framework, or do both.

While STIR/SHAKEN compliance and mandatory RMPs are a positive step in the right direction, they are simply not enough to eradicate robocalls. They are not foolproof solutions to Caller-ID Spoofing, and although they can help to verify some calls, they do not prevent or block unverified calls. Additionally, because STIR/SHAKEN is still relatively new, extensions have been granted until June of 2023 for carriers with under 100,000 subscribers to comply. Finally, limitations exist around certain phone numbers not being able to be verified unless the device is compatible or until both carriers have adopted the guidelines.

For all of these reasons, we recommend an extra boost of protection...

## How SIPSTACK Fights Fraud
Using the latest technology and machine learning, SIPSTACK's systems authenticates all activity in real time against variables that affect your security. When a carrier implements SIPSTACK's Risk Rating Score, they are able to customize a threshold for calls to pass through, based on their specific needs. At SIPSTACK we take an active role in ensuring we are building a secure and connected tomorrow. [Contact us](https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.

### References
<sup>1 <a href=" https://www.antifraudcentre-centreantifraude.ca/index-eng.htm
" class="ss-reference" target="_blank"> https://www.antifraudcentre-centreantifraude.ca/index-eng.htm</a></sup>  
<sup>2 <a href=" https://firstorion.com/2021-scam-call-trends/
" class="ss-reference" target="_blank"> https://firstorion.com/2021-scam-call-trends/</a></sup>  
<sup>3 <a href=" https://www.subex.com/blog/2021-cfca-global-telecommunications-fraud-loss-survey/
" class="ss-reference" target="_blank"> https://www.subex.com/blog/2021-cfca-global-telecommunications-fraud-loss-survey/</a></sup>

`,
      },

      {
        slug: 'what-is-stir-shaken',
        title: 'What is STIR/SHAKEN?',
        subtitle:
          'STIR/SHAKEN are two separate initiatives that work to verify the identity of an inbound call in efforts to deter illegal caller ID spoofing.',
        abstract: '',
        created: '22/09/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
STIR/SHAKEN are two separate initiatives that work to verify the identity of an inbound call in efforts to deter illegal caller ID spoofing. **STIR,** **S**ecure **T**elephony **I**dentity **R**evisited, and **SHAKEN**, **S**ignature-based **H**andling  of **A**sserted  information using  to**KENs**  are mandated in North America. Since its origin in 2020 <sup>1</sup>, governing bodies **CRTC**, **C**anadian **R**adio-television and **T**elecommunications **C**ommission, and the **FCC** **F**ederal **C**ommunications **C**ommission will oversee its implementation and maintenance.

## A Little Bit About Illegal Caller ID Spoofing

Spoofing, as the name suggests, is the intentional act of tricking someone. In the context of telecommunications, it involves disguising the original  [CNAM, **C**aller **NAM**e, and/or CID, **C**aller **ID**. ](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam)  Opting for a private or unknown caller CNAM will warrant at best, a 19% answering rate in the U.S.  <sup>2</sup>. Scammers armed with this knowledge, utilize the CID of other individuals and companies, without permission. This illegal activity damages the reputation of major companies and organization, creates more fear and hesitancy around answering calls and, increases the efficacy of fraud.

## How Does It Work?

STIR leverages three levels of verification, corresponding to different levels of security, to determine whether a call should be trusted via [VoIP](https://www.sipstack.com/resources/blog/voip-technology-explained) systems. This technology verifies information at several points in the call, disabling hackers from beating this authentication system. SHAKEN was created to address non-VoIP systems, such as the conventional cellphone. This results in providing the user with verified information, appended with tags such as *verified* or *no verification*. Note that messages may differ across devices and carriers types.

## Does this mean I am safe from spoofing?

The short answer is no. STIR/ SHAKEN aids to verify a call, but does not prevent or block unverified calls.

STIR/SHAKEN guidelines have yet to be fully implemented in North America. Canada is in the beginning stages of implementation, while in the U.S., the FCC has granted extensions up until June 2023 for carriers with fewer than 100,000 subscribers <sup>3</sup>.  Additionally, numbers can only be verified if the device is compatible, and both carriers have adopted the guidelines.

To learn more about protecting your company's number from getting spoofed visit [SIPSTACK](https://www.sipstack.com/). 

#### References
<sup>1 [https://www.fcc.gov/call-authentication](https://www.fcc.gov/call-authentication)</sup>
<sup>2 McClain, Colleen. "Most Americans don't answer cellphone calls from unknown numbers." (2020).</sup>
<sup>3 [https://www.fcc.gov/call-authentication](https://www.fcc.gov/call-authentication)</sup>

`,
      },

      {
        slug: 'what-is-the-traced-act',
        title: 'What is the TRACED Act?',
        subtitle:
          'The act grants the Federal Communications Comission (FCC) and law enforcement more tools and authority to prosecute scammers and enact deterring measures against telephone scam to protect consumers.',
        abstract: '',
        created: '01/12/2022',
        updated: '',
        author: {
          name: 'Anjana Uthayakumaran',
          picture: '/assets/img/team/anjanaa.jpg',
        },
        content: `
The **TRACED** **T**elephone **R**obocall **A**buse **C**riminal **E**nforcement and **D**eterrence Act is a piece of legislation that President Donald Trump signed into law on December 30, 2019.<sup>1</sup> The act grants the **FCC** [**F**ederal **C**ommunications **C**omission](https://www.sipstack.com/resources/knowledge-base/general/glossary-telco) and law enforcement more tools and authority to prosecute scammers and enact deterring measures against telephone scam to protect consumers. The TRACED Act is a much needed update to its legislative precursor  **TCPA**  **T**elephone **C**onsumer **P**rotection **A**ct of 1991. While safeguarding customers by restricting  telemarketers and automated phone equipment, [technology behind telecommunications scams]( https://www.sipstack.com/resources/blog/the-state-of-spam-calling-in-the-US) has drastically evolved, requiring new and more comprehensive legislature. The goal of the TRACED Act is to support effective enforcement against unwanted, and often illegal, robocalls. 
## The major provisions of the TRACED Act:
Many provisions in the Traced Act call for a collaborative and multifaceted effort to address the complex and deep rooted problem of fraudulent telephone scams. In order to measure efficacy, the FCC is also required to provide reports to Congress regarding the status of particular provisions. 
### STIR/SHAKEN

As provisioned by the TRACED act, the FCC will oversee the implementation and maintenance of the call authentication framework [STIR/SHAKEN](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken).  STIR/SHAKEN are two separate initiatives that work to verify the identity of an inbound call, in efforts to deter [ illegal call spoofing](https://www.sipstack.com/resources/knowledge-base/general/what-is-call-spoofing). STIR, Secure Telephony Identity Revisited, and SHAKEN, Signature-based Handling of Asserted information using toKENs are mandated in North America. These tools not only prevent illegal caller ID spoofing, but also help identify the original source of the illegal call.
However, this does not mean you are safe spam! STIR/SHAKEN guidelines have yet to be fully implemented in North America. The FCC has granted extensions up until June 2023 for carriers with fewer than 100,000 subscribers.<sup>2</sup>  Additionally, numbers can only be verified if the device is compatible, and both carriers have adopted the guidelines. This poses a large loophole for international robocalls that are able to avoid US authentication standards and law enforcement. 

As provisioned by the TRACED act, the FCC will oversee the implementation and maintenance of the call authentication framework [STIR/SHAKEN](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken).  STIR/SHAKEN are two separate initiatives that work to verify the identity of an inbound call, in efforts to deter [ illegal call spoofing](https://www.sipstack.com/resources/knowledge-base/general/what-is-call-spoofing).STIR,SecureTelephonyIdentityRevisited, andSHAKEN,Signature-basedHandling ofAsserted information using toKENsare mandated in North America. These tools not only prevent illegal caller ID spoofing, but also help identify the original source of the illegal call.
 However, this does not mean you are safe from spam! STIR/SHAKEN guidelines have yet to be fully implemented in North America. The FCC has granted extensions up until June 2023 for carriers with fewer than 100,000 subscribers.<sup>2</sup> Additionally, numbers can only be verified if the device is compatible, and both carriers have adopted the guidelines. This poses a large loophole for international robocalls that are able to avoid US authentication standards and law enforcement. 

### Call Blocking 
Call blocking is a tool utilized by phone companies to stop illegal and what they deem are unwanted calls from reaching consumers phones. The issue with this of course, is that call blocking may unintentionally filter out legal and legitimate calls. With the TRACED Act, the FCC is responsible to ensure that recipients are notified when calls are blocked. Additionally, call blocking technology must be accessible and transparent for both callers and call recipients with effective redress when wanted calls are blocked inadvertently. When a carrier implements SIPSTACK's Risk Rating Score they are able to customize a threshold for calls to pass through, preventing the filtration of important calls. 
### Reassigned Numbers Database 

The TRACED Act mandated the that service providers create and maintain a **RND** **R**eassigned **N**umbers **D**atabase, designed to prevent a consumer from receiving calls intended to the previous owner of the phone number., This up-to-date resource tracks permanent disconnections, phone number changes, and numbers that have been previously owned. It is to be referred to by callers to determine whether a telephone number has been reassigned to minimize unwanted calls. 

The TRACED Act mandated the that service providers create and maintain a **RND** **R**eassigned **N**umbers **D**atabase, designed to prevent a consumer from receiving calls intended to the previous owner of the phone number. This up-to-date resource tracks permanent disconnections, phone number changes, and numbers that have been previously owned. It is to be referred to by callers to determine whether a telephone number has been reassigned to minimize unwanted calls. 


## Conclusion
Reading and interpreting the [TRACED Act](https://www.govinfo.gov/content/pkg/BILLS-116s151enr/pdf/BILLS-116s151enr.pdf), and ensuring your company meets all of the regulations is no easy feat. SIPSTACK's safety measures go above and beyond the TRACED Act so you can focus on your business while we take care of your telecommunication safety. At SIPSTACK we take an active role in ensuring we are building a secure connected tomorrow. [Contact us]( https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.  
#### References
<sup>1 <a href="https://www.fcc.gov/TRACEDAct" class="ss-reference" target="_blank">https://www.fcc.gov/TRACEDAct</a></sup>  
<sup>2 <a href="https://www.fcc.gov/call-authentication" class="ss-reference" target="_blank">https://www.fcc.gov/call-authentication</a></sup> 

`,
      },
    ],
  },
  {
    slug: 'text-messaging',
    icon: 'fa6-solid:comment-sms',
    iconColor: 'success',
    name: 'Text Messaging',
    text: 'General information on SMS / MMS text messaging.',
    contributors: [
      {
        name: 'Kanasu Nagathihalli',
        picture: '/assets/img/team/kanasu.png',
      },
    ],
    articles: [
      {
        slug: 'a2p-10dlc-registration-campaign-types',
        title: 'A2P 10DLC Registration Campaign (Use Case) Types',
        subtitle:
          'The tables below show Campaign Types that have become available since the new A2P 10DLC registration was launched for AT&T in the US on April 1, 2021.',
        abstract: '',
        created: '25/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `

Please note: several "Special" Campaign types have been announced by AT&T, but support by other participating carriers has not yet been confirmed. These Special Use Cases are now listed at the bottom of this article, due to the fact that they are not yet confirmed to be supported by all carriers. 

## Campaign Type and Associated Fees
| Campaign Type | Use cases within campaign type |
|---|---|
| Declared Use Case | Single use case covering 2FA, authentication, customer care, group messaging, notifications, operations, and anything else indicated "Declared" in Table 2 below. |
| Mixed / Marketing Use Case | Marketing use case or combination of use cases under one campaign. |
| Basic / Unregistered | High risk provider or unregistered traffic | 
*Table 1*


The following table contains the full list of Use Cases that are available within Campaign registration since A2P 10DLC registration launched on April 1, 2021. 
## List of Use Cases
| Use Case | Campaign Type | Description |
|---|---|---|
| 2 Factor Authentications | Declared | Any authentication or account verification such as OTP |
| Medium | Declared | Notifications about the status of an account or related to being a part of an account |
| Heavy | Declared | Support, account management, and other avenues of customer interaction |
| Auth | Declared | Information about the status of a delivery |
| Auth | Declared | Messaging about potentially fraudulent activity such as spending alerts |
| Auth | Declared | Message campaigns from colleges, universities, and other education institutions |
| Auth | Mixed/Marketing | A campaign that covers multiple use cases such as marketing promotions and delivery notifications. Primarily for small businesses. Mixed campaigns are likely to have lower throughput and a higher cost per message. |
| Auth | Mixed/Marketing | Promotional content such as sales and limited time offers. |
| Auth | Mixed/Marketing| A campaign that covers multiple use cases such as Customer Care and Delivery Notifications. Mixed campaigns are likely to have lower throughput and a higher cost per message. |
| Auth | Declared | Notifications about polling and voting |
| Auth | Declared | Public Service Announcements that raise audience awareness about a given topic |
| Auth | Declared | Notification of a compromised system (software or hardware related) |
*Table 2*

## Special Use Cases Proposed by AT&T
The following "Special" Campaign types have been put forth by AT&T, but has not been confirmed by other carriers. We are listing these here for completeness, but additional carrier support will be necessary in order to offer these to our customers for messaging to all participating A2P 10DLC mobile networks.

## List of Special Use Cases Proposed by AT&T
| Use Case (AT&T Proposed) | Campaign Type | Description|
|---|---|---|
| Agents, franchises, local branches | Special | Allows the use of 1 number per agent or franchise location, e.g. real estate agents. No marketing allowed if registered under this category. |
| Charity | Special | Messages from a registered charity such as 501(C)(3) charities. Religious organizations are not included. |
| Conversational Messaging | Special | In-app peer-to-peer (P2P) conversations using proxied or pooled numbers or personalized services for enterprise or A2P communications to protect privacy of personal numbers |
| Emergency services | Special | Notifications about/supporting public safety during emergency situations. |
| Sweepstakes | Special | Sweepstakes related communications |
| Political | Special | Messages from a verified campaign to influence decision making |
| Social | Special | Non-commercial communication within or between closed communities |

`,
      },
      {
        slug: 'what-is-a2p-10dlc',
        title: 'What is A2P 10DLC?',
        subtitle:
          'A2P 10DLC refers to a system that allows businesses to send Application-to-Person (A2P) type messaging via standard 10-digit long code (10DLC) phone numbers. ',
        abstract: '',
        created: '03/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `

## How does this affect me?
If you don't need to send messages to users in the United States, the new A2P 10DLC registration system does not affect you, and you don't need to do anything. 

If your business is sending messages in the US, continue reading. 

## How do the new A2P 10DLC regulation affect my business?
Under the new A2P 10DLC system, businesses are required to provide the following information to [The Campaign Registry](https://www.campaignregistry.com/) (TCR), the central hub for registering A2P 10DLC messaging campaigns. 

1. **Brand Registration:** Businesses must identify who they are to the carrier networks.
2. **Campaign Registration:** Businesses must identify what type of messages, i.e. notifications they are sending. 

## What happens after I register my brand?
Once you complete your A2P profile, TCR will give your brand a Trust Score of **Low**, **Medium** or **High**. 

## What is a Trust Score, and how is it determined?
TCR uses a reputation algorithm to assign your business a Trust Score. Your **Trust Score level**, (Low, Medium or High), combined with your **Campaign Type** will determine the message throughput allotted to your Campaign.

## What is a Campaign?
A Campaign represents a use case. In other words, a Campaign is a description of the type of message you plan to send. Each type of message your business sends will fall into a different campaign. For example, if you plan to send authentication codes and marketing messages, you should register two Campaigns. 


## Do I need to buy new phone numbers to use the new A2P 10DLC services?
You don't have to buy new numbers if you're already using long code phone numbers. You can enable existing phone numbers to use the new A2P 10DLC service by following the registration process. 

## Once my Brand and Campaign have been registered with the TRC, how can I make sure my phone numbers use 10DLC?
After your Brand(s) and Campaign(s) are approved, please ensure that your inbound message configuration (e.g. the webhook for your application) is applied on your Messaging Service. Currently, the inbound configuration settings of a Messaging Service takes precedence over the existing inbound settings on those numbers.

## Do I need to use a different method to send outbound messages?
If you don't use Messaging Services in your application to send outbound messages, you don't need to make any changes within your application. Modifying your application to include the Messaging Service SID in your API requests is not necessary. To associate phone numbers to a Campaign, you only need to add phone numbers to a Messaging Service.

## How does the A2P 10DLC regulation affect MMS messaging?

While long code MMS messaging remains subject to throughput limits, short code is still the best option for high-volume MMS use cases in the United States. 

## Does the regulation affect Toll-Free phone numbers in Canada and the US?
No, US Toll-Free phone numbers are not affected by these changes. Toll-Free SMS is still a great way to send A2P SMS in Canada as well as the United States. 

## Is messaging to Canada affected by these changes?
No, Canadian mobile carriers may introduce registered A2P 10DLC solutions in the future, but at this time carriers have not announced any plans to do so.

## Is WhatsApp messaging affected by A2P 10DLC?
No. WhatsApp messaging is unaffected by any of these changes. WhatsApp messages are transmitted over the Internet, rather than through carrier networks like SMS and MMS.


`,
      },
      {
        slug: 'can-my-sms-messages-arrive-in-order',
        title: 'Can my SMS messages arrive in order?',
        subtitle: '',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK cannot guarantee that SMS messages sent from your SIPSTACK phone number will arrive in order. While we will send the SMS messages you pass to us in the order that you've queued them, the SMS messages are delivered individually with no association to each other. The order of delivery depends on the carrier.
`,
      },
      {
        slug: 'block-incoming-sms',
        title: 'Is there a way to block an incoming SMS on a phone number?',
        subtitle: '',
        abstract: '',
        created: '18/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Unlike voice, there is no way to block specific SMS messages on a phone number. You can disable SMS completely for one phone number or numbers within a Messaging Service. But you cannot selectively reject certain messages from one phone number. 
`,
      },
      {
        slug: 'blocking-as-spam',
        title: 'Can my SMS Messages or Phone Numbers be Blocked as Spam?',
        subtitle: '',
        abstract: '',
        created: '22/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Yes. Recipient wireless carriers always reserve the right to filter out incoming SMS and MMS messages from certain numbers. They routinely do this to protect their users from receiving spam messages. 
`,
      },
      {
        slug: 'can-sipstack-numbers-receive-sms-from-a-short-code',
        title: 'Can SIPSTACK numbers receive SMS from a short code',
        subtitle: '',
        abstract: '',
        created: '26/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
By default, SIPSTACK long code numbers cannot receive messages from short code numbers.

Upon request, SIPSTACK can enable your account(s) to receive incoming messages from short codes. This will allow long code phone numbers on your account to receive messages from short codes.

Before you request for your account to be enabled to receive incoming short code SMS, please note the following important limitations:

- The setting is applied to your SIPSTACK Account SID, and will affect all of the long code (local, national or mobile) SMS-capable numbers that belong to the Account SID you have requested.
- Toll-free numbers cannot receive SMS from short codes, and, therefore, will not be affected by this setting.
- By design, a short code number can only send messages to long code numbers from the same country as that of the short code number. In order to receive messages, you must use a SIPSTACK number from the same country as the short code. For example, if you are trying to receive messages from a Canada short code, you will need to use a Canadain SIPSTACK number.
- SIPSTACK cannot guarantee that every short code globally will be able to reach SIPSTACK numbers, even if the SIPSTACK number is from the same country as the short code. There may be  cases where an external short code carrier does not have reach to SIPSTACK, or some other technical issue prevents those messages from reaching our platform.
- You will NOT be able to send outbound messages to these short codes. Therefore, you will not be able to reply, opt out via "STOP," or send "HELP" messages. Before enabling this setting, our Support team will send you a disclaimer from our Legal team and ask you to confirm that you understand and accept this particular limitation.
`,
      },
      {
        slug: 'capabilities-of-phone-numbers',
        title:
          'Capabilities of long code, short code, and toll-free phone numbers in Canada and U.S.',
        subtitle:
          'This guide explains the capabilities and key differences between long code, short code, and toll-free phone numbers in Canada and US.',
        abstract: '',
        created: '20/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
**Notice:** There are major regulatory changes coming to long-code SMS in the US. due to carrier's new A2P 10DLC systems. For full details about the regulation, read What is A2P 10DLC.

Table 1 describes the capabilities of long code, toll-free and short code SMS messaging in Canada and US.
| Capabilities | Long Code* | Toll-free | Short Code** |
|---|---|---|---|
| Coverage | Can send SMS to any country. | Can send SMS to any country. | Can send SMS within their own country only. |
| Voice Call Capability | Yes | Yes | No |
| SMS filtering profile | [Application-to-Person (A2P)](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-and-p2p-messaging) traffic is subject to carrier filtering. | Reduced carrier filtering for Canadian networks (Rogers, Fido, Telus and Videotron) and all US. networks.*** | No carrier filtering, as long as you comply with the use case submitted in your short code application. |
| SMS throughput | 1 SMS segment per second, can't be increased. | 3 SMS segments per second by default, but can be increased. Contact [support](https://www.sipstack.com/contact/us) for more information. | 100 SMS per second by default, but can be increased. Contact [support](https://www.sipstack.com/contact/us) for more information. |
| MMS Capability | Yes | Yes | Capable of MMS with a one-time enablement fee (US. only) |
*Table 1*

**Notes:**

*In US, 10-digit long code application-to-person messaging (A2P 10DLC) will soon require business registration and be subject to additional carrier fees. For full details, see [What is A2P 10DLC](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-10dlc).

**To send short code SMS messages in both Canada and the US., you will need two different short codes; one for each country.

***Some messaging US.e cases are not allowed on toll-free SMS or MMS in Canada and US. For details, see [Forbidden message categories for SMS and MMS in the US. and Canada](http://www.sipstack.com/resources/knowledge-base/text-messaging/forbidden-message-categories).
`,
      },
      {
        slug: 'carrier-support-for-pdf-files',
        title: 'Carrier support for PDF files sent using SIPSTACK MMS',
        subtitle:
          'SIPSTACK MMS messaging is a popular way to send media files, especially images, to end users in Canada and US.',
        abstract: '',
        created: '22/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Please note that PDF files are currently considered an [accepted file type](http://www.sipstack.com/resources/knowledge-base/text-messaging/supported-mms-content-types) by SIPSTACK. This means we will accept the file you submit to us and send it downstream to the mobile network, as long as it meets that network's size limit for media files. However, we will not resize or make other adjustments to the file itself for device compatibility. For this reason, it's important to ensure your PDF files are smaller than the maximum attachment size of the network you are sending toward. 

## Long code MMS support for PDF files 
Fido, Rogers and Telus in Canada and AT&T in US. do not support PDF attachments in MMS messages sent via long codes (standard 10-digit local numbers) toward subscribers on their networks.

For users on these mobile networks, a PDF file attachment on an MMS message will not reach the device. The user will receive the Body text of your message (if one was included), with the following text appended: "One or more of the message components have been deleted by MMS Adaptation. Either the message was too large or the components were unsuitable for your handset."

As of today, long code MMS messaging is considered a person-to-person (P2P) channel by most mobile networks in Canada and US. These mobile networks may choose to extend support to PDF files via long code MMS at a later date. However, SIPSTACK is not aware of any specific plans relating to PDF support via long code.

For a full list of content types supported by SIPSTACK, see [What MMS content types does SIPSTACK support](http://www.sipstack.com/resources/knowledge-base/text-messaging/supported-mms-content-types).

## Short Code SMS not supported by SIPSTACK
SIPSTACK does not offer short code numbers and therefore, does not support any short code SMS/MMS capabilities. 

## WhatsApp and other messaging channels
The above information is applicable to MMS messaging. Other messaging channels such as WhatsApp have different rules and file type support. PDF files are an officially supported media attachment type for WhatsApp users.
`,
      },
      {
        slug: 'delivery-order-of-multiple-media-files-via-mms',
        title: 'Delivery order of multiple media files via MMS',
        subtitle: '',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Multiple media files can be sent as part of one MMS message. However, SIPSTACK cannot guarantee that the messages will be received in the same order that they were sent.
`,
      },
      {
        slug: 'does-recipient-get-charged',
        title: 'Does the recipient of my SIPSTACK message get charged?',
        subtitle:
          'SIPSTACK will only charge your SIPSTACK account for sending messages through our API.',
        abstract: '',
        created: '13/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
We will not charge the recipient of your message for receiving a SIPSTACK message. However, it's possible that the recipient can be charged by their phone provider.

Different mobile plans have different agreements for messaging. Some mobile plans may charge the recipient to receive messages, while some don't. This depends on the mobile plan your recipients are using.

SIPSTACK does not offer premium SMS messaging where the cost of receiving a message can be passed on to the sender.
`,
      },
      {
        slug: 'does-sipstack-check-if-phone-numbers-can-receive-sms',
        title: 'Does SIPSTACK check if phone numbers can receive SMS?',
        subtitle: '',
        abstract: '',
        created: '21/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK API has basic phone number validation logic built into it. We try to save you money by rejecting messages to numbers we are certain are incorrect. However, we trust that our users know more about the phone number they are trying to send a message to than we do. Our validation logic will only affect numbers which are unquestionably incorrect. It is your responsibility to provide accurate data.

## Is the recipient's phone number reachable?
When you make a  POST request to SIPSTACK's REST API, SIPSTACK will check the validity of the "To" phone number in the request. If SIPSTACK discovers that the "To" phone number provided cannot possibly exist, SIPSTACK will respond to your API request with an HTTP 400 response and flag your project with Error 21211. If there is a possibility that the phone number exists, SIPSTACK will hand the message off to the carrier, and the message will be recorded in the SMS logs with a status of queued.

## Is the recipient's phone number a mobile number?
Depending on the country, SIPSTACK may do an extra check to confirm that the "To" number is capable of receiving SMS messages.

#### Countries with a defined Mobile Range
Most countries have a well-defined "mobile range". Numbers within this range are almost always mobile numbers. When a request is made to send an SMS to a number outside of this range, SIPSTACK will respond with a 400 and Error 21614.

#### Countries without a defined Mobile Range
In countries without a "mobile range" like Canada, U.S. and most Caribbean nations, there is currently not a reliable way to determine if a phone number is a mobile number or not. SIPSTACK will attempt to send SMS messages to any phone number which is provided in these countries.

## Best Practices when sending an SMS using SIPSTACK API
We recommend that you collect the phone type during your opt-in process. You should only be sending SMS messages to opted-in users who want to receive your messages.
`,
      },
      {
        slug: 'does-sipstack-support-concatenated-sms-messages',
        title: 'Does SIPSTACK support concatenated SMS messages',
        subtitle:
          'Messages over 160 characters are concatenated or broken up into multiple messages and transmitted separately.',
        abstract: '',
        created: '19/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK allows you to send and receive concatenated messages containing up to 1600 characters (as ten separate messages).

## Sending concatenated messages
All Canada and US carriers support the sending of concatenated messages except for US Cellular. 

However, please note that some older handsets may be unable to display concatenated SMS. These devices may still display long SMS as separate segments marked with "1/3", "2/3" etc.

When sending concatenated SMS, SIPSTACK will auto-segment long messages with a special header. Mobile carriers can use this header to reassemble the segments on the destination handset. In this way, concatenated SMS can appear as a single message on a receiving device. 

Our [Pricing Page](https://www.sipstack.com/pricing) has more information on how our pricing works for outbound concatenated messages. 

Some mobile carriers may have trouble handling SMS messages with more than 10 segments and Unicode characters. Please keep your messages shorter than 10 segments if possible.

## What happens when a message is sent to a carrier that does not support concatenated messages?
Even if a mobile carrier does not support concatenated messages, you can still send long SMS to recipients on that carrier. SIPSTACK will divide your long message into individual SMS to meet the character limit, and automatically add page information to the beginning of each one, for example (1/2), (2/2). On SIPSTACK, your message will still appear under a single Message ID.

## US Cellular and the 150-character limit
In addition to not supporting concatenated messages, US Cellular also limits the length of a single message to 150 characters (instead of 160) in GSM encoding. This means that long messages to US Cellular may segment differently than those sent to other networks.

A single Unicode-encoded message to US Cellular can be up to 70 characters long, the same limit as other mobile carriers.

## Receiving inbound concatenated SMS
SIPSTACK also supports the receiving of concatenated messages up to 1,600 characters. Inbound messages over 160 characters long will be received on your SIPSTACK phone number as one single message, as long as the sending carrier supports concatenation. The price of the inbound message will be the sum of the total number of segments.
`,
      },
      {
        slug: 'emojis-on-sipstack-sms',
        title: 'Can SIPSTACK SMS send and receive emoji?',
        subtitle: '',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Created 7 April 2021 Author Kanasu Nagathihalli Category Text Messaging
SIPSTACK will do the best we can to ensure that the emoji in your message is delivered to your mobile carrier. However, since emoji support has not been standardized across carriers, we cannot guarantee support for emoji across all carriers.
`,
      },
      {
        slug: 'forbidden-message-categories',
        title:
          'Forbidden message categories for toll-free SMS and MMS in Canada and US',
        subtitle:
          'The following messaging use cases are not allowed on toll-free SMS or MMS in Canada and US.',
        abstract: '',
        created: '15/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
If a user tires to assign an outbound message with this category, the message will automatically be rejected by SIPSTACK. If a user tries to specify a different category to send a message that falls within any of the following forbidden categories, SIPSTACK will employ smart AI to detect and automatically suspend accounts that are breaking the rules. 
| Category | Examples | Notes |
|---|---|---|
| High-risk financial services | Payday loans, Short term high-interest loans, Third-party auto loans, Third-party mortgage loans, Student loans | "Third-party" means originating from any party other than the one which will service the loan. |
| Debt collection or forgiveness | Third-party debt collection, Debt consolidation, Debt reduction, Credit repair programs | "Third-party" means originating from any party other than the one who is owed the debt. For example, a hospital could send messages regarding bills for its own patients, assuming they provided opt-in to receive that messaging. |
| "Get rich quick" schemes | Work-from-home programs, Risk investment opportunities, Pyramid schemes | This is different from outreach about employment as a result of compliant opt-in practices, messages from brokerages to their members, investment news alerts, or other investment-related messages. |
| Illegal substances | Cannabis, CBD, Prescription drugs | Cannabis is illegal in Canada and US. Cannabis businesses will not be permitted to use SMS/MMS messaging in Canada or US, regardless of message content. |
| Gambling | Casino apps, Gambling websites |  |
| "S.H.A.F.T." use cases | Sex, Hate, Alcohol, Firearms, Tobacco |  |
*Table 1*
`,
      },
      {
        slug: 'handling-deactivated-phone-numbers',
        title: 'Handling Deactivated Phone Numbers',
        subtitle:
          'This article describes best practices that should be followed while dealing with deactivated phone numbers, including how to find out if a phone number has been deactivated and how to deal with deactivated phone numbers.',
        abstract: '',
        created: '24/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## What is a deactivated phone number?
A phone number is deactivated on one wireless carrier when a mobile subscriber either terminates their service with that carrier or ports their number to a different wireless carrier. Eventually, each deactivated numbers get recycled, and gets assigned to new subscribers.

## Why is it important to keep track of deactivated phone numbers?
When a deactivated number is assigned to a new subscriber, it means that that phone number is no longer associated with the end user who opted in to your messaging campaign. 

## How do I track deactivated phone numbers on my network?
Wireless carriers in Canada and the United States routinely publish Deactivation Reports that contain a list of all the deactivated phone numbers within their networks. These reports help message senders keep their programs in compliance.

## What happens if I don't keep a list of healthy subscribers?
Maintaining a healthy list of subscribers who have opted in to receive your messages is crucial in both US and Canada. Sending messages to end users who have not opted into your programs can result in complaints, following which your messages could be marked as spam. Additionally, carriers can filter out your messages, and in worst-case scenarios, the Federal Communications Commission (FCC) can issue fines.

Sending messages to deactivated phone numbers still incurs costs to you, so keeping your subscriber lists clean can save you charges on unnecessary messages.
`,
      },
      {
        slug: 'how-to-use-toll-free-phone-numbers',
        title: 'How to use toll-free phone numbers for SMS and MMS in Canada',
        subtitle:
          'Toll-free numbers are designated for business messaging use by most major mobile carriers in Canada (Rogers, Fido, Telus and Videotron) and by all major carriers in the US.',
        abstract: '',
        created: '19/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Although messages sent from toll-free phone numbers can still be filtered by carriers, you can greatly reduce the likelihood of filtering by complying with rules and regulations, and following some best practices. This guide explains which SMS and MMS use cases are approved for toll-free phone numbers as well as our recommendations for ensuring high deliverability.

## Approved toll-free messaging use cases
Some categories of messaging, such as high-risk financial services and third-party debt collection, are specifically forbidden on Toll-Free SMS and MMS. For more details, read our article [Forbidden message categories for SMS and MMS in Canada](http://www.sipstack.com/resources/knowledge-base/text-messaging/forbidden-message-categories) and US.

Toll-free messaging is a great choice for transactional use cases, including the following:

- One-time password (OTP) or verification codes
- Account-related alerts or notifications
- Customer care messaging that includes some automated messaging (including satisfaction surveys)

Toll-Free SMS can also be used for promotional or marketing-type traffic. However it is extremely important to ensure that all users have opted-in and that you maintain a low opt-out ("STOP" reply) rate to avoid filtering.

Short code numbers remain the best method of sending high-volume marketing or promotional messaging across Canada and US.

## Toll-free messaging best practices
Toll-Free message filtering is primarily geared toward preventing unwanted messaging, fraud, or abuse. If you are sending A2P messages that align with SIPSTACK's Acceptable Use Policy, you should generally see a low rate of filtering when using a toll-free number. 

Additionally, toll-free messaging users must adhere to the following standards:

- Obtain clear opt-in from your recipients before sending them messages (the opt-in does not need to be via SMS).
- Provide easy ways for your users to opt-out of messages.
- Maintain a very low opt-out (STOP reply) rate from your recipients.
- Use shortened, branded URLs for the highest deliverability levels when sending links in the message body. Avoid using shared URL shorteners (such as popular free URL shortening services) as these can increase risk of filtering.
- Do not "load balance" by sending the same or similar message contents using multiple toll-free numbers. Carriers call this "snowshoeing" and it is specifically targeted for filtering on toll-free SMS.

## Toll-free messaging verification to reduce filtering risk on compliant traffic
You can submit your business and message information for carrier verification of your toll-free SMS and MMS traffic. If your messaging traffic is compliant with all applicable rules, it greatly reduces the risk of filtering on your messaging traffic. SIPSTACK offers this verification service free of cost. Please contact [SIPSTACK Support](https://www.sipstack.com/contact/us) if you're interested in having your toll-free messaging service verified.

**Error 30007:** Toll-free SMS filtered in spite of compliance 

If you suspect you may be experiencing inappropriate filtering (error 30007) on compliant outbound toll-free SMS messages despite following all best practices listed above, please contact [SIPSTACK Support](https://www.sipstack.com/contact/us) and we can investigate on your behalf.

## When should I use toll-free SMS instead of a short code?
A short code is the ideal solution for high-volume A2P use cases. By default, short codes offer much higher messaging throughput than other types of numbers, at 100 SMS segments per second.

Toll-free phone numbers may be a better fit for certain use cases. Unlike short codes, toll-free phone numbers can be used for placing and receiving voice calls in addition to SMS messages. Toll-free SMS may also be a good choice for a business that needs A2P-type communications, but is not ready to apply for a short code.


`,
      },
      {
        slug: 'is-mms-supported-for-all-carriers',
        title: 'Is MMS supported for all carriers in Canada and US?',
        subtitle:
          'Carrier support for MMS messages varies, and is dependent on the receiving carrier. ',
        abstract: '',
        created: '18/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## MMS from Long Code (10-digit) numbers
Currently, SIPSTACK supports sending MMS messages from local long code numbers to the following mobile carriers in Canada and the US.

**Major supported carriers:** AT&T, Verizon, T-Mobile, Sprint, Rogers, Bell, Fido, Telus, Wind Canada

**Minor supported carriers:** 365 Wireless, Alaska Communication System (ACS), Advantage Wireless, Alltel Wireless, Bluegrass Cellular, Boost Mobile, Carolina West Wireless, Cellcom, Cellular South, Clear Talk Wireless, Commnet Wireless, Copper Valley Telecom, CTC Telecom, GCI Wireless, Google Voice, Illinois Valley Cellular, Inland Cellular, James Valley Communications, Leaco, MetroPCS, MTA Communications, NewCore Wireless, Nex-Tech Wireless, Panhandle Communications, Peoples Wireless, Pine Cellular, Pinpoint Communications, Southern Linc, SRT Communications, Standing Rock Telecom, Thumb Cellular, Simmetry (TMP Corporation), United Wireless

## What happens when I send an MMS to an unsupported carrier?
When you send an MMS message to an unsupported carrier, SIPSTACK will send the message as an SMS with a shortened URL in the body, linking to your media. 

The URL (http://m.sipstack.com followed by 7 characters) will be appended to the body of your SMS text message.
`,
      },
      {
        slug: 'mms-message-long-code-cost',
        title:
          'How much does it cost to send and receive an MMS message over long codes?',
        subtitle: '',
        abstract: '',
        created: '31/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK currently offers MMS messaging over Canada and US long code phone numbers. For pricing information on MMS messages, please visit our [Pricing Page](https://www.sipstack.com/).
`,
      },
      {
        slug: 'mms-on-my-toll-free-phone-number',
        title:
          'How much does it cost to send and receive an MMS message over long codes?',
        subtitle: '',
        abstract: '',
        created: '31/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Yes, as of February 2021, all Canada/US toll-free numbers purchased through SIPSTACK can send/receive MMS messages to and from end users in Canada and US.

Toll-free numbers from countries outside of Canada and US are Voice-only, and are not capable of SMS or MMS messaging.
`,
      },
      {
        slug: 'mms-sent-as-sms',
        title: 'Why are my MMS messages being sent as SMS text messages?',
        subtitle: '',
        abstract: '',
        created: '04/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
When you attempt to send an MMS message from a SIPSTACK MMS-enabled number to a recipient on a carrier that does not support MMS, SIPSTACK will convert the message to an SMS with a short URL linking to your media. This includes both international carriers as well as unsupported carriers in Canada and the US. These messages will be charged for the cost of the SMS message instead of an MMS. The message will still have a unique [SSID](https://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid).

This feature is called MMS Converter, and is enabled by default.

When disabled, SIPSTACK will no longer convert your MMS messages into SMS text messages. Instead, your application will receive a HTTP 400 response when attempting to send MMS messages to unsupported carriers.


`,
      },
      {
        slug: 'opt-out-keyword-handling-for-toll-free-sms',
        title: 'Opt-out keyword handling for toll-free SMS',
        subtitle:
          'Toll-free SMS is a great way to send messages to recipients in Canada and US.',
        abstract: '',
        created: '31/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
When sending Toll-Free SMS messages, it is important to remember that Opt-out and Opt-in (STOP and START) keywords are handled differently.

Toll-Free SMS numbers have a layer of opt-out handling outside of SIPSTACK that cannot be removed or customized. When an end user texts the word STOP to your toll-free number, the user will be opted-out of further messaging from your number, and will receive this auto-reply:

NETWORK MSG: You replied with the word "stop" which blocks all texts sent from this number. Text back "unstop" to receive messages again.

If the end user then sends the word START or UNSTOP, they will be opted back in to receive messaging from your number, and will receive this auto-reply:

NETWORK MSG: You have replied "unstop" and will begin receiving messages again from this number.


`,
      },
      {
        slug: 'receiving-international-sms-messages',
        title:
          'Can Canadian and US phone numbers receive international SMS messages?',
        subtitle: '',
        abstract: '',
        created: '24/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Whether Canada or US phone numbers (+1 country code) can receive incoming SMS messages from international phone numbers outside of Canada and US is entirely dependent on the capabilities of that phone number. 


`,
      },
      {
        slug: 'register-my-business',
        title:
          'How do I register my business under the new A2P 10DLC regulations?',
        subtitle:
          'A2P 10DLC refers to a system that allows businesses to send Application-to-Person (A2P) type messaging via standard 10-digit long code (10DLC) phone numbers.',
        abstract: '',
        created: '18/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## How does this affect me?
If you don't need to send messages to users in the United States, the new A2P 10DLC registration system does not affect you, and you don't need to do anything. 

If your business is sending messages in the US, continue reading. 

## How do I register my business under the new A2P 10DLC regulation?
Under the new A2P 10DLC system, businesses are required to provide the following information to The [Campaign Registry](https://www.campaignregistry.com/) (TCR), the central hub for registering A2P 10DLC messaging campaigns. 

1. **Brand Registration:** Businesses must identify who they are to the carrier networks.
2. **Campaign Registration:** Businesses must identify what type of messages, i.e. notifications they are sending. 

Businesses are required to register with TCR after April 1, 2021 and before June 1, 2021. 

If your company sends messages for your own products and services, you must register with the TCR as a direct brand. 

If your company provides messaging services to other businesses, who have their own brands, you must register with the TCR as an Independent Software Vendor (ISV). 

If you are a small business, you don't need to register with TCR at this time. 

## What information do I need to register with TCR? 
You will need the following information to register with TCR. If you are a direct brand, collate the following information about your company. If you are an ISV, you will need to collect this information about your business and your clients.

## Business Information
- Business Name
- Physical Address (Street, City, State/Province/Region, Postal Code, Country)
- Business Identity (Direct Customer or ISV/Reseller/Partner)
- Business Type (Sole Proprietorship/Partnership/Corporation /Co-Operative/LLC/Non-Profit)
- Company Status (Private/Public)
- Stock Ticker & Exchange (if Public)
- Business Registration Number & Type (DUNS or Business License)
- Industry
- Website
- Regions of Operations

## Points of Contact
Two authorized representatives with the following information:

- Name
- Email
- Title
- Phone Number
- Job Position (Director/VP/GM/General Counsel/CEO/CFO)
`,
      },
      {
        slug: 'sending-and-receiving-mms-messages',
        title: 'Sending and receiving MMS messages',
        subtitle: '',
        abstract: '',
        created: '28/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
You can use an MMS-enabled SIPSTACK phone number (long code) to send and receive MMS messages in Canada and US. Please note, however, that SIPSTACK does not offer short code SMS/MMS numbers, and cannot, therefore, support any SMS/MMS capability for short code numbers. 

## Supported media types for MMS
For a list of file types supported by SIPSTACK MMS, please refer to [MMS Content Types supported by SIPSTACK](http://www.sipstack.com/resources/knowledge-base/text-messaging/supported-mms-content-types). 

## Sending MMS messages
When you attempt to send an MMS message from a SIPSTACK MMS-enabled number to a recipient on a carrier that does not support MMS, SIPSTACK will convert the message to an SMS with a short URL linking to your media. This includes both international carriers as well as unsupported carriers in Canada and US. These messages will be charged for the cost of the SMS message instead of an MMS. 

## Receiving MMS messages
If you own an MMS-enabled phone number, your phone number is capable of receiving MMS messages from Canada and US long code phone numbers. Make sure that your number is configured to receive messages.
`,
      },
      {
        slug: 'size-limitations',
        title: 'Size limitations of combining text and images',
        subtitle:
          "If you're sending text and images in the same SMS, the message can contain up to 10 images and 1600 characters, as long as the entire message is under 5 MB.",
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `

1600 characters take 4.8KB of space, which accounts for roughly 1% of the message size limit. However, please note that some special (non-GSM) characters are counted as more than one character, which affects both character count and message size. 

## How SIPSTACK handles messages with non-GSM characters
If a deprecated SMS includes more than one non-GSM character, SIPSTACK will cap the limit of the SMS at 70 characters. If you want your SMS to be received without being split, please ensure that it is free of any non-GSM characters by using a third-party checker
`,
      },
      {
        slug: 'sms-carrier-filtering',
        title: 'SMS Carrier Filtering in Canada and US',
        subtitle:
          'This guide discusses how SMS filtering by different wireless carriers in Canada and US can affect delivery of your programmable SIPSTACK SMS messages. The guide will also provide you with best practices you can use to improve your delivery rates.',
        abstract: '',
        created: '21/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Please note that SIPSTACK also filters messages that violate our [Acceptable Use Policy](https://sipstack.com/aup).

Historically, [Application-to-person (A2P)]((http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-and-p2p-messaging)) type messaging could not be sent using 10-digit long code phone numbers in Canada and US. 

As of March 2021, US. wireless carriers, Verizon and AT&T treat long code numbers as a valid A2P channel. At this time, none of the Canadian wireless networks have introduced A2P 10DLC solutions. They may, however, change in the future. SIPSTACK will keep you updated as these regulations change. For more information on the A2P 10DLC regulation, please see [What is A2P 10DLC](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-10dlc).

## Filtering mechanisms
Message filtering is applied by two parties — the wireless carrier and SIPSTACK. 

## Filtering by wireless carriers
Wireless carriers in Canada and US. apply message filtering for two reasons. First, carriers filter messages to protect mobile subscribers from spam and other forms of unwanted messaging. Secondly, many carriers apply filtering in order to detect and block A2P traffic that is being sent via long code phone numbers.

Carriers in Canada and US. use adaptive (machine learning) software systems to filter messages. These systems look at both message content and volume, and behave very much like email filtering systems. Messages receive a cumulative score based on the following factors: 

- How many messages have come from a phone number during a certain time period, and
- How many similar messages have been transmitted over the carrier's network (in other words, do the message contents resemble known spam or unwanted messages).

In SIPSTACK's experience, high opt-out rates and end user complaints also play a major role in carrier filtering. Because of this, the best thing to do to reduce the risk of filtering is to closely adhere to SIPSTACK's [Acceptable Use Policy](https://sipstack.com/aup), in particular as they relate to user opt-in and opt-out policies.

Carriers in Canada and US. usually report to SIPSTACK when a message has been filtered. If you suddenly see that a large number of your messages are resulting in a status of 'Undelivered' with a 30007 error, the carrier's filtering system has probably recently identified a pattern in your messages that triggered a block.

## Filtering by SIPSTACK
SIPSTACK uses filtering to target messaging that is in violation of our Acceptable Use Policy. SIPSTACK's goal is to protect mobile users from fraud, spam, and other forms of unwanted messaging, as well as to comply with rules and regulations imposed by carriers and regulators.

SIPSTACK's filtering systems are designed to allow A2P messaging. Filtering by SIPSTACK is unlikely as long as your recipients have provided consent to receive your messages, and are not raising spam complaints or sending a high amount of opt-out ("STOP") replies.

## Avoiding Carrier Filtering
First, ensure you are closely adhering to the rules in SIPSTACK's [Acceptable Use Policy](https://sipstack.com/aup). For example, ensure you only send messages to recipients who have provided explicit opt-in consent to receive messages from you. This greatly reduces the risk of complaints and opt-outs that lead to filtering.

In addition, ensure that your first message to a recipient always includes a phrase telling the user how to opt-out, e.g. "Reply STOP to unsubscribe." Certain keywords including STOP are automatically handled by SIPSTACK by default.

## Unblocking Your Number
If you think your SIPSTACK number or message contents may have been blocked by a carrier, here's what you can do to get your number unblocked:

If you believe your messages are compliant with SIPSTACK and carrier policies, please collect 3 or more examples of [Message SSIDs](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid) that have the "undelivered" status with error 30007, and then contact our [Support team](https://www.sipstack.com/contact/us).

Most carrier block lists in Canada and US. use a "cooling off" period, which means that the numbers will automatically be removed from the block list after a period of time. The time period may vary, and carriers do not share this information with SIPSTACK. If your message bodies do not also change, carriers' content filtering systems will continue blocking your messages.

As of March 2021, the filtering landscape in the US. is rapidly changing. AT&T and Verizon will accept appeals when "false positive" filtering seems to be occurring, and will review and potentially unblock these cases. T-Mobile is not currently accepting appeals of filtered traffic, but this is expected to change in the near future with the rollout of T-Mobile's A2P 10DLC solution (details to be announced).

## Getting Pre-Approved to Avoid Filtering: Currently Unavailable in Canada and US.
Canada and US. carriers do not currently pre-approve messages from long code numbers. Short code numbers, on the other hand, are allowed for specific traffic types, and filtering is unlikely as long as you adhere to your stated use case and follow opt-in and opt-out rules. In addition, toll-free SMS can be verified through SIPSTACK to proactively reduce the risk of filtering on approved use cases.
`,
      },
      {
        slug: 'sms-messages-to-roaming-phone-numbers',
        title: 'Can I send SMS messages to roaming phone numbers?',
        subtitle: '',
        abstract: '',
        created: '14/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK cannot guarantee the deliverability of SMS messaging to roaming phone numbers.

If you send an SMS message to a phone number roaming in an area other than where it normally operates, the SMS message may not arrive. In some cases, duplicate messages may be delivered. 

SIPSTACK does not have the ability to determine whether or not the phone number you are sending SMS messages to is roaming at the time the SMS request is initiated.
`,
      },
      {
        slug: 'sms-messaging-for-emergency-purposes',
        title: 'Can I use SIPSTACK SMS messaging for emergency purposes?',
        subtitle: '',
        abstract: '',
        created: '31/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
No, you should not rely on SIPSTACK's programmable SMS during emergency situations. SMS communications to emergency services are disabled by default. Instead, calling 911 is advised. Promising such connectivity to your end users would violate our [Acceptable Use Policy](https://www.sipstack.com/aup).

Please instruct your end users who may need to contact 911 to use an alternative method, such as a standard wireless service. In some countries including Canada and the United States, mobile phones can place emergency voice calls to 911 even if no SIM card is installed on the device.

## More about Text-to-911 in the US
End users in the US who need to reach emergency services should make a voice call from a mobile phone or landline if possible.

In the US, the FCC recommends that voice calls are preferable since Text-to-911 currently has limited support.

Voice calls to 911 are usually the most efficient way to reach emergency help because:

- Voice calls allow 911 operators to ask questions and obtain information while two-way communication by text can take more time,
- Text messages can be subjected to a maximum length limit, and
- Emergency services will usually automatically receive your phone number and approximate location. 

## Can I use SIPSTACK for other types of notifications and alerts?
Absolutely. We encourage you to use SIPSTACK to send notifications that do not directly concern life safety. SIPSTACK can be used to send early warning alerts, public safety advisories, event cancellations, and so on. 

However, in critical situations, we recommend building in redundancies and using SIPSTACK notifications in conjunction with other public warning systems, such as sirens, radio, and TV broadcasts.
`,
      },
      {
        slug: 'sms-restricted-messages',
        title: 'What kind of messages are restricted on SIPSTACK SMS?',
        subtitle:
          'SIPSTACK provides you with a platform to send and receive SMS messages to phone numbers around the world. However, SIPSTACK may suspend your account if you violate our Acceptable Use Policy (AUP).',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK's [Acceptable Use Policy](https://www.sipstack.com/aup)(AUP) describes the agreement between you and SIPSTACK regarding the use of SIPSTACK's product and service.

The following behaviors are not permitted when sending and receiving SMS messages using SIPSTACK. (Please note that the following restrictions apply to the owner of the SIPSTACK account as well as to all their end users.)

## Sending unsolicited messages
No one likes SPAM. You should only send SMS messages to recipients who have opted in to your service and are expecting communication from you. SIPSTACK actively monitors for this kind of activity and we may block the phone number or suspend your account if we receive complaints from your subscribers.

## Sending mass marketing or bulk messaging using SIPSTACK 
Mass marketing restrictions vary from country to country. Mobile carriers do not allow marketing SMS messages, whether solicited or not, to be sent on long codes (10-digit numbers).  SIPSTACK does not support mass marketing on Canadian, US or international phone numbers.

## Sending harassing or abusive messages
Sending threats, unwanted messages and "SMS-bombing" - sending many messages to a single number without the recipient's permission - are not allowed on SIPSTACK. You are responsible for ensuring that your end users do not send harassing or abusive messages.

## Using SIPSTACK numbers as the only means of communication during an emergency
SIPSTACK phone numbers should not be used for inbound and outbound communications between emergency service providers and end users via text messaging. SMS notifications can be used to provide information during an emergency, but should not be used as a replacement for or a means to contacting actual emergency services. 

It is acceptable to use SIPSTACK to send notifications that do not directly impact life safety. For example, early warning alerts, safety advisories, event cancellations, etc. are allowed. We recommend building in redundancy for important applications and using SIPSTACK's notifications in conjunction with other public warning systems like sirens, radio and TV broadcasts if applicable.

For more information about how to use SIPSTACK during an emergency, please read [Can I use SIPSTACK SMS messaging for emergency purposes?](http://www.sipstack.com/resources/knowledge-base/text-messaging/sms-messaging-for-emergency-purposes)

## Engaging in fraud, phishing or sending of sensitive data
SIPSTACK takes fraud and abuse very seriously. Sending messages with fraudulent information or phishing to request confidential information from subscribers is not allowed. It's also never a good idea to provide financial information or any other sensitive personal information to your customers over SMS.

## Misrepresenting your identity (no spoofing)
Spoofing the SenderID or otherwise attempting to mislead message recipients as to who is sending the SMS message is not allowed. While it makes good business sense to identify your brand or name in each message you send, it is not acceptable to misrepresent yourself.

## Sending messages with pornographic or objectionable images
Do not send pictures 
- that promote or potentially further any illegal activity,
- violate any legal or federal legislations, or
- are likely to cause offense to recipients. 

These include but are not limited to pornographic or objectionable images.
`,
      },
      {
        slug: 'sms-with-toll-free-number',
        title:
          'Can I send or receive SMS with a SIPSTACK toll-free phone number?',
        subtitle: '',
        abstract: '',
        created: '14/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Yes. SIPSTACK toll-free numbers support two-way SMS (sending and receiving text messages) within Canada and US, and one-way SMS to other countries.

Please ensure your SIPSTACK phone number or messaging service is configured to receive incoming messages. 

Please note that standard messaging rates apply when sending SMS to, and receiving SMS from, a toll-free number. Toll-free SMS in Canada and the US offers certain advantages, but is also subject to rules and limitations. 

## How do toll-free numbers work in other countries?
Toll-free numbers from countries outside Canada and US don't support the sending and receiving of SMS messages.

## Sending SMS to other countries with a Canadian Toll-Free number
To send one-way SMS to countries outside Canada and US using toll-free numbers, use the same process as you would to send a standard SIPSTACK Canada/US long code message. 

For two-way toll-free SMS (sending and receiving SMS to and from the same end user), ensure that you are using a SIPSTACK number with SMS capability from the same country as your recipient. 
`,
      },
      {
        slug: 'support-for-opt-out-keywords',
        title: 'SIPSTACK support for opt-out keywords',
        subtitle: '',
        abstract: '',
        created: '25/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
If a customer responds to a message from a SIPSTACK long code or toll-free phone number with any of the following keywords, they will be opted out from receiving future messages from that number. 

**Keywords: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT**

## How does the opt-out process work?
When SIPSTACK receives any of the above keywords as replies, we will create a block list entry in our database, and then pass the message to your webhook. Once a number is on the block list, any future attempts to message them will be met with a 400 message from our API. Recipients can disable this message and resume receiving messages by entering any of the opt-in keywords. 

Only single-word messages will trigger the block. For example, replying STOP will stop the customer from receiving messages from that particular SIPSTACK number but replying 'STOP PLEASE' or 'PLEASE CANCEL' will not. 

The block works and is logged even if your number currently has no messaging request URL. The STOP keyword replies will only apply to the most recent number that messaged the recipient. If you are using more than one toll-free or long code phone number to send messages, it is your responsibility to prevent those customers from receiving messages from your other numbers. We recommend universalizing the block list to all your numbers. 

## Short Codes
SIPSTACK does not offer short code SMS/MMS numbers, and therefore, cannot support any customization of an opt-out keyword on short code messages. 

**Notice:** Text message campaigns may be subject to various legal compliance requirements depending on the nature of your text messaging campaign, the location from where you are sending your text messages, and the location of your recipients. While SIPSTACK will handle the above-described messages on long codes and toll-free numbers in the way described in this article, you should consult with your legal counsel to ensure that your text messaging campaign conforms to all applicable legal compliance requirements.

If you have further questions on this, please contact [SIPSTACK Support](https://www.sipstack.com/contact/us).
`,
      },
      {
        slug: 'supported-mms-content-types',
        title: 'What MMS content types does SIPSTACK support?',
        subtitle:
          'You can send text, audio, video, image and application content over SIPSTACK MMS. However, whether these messages are received depends on the carrier and device of the end user. ',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `

The maximum size limit for a SIPSTACK MMS is 5 MB. 

A list of accepted media content types is provided below. While all the listed supported formats are accepted by SIPSTACK API, please note that content may be formatted or modified for delivery on destination devices.

**Supported Image Formats:** jpeg, gif, png, bmp

**Supported Audio Formats:** basic, L24, mp4, mpeg, pgg, vorbis, vnd.rn-realaudio, vnd.wave, 3gpp, ac3, vnd.wave, webm, amr-nb, amr

**Supported Video Formats:** mpeg, mp4, quicktime, webm, 3gpp, 3gpp2, 3gpp-tt, H261, H263, H263-1998, H263-2000, H264

**Supported Text Formats:** vcard, csv, rtf, richtext, calendar, directory

**Supported Application Formats:** pdf
`,
      },
      {
        slug: 'trust-scores',
        title:
          'How do Trust Scores for A2P 10DLC in the US affect Message Throughput?',
        subtitle:
          'According to the new A2P 10DLC regulation in the US, your message throughput will now be determined by your Trust Score and your Campaign type.',
        abstract: '',
        created: '18/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## Throughput overview
SMS message sending throughput is measured in Message Segments per Second (MPS). Each message segment consists of up to 160 GSM-7 encoded characters. An SMS with more characters and/or different character encoding can be comprised of multiple segments. 

## What is a Trust Score and how is it determined?
The [Campaign Registry](https://www.campaignregistry.com/) (TRC) is a third party which administers the wireless carrier's new registration system. TCR uses a reputation algorithm to assign your business a Trust Score. Your Trust Score level, (Low, Medium or High), combined with your Campaign Type will determine the message throughput allotted to your Campaign. The Trust Score is a representation of how trusted your business is, and determines your messaging throughput. The higher your Trust Score, the higher your messaging throughput (MPS). 

Obtaining a Trust Score is a mandatory step on all industry wide A2P 10DLC registrations.

## Can I appeal the decision if I'm not satisfied with my Trust Score?
Yes, you can appeal TCR's decision by submitting a request for additional review. This appeal entails a one-time fee of $40 USD. However, there is no guarantee that your Trust Score will increase as a result of the additional review.

## How is throughput (MPS) allocated for A2P 10DLC? 
Under the new A2P 10DLC regulations, the number of MPS you can send for all of your registered Campaigns is capped. This MPS limit is shared across all US/Canada long code numbers allocated to your campaign, and all wireless carriers. Whether you choose to send messages over a single number to a specific carrier, or split up messages over a collection of local numbers to multiple carriers, the same MPS limit applies.

## Do these rule changes affect MMS and Toll-Free Numbers?
No. Neither MMS nor Toll-Free SMS messaging throughput is currently affected by the new A2P 10DLC regulations. A US Toll-Free number has a total of 3 MPS toward all US and Canada carriers by default.

## Is messaging to countries other than the United States affected?
No.


`,
      },
      {
        slug: 'what-is-a-message-ssid',
        title: 'What is a Message SSID?',
        subtitle: '',
        abstract: '',
        created: '01/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Every message successfully created by SIPSTACK API generates a unique SSID. The SSID is a 34-character string. 

Messages that contain media attachments are identified as MMS Messages. 
`,
      },
      {
        slug: 'what-is-a-messaging-short-code',
        title: 'What is a Messaging Short Code?',
        subtitle: '',
        abstract: '',
        created: '26/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
A short code is a 5 or 6-digit number that can send and receive SMS (and MMS) to and from mobile phones. Short codes are recommended for high volume applications.

Short codes may be a random number (in Canada or U.S.), or a vanity number that you pick. A vanity short code is a specific number of your voice, while a random short code is assigned to you and can't be reviewed in advance.

## Does SIPSTACK offer short code phone numbers? 
No, SIPSTACK currently does not offer short code phone numbers. 
`,
      },
      {
        slug: 'what-is-a2p-and-p2p-messaging',
        title: 'What is A2P and P2P Messaging?',
        subtitle:
          'Programmable SMS Text Messaging generally falls within one of two categories: A2P and P2P messaging.',
        abstract: '',
        created: '18/03/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
## A2P Messaging
A2P or Application-to-person messaging, as the name suggests, refers to messages a person receives from an application. All messaging traffic from automated messages, appointment reminders, chat bots, virtual assistants, one-time-password (OTP) and PIN codes fall into the category of A2P messages. 

A2P messages are subject to local country regulations. Customers need to be aware that these regulations have implications for their business. In some cases, messages may be filtered by recipient carriers. In other cases, the delivery of messages may be delayed. 

## P2P Messaging
P2P or Person-to-Person messaging is defined as a two-way conversation between two humans. Any messaging traffic between two people using their phones to send messages falls into the category of P2P messages. 

According to the telecom regulations of Canada and the United States, P2P messaging has a very narrow definition, and cannot consist of any application-mediated messaging.
`,
      },
      {
        slug: 'will-i-be-charged-if-sipstack-encounters-an-error',
        title:
          'Will I be charged if SIPSTACK encounters an error when sending an SMS?',
        subtitle: '',
        abstract: '',
        created: '7/05/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
SIPSTACK will not charge you for a message if your API request returns an HTTP error, or if the message status on SIPSTACK is "failed." SIPSTACK will charge you for messages where delivery was attempted. Read on for details.

## Delivery Attempts
SIPSTACK will charge you for a message if delivery was attempted, i.e. the message status is "sent," "delivered," "undelivered," or "delivery unknown." 

In some cases, messages may be sent from SIPSTACK to the carrier, but are not received at the end user's handset. 

## API-level errors (HTTP response errors)
If you make an API request to SIPSTACK to send a message, and SIPSTACK returns an HTTP response error (for example, an HTTP 400), this means that SIPSTACK was unable to process your request. You will not be charged for failed API requests.

API requests to SIPSTACK may fail for a variety of reasons, usually because of an error in your API request. A few examples of API-level errors include: 

- An invalid 'To' number,
- SMS Geo-Permissions for the country you're attempting to send messages to is not enabled, and
- An attempt to send messages to a user who has opted out of receiving messages from you.

## "Failed" messages
A message that is marked with the status "failed" did not leave SIPSTACK and you will not be charged. "Failed" messages can happen for various reasons including queue overflows, account suspensions and media errors (in the case of MMS).

## A note about WhatsApp and other non-SMS channels
Messaging channels other than SMS and MMS may have slightly different billing behavior. For example, undelivered WhatsApp messages are not charged.


`,
      },
      {
        slug: 'will-sipstack-resize-my-images-for-mms',
        title:
          'Will SIPSTACK automatically resize my images for MMS messaging?',
        subtitle: '',
        abstract: '',
        created: '07/04/2021',
        updated: '',
        author: {
          name: 'Kanasu Nagathihalli',
          picture: '/assets/img/team/kanasu.png',
        },
        content: `
Yes, SIPSTACK will automatically resize supported images file types (.png, .gif, and .jpg) to the necessary size for delivery based on carrier specifications. That said, the total combined request size (message and attachments) must be under 5MB in size. An API request with an image larger than 5MB will fail with an error.

If you prefer to resize your own images, we recommend that images be no larger than 600KB.
`,
      },
    ],
  },
]
