import React, { useState } from 'react';
import { THINGS_PEOPLE_SAY } from '../data/lifestyle';
import { MessageSquare, Heart, Shield, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';

export const ThingsPeopleSay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedResponseIdx, setSelectedResponseIdx] = useState(0);

  const currentScenario = THINGS_PEOPLE_SAY[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % THINGS_PEOPLE_SAY.length);
    setSelectedResponseIdx(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + THINGS_PEOPLE_SAY.length) % THINGS_PEOPLE_SAY.length);
    setSelectedResponseIdx(0);
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
            Interactive Social Dialogue
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            THINGS PEOPLE SAY
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Practical responses, validating how awkward comments feel, and gentle ways to respond on your own terms.
          </p>
        </div>

        {/* Counter & Navigation Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-mono font-medium text-stone-500 mr-2 tabular-nums">
            {currentIndex + 1} of {THINGS_PEOPLE_SAY.length}
          </span>
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
            title="Previous situation"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
            title="Next situation"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Card */}
      <div className="p-6 sm:p-8 md:p-10 space-y-8">
        {/* What someone might say */}
        <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 sm:p-8 relative">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <MessageSquare className="w-4 h-4 text-stone-600" />
            <span>What someone might say:</span>
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">
            "{currentScenario.statement}"
          </blockquote>
          <p className="text-xs text-stone-500 italic">
            Typical context: {currentScenario.context}
          </p>
        </div>

        {/* Two-column layout: How it might feel & One possible response */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* How it might feel */}
          <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700">
              <Heart className="w-4 h-4 text-rose-600" />
              <span>How it might feel:</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {currentScenario.howItMightFeel}
            </p>
          </div>

          {/* Perspective Tip */}
          <div className="bg-amber-50/40 border border-amber-200/60 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>Perspective note:</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {currentScenario.perspectiveTip}
            </p>
          </div>
        </div>

        {/* Responses selector */}
        <div className="pt-4 border-t border-stone-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700">
              <Shield className="w-4 h-4 text-stone-600" />
              <span>Choose a response style:</span>
            </div>
          </div>

          {/* Response style tabs */}
          <div className="flex flex-wrap gap-2">
            {currentScenario.responseOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedResponseIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedResponseIdx === idx
                    ? 'bg-stone-900 text-stone-50 shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/70'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Response Text Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <div className="text-xs font-medium text-stone-500 mb-1">
              Sample response ({currentScenario.responseOptions[selectedResponseIdx].label}):
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-900 italic leading-relaxed">
              "{currentScenario.responseOptions[selectedResponseIdx].text}"
            </p>
          </div>
        </div>
      </div>

      {/* Footer navigation rail */}
      <div className="px-6 py-4 bg-stone-100/60 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
        <span>You never owe anyone a medical lecture; answer however feels right to you.</span>
        <button
          onClick={handleNext}
          className="font-semibold text-stone-900 hover:underline flex items-center gap-1"
        >
          <span>Next situation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
