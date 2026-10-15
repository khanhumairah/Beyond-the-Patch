import React, { useState } from 'react';
import {
  NUTRITION_OPENING_STATEMENT,
  ESSENTIAL_NUTRIENTS,
  FOOD_EXPLORER_ITEMS,
  FOOD_MYTH_CLAIMS,
  DIET_BY_VITILIGO_TYPE_EXPLANATION,
  VITILIGO_TYPE_DIET_CARDS
} from '../data/nutrition';
import { Apple, ShieldCheck, AlertCircle, Info, Sparkles, Filter } from 'lucide-react';
import { FoodItem } from '../types';

export const FoodExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeTab, setActiveTab] = useState<'EXPLORER' | 'NUTRIENTS' | 'CLAIMS' | 'BY_TYPE'>('EXPLORER');

  const foodCategories = [
    'ALL',
    'Vegetables',
    'Fruits',
    'Protein',
    'Nuts & Seeds',
    'Whole Grains',
    'Legumes',
    'Healthy Fats'
  ];

  const filteredFoods = FOOD_EXPLORER_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12">
      {/* Paramount Medical Accuracy Banner */}
      <div className="bg-[#FAF8F5] border-2 border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-start gap-3.5">
          <Info className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block">
              Core Medical Foundation
            </span>
            <p className="font-serif text-lg sm:text-xl text-stone-900 leading-relaxed font-medium">
              "{NUTRITION_OPENING_STATEMENT}"
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              No single food, detox drink, or supplement will trigger repigmentation or stop autoimmune T cells. We explore nutrition as a foundation for daily vitality, cellular antioxidant defenses, and preventing deficiencies — alongside evidence-based dermatological care.
            </p>
          </div>
        </div>
      </div>

      {/* Segmented Section Navigation */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl max-w-xl mx-auto overflow-x-auto text-xs sm:text-sm border border-stone-200">
        <button
          onClick={() => setActiveTab('EXPLORER')}
          className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center ${
            activeTab === 'EXPLORER'
              ? 'bg-stone-900 text-stone-50 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Food Explorer
        </button>
        <button
          onClick={() => setActiveTab('NUTRIENTS')}
          className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center ${
            activeTab === 'NUTRIENTS'
              ? 'bg-stone-900 text-stone-50 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          What Your Body Needs
        </button>
        <button
          onClick={() => setActiveTab('CLAIMS')}
          className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center ${
            activeTab === 'CLAIMS'
              ? 'bg-stone-900 text-stone-50 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Food vs. Claim
        </button>
        <button
          onClick={() => setActiveTab('BY_TYPE')}
          className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center ${
            activeTab === 'BY_TYPE'
              ? 'bg-stone-900 text-stone-50 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Diet by Vitiligo Type
        </button>
      </div>

      {/* Tab 1: Food Explorer */}
      {activeTab === 'EXPLORER' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                The Wholesome Food Explorer
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Explore how wholesome foods contribute to daily micronutrient vitality without false cure promises.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
              {foodCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-stone-900 text-stone-50'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFoods.map((food: FoodItem) => (
              <div
                key={food.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-stone-600">
                      {food.category}
                    </span>
                    <span className="text-[11px] font-sans">Whole Food</span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">
                    {food.name}
                  </h4>

                  <div className="mb-3">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                      Key Nutrients:
                    </span>
                    <div className="text-xs text-stone-700 font-medium">
                      {food.keyNutrients.join(' · ')}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                      Why Include In Diet:
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {food.whyInclude}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/80 bg-stone-50/60 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 block mb-0.5">
                    Evidence Status:
                  </span>
                  <p className="text-xs font-medium text-stone-700 italic">
                    "{food.evidenceStatus}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: What Your Body Needs */}
      {activeTab === 'NUTRIENTS' && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              What Your Body Needs: Micronutrient Guide
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Distinguishing what is genuinely important for baseline immune, bone, and metabolic health versus internet claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ESSENTIAL_NUTRIENTS.map((nut, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    {nut.name}
                  </h4>
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-md font-medium">
                    Micronutrient
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-0.5">
                    Biological Role in the Body:
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">
                    {nut.roleInBody}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-0.5">
                    Why It's Discussed in Vitiligo:
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">
                    {nut.whyDiscussedInVitiligo}
                  </p>
                </div>

                <div className="bg-amber-50/50 border border-amber-200/60 p-3 rounded-xl">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-900 block mb-0.5">
                    Evidence Verdict:
                  </span>
                  <p className="text-xs text-stone-800 font-medium font-sans">
                    {nut.evidenceStatus}
                  </p>
                </div>

                <div className="text-xs text-stone-500 pt-1">
                  <strong className="text-stone-700">Whole Food Sources:</strong> {nut.foodSources}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Food vs Claim Mythbuster */}
      {activeTab === 'CLAIMS' && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Food vs. Claim: Debunking Nutrition Myths
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              We break down the most viral dietary claims circulating on social media with rigorous dermatological science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FOOD_MYTH_CLAIMS.map((claim) => (
              <div
                key={claim.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {claim.foodName}
                  </h4>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      claim.scientificConsensus === 'Myth Debunked'
                        ? 'bg-rose-100 text-rose-800'
                        : claim.scientificConsensus === 'No Evidence for Cure'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {claim.scientificConsensus}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-bold text-rose-800 block">
                    The Circulating Claim:
                  </span>
                  <p className="font-serif text-sm font-medium text-stone-900 italic">
                    "{claim.claim}"
                  </p>
                </div>

                <div className="space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-200/70">
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-700 block">
                    Medical Scientific Reality:
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">
                    {claim.evidence}
                  </p>
                </div>

                <div className="text-xs text-stone-600 pt-1">
                  <strong className="text-stone-800 font-medium">Its Realistic Role:</strong> {claim.realisticRole}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Diet by Vitiligo Type */}
      {activeTab === 'BY_TYPE' && (
        <div className="space-y-6">
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Does Your Vitiligo Type Change What You Should Eat?
            </h3>
            <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
              "{DIET_BY_VITILIGO_TYPE_EXPLANATION}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VITILIGO_TYPE_DIET_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-2 hover:border-stone-300 transition-all"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  Clinical Pattern
                </div>
                <h4 className="font-serif text-xl font-bold text-stone-900">
                  {card.type}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans pt-1">
                  {card.guidance}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 text-xs text-stone-600 text-center">
            <strong>Clinical Takeaway:</strong> Tailor your medical treatments (topicals, phototherapy, surgery) to your specific type with a dermatologist, while maintaining a colorful, balanced whole-food diet for overall health.
          </div>
        </div>
      )}
    </div>
  );
};
