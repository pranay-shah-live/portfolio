export type HeroContent = {
  name: string;
  title: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
};

export type IntroductionContent = {
  eyebrow: string;
  paragraphs: string[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ContactContent = {
  email: string;
  phone: string;
  socialLabel: string;
  socialHref: string;
  prompt: string;
};

export const hero: HeroContent = {
  name: 'Pranay Shah',
  title: 'Growth Marketing | Business Development',
  summary:
    'Marketing professional with 9 years of experience in scaling start-ups from 0 to 1 and beyond through integrated marketing, partnerships, sales enablement, content production, and automation.',
  ctaLabel: 'Let’s Talk Business',
  ctaHref: '#contact'
};

export const introduction: IntroductionContent = {
  eyebrow: 'Introduction',
  paragraphs: [
    'I build growth engines that connect brand, revenue, and operational momentum. My work sits at the intersection of marketing strategy, client growth, partnership development, and systems thinking.',
    'Across social impact, education, and performing arts, I have led teams and initiatives that turn early traction into sustainable scale. I care about creating growth that is measurable, repeatable, and aligned with the story a business wants to tell.'
  ]
};

export const stats: StatItem[] = [
  { value: '3x', label: 'Revenue & client growth since 2023' },
  { value: '15+', label: 'Repeat clients onboarded' },
  { value: '3 Cr', label: 'Raised in 3 years for CSR initiatives' },
  { value: '1 Cr', label: 'Annual CSR commitments' },
  { value: '5 Cr', label: 'Sponsorships raised' },
  { value: '25%', label: 'YoY revenue growth achieved' }
];

export const skills: SkillGroup[] = [
  {
    title: 'Content Production',
    items: ['Pre to Post Production', 'Creative Coordination', 'Brand Storytelling']
  },
  {
    title: 'Analytics',
    items: ['GA4', 'Firebase', 'Tableau', 'MixPanel']
  },
  {
    title: 'Marketing Automation',
    items: ['HubSpot', 'Zapier', 'n8n', 'Workflow Design']
  },
  {
    title: 'Business Development',
    items: ['Partnerships', 'Client Servicing', 'Lead Generation', 'Pipeline Building']
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Marketing Head',
    company: 'India Signing Hands',
    period: '2023 - Present',
    summary:
      'Leading business development, partnerships, and client servicing for a social impact organization building accessible content and accessibility solutions for government bodies, media companies, brands, and non-profits.',
    highlights: [
      'Scaled revenue and client growth by approximately 3x since 2023',
      'Onboarded key clients including Google, RBI, HDFC Bank, Axis Bank, JioHotstar, Adani Airports, SonyLIV, and Zee5',
      'Added new revenue streams while strengthening repeat-client retention'
    ]
  },
  {
    role: 'Fundraising Head',
    company: 'Signing Hands Foundation',
    period: '2023 - Present',
    summary:
      'Supporting the NGO arm of India Signing Hands through CSR fundraising, partnerships, and project operations focused on accessibility, education, and assistive technology.',
    highlights: [
      'Raised 3 Cr in 3 years, marking 10x growth',
      'Secured 1 Cr in annual CSR commitments',
      'Built partnerships with 3 Government of India departments'
    ]
  },
  {
    role: 'Sr. Marketing Executive',
    company: 'Shiamak Davar’s Institute for Performing Arts',
    period: '2019 - 2023',
    summary:
      'Led revenue and enrolment growth across a global performing arts network while owning P&L, brand positioning, and social strategy.',
    highlights: [
      'Delivered 25% year-over-year revenue growth',
      'Onboarded 4 additional franchises',
      'Automated the sales and marketing pipeline'
    ]
  },
  {
    role: 'Marketing Manager',
    company: 'Vectorr.in',
    period: '2017 - 2019',
    summary:
      'Built digital presence and customer journey systems from the ground up at an Ed-Tech start-up, while recruiting and leading a sales team.',
    highlights: [
      'Took the start-up from 0 to 2 Cr revenue in 1.5 years',
      'Set up lead generation and sales pipeline operations',
      'Established scalable content and startup processes'
    ]
  }
];

export const contact: ContactContent = {
  email: 'pranay.shah@live.com',
  phone: '+91-7208684826',
  socialLabel: '@pranayshahnotai',
  socialHref: 'https://www.instagram.com/pranayshahnotai/',
  prompt: 'Open to conversations around growth strategy, partnerships, integrated marketing, and mission-driven business building.'
};
