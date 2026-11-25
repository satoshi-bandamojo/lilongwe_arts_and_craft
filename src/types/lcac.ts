export type PageKey =
  | 'home'
  | 'about'
  | 'programmes'
  | 'programme-detail'
  | 'impact'
  | 'gallery'
  | 'news'
  | 'partnerships'
  | 'contact';

export interface RouteMatch {
  page: PageKey;
  programmeSlug?: string;
}

export interface NavItem {
  label: string;
  path: string;
  pageKey: PageKey;
}

export type ProgrammeCategoryGroup =
  | 'Traditional Arts & Crafts'
  | 'Fashion & Design'
  | 'Digital & Media Arts'
  | 'Music & Performing Arts';

export interface Programme {
  id: string;
  slug: string;
  numberLabel: string;
  title: string;
  categoryGroup: ProgrammeCategoryGroup;
  shortDescription: string;
  overview: string;
  skillsTaught: string[];
  enterprisePathways: string[];
  image: string;
  imageAlt: string;
}

export type GalleryCategory =
  | 'Fine Arts'
  | 'Pottery'
  | 'Wood Craft'
  | 'Fashion & Textiles'
  | 'Leather Craft'
  | 'Basketry'
  | 'Beadwork'
  | 'Digital Arts'
  | 'Photography'
  | 'Performing Arts';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  medium: string;
  caption: string;
  image: string;
  imageAlt: string;
  aspect: 'wide' | 'square' | 'tall';
}

export type NewsCategory =
  | 'Institutional Announcements'
  | 'Art Exhibitions'
  | 'Craft Markets'
  | 'Workshops'
  | 'Art Festivals'
  | 'Community Initiatives'
  | 'Partnership Announcements';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: NewsCategory;
  summary: string;
  body: string[];
  publishedAt: string;
  image?: string;
  imageAlt?: string;
}

export type EnquiryCategory =
  | 'General Enquiry'
  | 'Youth Training Interest'
  | 'Partnership & Collaboration'
  | 'Funding & Sponsorship'
  | 'Mentorship & Teaching'
  | 'Media & Institutional Briefing';

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  category: EnquiryCategory | '';
  message: string;
}

export interface ContactValidationErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  category?: string;
  message?: string;
}
