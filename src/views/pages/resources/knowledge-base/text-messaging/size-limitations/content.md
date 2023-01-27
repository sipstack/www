
1600 characters take 4.8KB of space, which accounts for roughly 1% of the message size limit. However, please note that some special (non-GSM) characters are counted as more than one character, which affects both character count and message size. 

## How SIPSTACK handles messages with non-GSM characters
If a deprecated SMS includes more than one non-GSM character, SIPSTACK will cap the limit of the SMS at 70 characters. If you want your SMS to be received without being split, please ensure that it is free of any non-GSM characters by using a third-party checker