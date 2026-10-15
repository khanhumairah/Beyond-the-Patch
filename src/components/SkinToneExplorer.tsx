import React, { useState } from 'react';
import { SKIN_TONE_DATA, BODY_AREA_DETAILS } from '../data/explore';
import { Info, Sparkles, User, Crosshair } from 'lucide-react';

export const SkinToneExplorer: React.FC = () => {
  const [selectedToneIdx, setSelectedToneIdx] = useState(1);
  const [selectedAreaId, setSelectedAreaId] = useState('face');

  const currentTone = SKIN_TONE_DATA[selectedToneIdx];
  const currentArea = BODY_AREA_DETAILS.find((a) => a.id === selectedAreaId) || BODY_AREA_DETAILS[0];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50">
        <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
          Visual Comparative Study
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          SKIN TONE & ANATOMY EXPLORER
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
          Vitiligo occurs at virtually identical rates across all ethnicities, yet visual contrast, follicular reservoirs, and psychosocial experiences vary across the human spectrum.
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Step 1: Select Fitzpatrick Tone Tier */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-700">
              1. Select Fitzpatrick Phototype:
            </span>
            <span className="text-xs text-stone-500">
              {currentTone.toneName}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SKIN_TONE_DATA.map((tone, idx) => (
              <button
                key={tone.fitzpatrick}
                onClick={() => setSelectedToneIdx(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex items-center justify-between ${
                  selectedToneIdx === idx
                    ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-medium text-stone-500">
                    {tone.fitzpatrick}
                  </div>
                  <div className="font-serif font-semibold text-stone-900 text-sm">
                    {tone.toneName}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {tone.melaninLevel}
                  </div>
                </div>

                {/* Color swatch circle with vitiligo contrast dot */}
                <div
                  className="w-9 h-9 rounded-full border border-stone-300 shadow-2xs relative flex items-center justify-center shrink-0"
                  style={{ backgroundColor: tone.sampleHex }}
                >
                  <div className="w-3.5 h-3.5 bg-white rounded-full border border-stone-300/80 shadow-xs" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Body Area */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-700">
              2. Select Anatomical Body Area:
            </span>
            <span className="text-xs text-stone-500">
              Follicular density varies by area
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {BODY_AREA_DETAILS.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedAreaId(area.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedAreaId === area.id
                    ? 'bg-stone-900 text-stone-50 shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80'
                }`}
              >
                {area.area}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Educational Canvas */}
        <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Visual Contrast & Phototype nuances */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-stone-400"
                style={{ backgroundColor: currentTone.sampleHex }}
              />
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Visual Demarcation on {currentTone.fitzpatrick}
              </h4>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-2">
              <span className="text-xs uppercase font-semibold text-stone-500 block">
                Visual Contrast Dynamics:
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {currentTone.visualContrastDescription}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-2">
              <span className="text-xs uppercase font-semibold text-stone-500 block">
                Clinical Dermatology Nuances:
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {currentTone.clinicalNuances}
              </p>
            </div>
          </div>

          {/* Right: Anatomical & Follicular Reservoir Nuances */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-stone-700" />
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Anatomy Profile: {currentArea.area}
              </h4>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-2">
              <span className="text-xs uppercase font-semibold text-stone-500 block">
                Local Characteristics:
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {currentArea.characteristics}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-2">
              <span className="text-xs uppercase font-semibold text-stone-500 block">
                Follicular Melanocyte Reservoir:
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {currentArea.follicularReservoir}
              </p>
            </div>

            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/60 space-y-1">
              <span className="text-xs uppercase font-bold text-amber-900 block">
                Typical Medical Response Tendency:
              </span>
              <p className="text-xs text-stone-800 leading-relaxed font-sans font-medium">
                {currentArea.typicalResponseRate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-stone-100/60 border-t border-stone-200 text-xs text-stone-500 text-center">
        Every individual's skin is uniquely patterned. Dermatologists use Wood's lamp and clinical history to evaluate individual needs.
      </div>
    </div>
  );
};
