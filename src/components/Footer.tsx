import React, { useState } from 'react';
import { GENERAL_MEDICAL_DISCLAIMER } from '../data/articles';
import { Heart, Send, Check, ShieldCheck, ArrowRight, Table } from 'lucide-react';

interface FooterProps {
  onNavigate: (url: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalType, setModalType] = useState<'STORY' | 'QUESTION' | 'SOURCES' | 'DISCLAIMER' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalType(null);
    }, 2500);
  };

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    onNavigate(url);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="text-2xl font-serif font-bold text-white tracking-tight block hover:text-stone-200 transition-colors"
            >
              BEYOND THE PATCH
            </a>
            <p className="font-serif italic text-stone-400 text-sm">
              "Understanding vitiligo beyond what you see."
            </p>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              A modern, evidence-grounded educational publication and lifestyle platform exploring vitiligo science, medical treatments, nutrition, and personal narratives with dignity, clarity, and care.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <button
                onClick={() => setModalType('STORY')}
                className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors font-medium border border-stone-700/80 cursor-pointer"
              >
                Submit Your Story
              </button>
              <button
                onClick={() => setModalType('QUESTION')}
                className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors font-medium border border-stone-700/80 cursor-pointer"
              >
                Submit a Question
              </button>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Clinical Knowledge
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/understand-vitiligo/"
                  onClick={(e) => handleLink(e, '/understand-vitiligo/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Understand Vitiligo
                </a>
              </li>
              <li>
                <a
                  href="/understand-vitiligo/types-of-vitiligo/"
                  onClick={(e) => handleLink(e, '/understand-vitiligo/types-of-vitiligo/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Types of Vitiligo
                </a>
              </li>
              <li>
                <a
                  href="/understand-vitiligo/segmental-vitiligo/"
                  onClick={(e) => handleLink(e, '/understand-vitiligo/segmental-vitiligo/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Segmental Vitiligo
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-treatment/"
                  onClick={(e) => handleLink(e, '/vitiligo-treatment/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Treatment Options
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-nutrition/"
                  onClick={(e) => handleLink(e, '/vitiligo-nutrition/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Nutrition & Evidence
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Lifestyle & Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/living-with-vitiligo/"
                  onClick={(e) => handleLink(e, '/living-with-vitiligo/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Living With Vitiligo
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-stories/"
                  onClick={(e) => handleLink(e, '/vitiligo-stories/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Community Stories
                </a>
              </li>
              <li>
                <a
                  href="/prepare-for-dermatologist-visit/"
                  onClick={(e) => handleLink(e, '/prepare-for-dermatologist-visit/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Doctor Visit Prep
                </a>
              </li>
              <li>
                <a
                  href="/patch-diary/"
                  onClick={(e) => handleLink(e, '/patch-diary/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Patch Diary Tool
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-fact-or-fiction/"
                  onClick={(e) => handleLink(e, '/vitiligo-fact-or-fiction/')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Fact or Fiction Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional / Trust */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Standards & Transparency
            </div>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a
                  href="/sources-and-medical-review/"
                  onClick={(e) => handleLink(e, '/sources-and-medical-review/')}
                  className="hover:text-white transition-colors"
                >
                  Sources & Clinical Guidelines
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-glossary/"
                  onClick={(e) => handleLink(e, '/vitiligo-glossary/')}
                  className="hover:text-white transition-colors"
                >
                  A–Z Clinical Glossary
                </a>
              </li>
              <li>
                <a
                  href="/vitiligo-myths/"
                  onClick={(e) => handleLink(e, '/vitiligo-myths/')}
                  className="hover:text-white transition-colors"
                >
                  Myth Buster Catalog
                </a>
              </li>
              <li>
                <a
                  href="/seo-content-audit/"
                  onClick={(e) => handleLink(e, '/seo-content-audit/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-stone-300 font-medium"
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>SEO & AEO Content Audit</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setModalType('DISCLAIMER')}
                  className="hover:text-white transition-colors text-left text-stone-400"
                >
                  Medical Disclaimer
                </button>
              </li>
              <li>
                <span className="text-stone-500">World Vitiligo Day · June 25</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Banner */}
        <div className="pt-8 border-t border-stone-800 text-center space-y-3">
          <p className="text-xs text-stone-400 max-w-2xl mx-auto leading-relaxed">
            "{GENERAL_MEDICAL_DISCLAIMER}"
          </p>
          <div className="text-[11px] text-stone-500 font-mono">
            © {new Date().getFullYear()} Beyond The Patch. Designed for human understanding and clinical integrity.
          </div>
        </div>
      </div>

      {/* Modals for Footer actions */}
      {modalType && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-stone-900 w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-300 relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 text-lg font-bold p-1 cursor-pointer"
            >
              ✕
            </button>

            {modalType === 'STORY' && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Submit Your Story
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Share your personal journey with vitiligo. Selected stories are reviewed by our editorial team and shared with your chosen alias to encourage others.
                </p>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-center gap-2 text-xs">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Thank you! Your story has been received for editorial review.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="font-semibold block mb-1">First Name or Preferred Alias</label>
                      <input
                        type="text"
                        placeholder="e.g. Maya or Anonymous"
                        required
                        className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="font-semibold block mb-1">Age Range & Region</label>
                      <input
                        type="text"
                        placeholder="e.g. 20s, North America"
                        required
                        className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="font-semibold block mb-1">Your Story & Turning Point</label>
                      <textarea
                        rows={4}
                        placeholder="When did you notice it? What was a pivotal moment of confidence or acceptance?"
                        required
                        className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-stone-900"
                      />
                    </div>
                    <div className="text-[11px] text-stone-500">
                      *By submitting, you agree to editorial curation and moderation. No medical advice will be published.
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Submit for Moderation
                    </button>
                  </form>
                )}
              </div>
            )}

            {modalType === 'QUESTION' && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Submit a Question
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Have a question about vitiligo biology, terminology, or lifestyle navigation? We address community inquiries in our recurring "People Ask" guides.
                </p>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-center gap-2 text-xs">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Your question has been received for our editorial dermatology Q&A queue!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="font-semibold block mb-1">Topic Category</label>
                      <select className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-stone-900">
                        <option>General Understanding</option>
                        <option>Treatments & Phototherapy</option>
                        <option>Nutrition & Lifestyle</option>
                        <option>Social & Mental Health</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-semibold block mb-1">Your Question</label>
                      <textarea
                        rows={3}
                        placeholder="What would you like explained clearly?"
                        required
                        className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-stone-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Send Question
                    </button>
                  </form>
                )}
              </div>
            )}

            {modalType === 'DISCLAIMER' && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Medical Disclaimer
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  The content on Beyond The Patch is provided solely for educational and informational purposes. It is not intended as medical advice, clinical diagnosis, or a personalized treatment prescription. Always seek the advice of your dermatologist or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
