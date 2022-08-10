When you attempt to send an MMS message from a SIPSTACK MMS-enabled number to a recipient on a carrier that does not support MMS, SIPSTACK will convert the message to an SMS with a short URL linking to your media. This includes both international carriers as well as unsupported carriers in Canada and the US. These messages will be charged for the cost of the SMS message instead of an MMS. The message will still have a unique [SSID](https://www.sipstack.com/resources/knowledge-base/text-messaging/what-is-a-message-ssid).

This feature is called MMS Converter, and is enabled by default.

When disabled, SIPSTACK will no longer convert your MMS messages into SMS text messages. Instead, your application will receive a HTTP 400 response when attempting to send MMS messages to unsupported carriers.

