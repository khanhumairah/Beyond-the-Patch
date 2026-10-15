import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; url: string }[];
  onNavigate: (url: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  if (!items || items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 bg-stone-100/70 border-b border-stone-200/60 text-xs text-stone-600">
      <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 list-none">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {index === 0 && <Home className="w-3.5 h-3.5 text-stone-400 shrink-0" />}
              {isLast ? (
                <span className="font-semibold text-stone-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <button
                    onClick={() => onNavigate(item.url)}
                    className="hover:text-stone-900 hover:underline transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
