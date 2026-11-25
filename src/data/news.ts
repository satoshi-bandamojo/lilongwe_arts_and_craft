import type { NewsArticle, NewsCategory } from '../types/lcac';

export const NEWS_CATEGORIES: NewsCategory[] = [
  'Institutional Announcements',
  'Art Exhibitions',
  'Craft Markets',
  'Workshops',
  'Art Festivals',
  'Community Initiatives',
  'Partnership Announcements',
];

// Intentionally empty during the initial pre-establishment prototype phase.
// Future announcements and events will be populated via Supabase.
export const NEWS_ARTICLES: NewsArticle[] = [];

export const PLANNED_PROGRAMMING_FORMATS = [
  {
    category: 'Institutional Announcements' as NewsCategory,
    description:
      'Formal updates on LCAC registration, governance formation, facility development in Mtandire Township, and curriculum launches.',
  },
  {
    category: 'Art Exhibitions' as NewsCategory,
    description:
      'Curated public showcases celebrating painting, sculpture, ceramics, photography, and contemporary Malawian design.',
  },
  {
    category: 'Craft Markets' as NewsCategory,
    description:
      'Proposed monthly community craft markets connecting emerging makers directly with Lilongwe residents, visitors, and hospitality buyers.',
  },
  {
    category: 'Workshops' as NewsCategory,
    description:
      'Short-form masterclasses, studio open days, and peer-mentorship sessions led by guest artisans and industry practitioners.',
  },
  {
    category: 'Art Festivals' as NewsCategory,
    description:
      'Proposed annual cultural festivals bringing together visual arts, traditional dance, poetry, drama, and live music.',
  },
  {
    category: 'Community Initiatives' as NewsCategory,
    description:
      'Neighbourhood mural projects, youth dialogue forums, and creative outreach across Mtandire Township.',
  },
  {
    category: 'Partnership Announcements' as NewsCategory,
    description:
      'Official updates when collaborative agreements with educational, development, municipal, or private-sector partners are formalised.',
  },
];
