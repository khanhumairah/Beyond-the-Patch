import React from 'react';
import { SeoPageDefinition } from '../data/seoContentMap';
import { AEO_ARTICLES_RECORD } from '../data/aeoArticlesData';
import { Breadcrumbs } from './Breadcrumbs';
import { ShieldCheck, Clock, Calendar, Bookmark, Check, ArrowRight, Info, AlertTriangle } from 'lucide-react';

interface AeoArticlePageProps {
  seoPage: SeoPageDefinition;
  onNavigate: (url: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const AeoArticlePage: React.FC<AeoArticlePageProps> = ({
  seoPage,
  onNavigate,
  isBookmarked,
  onToggleBookmark
}) => {
  const articleData = AEO_ARTICLES_RECORD[seoPage.url];

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Semantic Breadcrumbs navigation */}
      <Breadcrumbs items={seoPage.breadcrumbs} onNavigate={onNavigate} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-10 font-sans">
        {/* Header Metadata Bar */}
        <header className="space-y-4 border-b border-stone-200 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-widest font-mono font-semibold text-stone-700">
                {seoPage.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{articleData?.readTime || "5 min read"}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-800 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Medically Referenced</span>
              </span>
            </div>

            <button
              onClick={onToggleBookmark}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isBookmarked
                  ? 'bg-stone-900 text-stone-50 border-stone-900'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
              title={isBookmarked ? 'Remove from My Shelf' : 'Save to My Shelf'}
            >
              {isBookmarked ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{isBookmarked ? 'Saved to Shelf' : 'Save to Shelf'}</span>
            </button>
          </div>

          {/* Single Main H1 Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-[1.18]">
            {seoPage.h1}
          </h1>

          {/* Secondary Subtitle / Meta deck */}
          <p className="font-serif text-lg sm:text-xl text-stone-600 leading-relaxed italic">
            {seoPage.metaDescription}
          </p>

          {/* Keywords & Intent Context Badge Bar (Zero Pill text discipline) */}
          <div className="pt-2 text-xs text-stone-500 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-stone-100 font-mono">
            <span>Primary Focus: <strong className="text-stone-800 font-sans">{seoPage.primaryKeyword}</strong></span>
            <span aria-hidden="true">/</span>
            <span>Related Concepts: <span className="text-stone-700 font-sans">{seoPage.secondaryKeyword1} · {seoPage.secondaryKeyword2}</span></span>
          </div>
        </header>

        {/* Lead In Paragraph with Drop Cap */}
        <section aria-label="Introduction" className="text-base sm:text-lg text-stone-800 leading-relaxed font-sans first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
          {articleData?.leadParagraph || seoPage.metaDescription}
        </section>

        {/* Primary AEO Direct Question & Answer Box */}
        {articleData?.primaryDirectQuestion && (
          <section aria-label="Direct Summary Answer" className="bg-white border-2 border-stone-800/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {articleData.primaryDirectQuestion.questionH2}
            </h2>

            {/* Direct concise 40-70 word answer in first paragraph */}
            <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-serif font-medium bg-stone-50 p-4 rounded-xl border border-stone-200/60">
              {articleData.primaryDirectQuestion.directAnswer}
            </p>

            {articleData.primaryDirectQuestion.furtherDetail?.map((p, idx) => (
              <p key={idx} className="text-sm text-stone-700 leading-relaxed font-sans">
                {p}
              </p>
            ))}
          </section>
        )}

        {/* Clinical Deep-Dive Sections */}
        {articleData?.clinicalSections.map((sec, idx) => (
          <section key={idx} className="space-y-4 pt-6 border-t border-stone-200/80">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {sec.headingH2}
            </h2>

            {sec.directAnswer && (
              <div className="bg-amber-50/50 border border-amber-200/70 p-4 rounded-xl text-stone-900 text-sm leading-relaxed font-serif font-medium">
                {sec.directAnswer}
              </div>
            )}

            {sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {para}
              </p>
            ))}

            {/* Comparison Table if provided */}
            {sec.comparisonTable && (
              <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 border-b border-stone-200 font-mono uppercase text-stone-700">
                      {sec.comparisonTable.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-semibold border-r border-stone-200/60 last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200/70">
                    {sec.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/70 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 border-r border-stone-200/60 last:border-r-0 text-stone-800">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Callout Box */}
            {sec.calloutBox && (
              <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-2xl space-y-1.5 my-4">
                <span className="text-xs uppercase font-bold tracking-wider text-stone-800 block">
                  {sec.calloutBox.title}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {sec.calloutBox.text}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Fallback Clinical Overview if full custom article is generic */}
        {!articleData && (
          <section className="space-y-6 pt-4 border-t border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Understanding {seoPage.pageName}
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              Vitiligo is an autoimmune condition where the body's immune system mistakenly targets pigment-producing melanocytes in the epidermis and hair follicles.
              Clinical management focuses on accurate diagnosis, establishing whether disease is active or stable, protecting delicate depigmented skin from ultraviolet solar burns, and evaluating evidence-based medical therapies under dermatological supervision.
            </p>

            <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-2xs space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
                Clinical Focus Points:
              </span>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
                <li>Primary consideration: {seoPage.primaryKeyword} within a comprehensive health framework.</li>
                <li>Key biological co-factors: {seoPage.secondaryKeyword1} and {seoPage.secondaryKeyword2}.</li>
                <li>Diagnostic standard: Dermatologist evaluation under natural and Wood's ultraviolet illumination.</li>
              </ul>
            </div>
          </section>
        )}

        {/* AEO-Friendly FAQ Section */}
        {articleData?.faqItems && articleData.faqItems.length > 0 && (
          <section aria-label="Frequently Asked Questions" className="pt-8 border-t border-stone-200 space-y-4">
            <span className="text-xs uppercase font-mono font-semibold tracking-wider text-stone-500 block">
              Quick Clinical Answers
            </span>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Frequently Asked Questions About {seoPage.pageName}
            </h2>

            <div className="space-y-3">
              {articleData.faqItems.map((faq, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Suggested Internal Links with Descriptive Visible Anchor Text */}
        <section aria-label="Suggested Internal Reading" className="pt-8 border-t border-stone-200 space-y-4">
          <span className="text-xs uppercase font-mono font-semibold tracking-wider text-stone-500 block">
            Suggested Contextual Reading
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Related Guides & Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {seoPage.suggestedInternalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.url);
                }}
                className="bg-white border border-stone-200/90 rounded-xl p-4 hover:border-stone-400 transition-all shadow-2xs flex flex-col justify-between group block text-left"
              >
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1">
                    Internal Guide
                  </span>
                  <h3 className="font-serif font-semibold text-sm text-stone-900 group-hover:text-stone-700 transition-colors">
                    {link.label}
                  </h3>
                </div>

                <div className="pt-3 text-xs font-semibold text-stone-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore guide</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Academic Medical References */}
        <footer className="pt-8 border-t border-stone-200 text-xs text-stone-500 space-y-2 font-mono">
          <span className="text-stone-700 font-semibold block uppercase tracking-wider text-[11px]">
            Clinical Review & Sources:
          </span>
          <ul className="space-y-1">
            {seoPage.citationSources.map((source, sIdx) => (
              <li key={sIdx}>[{sIdx + 1}] {source}</li>
            ))}
          </ul>
          <p className="text-[11px] text-stone-400 pt-2 font-sans italic">
            Last medically reviewed: {seoPage.lastReviewed}. This educational content does not replace professional diagnosis or personalized treatment from a board-certified dermatologist.
          </p>
        </footer>
      </article>
    </main>
  );
};
