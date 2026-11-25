import type {
  GalleryCategory,
  GalleryItem,
  NewsArticle,
  NewsCategory,
  Programme,
  ProgrammeCategoryGroup,
} from '../types/lcac';

export function filterProgrammes(
  programmes: Programme[],
  category: ProgrammeCategoryGroup | 'All',
  searchQuery = ''
): Programme[] {
  const query = searchQuery.trim().toLowerCase();

  return programmes.filter((programme) => {
    const matchesCategory =
      category === 'All' || programme.categoryGroup === category;

    if (!matchesCategory) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [
      programme.title,
      programme.shortDescription,
      programme.categoryGroup,
      ...programme.skillsTaught,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}

export function filterGalleryItems(
  items: GalleryItem[],
  category: GalleryCategory | 'All'
): GalleryItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function filterNewsArticles(
  articles: NewsArticle[],
  category: NewsCategory | 'All'
): NewsArticle[] {
  if (category === 'All') {
    return articles;
  }
  return articles.filter((article) => article.category === category);
}
