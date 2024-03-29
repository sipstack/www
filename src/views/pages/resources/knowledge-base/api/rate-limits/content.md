## What is a Rate Limit?

A “rate limit” is a policy that affects the frequency with which an API can be called. They are put in place to protect server infrastructure from being abused or misused. SIPSTACK employs rate limits to enable consistent load allocation with our platform.

## Applying Rate Limits

SIPSTACK assigns API requests into four different policies where each policy is restricted to a different rate limit. This allows SIPSTACK to optimize and distribute load across the platform to better secure and protect it. The four policies are described in Table 1 below:

| API Policy | Rate Limit         | Throttle Level |
| ---------- | ------------------ | -------------- |
| Light      | 50 requests/minute | 60 seconds     |
| Medium     | 40 requests/minute | 60 seconds     |
| Heavy      | 10 requests/minute | 60 seconds     |
| Auth       | 5 requests/minute  | 0 seconds      |

<sup>_Table 1_</sup>

Within the above presented limits, your API requests are allowed to send 10 heavy, 40 medium, 50 light and 5 authorization requests per user / per minute. If you exceed these limits, the server returns the ‘429 Too Many Requests’ HTTP error code. It means that the client is throttled by the server due to the high request rate. The retry period (in seconds) after which more requests can be sent, is specified in Retry-After response header.

How best to detect and respond to rate limits

Rate Limits are returned in specific headers in response to each request, unless the request is unlimited. Those headers are:

| Header                 | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| X-Rate-Limit-Policy    | API category of the given request (Light, Medium, Heavy, Auth)                |
| X-Rate-Limit-Limit     | Current rate limit for the given request                                      |
| X-Rate-Limit-Remaining | The number of requests left for the time interval (window) of this rate limit |
| X-Rate-Limit-Window    | Time interval in seconds for the given request rate limit                     |

<sup>_Table 2_</sup>

These headers are returned in order to enable apps to preemptively respond to circumstances in which their requests may be impacted by a rate limit enforcement.

<pre class="bg-body-tertiary">

HTTP/1.1 200 OK
X-Rate-Limit-Policy: light

X-Rate-Limit-Limit: 1000
X-Rate-Limit-Remaining: 999
X-Rate-Limit-Window: 60
Content-Language: en-US

Content-Type: application/json; charset=UTF-8

{
    "meta" : {},
    "data: {},
    "link" : {}
}
</pre>

## What to do when your requests hit a rate limit?

Consider the following two use cases in which you might hit a rate limit.

1.  Simple single-threaded use case - If you encounter a HTTP Response Header X-Rate-Limit-Remaining that reaches 0, then wait the number of seconds defined in X-Rate-Limit-Window HTTP Response Header. - If you encounter a HTTP Response Status code of 429, wait the number of seconds defined in the Retry-After HTTP Response header.
    If X-Rate-Limit-Remaining is working properly, your app should never encounter a 429 error, which is desirable. In other words, if you build your app to be aware of this HTTP header and to respond accordingly, you can prevent your app from being impacted, or at least alert SIPSTACK about the issue.

2.  Server is overloaded
    If you encounter a HTTP Response Header 503, wait a default amount of time and retry once. Then have your app support the following configuration options:

    - Default retry time
    - Max number of retries
