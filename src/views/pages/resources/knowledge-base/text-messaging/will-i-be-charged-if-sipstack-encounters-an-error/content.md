SIPSTACK will not charge you for a message if your API request returns an HTTP error, or if the message status on SIPSTACK is “failed.” SIPSTACK will charge you for messages where delivery was attempted. Read on for details.

## Delivery Attempts
SIPSTACK will charge you for a message if delivery was attempted, i.e. the message status is “sent,” “delivered,” “undelivered,” or “delivery unknown.” 

In some cases, messages may be sent from SIPSTACK to the carrier, but are not received at the end user’s handset. 

## API-level errors (HTTP response errors)
If you make an API request to SIPSTACK to send a message, and SIPSTACK returns an HTTP response error (for example, an HTTP 400), this means that SIPSTACK was unable to process your request. You will not be charged for failed API requests.

API requests to SIPSTACK may fail for a variety of reasons, usually because of an error in your API request. A few examples of API-level errors include: 

- An invalid ‘To’ number,
- SMS Geo-Permissions for the country you’re attempting to send messages to is not enabled, and
- An attempt to send messages to a user who has opted out of receiving messages from you.

## “Failed” messages
A message that is marked with the status “failed” did not leave SIPSTACK and you will not be charged. “Failed” messages can happen for various reasons including queue overflows, account suspensions and media errors (in the case of MMS).

## A note about WhatsApp and other non-SMS channels
Messaging channels other than SMS and MMS may have slightly different billing behavior. For example, undelivered WhatsApp messages are not charged.

