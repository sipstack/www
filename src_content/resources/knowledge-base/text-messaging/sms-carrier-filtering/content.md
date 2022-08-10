Please note that SIPSTACK also filters messages that violate our [Acceptable Use Policy](https://sipstack.com/aup).

Historically, [Application-to-person (A2P)]((http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-and-p2p-messaging)) type messaging could not be sent using 10-digit long code phone numbers in Canada and US. 

As of March 2021, US. wireless carriers, Verizon and AT&T treat long code numbers as a valid A2P channel. At this time, none of the Canadian wireless networks have introduced A2P 10DLC solutions. They may, however, change in the future. SIPSTACK will keep you updated as these regulations change. For more information on the A2P 10DLC regulation, please see [What is A2P 10DLC](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a2p-10dlc).

## Filtering mechanisms
Message filtering is applied by two parties — the wireless carrier and SIPSTACK. 

## Filtering by wireless carriers
Wireless carriers in Canada and US. apply message filtering for two reasons. First, carriers filter messages to protect mobile subscribers from spam and other forms of unwanted messaging. Secondly, many carriers apply filtering in order to detect and block A2P traffic that is being sent via long code phone numbers.

Carriers in Canada and US. use adaptive (machine learning) software systems to filter messages. These systems look at both message content and volume, and behave very much like email filtering systems. Messages receive a cumulative score based on the following factors: 

- How many messages have come from a phone number during a certain time period, and
- How many similar messages have been transmitted over the carrier’s network (in other words, do the message contents resemble known spam or unwanted messages).

In SIPSTACK’s experience, high opt-out rates and end user complaints also play a major role in carrier filtering. Because of this, the best thing to do to reduce the risk of filtering is to closely adhere to SIPSTACK’s [Acceptable Use Policy](https://sipstack.com/aup), in particular as they relate to user opt-in and opt-out policies.

Carriers in Canada and US. usually report to SIPSTACK when a message has been filtered. If you suddenly see that a large number of your messages are resulting in a status of ‘Undelivered’ with a 30007 error, the carrier’s filtering system has probably recently identified a pattern in your messages that triggered a block.

## Filtering by SIPSTACK
SIPSTACK uses filtering to target messaging that is in violation of our Acceptable Use Policy. SIPSTACK’s goal is to protect mobile users from fraud, spam, and other forms of unwanted messaging, as well as to comply with rules and regulations imposed by carriers and regulators.

SIPSTACK’s filtering systems are designed to allow A2P messaging. Filtering by SIPSTACK is unlikely as long as your recipients have provided consent to receive your messages, and are not raising spam complaints or sending a high amount of opt-out (“STOP”) replies.

## Avoiding Carrier Filtering
First, ensure you are closely adhering to the rules in SIPSTACK’s [Acceptable Use Policy](https://sipstack.com/aup). For example, ensure you only send messages to recipients who have provided explicit opt-in consent to receive messages from you. This greatly reduces the risk of complaints and opt-outs that lead to filtering.

In addition, ensure that your first message to a recipient always includes a phrase telling the user how to opt-out, e.g. “Reply STOP to unsubscribe.” Certain keywords including STOP are automatically handled by SIPSTACK by default.

## Unblocking Your Number
If you think your SIPSTACK number or message contents may have been blocked by a carrier, here’s what you can do to get your number unblocked:

If you believe your messages are compliant with SIPSTACK and carrier policies, please collect 3 or more examples of [Message SSIDs](http://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid) that have the “undelivered” status with error 30007, and then contact our [Support team](https://www.sipstack.com/contact/us).

Most carrier block lists in Canada and US. use a “cooling off” period, which means that the numbers will automatically be removed from the block list after a period of time. The time period may vary, and carriers do not share this information with SIPSTACK. If your message bodies do not also change, carriers’ content filtering systems will continue blocking your messages.

As of March 2021, the filtering landscape in the US. is rapidly changing. AT&T and Verizon will accept appeals when “false positive” filtering seems to be occurring, and will review and potentially unblock these cases. T-Mobile is not currently accepting appeals of filtered traffic, but this is expected to change in the near future with the rollout of T-Mobile’s A2P 10DLC solution (details to be announced).

## Getting Pre-Approved to Avoid Filtering: Currently Unavailable in Canada and US.
Canada and US. carriers do not currently pre-approve messages from long code numbers. Short code numbers, on the other hand, are allowed for specific traffic types, and filtering is unlikely as long as you adhere to your stated use case and follow opt-in and opt-out rules. In addition, toll-free SMS can be verified through SIPSTACK to proactively reduce the risk of filtering on approved use cases.