import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES_DATA, MYTH_BUSTER_ITEMS, PEOPLE_ASK_QUESTIONS } from '../data/articles';
import { FOOD_EXPLORER_ITEMS, FOOD_MYTH_CLAIMS } from '../data/nutrition';
import { COMMUNITY_STORIES } from '../data/stories';
import { TREATMENTS_DATA } from '../data/treatments';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (category: string, id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [filterTag, setFilterTag] = useState<string>('ALL');

  const filterOptions = ['ALL', 'SCIENCE', 'TREATMENT', 'LIFESTYLE', 'FOOD', 'STORIES', 'MYTHS'];

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    const allMatches: Array<{
      id: string;
      title: string;
      snippet: string;
      category: string;
      targetSection: string;
    }> = [];

    // Articles
    ARTICLES_DATA.forEach((art) => {
      if (
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.leadParagraph.toLowerCase().includes(q)
      ) {
        allMatches.push({
          id: art.slug,
          title: art.title,
          snippet: art.subtitle,
          category: art.category,
          targetSection: art.category === 'SCIENCE' ? 'UNDERSTAND' : art.category === 'FOOD' ? 'NUTRITION' : art.category === 'LIFESTYLE' ? 'LIVE WITH IT' : 'TREATMENT'
        });
      }
    });

    // Treatments
    TREATMENTS_DATA.forEach((tr) => {
      if (
        !q ||
        tr.name.toLowerCase().includes(q) ||
        tr.whatIsIt.toLowerCase().includes(q) ||
        tr.howDoesItWork.toLowerCase().includes(q)
      ) {
        allMatches.push({
          id: tr.id,
          title: tr.name,
          snippet: tr.whatIsIt,
          category: 'TREATMENT',
          targetSection: 'TREATMENT'
        });
      }
    });

    // Foods
    FOOD_EXPLORER_ITEMS.forEach((food) => {
      if (
        !q ||
        food.name.toLowerCase().includes(q) ||
        food.keyNutrients.some((n) => n.toLowerCase().includes(q)) ||
        food.whyInclude.toLowerCase().includes(q)
      ) {
        allMatches.push({
          id: food.id,
          title: `${food.name} (Nutrition Guide)`,
          snippet: `${food.keyNutrients.join(', ')} — ${food.whyInclude}`,
          category: 'FOOD',
          targetSection: 'NUTRITION'
        });
      }
    });

    // Food claims & General myths
    FOOD_MYTH_CLAIMS.forEach((myth) => {
      if (
        !q ||
        myth.foodName.toLowerCase().includes(q) ||
        myth.claim.toLowerCase().includes(q) ||
        myth.evidence.toLowerCase().includes(q)
      ) {
        allMatches.push({
          id: myth.id,
          title: `Claim: ${myth.foodName}`,
          snippet: myth.evidence,
          category: 'MYTHS',
          targetSection: 'NUTRITION'
        });
      }
    });

    MYTH_BUSTER_ITEMS.forEach((m) => {
      if (!q || m.myth.toLowerCase().includes(q) || m.explanation.toLowerCase().includes(q)) {
        allMatches.push({
          id: m.id,
          title: `Fact Check: ${m.fact}`,
          snippet: m.explanation,
          category: 'MYTHS',
          targetSection: 'RESOURCES'
        });
      }
    });

    // Community stories
    COMMUNITY_STORIES.forEach((st) => {
      if (!q || st.title.toLowerCase().includes(q) || st.experience.toLowerCase().includes(q)) {
        allMatches.push({
          id: st.id,
          title: `${st.authorAlias}: "${st.title}"`,
          snippet: st.experience.substring(0, 140) + '...',
          category: 'STORIES',
          targetSection: 'STORIES'
        });
      }
    });

    // People Ask questions
    PEOPLE_ASK_QUESTIONS.forEach((pa) => {
      if (!q || pa.question.toLowerCase().includes(q) || pa.shortAnswer.toLowerCase().includes(q)) {
        allMatches.push({
          id: pa.id,
          title: pa.question,
          snippet: pa.shortAnswer,
          category: pa.category === 'Nutrition' ? 'FOOD' : 'LIFESTYLE',
          targetSection: 'HOME'
        });
      }
    });

    if (filterTag === 'ALL') {
      return allMatches;
    }
    return allMatches.filter((item) => item.category === filterTag);
  }, [query, filterTag]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/50 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:p-12">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments, foods, genetics, myths, confidence..."
            className="flex-1 bg-transparent text-base sm:text-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-5 py-2.5 border-b border-stone-200 bg-stone-100/60 flex items-center gap-1.5 overflow-x-auto text-xs">
          {filterOptions.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                filterTag === tag
                  ? 'bg-stone-900 text-stone-50'
                  : 'text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {results.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="font-serif text-base text-stone-700 mb-1">
                No matching topics found for "{query}"
              </p>
              <p className="text-xs text-stone-500">
                Try searching for general keywords like "hands", "food", "segmental", "sun", or "children".
              </p>
            </div>
          ) : (
            results.map((result, idx) => (
              <button
                key={`${result.id}-${idx}`}
                onClick={() => {
                  onSelectResult(result.targetSection, result.id);
                  onClose();
                }}
                className="w-full text-left bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 sm:p-4 shadow-2xs hover:border-stone-300 transition-all group block"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="uppercase tracking-wider font-semibold text-stone-600">
                    {result.category}
                  </span>
                  <span className="text-stone-400 group-hover:text-stone-900 transition-colors flex items-center gap-1 font-medium">
                    <span>Explore section</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                <h4 className="font-serif font-semibold text-stone-900 text-sm sm:text-base group-hover:text-stone-700 transition-colors mb-1">
                  {result.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {result.snippet}
                </p>
              </button>
            ))
          )}
        </div>

        {/* Quick keywords helper */}
        <div className="px-5 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>Popular: hands, turmeric, phototherapy, children, swimming</span>
          <span className="font-mono tabular-nums">{results.length} results</span>
        </div>
      </div>
    </div>
  );
};
