import type { NavItem } from '../types/lcac';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', pageKey: 'home' },
  { label: 'About Us', path: '/about', pageKey: 'about' },
  { label: 'Programmes', path: '/programmes', pageKey: 'programmes' },
  { label: 'Our Impact', path: '/impact', pageKey: 'impact' },
  { label: 'Gallery', path: '/gallery', pageKey: 'gallery' },
  { label: 'News & Events', path: '/news', pageKey: 'news' },
  { label: 'Partnerships', path: '/partnerships', pageKey: 'partnerships' },
  { label: 'Contact', path: '/contact', pageKey: 'contact' },
];

export const INSTITUTIONAL_IDENTITY = {
  name: 'Lilongwe Centre for Arts and Craft',
  abbreviation: 'LCAC',
  location: 'Mtandire Township, Lilongwe, Malawi',
  statusNotice:
    'Proposed Community Institution — LCAC is currently in its establishment and planning phase. Figures, curricula, and facilities presented on this website reflect the proposed institutional concept.',
  tagline: 'Transforming Lives Through Creative Skills Development and Opportunity.',
  vision:
    "To become Malawi's leading community arts and creative skills centre that transforms disadvantaged youth into innovative artists, entrepreneurs and community leaders.",
  mission:
    'To empower vulnerable youth through creative arts education, entrepreneurship, mentorship and cultural preservation that create sustainable livelihoods and stronger communities.',
  overallGoal:
    'To establish an inclusive community creative skills hub in Mtandire Township that equips disadvantaged young people aged 15–35 with practical artistic training, enterprise capability, and pathways to dignified employment and self-employment.',
  coreValues: [
    {
      title: 'Creativity',
      description: 'Nurturing original expression, curiosity, and artistic exploration across traditional and contemporary forms.',
    },
    {
      title: 'Excellence',
      description: 'Upholding high standards of craftsmanship, design quality, and professional readiness.',
    },
    {
      title: 'Inclusion',
      description: 'Creating safe, welcoming pathways for out-of-school youth, young mothers, and young people with disabilities.',
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency, accountability, and stewardship in every community and partner relationship.',
    },
    {
      title: 'Innovation',
      description: 'Connecting Malawian heritage craft with modern design thinking, digital tools, and sustainable materials.',
    },
    {
      title: 'Cultural Heritage',
      description: 'Preserving, documenting, and revitalising indigenous Malawian artistic traditions for new generations.',
    },
    {
      title: 'Empowerment',
      description: 'Equipping young people with confidence, agency, and practical skills to shape their own futures.',
    },
    {
      title: 'Community Service',
      description: 'Strengthening social cohesion and neighbourhood pride within Mtandire Township and wider Lilongwe.',
    },
    {
      title: 'Sustainability',
      description: 'Promoting eco-conscious production, circular material use, and financially resilient youth-led enterprises.',
    },
  ],
  challengesAddressed: [
    'Youth unemployment',
    'Poverty',
    'Drug and substance abuse',
    'Crime',
    'School dropout',
    'Teenage pregnancies and early marriages',
    'Gender-based violence',
    'Lack of employable skills',
    'Limited access to business opportunities',
  ],
  specificObjectives: [
    'Deliver structured, practice-oriented training across 14 traditional, design, digital, and performing arts disciplines.',
    'Integrate entrepreneurship, pricing, branding, and financial literacy into every creative training pathway.',
    'Provide holistic life skills education addressing leadership, personal wellbeing, civic responsibility, and gender equality.',
    'Establish a dedicated Innovation Hub for product experimentation, prototyping, mentorship, and design competitions.',
    'Support emerging youth enterprises through business incubation, cooperative formation, and market linkages.',
    'Preserve and elevate Malawian cultural crafts while expanding participation in local, tourism, and export creative economies.',
  ],
  targetBeneficiaries: [
    {
      group: 'Youth Aged 15–35',
      detail: 'Primary focus on vulnerable and economically disadvantaged young women and men in Mtandire Township and surrounding Lilongwe communities.',
    },
    {
      group: 'School Dropouts & Unemployed Youth',
      detail: 'Young people seeking practical, hands-on vocational skills outside conventional academic pathways.',
    },
    {
      group: 'Young Mothers',
      detail: 'Supportive, flexible creative and enterprise training to foster economic independence and household stability.',
    },
    {
      group: 'People with Disabilities',
      detail: 'Accessible studio participation and adapted creative craft pathways built around individual strengths.',
    },
    {
      group: 'Untrained Talented Artists',
      detail: 'Self-taught makers and performers seeking technical refinement, product quality standards, and commercial market access.',
    },
  ],
  proposedGovernance: [
    {
      role: 'Board of Trustees',
      responsibility:
        'Proposed fiduciary oversight body responsible for institutional strategy, ethical accountability, resource stewardship, and safeguarding policies.',
    },
    {
      role: 'Executive Director',
      responsibility:
        'Proposed chief executive role overseeing institutional establishment, strategic partnerships, stakeholder engagement, and overall operational leadership.',
    },
    {
      role: 'Programme Manager',
      responsibility:
        'Proposed academic and studio lead coordinating the 14 creative disciplines, entrepreneurship training, life skills modules, and mentorship schedules.',
    },
    {
      role: 'Finance, Administration & Partnerships Manager',
      responsibility:
        'Proposed operational role managing financial transparency, donor reporting, administration, and institutional partner coordination.',
    },
    {
      role: 'Advisory Council',
      responsibility:
        'Proposed consultative circle of master artisans, educators, creative industry practitioners, and community leaders guiding curriculum relevance and cultural integrity.',
    },
  ],
};

