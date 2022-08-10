SIPSTACK API has basic phone number validation logic built into it. We try to save you money by rejecting messages to numbers we are certain are incorrect. However, we trust that our users know more about the phone number they are trying to send a message to than we do. Our validation logic will only affect numbers which are unquestionably incorrect. It is your responsibility to provide accurate data.

## Is the recipient’s phone number reachable?
When you make a  POST request to SIPSTACK’s REST API, SIPSTACK will check the validity of the “To” phone number in the request. If SIPSTACK discovers that the “To” phone number provided cannot possibly exist, SIPSTACK will respond to your API request with an HTTP 400 response and flag your project with Error 21211. If there is a possibility that the phone number exists, SIPSTACK will hand the message off to the carrier, and the message will be recorded in the SMS logs with a status of queued.

## Is the recipient’s phone number a mobile number?
Depending on the country, SIPSTACK may do an extra check to confirm that the “To” number is capable of receiving SMS messages.

#### Countries with a defined Mobile Range
Most countries have a well-defined “mobile range”. Numbers within this range are almost always mobile numbers. When a request is made to send an SMS to a number outside of this range, SIPSTACK will respond with a 400 and Error 21614.

#### Countries without a defined Mobile Range
In countries without a “mobile range” like Canada, U.S. and most Caribbean nations, there is currently not a reliable way to determine if a phone number is a mobile number or not. SIPSTACK will attempt to send SMS messages to any phone number which is provided in these countries.

## Best Practices when sending an SMS using SIPSTACK API
We recommend that you collect the phone type during your opt-in process. You should only be sending SMS messages to opted-in users who want to receive your messages.