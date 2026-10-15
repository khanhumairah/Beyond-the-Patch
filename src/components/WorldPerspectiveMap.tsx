import React, { useState } from 'react';
import { WORLD_REGIONS } from '../data/explore';
import { Globe, HeartHandshake, Compass, Users } from 'lucide-react';

export const WorldPerspectiveMap: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState('india');

  const activeRegion = WORLD_REGIONS.find((r) => r.id === selectedRegionId) || WORLD_REGIONS[0];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
            Global Community & Culture
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            VITILIGO AROUND THE WORLD
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            How different societies understand, advocate for, and live with vitiligo — from policy advocacy to World Vitiligo Day movements.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs self-start sm:self-auto">
          <Globe className="w-4 h-4 text-stone-700" />
          <span>World Vitiligo Day: June 25</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Region selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs sm:text-sm">
          {WORLD_REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegionId(region.id)}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                selectedRegionId === region.id
                  ? 'bg-stone-900 text-stone-50 shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/70'
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>

        {/* Region Profile Showcase */}
        <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-4">
            <div>
              <span className="text-xs uppercase font-mono font-medium text-stone-500">
                Regional Focus
              </span>
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                {activeRegion.region}
              </h4>
            </div>

            <div className="text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 font-mono">
              <strong>Epidemiology:</strong> {activeRegion.prevalenceRange}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cultural Perspectives */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-stone-600 tracking-wider">
                <Compass className="w-4 h-4 text-stone-700" />
                <span>Cultural Context & History:</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {activeRegion.culturalPerspective}
              </p>
            </div>

            {/* Advocacy Highlights */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-stone-600 tracking-wider">
                <HeartHandshake className="w-4 h-4 text-stone-700" />
                <span>Advocacy & Medical Advances:</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {activeRegion.advocacyHighlights}
              </p>
            </div>

            {/* Community Initiatives */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-stone-600 tracking-wider">
                <Users className="w-4 h-4 text-stone-700" />
                <span>Grassroots Community Action:</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {activeRegion.communityInitiatives}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-stone-100/60 border-t border-stone-200 text-xs text-stone-500 text-center">
        Every culture is evolving toward greater empathy, body neutrality, and shared scientific understanding.
      </div>
    </div>
  );
};
