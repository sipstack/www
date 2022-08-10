export const helpCenterCategories = [
{
    slug: "api",
    icon: "eos-icons:api",
    iconColor: "yellow",
    name: "API",
    text: "General information on API and use.",
    contributors: [
        {
            name: "Kanasu Nagathihalli",
            picture: "/assets/img/team/kanasu.png",
        },
    ],
    articles: [{
    slug: "rate-limits",
    title: "API Rate Limits",
    subtitle: "This article gives you all the information you need to know about SIPSTACK API Rate Limits.",
    abstract: "",
    created: "16/04/2021", //dd/mm/yyyy
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},]
},
{
    slug: "fax",
    icon: "eos-icons:api",
    iconColor: "orange",
    name: "Fax",
    text: "General information on fax and use.",
    contributors: [
        {
            name: "Kanasu Nagathihalli",
            picture: "/assets/img/team/kanasu.png",
        },
    ],
    articles: [{
    slug: "common-fax-issues",
    title: "Common Fax Issues",
    subtitle: " ",
    abstract: "",
    created: "7/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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

`
},]
},
{
    slug: "phone-numbers",
    icon: "eos-icons:api",
    iconColor: "purple",
    name: "Phone Numbers",
    text: "General information on phone numbers and use.",
    contributors: [
        {
            name: "Kanasu Nagathihalli",
            picture: "/assets/img/team/kanasu.png",
        },
    ],
    articles: [{
    slug: "phone-number-types-and-capabilities",
    title: "SIPSTACK Phone Number Types and Their Capabilities",
    subtitle: "SIPSTACK offers a range of phone number types that differ in their costs and capabilities. The details of each of the options are listed below",
    abstract: "",
    created: "14/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},]
},
{
    slug: "regulatory",
    icon: "eos-icons:api",
    iconColor: "orange",
    name: "Regulatory",
    text: "General information on Regulatory boards.",
    contributors: [
        {
            name: "Kanasu Nagathihalli",
            picture: "/assets/img/team/kanasu.png",
        },
    ],
    articles: []
},
{
    slug: "text-messaging",
    icon: "fa6-solid:comment-sms",
    iconColor: "success",
    name: "Text Messaging",
    text: "General information on SMS / MMS text messaging.",
    contributors: [
        {
            name: "Kanasu Nagathihalli",
            picture: "/assets/img/team/kanasu.png",
        },
    ],
    articles: [{
    slug: "a2p-10dlc-registration-campaign-types",
    title: "A2P 10DLC Registration Campaign (Use Case) Types",
    subtitle: "The tables below show Campaign Types that have become available since the new A2P 10DLC registration was launched for AT&T in the US on April 1, 2021.",
    abstract: "",
    created: "25/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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

`
},
{
    slug: "what-is-a2p-10dlc",
    title: "What is A2P 10DLC?",
    subtitle: "A2P 10DLC refers to a system that allows businesses to send Application-to-Person (A2P) type messaging via standard 10-digit long code (10DLC) phone numbers. ",
    abstract: "",
    created: "03/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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


`
},
{
    slug: "block-incoming-sms",
    title: "Is there a way to block an incoming SMS on a phone number?",
    subtitle: "",
    abstract: "",
    created: "18/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Unlike voice, there is no way to block specific SMS messages on a phone number. You can disable SMS completely for one phone number or numbers within a Messaging Service. But you cannot selectively reject certain messages from one phone number. 
`
},
{
    slug: "blocking-as-spam",
    title: "Can my SMS Messages or Phone Numbers be Blocked as Spam?",
    subtitle: "",
    abstract: "",
    created: "22/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Yes. Recipient wireless carriers always reserve the right to filter out incoming SMS and MMS messages from certain numbers. They routinely do this to protect their users from receiving spam messages. 
`
},
{
    slug: "can-my-sms-messages-arrive-in-order",
    title: "Can my SMS messages arrive in order?",
    subtitle: "",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
SIPSTACK cannot guarantee that SMS messages sent from your SIPSTACK phone number will arrive in order. While we will send the SMS messages you pass to us in the order that you've queued them, the SMS messages are delivered individually with no association to each other. The order of delivery depends on the carrier.
`
},
{
    slug: "can-sipstack-numbers-receive-sms-from-a-short-code",
    title: "Can SIPSTACK numbers receive SMS from a short code",
    subtitle: "",
    abstract: "",
    created: "26/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "capabilities-of-phone-numbers",
    title: "Capabilities of long code, short code, and toll-free phone numbers in Canada and U.S.",
    subtitle: "This guide explains the capabilities and key differences between long code, short code, and toll-free phone numbers in Canada and US.",
    abstract: "",
    created: "20/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "carrier-support-for-pdf-files",
    title: "Carrier support for PDF files sent using SIPSTACK MMS",
    subtitle: "SIPSTACK MMS messaging is a popular way to send media files, especially images, to end users in Canada and US.",
    abstract: "",
    created: "22/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "delivery-order-of-multiple-media-files-via-mms",
    title: "Delivery order of multiple media files via MMS",
    subtitle: "",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Multiple media files can be sent as part of one MMS message. However, SIPSTACK cannot guarantee that the messages will be received in the same order that they were sent.
`
},
{
    slug: "does-recipient-get-charged",
    title: "Does the recipient of my SIPSTACK message get charged?",
    subtitle: "SIPSTACK will only charge your SIPSTACK account for sending messages through our API.",
    abstract: "",
    created: "13/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
We will not charge the recipient of your message for receiving a SIPSTACK message. However, it's possible that the recipient can be charged by their phone provider.

Different mobile plans have different agreements for messaging. Some mobile plans may charge the recipient to receive messages, while some don't. This depends on the mobile plan your recipients are using.

SIPSTACK does not offer premium SMS messaging where the cost of receiving a message can be passed on to the sender.
`
},
{
    slug: "does-sipstack-check-if-phone-numbers-can-receive-sms",
    title: "Does SIPSTACK check if phone numbers can receive SMS?",
    subtitle: "",
    abstract: "",
    created: "21/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "does-sipstack-support-concatenated-sms-messages",
    title: "Does SIPSTACK support concatenated SMS messages",
    subtitle: "Messages over 160 characters are concatenated or broken up into multiple messages and transmitted separately.",
    abstract: "",
    created: "19/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "emojis-on-sipstack-sms",
    title: "Can SIPSTACK SMS send and receive emoji?",
    subtitle: "",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Created 7 April 2021 Author Kanasu Nagathihalli Category Text Messaging
SIPSTACK will do the best we can to ensure that the emoji in your message is delivered to your mobile carrier. However, since emoji support has not been standardized across carriers, we cannot guarantee support for emoji across all carriers.
`
},
{
    slug: "forbidden-message-categories",
    title: "Forbidden message categories for toll-free SMS and MMS in Canada and US",
    subtitle: "The following messaging use cases are not allowed on toll-free SMS or MMS in Canada and US.",
    abstract: "",
    created: "15/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "handling-deactivated-phone-numbers",
    title: "Handling Deactivated Phone Numbers",
    subtitle: "This article describes best practices that should be followed while dealing with deactivated phone numbers, including how to find out if a phone number has been deactivated and how to deal with deactivated phone numbers.",
    abstract: "",
    created: "24/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "how-to-use-toll-free-phone-numbers",
    title: "How to use toll-free phone numbers for SMS and MMS in Canada",
    subtitle: "Toll-free numbers are designated for business messaging use by most major mobile carriers in Canada (Rogers, Fido, Telus and Videotron) and by all major carriers in the US.",
    abstract: "",
    created: "19/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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


`
},
{
    slug: "is-mms-supported-for-all-carriers",
    title: "Is MMS supported for all carriers in Canada and US?",
    subtitle: "Carrier support for MMS messages varies, and is dependent on the receiving carrier. ",
    abstract: "",
    created: "18/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
## MMS from Long Code (10-digit) numbers
Currently, SIPSTACK supports sending MMS messages from local long code numbers to the following mobile carriers in Canada and the US.

**Major supported carriers:** AT&T, Verizon, T-Mobile, Sprint, Rogers, Bell, Fido, Telus, Wind Canada

**Minor supported carriers:** 365 Wireless, Alaska Communication System (ACS), Advantage Wireless, Alltel Wireless, Bluegrass Cellular, Boost Mobile, Carolina West Wireless, Cellcom, Cellular South, Clear Talk Wireless, Commnet Wireless, Copper Valley Telecom, CTC Telecom, GCI Wireless, Google Voice, Illinois Valley Cellular, Inland Cellular, James Valley Communications, Leaco, MetroPCS, MTA Communications, NewCore Wireless, Nex-Tech Wireless, Panhandle Communications, Peoples Wireless, Pine Cellular, Pinpoint Communications, Southern Linc, SRT Communications, Standing Rock Telecom, Thumb Cellular, Simmetry (TMP Corporation), United Wireless

## What happens when I send an MMS to an unsupported carrier?
When you send an MMS message to an unsupported carrier, SIPSTACK will send the message as an SMS with a shortened URL in the body, linking to your media. 

The URL (http://m.sipstack.com followed by 7 characters) will be appended to the body of your SMS text message.
`
},
{
    slug: "mms-message-long-code-cost",
    title: "How much does it cost to send and receive an MMS message over long codes?",
    subtitle: "",
    abstract: "",
    created: "31/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
SIPSTACK currently offers MMS messaging over Canada and US long code phone numbers. For pricing information on MMS messages, please visit our [Pricing Page](https://www.sipstack.com/).
`
},
{
    slug: "mms-on-my-toll-free-phone-number",
    title: "How much does it cost to send and receive an MMS message over long codes?",
    subtitle: "",
    abstract: "",
    created: "31/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Yes, as of February 2021, all Canada/US toll-free numbers purchased through SIPSTACK can send/receive MMS messages to and from end users in Canada and US.

Toll-free numbers from countries outside of Canada and US are Voice-only, and are not capable of SMS or MMS messaging.
`
},
{
    slug: "mms-sent-as-sms",
    title: "Why are my MMS messages being sent as SMS text messages?",
    subtitle: "",
    abstract: "",
    created: "04/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
When you attempt to send an MMS message from a SIPSTACK MMS-enabled number to a recipient on a carrier that does not support MMS, SIPSTACK will convert the message to an SMS with a short URL linking to your media. This includes both international carriers as well as unsupported carriers in Canada and the US. These messages will be charged for the cost of the SMS message instead of an MMS. The message will still have a unique [SSID](https://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid).

This feature is called MMS Converter, and is enabled by default.

When disabled, SIPSTACK will no longer convert your MMS messages into SMS text messages. Instead, your application will receive a HTTP 400 response when attempting to send MMS messages to unsupported carriers.


`
},
{
    slug: "opt-out-keyword-handling-for-toll-free-sms",
    title: "Opt-out keyword handling for toll-free SMS",
    subtitle: "Toll-free SMS is a great way to send messages to recipients in Canada and US.",
    abstract: "",
    created: "31/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
When sending Toll-Free SMS messages, it is important to remember that Opt-out and Opt-in (STOP and START) keywords are handled differently.

Toll-Free SMS numbers have a layer of opt-out handling outside of SIPSTACK that cannot be removed or customized. When an end user texts the word STOP to your toll-free number, the user will be opted-out of further messaging from your number, and will receive this auto-reply:

NETWORK MSG: You replied with the word "stop" which blocks all texts sent from this number. Text back "unstop" to receive messages again.

If the end user then sends the word START or UNSTOP, they will be opted back in to receive messaging from your number, and will receive this auto-reply:

NETWORK MSG: You have replied "unstop" and will begin receiving messages again from this number.


`
},
{
    slug: "receiving-international-sms-messages",
    title: "Can Canadian and US phone numbers receive international SMS messages?",
    subtitle: "",
    abstract: "",
    created: "24/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Whether Canada or US phone numbers (+1 country code) can receive incoming SMS messages from international phone numbers outside of Canada and US is entirely dependent on the capabilities of that phone number. 


`
},
{
    slug: "register-my-business",
    title: "How do I register my business under the new A2P 10DLC regulations?",
    subtitle: "A2P 10DLC refers to a system that allows businesses to send Application-to-Person (A2P) type messaging via standard 10-digit long code (10DLC) phone numbers.",
    abstract: "",
    created: "18/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "sending-and-receiving-mms-messages",
    title: "Sending and receiving MMS messages",
    subtitle: "",
    abstract: "",
    created: "28/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
You can use an MMS-enabled SIPSTACK phone number (long code) to send and receive MMS messages in Canada and US. Please note, however, that SIPSTACK does not offer short code SMS/MMS numbers, and cannot, therefore, support any SMS/MMS capability for short code numbers. 

## Supported media types for MMS
For a list of file types supported by SIPSTACK MMS, please refer to [MMS Content Types supported by SIPSTACK](http://www.sipstack.com/resources/knowledge-base/text-messaging/supported-mms-content-types). 

## Sending MMS messages
When you attempt to send an MMS message from a SIPSTACK MMS-enabled number to a recipient on a carrier that does not support MMS, SIPSTACK will convert the message to an SMS with a short URL linking to your media. This includes both international carriers as well as unsupported carriers in Canada and US. These messages will be charged for the cost of the SMS message instead of an MMS. 

## Receiving MMS messages
If you own an MMS-enabled phone number, your phone number is capable of receiving MMS messages from Canada and US long code phone numbers. Make sure that your number is configured to receive messages.
`
},
{
    slug: "size-limitations",
    title: "Size limitations of combining text and images",
    subtitle: "If you're sending text and images in the same SMS, the message can contain up to 10 images and 1600 characters, as long as the entire message is under 5 MB.",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `

1600 characters take 4.8KB of space, which accounts for roughly 1% of the message size limit. However, please note that some special (non-GSM) characters are counted as more than one character, which affects both character count and message size. 

## How SIPSTACK handles messages with non-GSM characters
If a deprecated SMS includes more than one non-GSM character, SIPSTACK will cap the limit of the SMS at 70 characters. If you want your SMS to be received without being split, please ensure that it is free of any non-GSM characters by using a third-party checker
`
},
{
    slug: "sms-carrier-filtering",
    title: "SMS Carrier Filtering in Canada and US",
    subtitle: "This guide discusses how SMS filtering by different wireless carriers in Canada and US can affect delivery of your programmable SIPSTACK SMS messages. The guide will also provide you with best practices you can use to improve your delivery rates.",
    abstract: "",
    created: "21/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "sms-messages-to-roaming-phone-numbers",
    title: "Can I send SMS messages to roaming phone numbers?",
    subtitle: "",
    abstract: "",
    created: "14/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
SIPSTACK cannot guarantee the deliverability of SMS messaging to roaming phone numbers.

If you send an SMS message to a phone number roaming in an area other than where it normally operates, the SMS message may not arrive. In some cases, duplicate messages may be delivered. 

SIPSTACK does not have the ability to determine whether or not the phone number you are sending SMS messages to is roaming at the time the SMS request is initiated.
`
},
{
    slug: "sms-messaging-for-emergency-purposes",
    title: "Can I use SIPSTACK SMS messaging for emergency purposes?",
    subtitle: "",
    abstract: "",
    created: "31/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "sms-restricted-messages",
    title: "What kind of messages are restricted on SIPSTACK SMS?",
    subtitle: "SIPSTACK provides you with a platform to send and receive SMS messages to phone numbers around the world. However, SIPSTACK may suspend your account if you violate our Acceptable Use Policy (AUP).",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
SIPSTACK's [Acceptable Use Policy](https://www.sipstack.com/aup)(AUP) describes the agreement between you and SIPSTACK regarding the use of SIPSTACK's product and service.

The following behaviors are not permitted when sending and receiving SMS messages using SIPSTACK. (Please note that the following restrictions apply to the owner of the SIPSTACK account as well as to all their end users.)

## Sending unsolicited messages
No one likes SPAM. You should only send SMS messages to recipients who have opted in to your service and are expecting communication from you. SIPSTACK actively monitors for this kind of activity and we may block the phone number or suspend your account if we receive complaints from your subscribers.

## Sending mass marketing or bulk messaging using SIPSTACK 
Mass marketing restrictions vary from country to country. Mobile carriers do not allow marketing SMS messages, whether solicited or not, to be sent on long codes (10-digit numbers).  SIPSTACK does not support mass marketing on Canadian, US or international phone numbers.

## Sending harassing or abusive messages
Sending threats, unwanted messages and "SMS-bombing" – sending many messages to a single number without the recipient's permission – are not allowed on SIPSTACK. You are responsible for ensuring that your end users do not send harassing or abusive messages.

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
`
},
{
    slug: "sms-with-toll-free-number",
    title: "Can I send or receive SMS with a SIPSTACK toll-free phone number?",
    subtitle: "",
    abstract: "",
    created: "14/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "support-for-opt-out-keywords",
    title: "SIPSTACK support for opt-out keywords",
    subtitle: "",
    abstract: "",
    created: "25/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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
`
},
{
    slug: "supported-mms-content-types",
    title: "What MMS content types does SIPSTACK support?",
    subtitle: "You can send text, audio, video, image and application content over SIPSTACK MMS. However, whether these messages are received depends on the carrier and device of the end user. ",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `

The maximum size limit for a SIPSTACK MMS is 5 MB. 

A list of accepted media content types is provided below. While all the listed supported formats are accepted by SIPSTACK API, please note that content may be formatted or modified for delivery on destination devices.

**Supported Image Formats:** jpeg, gif, png, bmp

**Supported Audio Formats:** basic, L24, mp4, mpeg, pgg, vorbis, vnd.rn-realaudio, vnd.wave, 3gpp, ac3, vnd.wave, webm, amr-nb, amr

**Supported Video Formats:** mpeg, mp4, quicktime, webm, 3gpp, 3gpp2, 3gpp-tt, H261, H263, H263-1998, H263-2000, H264

**Supported Text Formats:** vcard, csv, rtf, richtext, calendar, directory

**Supported Application Formats:** pdf
`
},
{
    slug: "trust-scores",
    title: "How do Trust Scores for A2P 10DLC in the US affect Message Throughput?",
    subtitle: "According to the new A2P 10DLC regulation in the US, your message throughput will now be determined by your Trust Score and your Campaign type.",
    abstract: "",
    created: "18/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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


`
},
{
    slug: "what-is-a-message-ssid",
    title: "What is a Message SSID?",
    subtitle: "",
    abstract: "",
    created: "01/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Every message successfully created by SIPSTACK API generates a unique SSID. The SSID is a 34-character string. 

Messages that contain media attachments are identified as MMS Messages. 
`
},
{
    slug: "what-is-a-messaging-short-code",
    title: "What is a Messaging Short Code?",
    subtitle: "",
    abstract: "",
    created: "26/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
A short code is a 5 or 6-digit number that can send and receive SMS (and MMS) to and from mobile phones. Short codes are recommended for high volume applications.

Short codes may be a random number (in Canada or U.S.), or a vanity number that you pick. A vanity short code is a specific number of your voice, while a random short code is assigned to you and can't be reviewed in advance.

## Does SIPSTACK offer short code phone numbers? 
No, SIPSTACK currently does not offer short code phone numbers. 
`
},
{
    slug: "what-is-a2p-and-p2p-messaging",
    title: "What is A2P and P2P Messaging?",
    subtitle: "Programmable SMS Text Messaging generally falls within one of two categories: A2P and P2P messaging.",
    abstract: "",
    created: "18/03/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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


`
},
{
    slug: "will-i-be-charged-if-sipstack-encounters-an-error",
    title: "Will I be charged if SIPSTACK encounters an error when sending an SMS?",
    subtitle: "",
    abstract: "",
    created: "7/05/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
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


`
},
{
    slug: "will-sipstack-resize-my-images-for-mms",
    title: "Will SIPSTACK automatically resize my images for MMS messaging?",
    subtitle: "",
    abstract: "",
    created: "07/04/2021",
    updated: "",
    author: {
        name: "Kanasu Nagathihalli",
        picture: "/assets/img/team/kanasu.png",
    },
    content: `
Yes, SIPSTACK will automatically resize supported images file types (.png, .gif, and .jpg) to the necessary size for delivery based on carrier specifications. That said, the total combined request size (message and attachments) must be under 5MB in size. An API request with an image larger than 5MB will fail with an error.

If you prefer to resize your own images, we recommend that images be no larger than 600KB.
`
},]
},
]