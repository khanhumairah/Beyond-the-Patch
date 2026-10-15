import React, { useState } from 'react';
import { useSeoRouter } from './hooks/useSeoRouter';
import { useShelf } from './hooks/useShelf';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { MyShelfDrawer } from './components/MyShelfDrawer';
import { FactOrFictionGame } from './components/FactOrFictionGame';
import { UnderThePatchInteractive } from './components/UnderThePatchInteractive';
import { ThingsPeopleSay } from './components/ThingsPeopleSay';
import { FoodExplorer } from './components/FoodExplorer';
import { SkinToneExplorer } from './components/SkinToneExplorer';
import { WorldPerspectiveMap } from './components/WorldPerspectiveMap';
import { PatchDiary } from './components/PatchDiary';
import { DermVisitPrep } from './components/DermVisitPrep';
import { SeoAuditTable } from './components/SeoAuditTable';
import { AeoArticlePage } from './components/AeoArticlePage';
import { ArticleDetailModal } from './components/ArticleDetailModal';

// Data imports
import {
  ARTICLES_DATA,
  PEOPLE_ASK_QUESTIONS,
  JOURNEY_STAGES,
  MYTH_BUSTER_ITEMS,
  HERO_IMAGE,
  STORY_IMAGE,
  MEDICAL_SOURCES_LIST,
  GENERAL_MEDICAL_DISCLAIMER
} from './data/articles';
import { VITILIGO_TYPES, VITILIGO_TYPES_DISCLAIMER } from './data/typesOfVitiligo';
import { COMMUNITY_STORIES, ONE_MINUTE_INTERVIEWS } from './data/stories';
import { TREATMENTS_DATA } from './data/treatments';
import { LIFESTYLE_GUIDES } from './data/lifestyle';
import { DIFFERENTIAL_COMPARISONS } from './data/explore';
import { RESEARCH_ARTICLES } from './data/research';
import { GLOSSARY_TERMS } from './data/glossary';
import { SEO_CONTENT_MAP } from './data/seoContentMap';

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Check,
  ShieldCheck,
  Award,
  AlertCircle,
  Home,
  Table,
  HelpCircle
} from 'lucide-react';
import { Article } from './types';