export const PROPOSED_FIVE_YEAR_TARGETS = [
  {
    value: '3,000',
    label: 'Young People Trained',
    detail: 'Proposed five-year target for youth aged 15–35 equipped with marketable creative and craft skills.',
  },
  {
    value: '≥ 60%',
    label: 'Employed or Self-Employed',
    detail: 'Proposed target proportion of graduates transitioning into employment or self-employment within 12 months.',
  },
  {
    value: '500',
    label: 'Youth-Led Creative Enterprises',
    detail: 'Proposed target number of sustainable creative micro-enterprises and cooperatives established over five years.',
  },
];

export const BEYOND_SKILLS_PILLARS = [
  {
    id: 'innovation',
    number: '01',
    title: 'Innovation & Product Development',
    summary:
      'Through the proposed Innovation Hub, trainees will experiment with materials, prototype contemporary craft products, work alongside mentors, and test ideas through design competitions.',
    points: [
      'Product design',
      'Experimentation',
      'Prototyping',
      'Collaboration with mentors',
      'Design competitions',
    ],
  },
  {
    id: 'entrepreneurship',
    number: '02',
    title: 'Entrepreneurship & Business Development',
    summary:
      'Creative mastery is paired with commercial capability and business incubation so emerging makers can price accurately, manage finances, register ventures, and form cooperatives.',
    points: [
      'Business planning & pricing',
      'Marketing, branding & digital marketing',
      'Financial literacy & customer service',
      'E-commerce & export readiness',
      'Shared workspaces & business registration support',
      'Cooperative formation & microfinance access',
    ],
  },
  {
    id: 'markets',
    number: '03',
    title: 'Market Access & Creative Enterprise',
    summary:
      'LCAC aims to bridge studio learning and real buyers through festivals, monthly craft markets, tourism hospitality channels, online retail, and corporate commissions.',
    points: [
      'Annual art festivals & monthly craft markets',
      'Tourism partnerships, hotel & airport souvenir shops',
      'Online marketplace & export promotion',
      'Corporate gift production',
    ],
  },
];

export const ENTREPRENEURSHIP_TOPICS = [
  'Business planning',
  'Marketing',
  'Branding',
  'Financial literacy',
  'Customer service',
  'Pricing',
  'Digital marketing',
  'E-commerce',
  'Export readiness',
];

export const LIFE_SKILLS_TOPICS = [
  'Leadership',
  'Sexual and reproductive health',
  'HIV/AIDS awareness',
  'Drug abuse prevention',
  'Conflict resolution',
  'Gender equality',
  'Personal development',
  'Communication skills',
  'Emotional intelligence',
  'Civic responsibility',
];

export const EXPECTED_IMPACT_OUTCOMES = [
  {
    title: 'Youth Empowerment',
    description:
      'Equipping vulnerable young people in Mtandire Township with practical skills, agency, and constructive alternatives to unemployment and substance abuse.',
  },
  {
    title: 'Employment & Self-Employment',
    description:
      'Preparing graduates for income-generating careers across craft production, design studios, media services, hospitality, and creative entrepreneurship.',
  },
  {
    title: 'Enterprise Development',
    description:
      'Incubating viable youth-led creative studios, artisan cooperatives, and micro-enterprises supported by shared workspaces and mentorship.',
  },
  {
    title: 'Poverty Reduction',
    description:
      'Creating sustainable household livelihood pathways for school dropouts, young mothers, and economically disadvantaged youth.',
  },
  {
    title: 'Cultural Heritage Preservation',
    description:
      'Documenting, teaching, and modernising indigenous Malawian pottery, basketry, wood carving, beadwork, and performing arts.',
  },
  {
    title: 'Gender Equality',
    description:
      'Championing equal participation, leadership, and safe studio environments for young women and young mothers across every discipline.',
  },
  {
    title: 'Personal Development & Confidence',
    description:
      'Strengthening emotional intelligence, communication, conflict resolution, and creative self-belief through integrated life skills mentorship.',
  },
  {
    title: 'Community Development',
    description:
      'Transforming Mtandire Township into a vibrant cultural hub that fosters social cohesion, public arts appreciation, and neighbourhood pride.',
  },
];

export const CONTACT_PLACEHOLDERS = {
  addressLine1: 'Mtandire Township',
  addressLine2: 'Lilongwe, Central Region, Malawi',
  emailPlaceholder: 'Institutional email to be confirmed upon establishment',
  phonePlaceholder: 'Telephone contact to be confirmed upon establishment',
  socialPlaceholders: [
    { platform: 'Instagram', handle: 'Official channel to be announced' },
    { platform: 'Facebook', handle: 'Official channel to be announced' },
    { platform: 'LinkedIn', handle: 'Official channel to be announced' },
    { platform: 'YouTube', handle: 'Official channel to be announced' },
  ],
};
