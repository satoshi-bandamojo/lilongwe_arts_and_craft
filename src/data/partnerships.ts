export interface CollaborationArea {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface ProspectivePartnerGroup {
  groupTitle: string;
  description: string;
  entities: string[];
}

export const COLLABORATION_AREAS: CollaborationArea[] = [
  {
    id: 'education-vocational',
    title: 'Education & Vocational Training',
    description:
      'Co-developing competency frameworks, curriculum accreditation pathways, and instructor capacity building.',
    examples: [
      'Vocational standards alignment and certification pathways',
      'Visiting artisan instructors and curriculum exchange',
      'Inclusive pedagogy for youth with diverse educational backgrounds',
    ],
  },
  {
    id: 'creative-industry',
    title: 'Creative Industry Development',
    description:
      'Strengthening Malawi’s creative economy through design innovation, studio equipment, and production quality standards.',
    examples: [
      'Studio tooling, kilns, sewing machines, and digital workstations',
      'Product prototyping and quality assurance mentoring',
      'Cultural heritage documentation and craft preservation',
    ],
  },
  {
    id: 'youth-empowerment',
    title: 'Youth Empowerment & Inclusion',
    description:
      'Expanding holistic social support, safeguarding, and life skills programming for vulnerable youth aged 15–35.',
    examples: [
      'Community outreach for school dropouts and young mothers',
      'Accessible studio adaptations for youth with disabilities',
      'Life skills, leadership, and drug abuse prevention workshops',
    ],
  },
  {
    id: 'sponsorship-funding',
    title: 'Sponsorship & Establishment Funding',
    description:
      'Supporting capital establishment, training materials, bursary access, and sustainable community operations.',
    examples: [
      'Foundational studio build-out and equipment grants',
      'Toolkits and starter materials for emerging trainees',
      'Institutional establishment and programme seed support',
    ],
  },
  {
    id: 'mentorship',
    title: 'Mentorship & Business Incubation',
    description:
      'Pairing emerging young creatives with experienced entrepreneurs, master makers, and professional designers.',
    examples: [
      'Innovation Hub design competitions and critique sessions',
      'Financial literacy, pricing, and cooperative governance coaching',
      'Business registration and microfinance readiness support',
    ],
  },
  {
    id: 'market-access',
    title: 'Market Access & Trade Linkages',
    description:
      'Connecting locally crafted goods and digital creative services to domestic, tourism, corporate, and export buyers.',
    examples: [
      'Corporate gift production and hospitality procurement',
      'Hotel gift shops, airport retail, and festival showcases',
      'Online marketplace and regional export readiness',
    ],
  },
];

export const PROSPECTIVE_PARTNER_GROUPS: ProspectivePartnerGroup[] = [
  {
    groupTitle: 'Public & Municipal Institutions',
    description:
      'Prospective alignment with local government, skills authorities, and public education bodies in Malawi.',
    entities: [
      'Government institutions',
      'Lilongwe City Council',
      'TEVETA (Technical, Entrepreneurial and Vocational Education and Training Authority)',
      'Universities and colleges',
    ],
  },
  {
    groupTitle: 'International & Multilateral Partners',
    description:
      'Potential collaboration with global development agencies, cultural bodies, and diplomatic missions.',
    entities: [
      'UNESCO',
      'UNICEF',
      'UNDP',
      'ILO (International Labour Organization)',
      'European Union (EU) Delegation',
      'Embassies and bilateral cooperation agencies',
    ],
  },
  {
    groupTitle: 'Civil Society, Private Sector & Creative Community',
    description:
      'Prospective engagement with NGOs, corporate sponsors, hospitality brands, and practicing Malawian artists.',
    entities: [
      'Local and international NGOs',
      'Corporate sponsors and hospitality partners',
      'Practicing artists and creative entrepreneurs',
    ],
  },
];
