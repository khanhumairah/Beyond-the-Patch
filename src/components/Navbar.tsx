import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (url: string) => void;
  shelfCount: number;
  onOpenShelf: () => void;
  onOpenSearch: () => void;
}

export const MAIN_NAV_LINKS = [
  { label: 'Home', url: '/' },
  { label: 'Understand', url: '/understand-vitiligo/' },
  { label: 'Live With It', url: '/living-with-vitiligo/' },
  { label: 'Treatment', url: '/vitiligo-treatment/' },
  { label: 'Nutrition', url: '/vitiligo-nutrition/' },
  { label: 'Stories', url: '/vitiligo-stories/' },
  { label: 'Explore', url: '/skin-tone-and-anatomy/' },
  { label: 'Resources', url: '/vitiligo-myths/' }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  shelfCount,
  onOpenShelf,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    onNavigate(url);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (url: string) => {
    if (url === '/') return currentPath === '/';
    return currentPath.startsWith(url);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors text-left"
          title="Beyond The Patch - Home"
        >
          BEYOND THE PATCH
        </a>

        {/* Zone 2: Primary Nav Links (Desktop) with crawlable <a> elements */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-600">
          {MAIN_NAV_LINKS.map((item) => {
            const active = isLinkActive(item.url);
            return (
              <a
                key={item.url}
                href={item.url}
                onClick={(e) => handleLinkClick(e, item.url)}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  active
                    ? 'text-stone-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-stone-900'
                    : 'hover:text-stone-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Search + My Shelf + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors border border-stone-200/60 cursor-pointer"
            title="Search topics and articles"
            aria-label="Search vitiligo topics"
          >
            <Search className="w-4 h-4 text-stone-500" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            onClick={onOpenShelf}
            className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-lg transition-colors shadow-xs relative cursor-pointer"
            title="Open saved reading shelf"
            aria-label="Open My Shelf saved bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">My Shelf</span>
            {shelfCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[11px] font-mono font-semibold bg-stone-700 text-stone-100 rounded-full tabular-nums">
                {shelfCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors ml-1 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {MAIN_NAV_LINKS.map((item) => {
              const active = isLinkActive(item.url);
              return (
                <a
                  key={item.url}
                  href={item.url}
                  onClick={(e) => handleLinkClick(e, item.url)}
                  className={`text-left px-3 py-2.5 rounded-lg transition-colors font-medium block ${
                    active
                      ? 'bg-stone-200/80 text-stone-900 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
              <span>Evidence-Based Dermatology</span>
            </span>
            <a
              href="/seo-content-audit/"
              onClick={(e) => handleLinkClick(e, '/seo-content-audit/')}
              className="text-stone-600 hover:underline font-mono"
            >
              SEO Content Map
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
