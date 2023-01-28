SIPSTACK allows you to send and receive concatenated messages containing up to 1600 characters (as ten separate messages).

## Sending concatenated messages
All Canada and US carriers support the sending of concatenated messages except for US Cellular. 

However, please note that some older handsets may be unable to display concatenated SMS. These devices may still display long SMS as separate segments marked with “1/3”, “2/3” etc.

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