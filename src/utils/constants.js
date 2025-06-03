// Company Information
export const COMPANY_INFO = {
  name: 'KON Sun Energy Solutions',
  tagline: 'Rooftop solar made simple. We don\'t just sell solar — we give you peace of mind.',
  phone: '9600 13 0810',
  email: 'tellus@konsunenergy.in',
  adminEmail: 'kon.thesunenergysolutions@gmail.com',
  whatsapp: '919600130810',
  address: 'NAVANEETHAN NILAYAM 02/192 Chennai - 600023',
  location: 'Tamil Nadu, India',
  proudlyFrom: 'Proudly FROM TAMIL NADU & TAMIL BRAINS ❤️'
}

// Navigation Menu Items
export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About Us', path: '/about', id: 'about' },
  { name: 'Services', path: '/services', id: 'services' },
  { name: 'Contact', path: '/contact', id: 'contact' }
]

// Service Types
export const SERVICE_TYPES = {
  residential: {
    id: 'residential',
    name: 'Homes',
    title: 'Residential Solar',
    description: 'Solar solutions for individual homes and residential properties',
    icon: 'home',
    features: [
      'Reduced electricity bills',
      'Energy independence',
      'Increased property value',
      'Environmental benefits'
    ]
  },
  commercial: {
    id: 'commercial',
    name: 'Commercial',
    title: 'Commercial Solar',
    description: 'Solar solutions for businesses, offices, and commercial establishments',
    icon: 'building',
    features: [
      'Lower operational costs',
      'Tax benefits',
      'Corporate sustainability',
      'Long-term savings'
    ]
  },
  housingSociety: {
    id: 'housing-society',
    name: 'Housing Society',
    title: 'Housing Society Solar',
    description: 'Solar solutions for apartment complexes and housing societies',
    icon: 'buildings',
    features: [
      'Community benefits',
      'Shared cost reduction',
      'Common area power',
      'Collective savings'
    ]
  }
}

// Solar Panel Types
export const SOLAR_PANEL_TYPES = [
  {
    id: 'on-grid',
    name: 'On-Grid Solar',
    description: 'Connected to the electricity grid with net metering benefits',
    benefits: [
      'Net metering facility',
      'Lower initial investment',
      'Grid backup available',
      'Sell excess power'
    ]
  },
  {
    id: 'off-grid',
    name: 'Off-Grid Solar',
    description: 'Independent solar system with battery storage',
    benefits: [
      'Complete energy independence',
      'Battery backup included',
      'No dependency on grid',
      'Perfect for remote locations'
    ]
  }
]

// Monthly Bill Ranges
export const MONTHLY_BILL_RANGES = [
  { value: 'less-than-1500', label: 'Less than ₹1,500', min: 0, max: 1500 },
  { value: '1500-2500', label: '₹1,500 - ₹2,500', min: 1500, max: 2500 },
  { value: '2500-4000', label: '₹2,500 - ₹4,000', min: 2500, max: 4000 },
  { value: '4000-8000', label: '₹4,000 - ₹8,000', min: 4000, max: 8000 },
  { value: 'more-than-8000', label: 'More than ₹8,000', min: 8000, max: null }
]

// Social Media Links
export const SOCIAL_MEDIA = {
  whatsapp: {
    name: 'WhatsApp',
    url: `https://wa.me/${COMPANY_INFO.whatsapp}`,
    icon: 'whatsapp',
    channel: 'https://whatsapp.com/channel/your-channel-id'
  },
  telegram: {
    name: 'Telegram',
    url: 'https://t.me/your-telegram-channel',
    icon: 'telegram',
    channel: 'https://t.me/your-telegram-channel'
  },
  youtube: {
    name: 'YouTube',
    url: 'https://youtube.com/@your-channel',
    icon: 'youtube'
  },
  instagram: {
    name: 'Instagram',
    url: 'https://instagram.com/your-instagram',
    icon: 'instagram'
  },
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/your-facebook-page',
    icon: 'facebook'
  }
}

// Government Schemes and Benefits
export const GOVERNMENT_SCHEMES = [
  {
    id: 'tn-solar-subsidy',
    name: 'Tamil Nadu Solar Subsidy',
    description: 'Chief Minister\'s Solar Rooftop Capital Incentive Scheme',
    benefit: '₹20,000 per kilowatt subsidy',
    authority: 'Tamil Nadu Government'
  },
  {
    id: 'mnre-subsidy',
    name: 'MNRE Central Subsidy',
    description: 'Ministry of New and Renewable Energy subsidy',
    benefit: '30% capital subsidy',
    authority: 'Government of India'
  },
  {
    id: 'net-metering',
    name: 'Net Metering Benefits',
    description: 'Sell excess power back to the grid',
    benefit: 'Reduced electricity bills',
    authority: 'TNEB'
  }
]

