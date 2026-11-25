import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { ImpactPage } from './pages/ImpactPage';
import { NewsPage } from './pages/NewsPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { ProgrammeDetailPage } from './pages/ProgrammeDetailPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import type { RouteMatch } from './types/lcac';
import { parseRoute } from './utils/router';

export default function App() {
  const [route, setRoute] = useState<RouteMatch>(() =>
    parseRoute(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
    }
    setRoute(parseRoute(path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (route.page) {
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'programmes':
        return <ProgrammesPage onNavigate={navigate} />;
      case 'programme-detail':
        return (
          <ProgrammeDetailPage
            slug={route.programmeSlug}
            onNavigate={navigate}
          />
        );
      case 'impact':
        return <ImpactPage onNavigate={navigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'news':
        return <NewsPage onNavigate={navigate} />;
      case 'partnerships':
        return <PartnershipsPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EBDD] text-[#272522]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#963F2D] focus:text-[#F2EBDD] focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar currentPage={route.page} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
