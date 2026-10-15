import React, { useState } from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { ShelfItem } from '../types';

interface MyShelfDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ShelfItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onOpenArticle: (slug: string) => void;
}

export const MyShelfDrawer: React.FC<MyShelfDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
  onOpenArticle
}) => {
  const [filterType, setFilterType] = useState<string>('all');

  if (!isOpen) return null;

  const filteredItems = items.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-l border-stone-200">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-stone-800" />
            <h2 className="text-xl font-serif font-bold text-stone-900">My Shelf</h2>
            <span className="text-xs font-mono bg-stone-200 px-2 py-0.5 rounded-full text-stone-700">
              {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter controls */}
        {items.length > 0 && (
          <div className="px-6 py-3 border-b border-stone-200 bg-stone-100/50 flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto text-xs">
              {(['all', 'article', 'story', 'research'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-2.5 py-1 rounded-md capitalize transition-colors font-medium whitespace-nowrap ${
                    filterType === type
                      ? 'bg-stone-900 text-stone-50'
                      : 'text-stone-600 hover:bg-stone-200/70'
                  }`}
                >
                  {type === 'all' ? 'All Saved' : `${type}s`}
                </button>
              ))}
            </div>

            <button
              onClick={onClearAll}
              className="text-xs text-stone-500 hover:text-red-700 flex items-center gap-1 transition-colors whitespace-nowrap ml-2"
              title="Clear all bookmarks"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        )}

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4 py-12 text-stone-500">
              <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 text-stone-400">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-800 mb-1">
                Your personal reading shelf is empty
              </h3>
              <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                Bookmark articles, research summaries, and personal stories as you explore to read them anytime during your visit.
              </p>
            </div>
          ) : filteredItems.length === 0 ? (
            <p className="text-sm text-stone-500 text-center py-8">
              No saved items in this category.
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-xs hover:border-stone-300 transition-all group"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="uppercase tracking-wider font-medium text-stone-600">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{item.dateSaved}</span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                      title="Remove from shelf"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h4 className="font-serif font-semibold text-stone-900 group-hover:text-stone-700 transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
                  {item.snippet}
                </p>

                <button
                  onClick={() => {
                    onOpenArticle(item.id);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-700 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer note */}
        <div className="p-4 border-t border-stone-200 bg-stone-100/60 text-xs text-stone-500 text-center">
          Saved locally in your browser. Private to this device.
        </div>
      </div>
    </div>
  );
};
