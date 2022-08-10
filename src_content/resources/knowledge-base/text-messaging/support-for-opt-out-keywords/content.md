If a customer responds to a message from a SIPSTACK long code or toll-free phone number with any of the following keywords, they will be opted out from receiving future messages from that number. 

**Keywords: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT**

## How does the opt-out process work?
When SIPSTACK receives any of the above keywords as replies, we will create a block list entry in our database, and then pass the message to your webhook. Once a number is on the block list, any future attempts to message them will be met with a 400 message from our API. Recipients can disable this message and resume receiving messages by entering any of the opt-in keywords. 

Only single-word messages will trigger the block. For example, replying STOP will stop the customer from receiving messages from that particular SIPSTACK number but replying ‘STOP PLEASE’ or ‘PLEASE CANCEL’ will not. 

The block works and is logged even if your number currently has no messaging request URL. The STOP keyword replies will only apply to the most recent number that messaged the recipient. If you are using more than one toll-free or long code phone number to send messages, it is your responsibility to prevent those customers from receiving messages from your other numbers. We recommend universalizing the block list to all your numbers. 

## Short Codes
SIPSTACK does not offer short code SMS/MMS numbers, and therefore, cannot support any customization of an opt-out keyword on short code messages. 

**Notice:** Text message campaigns may be subject to various legal compliance requirements depending on the nature of your text messaging campaign, the location from where you are sending your text messages, and the location of your recipients. While SIPSTACK will handle the above-described messages on long codes and toll-free numbers in the way described in this article, you should consult with your legal counsel to ensure that your text messaging campaign conforms to all applicable legal compliance requirements.

If you have further questions on this, please contact [SIPSTACK Support](https://www.sipstack.com/contact/us).