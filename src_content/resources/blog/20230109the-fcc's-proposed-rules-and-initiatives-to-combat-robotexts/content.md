The FCC recently sought comment on proposed rules to prevent illegal robotexts. 

In their NPR, the commission proposed a mandate to block text messages from invalid, unallocated, or unused numbers, as well as numbers that are on a reasonable Do-Not-Originate (DNO) list.

The NPR also wondered if spoofing was a problem and whether call authentication [(STIR/SHAKEN)](https://www.sipstack.com/resources/knowledge-base/regulatory/what-is-stir-shaken) should be used to authenticate the texting source. There were, however, discrepancies on the term “spoofing”, as it specifically pertains to both robocalls and robotexts. 

## Spoofing in Robocalls vs. Robotexts

In robocalls, [spoofing](https://www.sipstack.com/resources/knowledge-base/general/what-is-call-spoofing) refers to the altering of either the Caller ID (CID) phone number or Caller Name [(CNAM)](https://www.sipstack.com/resources/knowledge-base/general/what-is-cnam) displayed to the person receiving the call. 

In robotexts, as described in ATIS-1000081, spoofing is when a robotexter sends a text message that impersonates another entity or organization. However, SMS technology does not allow the robotexter to put another phone number in the calling number information other than their own, making STIR/SHAKEN unnecessary in solving the spoofing problem in robotexts. 

## Initiatives
Although the NPR indicates that STIR/SHAKEN standards do not currently support text messages, they do say that further work on standards for text messages is underway, citing an IETF draft, [Messaging Use Cases and Extensions for STIR](<a href=“https://datatracker.ietf.org/doc/draft-ietf-stir-messaging/"target="_blank">https://datatracker.ietf.org/doc/draft-ietf-stir-messaging/ </a>.).  This draft describes how STIR’s Personal Assertion Token (PASSporT) could be applied to text and multimedia messaging systems that use telephone numbers as the identity of the sender.

There is also an initiative underway in the ATIS IPNNI group to develop a technical report on the SMS Unwanted Message Mitigation Landscape. This initiative states that it is… “intended to document the current landscape of unwanted text delivery techniques and service provider countermeasures to serve as a basis for future discussion. While it describes perceived gaps, it does not attempt to design new mitigation solutions.”

## How SIPSTACK Fights Fraud

Using the latest technology and machine learning, SIPSTACK's systems authenticate all activity in real time against variables that affect your security. When a carrier implements SIPSTACK's Risk Rating Score, they are able to customize a threshold for calls to pass through, based on their specific needs. At SIPSTACK we take an active role in ensuring we are building a secure and connected tomorrow. [Contact us](https://www.sipstack.com/contact/us) today to learn how you can protect yourself from spam.