export default function App() {
  const { currentPath, navigate, currentPageSeo, is404 } = useSeoRouter();
  const { items: shelfItems, toggleBookmark, isBookmarked, removeItem, clearShelf, count: shelfCount } = useShelf();

  const [searchOpen, setSearchOpen] = useState(false);
  const [shelfOpen, setShelfOpen] = useState(false);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  // Home FAQ Accordion
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('q1');
  const [selectedJourneyStage, setSelectedJourneyStage] = useState<string | null>(null);

  // Glossary simple explanation toggle
  const [simpleExplanationMap, setSimpleExplanationMap] = useState<Record<string, boolean>>({});

  // Types of Vitiligo active filter
  const [vitiligoTypeFilter, setVitiligoTypeFilter] = useState<string>('All');

  // One Minute With interview role
  const [activeInterviewRole, setActiveInterviewRole] = useState<string>('Dermatologist');

  const activeArticle: Article | null =
    ARTICLES_DATA.find((a) => a.slug === selectedArticleSlug) || null;

  const toggleSimpleGlossary = (term: string) => {
    setSimpleExplanationMap((prev) => ({
      ...prev,
      [term]: !prev[term]
    }));
  };

  const filteredVitiligoTypes = VITILIGO_TYPES.filter((type) => {
    if (vitiligoTypeFilter === 'All') return true;
    return type.category.toLowerCase().includes(vitiligoTypeFilter.toLowerCase());
  });

  const activeInterview =
    ONE_MINUTE_INTERVIEWS.find((p) => p.titleRole === activeInterviewRole) || ONE_MINUTE_INTERVIEWS[0];

  // Specific article subpage check (e.g. /understand-vitiligo/segmental-vitiligo/)
  const isDedicatedSubpage =
    currentPageSeo &&
    currentPath !== '/' &&
    currentPath !== '/understand-vitiligo/' &&
    currentPath !== '/vitiligo-treatment/' &&
    currentPath !== '/vitiligo-nutrition/' &&
    currentPath !== '/living-with-vitiligo/' &&
    currentPath !== '/vitiligo-stories/' &&
    currentPath !== '/skin-tone-and-anatomy/' &&
    currentPath !== '/vitiligo-around-the-world/' &&
    currentPath !== '/patch-diary/' &&
    currentPath !== '/prepare-for-dermatologist-visit/' &&
    currentPath !== '/vitiligo-myths/' &&
    currentPath !== '/vitiligo-fact-or-fiction/' &&
    currentPath !== '/vitiligo-glossary/' &&
    currentPath !== '/vitiligo-research-explained/' &&
    currentPath !== '/sources-and-medical-review/' &&
    currentPath !== '/seo-content-audit/';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans selection:bg-stone-200 selection:text-stone-900">
      {/* Crawlable, 3-zone Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        shelfCount={shelfCount}
        onOpenShelf={() => setShelfOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Router */}
      <div className="flex-1">
        {/* ======================================================== */}
        {/* 404 NOT FOUND VIEW                                       */}
        {/* ======================================================== */}
        {is404 && (
          <main className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mx-auto text-stone-500">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Page Not Found
            </h1>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
              The page you are looking for does not exist or may have moved. Please explore our main educational sections or view our sitemap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => navigate('/')}
                className="px-5 py-2.5 bg-stone-900 text-stone-50 rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
              <button
                onClick={() => navigate('/understand-vitiligo/')}
                className="px-5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>Understand Vitiligo</span>
              </button>
              <button
                onClick={() => navigate('/seo-content-audit/')}
                className="px-5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>View Full SEO Content Map</span>
              </button>
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* DEDICATED SUBPAGE VIEW (AEO & SEO OPTIMIZED)             */}
        {/* ======================================================== */}
        {!is404 && isDedicatedSubpage && currentPageSeo && (
          <AeoArticlePage
            seoPage={currentPageSeo}
            onNavigate={navigate}
            isBookmarked={isBookmarked(currentPageSeo.url)}
            onToggleBookmark={() =>
              toggleBookmark({
                id: currentPageSeo.url,
                title: currentPageSeo.h1,
                category: currentPageSeo.category,
                snippet: currentPageSeo.metaDescription,
                type: 'article'
              })
            }
          />
        )}

        {/* ======================================================== */}
        {/* ROUTE: / (HOME)                                          */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/' && (
          <div className="space-y-20 sm:space-y-28 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-12 sm:pt-20 lg:pt-24 border-b border-stone-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium">
                        Evidence · Community · Living
                      </span>
                      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
                        Understanding vitiligo beyond what you see.
                      </h1>
                    </div>

                    <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-sans">
                      Science, treatment, nutrition, everyday life and real stories — explained simply without medical jargon or false promises.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href="/understand-vitiligo/"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate('/understand-vitiligo/');
                        }}
                        className="px-6 py-3.5 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>UNDERSTAND VITILIGO</span>
                      </a>

                      <a
                        href="/vitiligo-stories/"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate('/vitiligo-stories/');
                        }}
                        className="px-6 py-3.5 bg-white border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-800 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>EXPLORE STORIES</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="pt-4 border-t border-stone-200 flex items-center gap-3 text-xs text-stone-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                      <span>
                        Grounded in consensus dermatology from AAD, DermNet, and peer-reviewed journals.
                      </span>
                    </div>
                  </div>

                  {/* Right Hero Image (Above-the-fold eager load, explicit width/height) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-16/10 lg:aspect-4/3 group">
                      <img
                        src={HERO_IMAGE}
                        alt="Hands showing natural vitiligo pigmentation resting on warm linen fabric"
                        width={600}
                        height={450}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                        <span className="font-serif italic text-stone-200 block">
                          "Skin is a living tapestry, not an immutable paint job."
                        </span>
                      </div>
                    </div>

                    <div className="bg-white border border-stone-200/80 rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
                      <div className="text-[11px] text-stone-500">
                        <span className="font-semibold text-stone-700 block">Universal Prevalence</span>
                        <span>0.5%–2% across all Fitzpatrick skin tones</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#F7D8C4] border border-stone-300" title="Type I-II" />
                        <div className="w-4 h-4 rounded-full bg-[#E5B68A] border border-stone-300" title="Type III" />
                        <div className="w-4 h-4 rounded-full bg-[#B37B4D] border border-stone-300" title="Type IV" />
                        <div className="w-4 h-4 rounded-full bg-[#6B4423] border border-stone-300 relative flex items-center justify-center" title="Type V-VI">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* HOME INTERACTIVE GAME: "VITILIGO: FACT OR FICTION?" */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                  Test Your Understanding
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                  VITILIGO: FACT OR FICTION?
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Put common assumptions to the test. Separate medical evidence from folklore one question at a time.
                </p>
              </div>

              <FactOrFictionGame
                onExploreUnderstand={() => navigate('/understand-vitiligo/')}
              />
            </section>

            {/* HORIZONTAL JOURNEY: "Where are you on your journey?" */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-t border-stone-200/80 pt-16">
                <div className="max-w-2xl mb-8 space-y-2">
                  <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                    Interactive Roadmap
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    Where are you on your journey?
                  </h2>
                  <p className="text-sm text-stone-600">
                    Click any stage to see tailored clinical guidance and direct links to recommended topics.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {JOURNEY_STAGES.map((stage) => {
                    const isSelected = selectedJourneyStage === stage.id;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setSelectedJourneyStage(stage.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-md ring-1 ring-stone-900'
                            : 'bg-white border-stone-200 hover:border-stone-400 text-stone-800'
                        }`}
                      >
                        <div>
                          <span
                            className={`text-xs font-mono font-semibold block mb-2 ${
                              isSelected ? 'text-stone-300' : 'text-stone-400'
                            }`}
                          >
                            {stage.number}
                          </span>
                          <h3 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-tight leading-snug mb-1">
                            {stage.label}
                          </h3>
                          <p
                            className={`text-[11px] leading-relaxed line-clamp-2 ${
                              isSelected ? 'text-stone-300' : 'text-stone-500'
                            }`}
                          >
                            {stage.subtext}
                          </p>
                        </div>

                        <div className="pt-4 flex items-center justify-between text-[11px]">
                          <span className={isSelected ? 'text-stone-200' : 'text-stone-400'}>
                            Select
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedJourneyStage && (
                  <div className="mt-6 p-6 sm:p-8 bg-white border border-stone-200 rounded-2xl shadow-xs space-y-4 animate-in fade-in duration-200">
                    {(() => {
                      const cur = JOURNEY_STAGES.find((s) => s.id === selectedJourneyStage);
                      if (!cur) return null;
                      const targetUrl =
                        cur.targetNav === 'UNDERSTAND'
                          ? '/understand-vitiligo/'
                          : cur.targetNav === 'TREATMENT'
                          ? '/vitiligo-treatment/'
                          : cur.targetNav === 'LIVE WITH IT'
                          ? '/living-with-vitiligo/'
                          : cur.targetNav === 'STORIES'
                          ? '/vitiligo-stories/'
                          : '/skin-tone-and-anatomy/';

                      return (
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="space-y-2 max-w-2xl">
                            <span className="text-xs uppercase font-mono font-bold text-stone-500">
                              Stage {cur.number} · {cur.label}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                              Guidance for this stage:
                            </h3>
                            <p className="text-sm text-stone-700 leading-relaxed font-sans">
                              {cur.advice}
                            </p>
                          </div>

                          <a
                            href={targetUrl}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(targetUrl);
                            }}
                            className="px-5 py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
                          >
                            <span>Explore {cur.targetNav} Section</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </section>

            {/* PEOPLE ASK SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-t border-stone-200/80 pt-16">
                <div className="max-w-2xl mb-8 space-y-2">
                  <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                    Frequently Answered
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    People Ask
                  </h2>
                  <p className="text-sm text-stone-600">
                    Immediate, accurate answers to the most common questions people have after noticing skin pigment changes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PEOPLE_ASK_QUESTIONS.map((qa) => {
                    const isOpen = expandedFaqId === qa.id;
                    return (
                      <div
                        key={qa.id}
                        className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden transition-all shadow-2xs hover:border-stone-300"
                      >
                        <button
                          onClick={() => setExpandedFaqId(isOpen ? null : qa.id)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <div className="space-y-0.5">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold block">
                              {qa.category}
                            </span>
                            <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                              {qa.question}
                            </h3>
                          </div>

                          <div className="p-1 rounded-full text-stone-400 hover:text-stone-700 shrink-0">
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans bg-stone-50/50">
                            {qa.shortAnswer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* STORY OF THE WEEK + RESEARCH SPOTLIGHT */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-t border-stone-200/80 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="uppercase tracking-widest font-mono font-semibold text-stone-700">
                        Story of the Week
                      </span>
                      <span>London, UK · 4 min read</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                      "My hands used to be the first thing I noticed. Now they're just my hands."
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-sans line-clamp-3">
                      "For four years, I wore long sleeves even in scorching July heat and tucked my hands into coat pockets. In university, an art classmate asked if they could draw my hands because the pattern looked like marble veins. That single conversation cracked the cage open."
                    </p>

                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 shrink-0">
                        <img
                          src={STORY_IMAGE}
                          alt="Maya K smiling softly outdoors"
                          width={40}
                          height={40}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-stone-900 block">Maya K.</span>
                        <span className="text-[11px] text-stone-500">Architectural Designer</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                    <a
                      href="/vitiligo-stories/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/vitiligo-stories/');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-700"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() =>
                        toggleBookmark({
                          id: 'story-maya',
                          title: "My hands used to be the first thing I noticed. Now they're just my hands.",
                          category: 'STORIES',
                          snippet: 'Maya K shares her journey from concealing her hands to presenting client pitches with zero camouflage.',
                          type: 'story'
                        })
                      }
                      className="text-stone-400 hover:text-stone-800 transition-colors p-1"
                      title="Save story to shelf"
                    >
                      {isBookmarked('story-maya') ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="uppercase tracking-widest font-mono font-semibold text-stone-500">
                        Research Without the PhD
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                        ESTABLISHED
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                      Targeting the IFN-γ-CXCL10 Chemokine Axis via JAK Inhibition
                    </h3>

                    <div className="space-y-2 text-xs text-stone-700 font-sans">
                      <div>
                        <strong className="text-stone-900">What Scientists Studied:</strong> Topical ruxolitinib in randomized phase 3 double-blind trials.
                      </div>
                      <div>
                        <strong className="text-stone-900">What It Means:</strong> Blocking Janus kinases interrupts the signal that commands immune cells to attack pigment cells.
                      </div>
                      <div>
                        <strong className="text-stone-900">What It Does NOT Mean:</strong> It is not a permanent cure; dormant resident memory cells can persist.
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                    <a
                      href="/vitiligo-research-explained/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/vitiligo-research-explained/');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-700"
                    >
                      <span>Explore Science Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] text-stone-500 font-mono">NEJM Review</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /understand-vitiligo/ (HUB)                       */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/understand-vitiligo/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            <header className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Comprehensive Knowledge Hub
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                UNDERSTAND VITILIGO
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Explore the complete cellular biology, clinical classification, and distinctions between vitiligo and other skin conditions — written in clear, human language.
              </p>
            </header>

            {/* Interactive Feature: UNDER THE PATCH */}
            <UnderThePatchInteractive />

            {/* Subpage links grid */}
            <section className="space-y-6 pt-8 border-t border-stone-200">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                  Specific Classifications & Topics
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  Explore Dedicated Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { title: "Segmental Vitiligo", url: "/understand-vitiligo/segmental-vitiligo/", desc: "Unilateral dermatomal distribution, rapid stabilization, and grafting candidacy." },
                  { title: "Non-Segmental Vitiligo", url: "/understand-vitiligo/non-segmental-vitiligo/", desc: "Bilateral symmetrical patches, autoimmune pathways, and monitoring." },
                  { title: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/", desc: "Complete clinical classification and terminology breakdown." },
                  { title: "Generalized Vitiligo", url: "/understand-vitiligo/generalized-vitiligo/", desc: "Widespread bilateral patches, triggers, and phototherapy considerations." },
                  { title: "Acrofacial Vitiligo", url: "/understand-vitiligo/acrofacial-vitiligo/", desc: "Hands, feet, and periorificial facial pigmentation nuances." },
                  { title: "What Causes Vitiligo?", url: "/understand-vitiligo/what-causes-vitiligo/", desc: "Genetics, cellular oxidative stress, and the Koebner phenomenon." },
                  { title: "Melanocyte Biology", url: "/understand-vitiligo/what-happens-to-melanocytes/", desc: "What happens to pigment cells and follicular stem cell reservoirs." },
                  { title: "Stable vs. Active Vitiligo", url: "/understand-vitiligo/stable-vs-active-vitiligo/", desc: "Why disease velocity dictates medical stabilization before restoration." },
                  { title: "White Patches Compared", url: "/understand-vitiligo/causes-of-lighter-skin-patches/", desc: "Vitiligo vs pityriasis alba, tinea versicolor, and scars." }
                ].map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                    }}
                    className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs hover:border-stone-400 transition-all flex flex-col justify-between group block text-left"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono font-semibold text-stone-500">
                        Detailed Guide
                      </span>
                      <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-stone-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-4 text-xs font-semibold text-stone-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read full page</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-treatment/ (HUB)                         */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-treatment/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            <header className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Clinical Dermatology Toolkit
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                VITILIGO TREATMENT DIRECTORY
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Objective, evidence-based overviews of topicals, light therapy, surgery, and emerging molecular therapies. We do not promise cures or uniform results; every treatment must be evaluated with a qualified dermatologist.
              </p>
            </header>

            <DermVisitPrep />

            <div className="space-y-8 pt-8 border-t border-stone-200">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                  Therapeutic Modalities
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  Detailed Medical Profiles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TREATMENTS_DATA.map((tr) => (
                  <div
                    key={tr.id}
                    className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-5 hover:border-stone-300 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase font-mono font-semibold text-stone-500 tracking-wider">
                          {tr.category}
                        </span>
                        <span className="bg-stone-100 text-stone-800 px-2.5 py-0.5 rounded-md font-medium text-[11px]">
                          {tr.evidenceLevel}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        {tr.name}
                      </h3>

                      <div className="space-y-3 text-xs text-stone-700 leading-relaxed font-sans">
                        <div>
                          <strong className="text-stone-900 block font-medium">WHAT IS IT?</strong>
                          <span>{tr.whatIsIt}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 block font-medium">HOW DOES IT WORK?</strong>
                          <span>{tr.howDoesItWork}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 block font-medium">WHO MAY CONSIDER IT?</strong>
                          <span>{tr.whoMayConsiderIt}</span>
                        </div>
                        <div className="p-3 bg-rose-50/50 border border-rose-200/60 rounded-xl text-rose-950">
                          <strong className="text-rose-900 block font-medium">WHAT ARE THE LIMITATIONS?</strong>
                          <span>{tr.whatAreTheLimitations}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 space-y-2">
                      <strong className="text-xs text-stone-900 block font-semibold">
                        WHAT SHOULD I ASK MY DERMATOLOGIST?
                      </strong>
                      <ul className="space-y-1 text-xs text-stone-600 list-disc list-inside">
                        {tr.whatShouldIAsk.map((q, qIdx) => (
                          <li key={qIdx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-nutrition/ (HUB)                         */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-nutrition/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            <header className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Evidence-Grounded Diet & Micronutrients
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                NUTRITION & VITILIGO
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Separating nutritional health from miracle promises. Learn which micronutrients support general immunity, explore whole foods, and bust viral internet claims.
              </p>
            </header>

            <FoodExplorer />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /living-with-vitiligo/ (HUB)                      */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/living-with-vitiligo/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            <header className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Lifestyle & Everyday Ease
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                LIVING WITH VITILIGO
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Skincare, makeup as a personal choice, fashion, confidence, relationships, work, and travel — practical knowledge for living fully and free of anxiety.
              </p>
            </header>

            <ThingsPeopleSay />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {LIFESTYLE_GUIDES.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5"
                >
                  <div className="space-y-1 border-b border-stone-100 pb-3">
                    <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-stone-500 italic">
                      {guide.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {guide.tips.map((tip, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                          {tip.heading}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">
                          {tip.details}
                        </p>
                      </div>
                    ))}
                  </div>

                  {guide.expertQuote && (
                    <div className="pt-4 border-t border-stone-100">
                      <blockquote className="font-serif italic text-xs text-stone-800 leading-relaxed">
                        "{guide.expertQuote.text}"
                      </blockquote>
                      <span className="text-[11px] text-stone-500 font-sans block mt-1">
                        — {guide.expertQuote.author}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-stories/ (STORIES HUB)                   */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-stories/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            <header className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Community Voices & Perspectives
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                MY SKIN, MY STORY
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Authentic, unfiltered experiences from individuals navigating vitiligo across the world. Real journeys of vulnerability, turning points, and unapologetic self-possession.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMMUNITY_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
                      <div>
                        <span className="font-bold text-stone-900 text-sm block">
                          {story.authorAlias}
                        </span>
                        <span>{story.location} · {story.ageRange}</span>
                      </div>
                      <span className="text-stone-400 font-mono text-[11px]">
                        Noticed: {story.yearNoticed}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
                      "{story.title}"
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      {story.experience}
                    </p>

                    <div className="space-y-2 pt-2 text-xs">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                        <strong className="text-stone-900 block font-medium">Biggest Misconception Faced:</strong>
                        <span className="text-stone-600">{story.biggestMisconception}</span>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                        <strong className="text-stone-900 block font-medium">What I Wish People Knew:</strong>
                        <span className="text-stone-600">{story.wishPeopleKnew}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 italic">
                      Today: {story.whereTheyAreToday}
                    </span>

                    <button
                      onClick={() =>
                        toggleBookmark({
                          id: story.id,
                          title: story.title,
                          category: 'STORIES',
                          snippet: story.experience.substring(0, 100) + '...',
                          type: 'story'
                        })
                      }
                      className="text-stone-400 hover:text-stone-900 p-1 cursor-pointer"
                      title="Save story"
                    >
                      {isBookmarked(story.id) ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Recurring Interviews */}
            <section className="space-y-8 pt-8 border-t border-stone-200">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                  Expert & Creative Dialogues
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  "ONE MINUTE WITH..."
                </h2>
                <p className="text-sm text-stone-600">
                  Rapid-fire insights from dermatologists, psychologists, makeup artists, photographers, and researchers.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs sm:text-sm">
                {ONE_MINUTE_INTERVIEWS.map((profile) => (
                  <button
                    key={profile.id}
                    onClick={() => setActiveInterviewRole(profile.titleRole)}
                    className={`px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeInterviewRole === profile.titleRole
                        ? 'bg-stone-900 text-stone-50 shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    With a {profile.titleRole}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                  <div>
                    <span className="text-xs uppercase font-mono font-semibold text-stone-500">
                      Interviewee Profile
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {activeInterview.name}
                    </h3>
                    <p className="text-xs text-stone-600">
                      {activeInterview.role}
                    </p>
                  </div>

                  <blockquote className="font-serif italic text-xs sm:text-sm text-stone-700 max-w-sm border-l-2 border-stone-800 pl-3">
                    "{activeInterview.quote}"
                  </blockquote>
                </div>

                <div className="space-y-5">
                  {activeInterview.qas.map((qa, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        Q: {qa.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans pl-3 border-l border-stone-200">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /skin-tone-and-anatomy/                           */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/skin-tone-and-anatomy/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <SkinToneExplorer />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-around-the-world/                       */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-around-the-world/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <WorldPerspectiveMap />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /patch-diary/                                     */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/patch-diary/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <PatchDiary />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /prepare-for-dermatologist-visit/                 */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/prepare-for-dermatologist-visit/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <DermVisitPrep />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-myths/                                  */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-myths/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <header className="max-w-3xl space-y-2">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Evidence vs Folklore
              </span>
              <h1 className="font-serif text-4xl font-bold text-stone-900">
                VITILIGO MYTHS DEBUNKED
              </h1>
              <p className="text-sm text-stone-600">
                10 widespread myths about contagion, food causes, hygiene, marriage, and miracle remedies debunked with dermatological citations.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {MYTH_BUSTER_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs space-y-3"
                >
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-rose-800 block">
                      MYTH:
                    </span>
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      "{item.myth}"
                    </h3>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-xl space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-900 block">
                      THE MEDICAL FACT:
                    </span>
                    <p className="text-xs text-emerald-950 font-medium">
                      {item.fact}
                    </p>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed font-sans">
                    {item.explanation}
                  </p>

                  <div className="text-[11px] text-stone-500 font-mono pt-1">
                    Citation: {item.citation}
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-fact-or-fiction/                        */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-fact-or-fiction/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <FactOrFictionGame onExploreUnderstand={() => navigate('/understand-vitiligo/')} />
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-glossary/                               */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-glossary/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <header className="max-w-3xl space-y-2">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Terminology Guide
              </span>
              <h1 className="font-serif text-4xl font-bold text-stone-900">
                A–Z CLINICAL GLOSSARY
              </h1>
              <p className="text-sm text-stone-600">
                Click "Explain It Simply" on any term to toggle between formal medical definitions and plain-language metaphors.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GLOSSARY_TERMS.map((item) => {
                const isSimple = !!simpleExplanationMap[item.term];
                return (
                  <div
                    key={item.term}
                    className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-stone-900">
                          {item.term}
                        </h3>
                        {item.pronunciation && (
                          <span className="text-[11px] font-mono text-stone-400 block">
                            /{item.pronunciation}/
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleSimpleGlossary(item.term)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                          isSimple
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {isSimple ? 'Show Formal' : 'Explain It Simply'}
                      </button>
                    </div>

                    <div className="text-xs text-stone-700 font-sans leading-relaxed">
                      {isSimple ? (
                        <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-amber-950">
                          <strong className="block text-amber-900 font-bold mb-0.5">Simply Put:</strong>
                          {item.simpleExplanation}
                        </div>
                      ) : (
                        <div>
                          <strong className="block text-stone-900 font-bold mb-0.5">Formal Medical Definition:</strong>
                          {item.formalDefinition}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /vitiligo-research-explained/                     */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/vitiligo-research-explained/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <header className="max-w-3xl space-y-2">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Academic Science Made Accessible
              </span>
              <h1 className="font-serif text-4xl font-bold text-stone-900">
                RESEARCH WITHOUT THE PHD
              </h1>
              <p className="text-sm text-stone-600">
                Breaking down recent clinical trials into exact findings, realistic limitations, and what we still don't know.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESEARCH_ARTICLES.map((res) => (
                <div
                  key={res.id}
                  className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-mono">{res.studyYear}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        res.evidenceTier === 'ESTABLISHED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : res.evidenceTier === 'PROMISING'
                          ? 'bg-blue-100 text-blue-800'
                          : res.evidenceTier === 'EARLY RESEARCH'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {res.evidenceTier}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {res.title}
                  </h3>
                  <div className="text-[11px] text-stone-500 font-mono">
                    Journal: {res.journal}
                  </div>

                  <div className="space-y-2.5 text-xs text-stone-700 font-sans leading-relaxed">
                    <div>
                      <strong className="text-stone-900 block font-medium">WHAT SCIENTISTS STUDIED:</strong>
                      <span>{res.whatScientistsStudied}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-medium">WHAT THEY FOUND:</strong>
                      <span>{res.whatTheyFound}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-medium">WHAT IT MEANS:</strong>
                      <span>{res.whatItMeans}</span>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                      <strong className="text-rose-900 block font-medium">WHAT IT DOES NOT MEAN:</strong>
                      <span>{res.whatItDoesNotMean}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-medium">WHY IT MATTERS:</strong>
                      <span>{res.whyItMatters}</span>
                    </div>
                    <div className="text-stone-500 italic">
                      <strong>What we still don't know:</strong> {res.whatWeStillDontKnow}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /sources-and-medical-review/                      */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/sources-and-medical-review/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <header className="max-w-3xl space-y-2">
              <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                Academic Trust & Citations
              </span>
              <h1 className="font-serif text-4xl font-bold text-stone-900">
                SOURCES & MEDICAL REVIEW
              </h1>
              <p className="text-sm text-stone-600">
                Review the peer-reviewed sources, clinical guidelines, and medical societies that inform Beyond The Patch, alongside our strict ethics policy.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MEDICAL_SOURCES_LIST.map((source, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2"
                >
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {source.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {source.description}
                  </p>
                  <div className="text-[11px] text-stone-400 font-mono truncate">
                    {source.url}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
              <strong className="text-stone-900 block font-semibold text-sm">
                Statement on Medical Review & Ethics:
              </strong>
              <p className="leading-relaxed">
                Beyond The Patch is strictly an educational initiative. We do not accept advertising from unregulated skin lightening or "vitiligo cure" manufacturers. Content is periodically synchronized with guidelines from international dermatological societies.
              </p>
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* ROUTE: /seo-content-audit/ (15-COLUMN SEO & AEO AUDIT)   */}
        {/* ======================================================== */}
        {!is404 && currentPath === '/seo-content-audit/' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
            <header className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 tracking-wider">
                  Automated Search Engine Audit
                </span>
                <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                  15 Columns Verified
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                SEO, AEO & URL STRUCTURE AUDIT MATRIX
              </h1>
              <p className="text-sm text-stone-600 leading-relaxed">
                Comprehensive audit table reviewing every public URL, primary & secondary keyword targeting, character counts, H1 uniqueness, canonical resolution, and Schema.org indexability across Beyond The Patch.
              </p>
            </header>

            <SeoAuditTable onNavigate={navigate} />
          </main>
        )}
      </div>

      {/* Crawlable Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(targetSection, id) => {
          // Map to appropriate URL
          if (targetSection === 'UNDERSTAND') {
            navigate('/understand-vitiligo/');
          } else if (targetSection === 'TREATMENT') {
            navigate('/vitiligo-treatment/');
          } else if (targetSection === 'NUTRITION') {
            navigate('/vitiligo-nutrition/');
          } else if (targetSection === 'LIVE WITH IT') {
            navigate('/living-with-vitiligo/');
          } else if (targetSection === 'STORIES') {
            navigate('/vitiligo-stories/');
          } else if (targetSection === 'RESOURCES') {
            navigate('/vitiligo-myths/');
          } else {
            navigate('/');
          }
        }}
      />

      {/* Global Shelf Slide-Over */}
      <MyShelfDrawer
        isOpen={shelfOpen}
        onClose={() => setShelfOpen(false)}
        items={shelfItems}
        onRemoveItem={removeItem}
        onClearAll={clearShelf}
        onOpenArticle={(urlOrSlug) => {
          if (urlOrSlug.startsWith('/')) {
            navigate(urlOrSlug);
          } else {
            setSelectedArticleSlug(urlOrSlug);
          }
        }}
      />

      {/* Article Detail Modal (fallback modal reader) */}
      {activeArticle && (
        <ArticleDetailModal
          article={activeArticle}
          onClose={() => setSelectedArticleSlug(null)}
          onSelectArticle={(slug) => setSelectedArticleSlug(slug)}
          isBookmarked={isBookmarked(activeArticle.slug)}
          onToggleBookmark={() =>
            toggleBookmark({
              id: activeArticle.slug,
              title: activeArticle.title,
              category: activeArticle.category,
              snippet: activeArticle.subtitle,
              type: 'article'
            })
          }
        />
      )}
    </div>
  );
}
