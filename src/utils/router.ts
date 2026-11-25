import type { PageKey, RouteMatch } from '../types/lcac';

export function normalizePath(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0].trim();
  if (!clean || clean === '/') {
    return '/';
  }
  return clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

export function parseRoute(pathname: string): RouteMatch {
  const path = normalizePath(pathname);

  if (path === '/' || path === '/home') {
    return { page: 'home' };
  }
  if (path === '/about' || path === '/about-us') {
    return { page: 'about' };
  }
  if (path === '/programmes') {
    return { page: 'programmes' };
  }
  if (path.startsWith('/programmes/')) {
    const slug = path.slice('/programmes/'.length).trim();
    if (slug && !slug.includes('/')) {
      return { page: 'programme-detail', programmeSlug: slug };
    }
  }
  if (path === '/impact' || path === '/our-impact') {
    return { page: 'impact' };
  }
  if (path === '/gallery') {
    return { page: 'gallery' };
  }
  if (path === '/news' || path === '/news-and-events') {
    return { page: 'news' };
  }
  if (path === '/partnerships') {
    return { page: 'partnerships' };
  }
  if (path === '/contact') {
    return { page: 'contact' };
  }

  return { page: 'home' };
}

export function buildProgrammePath(slug: string): string {
  return `/programmes/${slug}`;
}

export function isNavActive(currentPage: PageKey, itemPageKey: PageKey): boolean {
  if (itemPageKey === 'programmes' && currentPage === 'programme-detail') {
    return true;
  }
  return currentPage === itemPageKey;
}
