// import type { PostItem } from "/@src/components/advanced/blog/blog-grid-item/BlogGridItem.vue";
import type { IconFeature } from '/@src/types'

export const pageLinks = [
  {
    label: 'Overview',
    target: 'overview',
  },
  {
    label: 'Features',
    target: 'features',
  },
  {
    label: 'Pricing',
    target: 'pricing',
  },

  {
    label: 'FAQs',
    target: 'faqs',
  },
]

export const features: IconFeature[] = [
  {
    title: 'Simple text response',
    text: 'Returns a 20-character string response including a prefixed score followed by caller name.',
    color: 'purple',
    icon: 'iconoir:text',
    link: '/',
  },
  {
    title: 'Advanced JSON response',
    text: 'When more details are required, JSON responses can be returned with rich data sets.',
    color: 'purple',
    icon: 'iconoir:code-brackets',
    link: '/',
  },
]

// export const pricing = {
// 	features: ["Unlimited projects", "Desktop and mobile app", "Unlimited tasks", "Email integration", "Unlimited time records"],
// 	price: 0,
// };

export const faq = {
  left: [
    {
      title: 'How does it differ from regular CNAM lookup tools?',
      content:
        'Smart CNAM is a next generation lookup tool. Smart CNAM goes way beyond just a name response and can include a tremendous amount of information when requested.',
    },
    {
      title: 'What payment methods are accepted?',
      content:
        'Credit cards issued by Visa, MasterCard, or American Express, Electronic Funds Transfer (EFT), Wire Transfer (for qualifying customers) or Cheque',
    },
    {
      title: 'Do I need a credit card to sign up?',
      content: 'Yes, a valid credit card is required.',
    },
    {
      title: 'Will I receive an invoice?',
      content:
        'Yes, an invoice is issued on the 1st day of the month with the previous month’s subscription fee and usage. When you join during a month the subscription fee invoiced on the 1st of the month will be for the full subscription amount.',
    },
    {
      title: 'How do included monthly API requests get allotted?',
      content:
        'At the beginning of every month, your allotted API requests for that month are based on your subscription. If you exceed the allotted requests, each additional request will be charged at the rate based on your subscription and volume. My subscription did not start on the first day of the month, how do included monthly API requests get allotted now? Even though you start during the month your allotted API requests are still based on the API’s per the subscription. If you exceed the allotted requests, each additional request will be charged at the rate based on your subscription and volume. In the event, you hardly used your allocation limit contact billing@sipstack.com and request an adjustment to your subscription fee.',
    },
    {
      title: 'How do included monthly API requests get allotted?',
      content:
        'At the beginning of every month, your allotted API requests for that month are based on your subscription. If you exceed the allotted requests, each additional request will be charged at the rate based on your subscription and volume. My subscription did not start on the first day of the month, how do included monthly API requests get allotted now? Even though you start during the month your allotted API requests are still based on the API’s per the subscription. If you exceed the allotted requests, each additional request will be charged at the rate based on your subscription and volume. In the event, you hardly used your allocation limit contact billing@sipstack.com and request an adjustment to your subscription fee.',
    },
    {
      title: 'Is there a usage limit beyond my allotted API requests?',
      content:
        'Yes and No. You can go over your allotted API requests, however, once you exceed your designated credit limit, you will no longer be able to make additional requests unless you upgrade to a higher plan or contact billing@sipstack.com and authorize them to take an additional payment (specify the amount) from your credit card.',
    },
    {
      title: 'What is my credit limit?',
      content:
        'In the beginning until there is a history on the account the credit limit will be twice your subscription fee. In other words, once the number of API requests meet twice the API requests of your subscription no further API requests will be processed. We are doing this so that you are not surprised at the end of the month with a larger than expected invoice. It is important to sign up knowing the number of API requests in your system each month to avoid constantly exceeding your credit limit. However, if you want to test our system with a lower subscription fee this is okay, but you need to remember that when you see your API requests approaching double the subscription amount then you might want to upgrade to a higher or contact billing@sipstack.com to authorize a payment from your credit card to keep the requests flowing or wait until next month to resume your requests. For customers with more than 2,000,000 monthly API requests please contact billing@sipstack.com. After a history is established the credit limit will be based on several factors such as your current subscription, your cumulative spend with SIPSTACK and longevity of your account.',
    },
  ],
  right: [
    {
      title: 'How is sales tax applied?',
      content:
        'If you are a Canadian based company then sales tax will be applied to each of your transactions. At the moment, companies outside of Canada do not get charged sales tax.',
    },
    {
      title: 'Why some people receive different scores?',
      content:
        'Depending on many factors, our AI/ML will determine the distance between callers, how often a caller makes calls to those regions or numbers just to list a few that makeup the learning conditions. Call rating will always be dynamic.',
    },
    {
      title: 'Why is a caller suddenly receiving lower scores?',
      content:
        'If the same number is calling the same destination and the score changes dramatically, this could indicate that abnormal or fraudulent call behaviours have been suspected and community feedback has been verified. Scoring is adaptive and much like turning on any new system, there is a warm up phase.',
    },
    {
      title: 'Are there any limitations?',
      content:
        'Yes, please read through our Terms of Service, Acceptable Use Policy and our API Rate limits from our Resource center.',
    },
    {
      title: 'My API requests are not going through?',
      content:
        'You may have reached your credit limit. If your account has been paid and you have not exceeded your credit limit and API requests are not being processed contact Support. If you feel there has been a mistake, please contact billing@sipstack.com.',
    },
    {
      title: 'How accurate is the information returned?',
      content:
        'Very accurate! Our AI/ML is constantly learning and adapting ensuring that caller information is up to date, and any meta data such as websites, emails, social, etc... are all current. Caller badges indicate call details are verified, however call ratings will always be dynamic.',
    },
    {
      title: 'What is the difference between a Partner & Vertical?',
      content:
        'Partners are typically telecom related entities that integrate Smart CNAM into their call flows. API requests are typically sent with a destination phone number in order to return an accurate dynamic call score. While Vertical markets may not have a destination number to provide however, may wish to receive caller information. They can do so without a destination number for a minimial cost. Our AI/ML is enhanced by Partner integrations which contribute to hyper accurate realtime call ratings.',
    },
  ],
}

export const cta = {
  title: 'Smarter CNAM Begins Here',
  //subtitle: 'Credit card not required to sign up.',//
}
