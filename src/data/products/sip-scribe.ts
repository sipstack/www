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

export const timeline = [
  {
    icon: 'iconoir:add-user',
    title: 'Create your account',
    text: 'Sign up and confirm your email by following the sign-up wizard.',
  },
  {
    icon: 'iconoir:ip-address',
    title: 'Authorize your hosts',
    text: 'Enable each of your hosts by authorizing their IP address, then add to your routes.',
  },
  {
    icon: 'iconoir:password-cursor',
    title: 'Authorize your DIDs',
    text: 'Submit your phone numbers in bulk or integrate via API to add additional layer of call security.',
  },
  {
    icon: 'iconoir:phone',
    title: 'Let the calls begin',
    text: 'Enjoy free SIP calls with advanced call detail reporting from the partner portal.',
  },
]

export const features: IconFeature[] = [
  {
    title: 'Voicemails',
    text: 'Transcribe voicemails and send them in emails.',
    color: 'purple',
    icon: 'iconoir:three-stars',
    link: '/',
  },

  {
    title: 'Call recordings',
    text: 'Transcribe recorded calls to add enhanced user experience to customers.',
    color: 'purple',
    icon: 'iconoir:google-docs',
    link: '/',
  },
]

export const pricing = {
  features: [
    'Unlimited calls',
    'Unlimited minutes',
    'Premium tier',
    'Support ULAW, G729, G722 & T.38*',
    'Enhanced CDR reports',
  ],
  price: 0,
  pricePer: 'per minute',
}

export const faq = {
  left: [
    {
      title: 'Why is this product free?',
      content:
        'As a data science through telecom company, we offer products that drive data into our AI/ML learning models to help us achieve our primary goals, making a safer connected tomorrow.',
    },
    {
      title: 'How does caller driven data help SIPSTACK?',
      content:
        'Learning more about traffic patterns provide our AI/ML added insight into our dynamic call rating system when providing a call score.',
    },
    {
      title: 'Do my calls have to originate from US or Canada?',
      content:
        'No, you can add SIP Free in your product and originate calls from everywhere as long as the original caller ID number has been authorized on your account. Please see our Terms of Service, Acceptable Use Policy for more details.',
    },
  ],
  right: [
    {
      title: 'Is there an API to automate DID authorization?',
      content:
        "Yes, from the SIP Free section of the partner portal, links to our API reference pages will help you integrate adding, modifying and removing phone numbers / DID's from your authorized pool.",
    },
    {
      title: 'Is there a concurrent call limit?',
      content:
        'No, while there is no concurrent call limit, there are call limits per minute. Please see our resource center for call limits for more details.',
    },
    {
      title: 'Is there a call duration limit?',
      content:
        'Yes, while these are usually never required, we terminate calls at the 8 hour mark. This is really for stale channels or calls to help prevent incorrect call lengths on a call disconnect without proper SIP completions.',
    },
  ],
}

export const cta = {
  title: 'Voice to text transcription just got easier',
  subtitle: 'Credit card not required to sign up.',
}
