When sending Toll-Free SMS messages, it is important to remember that Opt-out and Opt-in (STOP and START) keywords are handled differently.

Toll-Free SMS numbers have a layer of opt-out handling outside of SIPSTACK that cannot be removed or customized. When an end user texts the word STOP to your toll-free number, the user will be opted-out of further messaging from your number, and will receive this auto-reply:

NETWORK MSG: You replied with the word “stop” which blocks all texts sent from this number. Text back “unstop” to receive messages again.

If the end user then sends the word START or UNSTOP, they will be opted back in to receive messaging from your number, and will receive this auto-reply:

NETWORK MSG: You have replied “unstop” and will begin receiving messages again from this number.

