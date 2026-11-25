import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/site';
import type { PageKey } from '../types/lcac';
import { isNavActive } from '../utils/router';
import { BrandMark } from './BrandMark';
import { Button } from './Button';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F2EBDD]/95 backdrop-blur-sm border-b border-[#272522]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-6 xl:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
              e.preventDefault();
              handleNavClick('/');
            }
          }}
          aria-label="Lilongwe Centre for Arts and Craft — Home"
          className="whitespace-nowrap shrink-0 py-1"
        >
          <BrandMark variant="dark" />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(currentPage, item.pageKey);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }
                }}
                aria-current={active ? 'page' : undefined}
                className={`text-[13px] xl:text-sm font-medium whitespace-nowrap shrink-0 py-1.5 transition-colors duration-150 border-b-2 ${
                  active
                    ? 'text-[#963F2D] border-[#963F2D]'
                    : 'text-[#272522]/80 border-transparent hover:text-[#272522] hover:border-[#272522]/30'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <Button
              href="/programmes"
              onNavigate={handleNavClick}
              variant="primary"
              size="md"
            >
              Explore Programmes
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#272522]/20 text-[#272522] hover:border-[#963F2D] hover:text-[#963F2D] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Navigation Menu */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#272522]/12 bg-[#F2EBDD] px-4 py-5"
        >
          <div className="flex flex-col divide-y divide-[#272522]/10">
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(currentPage, item.pageKey);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`py-3.5 text-base font-medium transition-colors ${
                    active ? 'text-[#963F2D]' : 'text-[#272522]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="mt-5 pt-4 border-t border-[#272522]/12">
            <Button
              href="/contact"
              onNavigate={handleNavClick}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
