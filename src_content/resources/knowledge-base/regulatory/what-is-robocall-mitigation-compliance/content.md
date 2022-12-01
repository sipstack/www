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

"As of April 20, 2021, the FCC requires that all providers certify in the Robocall Mitigation Database that they have fully implemented STIR/SHAKEN or have instituted a robocall mitigation program to ensure that they are not originating illegal robocalls… Filings in the Robocall Mitigation Database are due June 30, 2021."

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