// FAQ Data
export const FAQ_DATA = [
  {
    id: 1,
    question: 'How much can I save with solar panels?',
    answer: 'Solar panels can reduce your electricity bills by 50-90% depending on your consumption and system size. With net metering, you can even earn money by selling excess power back to the grid.'
  },
  {
    id: 2,
    question: 'What is the payback period for solar investment?',
    answer: 'Typically, solar systems pay for themselves in 3-5 years through savings on electricity bills. After that, you enjoy free electricity for the remaining 20+ years of the system\'s life.'
  },
  {
    id: 3,
    question: 'Do solar panels work during cloudy days?',
    answer: 'Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency. On-grid systems ensure continuous power supply through grid connection.'
  },
  {
    id: 4,
    question: 'What maintenance is required for solar panels?',
    answer: 'Solar panels require minimal maintenance - occasional cleaning and annual professional inspection. We provide comprehensive maintenance services for all our installations.'
  },
  {
    id: 5,
    question: 'How long do solar panels last?',
    answer: 'High-quality solar panels come with 25-year warranties and can last 30+ years. Our panels maintain 80% efficiency even after 25 years of operation.'
  }
]

// Project Timeline
export const PROJECT_TIMELINE = {
  minDays: 45,
  maxDays: 90,
  phases: [
    { phase: 'Site Survey', duration: '1-2 days', description: 'Technical assessment and design' },
    { phase: 'Documentation', duration: '7-10 days', description: 'Permits and approvals' },
    { phase: 'Installation', duration: '2-5 days', description: 'Panel installation and setup' },
    { phase: 'Commissioning', duration: '3-7 days', description: 'Grid connection and testing' }
  ]
}

// Contact Form Fields
export const CONTACT_FORM_FIELDS = {
  fullName: {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your full name'
  },
  whatsappNumber: {
    name: 'whatsappNumber',
    label: 'WhatsApp Number',
    type: 'tel',
    required: true,
    placeholder: 'Enter your WhatsApp number'
  },
  pinCode: {
    name: 'pinCode',
    label: 'Pin Code',
    type: 'text',
    required: true,
    placeholder: 'Enter your area pin code'
  },
  monthlyBill: {
    name: 'monthlyBill',
    label: 'What is your average monthly bill?',
    type: 'select',
    required: true,
    options: MONTHLY_BILL_RANGES
  },
  serviceType: {
    name: 'serviceType',
    label: 'Service Type',
    type: 'radio',
    required: true,
    options: [
      { value: 'residential', label: 'Residential' },
      { value: 'commercial', label: 'Commercial' },
      { value: 'housing-society', label: 'Housing Society' }
    ]
  }
}

// Terms and Policies
export const TERMS_AND_POLICIES = {
  refundPolicy: 'The advance payment is non-refundable under any circumstances.',
  shippingPolicy: 'The project timeline ranges from 45 to 90 days, with no dependencies that could cause delays. However, in the event of unforeseen delays, the timeline may be extended. Customers will be promptly notified of any such extensions.',
  privacyNotice: 'By registering yourself with us you authorize us to contact you via email/phone call, WhatsApp or SMS and offer you our services, imparting product knowledge, offer promotional offers running on the website, irrespective of the fact if also you have registered yourself under DND or DNC or NCPR service, you still authorize us to give you a call from KON sun energy Solutions for the above-mentioned purposes.'
}

// Admin Credentials (Note: In production, these should be environment variables)
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'Admin@prclass123'
}

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  base: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  consultation: '/consultation',
  contact: '/contact',
  newsletter: '/newsletter'
}

// SEO Meta Data
export const SEO_DATA = {
  home: {
    title: 'KON Sun Energy Solutions - Solar Panel Installation in Tamil Nadu',
    description: 'Professional solar panel installation services in Tamil Nadu. Get free consultation for residential, commercial & housing society solar solutions. Save up to 90% on electricity bills.',
    keywords: 'solar panels, Tamil Nadu, Chennai, solar installation, renewable energy, electricity savings'
  },
  about: {
    title: 'About KON Sun Energy Solutions - Solar Experts in Tamil Nadu',
    description: 'Leading solar energy company in Tamil Nadu with expertise in residential and commercial solar installations. Proudly serving Tamil Nadu with quality solar solutions.',
    keywords: 'solar company, Tamil Nadu solar experts, solar installation company'
  },
  services: {
    title: 'Solar Panel Services - Residential & Commercial Solar Solutions',
    description: 'Complete solar panel services including on-grid, off-grid systems for homes, businesses, and housing societies. Get government subsidies and net metering benefits.',
    keywords: 'solar services, on-grid solar, off-grid solar, net metering, solar subsidy'
  },
  contact: {
    title: 'Contact KON Sun Energy Solutions - Free Solar Consultation',
    description: 'Get free solar consultation and quotes. Contact us at 9600 13 0810 or visit our Chennai office. Professional solar installation services across Tamil Nadu.',
    keywords: 'solar consultation, contact solar company, Chennai solar installer'
  }
}