import React from 'react';
import { Article } from '../types';
import { X, Bookmark, Check, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark
}) => {
  if (!article) return null;

  const relatedArticles = ARTICLES_DATA.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 md:p-10">
      <div className="bg-[#FAF8F5] w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-sm px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
            <span className="uppercase tracking-wider font-semibold text-stone-700">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            {article.isMedicallyReviewed && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-800 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Medically Reviewed</span>
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isBookmarked
                  ? 'bg-stone-900 text-stone-50 border-stone-900'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
              title={isBookmarked ? 'Remove from My Shelf' : 'Save to My Shelf'}
            >
              {isBookmarked ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {isBookmarked ? 'Saved to Shelf' : 'Save to Shelf'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-xl hover:bg-stone-200/60 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 font-sans">
          {/* Article Header */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-stone-600 leading-relaxed italic">
              {article.subtitle}
            </p>

            <div className="flex items-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Reviewed: {article.lastReviewed}</span>
              </span>
            </div>
          </div>

          {/* Optional Featured Image */}
          {article.imagePath && (
            <div className="w-full aspect-16/9 rounded-2xl overflow-hidden border border-stone-200 shadow-xs relative bg-stone-100">
              <img
                src={article.imagePath}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Key Takeaways Box */}
          {article.keyTakeaways?.length > 0 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-stone-500 block">
                Key Clinical Takeaways
              </span>
              <ul className="space-y-2 text-sm text-stone-700">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-stone-900 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lead Paragraph with Drop Cap */}
          <div className="text-base sm:text-lg text-stone-800 leading-relaxed font-sans first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
            {article.leadParagraph}
          </div>

          {/* Article Sections */}
          <div className="space-y-8 max-w-3xl">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-stone-900 pt-4 border-t border-stone-200/80">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Pull Quote */}
                {section.pullQuote && (
                  <div className="my-6 pl-5 border-l-2 border-stone-900 py-2">
                    <blockquote className="font-serif text-xl sm:text-2xl italic font-medium text-stone-900 leading-snug">
                      "{section.pullQuote}"
                    </blockquote>
                  </div>
                )}

                {/* Callout Box */}
                {section.calloutBox && (
                  <div
                    className={`p-5 rounded-2xl border my-4 space-y-1.5 ${
                      section.calloutBox.type === 'fact'
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : section.calloutBox.type === 'caution'
                        ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                        : 'bg-stone-100/70 border-stone-200 text-stone-900'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider block">
                      {section.calloutBox.title}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {section.calloutBox.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sources & Citations */}
          {article.sources?.length > 0 && (
            <div className="pt-8 border-t border-stone-200 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-stone-500 block">
                References & Peer-Reviewed Sources
              </span>
              <ul className="space-y-1 text-xs text-stone-600 font-mono">
                {article.sources.map((source, sIdx) => (
                  <li key={sIdx} className="leading-relaxed">
                    [{sIdx + 1}] {source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* YOU MAY ALSO LIKE */}
          {relatedArticles.length > 0 && (
            <div className="pt-10 border-t border-stone-200 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-stone-500 block">
                You May Also Like
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectArticle(rel.slug)}
                    className="bg-white border border-stone-200 rounded-xl p-4 text-left shadow-2xs hover:border-stone-400 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-stone-500 block mb-1">
                        {rel.category} · {rel.readTime}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="text-xs font-semibold text-stone-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
