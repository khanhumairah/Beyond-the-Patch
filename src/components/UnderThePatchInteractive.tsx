import React, { useState } from 'react';
import { Layers, ShieldAlert, Sparkles, Activity, Info } from 'lucide-react';

export const UnderThePatchInteractive: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<'SKIN' | 'MELANOCYTE' | 'MELANIN' | 'IMMUNE'>('MELANOCYTE');
  const [viewMode, setViewMode] = useState<'NORMAL' | 'VITILIGO'>('VITILIGO');

  const layerDetails = {
    SKIN: {
      title: "The Epidermal & Dermal Barrier",
      summary: "Human skin consists of layered cellular architectures. The top epidermis contains keratinocytes that form the waterproof protective shield, while the basal layer houses melanocytes.",
      normalState: "The epidermis is populated by active melanocytes evenly distributing melanosome pigment granules across surrounding keratinocytes.",
      vitiligoState: "The physical architecture of the skin remains intact and healthy. The stratum corneum is neither thinned nor scaly; only the pigment-producing cells in the basal layer are absent."
    },
    MELANOCYTE: {
      title: "Melanocyte (Pigment Cell)",
      summary: "Specialized dendritic cells that reside along the basement membrane of the epidermis and hair follicles. They manufacture melanin inside tiny internal compartments called melanosomes.",
      normalState: "Functional melanocytes extend long dendritic arms to touch and nourish up to 36 neighboring skin cells with melanin packages.",
      vitiligoState: "Autoreactive CD8+ T cells target surface antigens on melanocytes, leading them to detach, undergo apoptosis (cell death), or enter dormancy. However, hair follicle root reservoirs often remain intact."
    },
    MELANIN: {
      title: "Melanin (Natural Biological Shield)",
      summary: "Complex organic biopolymers (eumelanin and pheomelanin) that absorb and scatter ultraviolet radiation while providing the natural baseline color of skin, hair, and eyes.",
      normalState: "Melanin granules sit like micro-umbrellas directly above the nuclear DNA of skin cells, absorbing >99% of UV rays.",
      vitiligoState: "In the absence of melanocytes, melanin cannot be synthesized in that patch. This leaves the skin chalk-white and with an intrinsic SPF of 1, susceptible to rapid solar sunburn."
    },
    IMMUNE: {
      title: "The Adaptive Immune System",
      summary: "Cytotoxic T cells (CD8+ lymphocytes), interferon-gamma (IFN-γ), and chemokines (CXCL9 & CXCL10) designed to protect the body from viral threats.",
      normalState: "Immune surveillance cells circulate through the dermis peacefully, maintaining tolerance and ignoring normal self-antigens on melanocytes.",
      vitiligoState: "T cells mistakenly recognize melanocyte proteins as dangerous threats. They secrete IFN-γ and CXCL10, directing targeted immune cells to clear melanocytes from the epidermis."
    }
  };

  const activeInfo = layerDetails[selectedLayer];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
            Interactive Skin Cross-Section
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            UNDER THE PATCH
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Click any anatomical component below to explore the cellular dance between pigment cells, melanin, and the immune system.
          </p>
        </div>

        {/* Normal vs Vitiligo Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl self-start md:self-auto border border-stone-300/40">
          <button
            onClick={() => setViewMode('NORMAL')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'NORMAL'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Normal Pigmentation
          </button>
          <button
            onClick={() => setViewMode('VITILIGO')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'VITILIGO'
                ? 'bg-stone-900 text-stone-50 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Vitiligo Condition
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram and Layers */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Schematic Diagram (SVG based) */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
            <span className="font-mono uppercase tracking-wider font-medium">
              Mode: {viewMode === 'NORMAL' ? 'Standard Epidermis' : 'Vitiligo Patch Area'}
            </span>
            <span className="text-[11px] text-stone-400">Simplified Biological Cross-Section</span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full aspect-16/10 rounded-xl bg-white border border-stone-200/60 p-4 relative flex flex-col justify-between overflow-hidden shadow-2xs">
            {/* Stratum Corneum (Outer Layer) */}
            <div className="w-full h-8 rounded-lg bg-stone-100 border border-stone-300/60 flex items-center justify-between px-3 text-[11px] font-medium text-stone-600">
              <span>Stratum Corneum (Dead Outer Cells)</span>
              <span className="text-stone-400">Surface</span>
            </div>

            {/* Epidermis with Keratinocytes & Melanin granules */}
            <div className="my-2 flex-1 rounded-lg border border-dashed border-stone-200 bg-stone-50/70 p-3 relative flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>Epidermis (Keratinocyte Layer)</span>
                {viewMode === 'NORMAL' ? (
                  <span className="text-amber-800 font-medium">Dense Melanin Shields Active</span>
                ) : (
                  <span className="text-stone-400 font-medium">Depigmented (Zero Melanin)</span>
                )}
              </div>

              {/* Cellular representation */}
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 my-auto py-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-md border flex items-center justify-center transition-all duration-300 ${
                      viewMode === 'NORMAL'
                        ? 'bg-amber-100/80 border-amber-300/80 text-amber-900'
                        : 'bg-white border-stone-200 text-stone-300'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        viewMode === 'NORMAL' ? 'bg-amber-700' : 'bg-transparent'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Basal Layer with Melanocytes */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-stone-600">Basal Layer:</span>
                  {viewMode === 'NORMAL' ? (
                    <div className="flex items-center gap-1.5 text-xs text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Melanocyte Producing Melanosomes</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                      <span>Melanocytes Absent in Epidermis</span>
                    </div>
                  )}
                </div>

                {viewMode === 'VITILIGO' && (
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 italic">
                    <span>*Follicular reservoir survives</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dermis & Immune Cell Infiltration Layer */}
            <div
              className={`w-full p-2.5 rounded-lg border transition-all ${
                viewMode === 'VITILIGO' && selectedLayer === 'IMMUNE'
                  ? 'bg-red-50/70 border-red-200 text-red-900'
                  : 'bg-stone-100/80 border-stone-200 text-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Activity className="w-3.5 h-3.5 text-stone-600" />
                  <span>Dermis & Micro-Vessels</span>
                </div>
                {viewMode === 'VITILIGO' ? (
                  <span className="text-red-700 font-semibold text-[11px] flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" />
                    <span>CD8+ T-Cells & CXCL10 Signaling</span>
                  </span>
                ) : (
                  <span className="text-emerald-700 font-medium">Immune Homeostasis</span>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Layer Click Bar */}
          <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
            <span>Select component to inspect:</span>
            <span className="font-medium text-stone-900 underline underline-offset-4">
              {activeInfo.title}
            </span>
          </div>
        </div>

        {/* Layer Selector & Educational Insight Box */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'SKIN' as const, label: 'Skin Architecture', icon: Layers },
              { id: 'MELANOCYTE' as const, label: 'Melanocytes', icon: Sparkles },
              { id: 'MELANIN' as const, label: 'Melanin Pigment', icon: Info },
              { id: 'IMMUNE' as const, label: 'Immune System', icon: ShieldAlert }
            ].map((btn) => {
              const Icon = btn.icon;
              const isSelected = selectedLayer === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setSelectedLayer(btn.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`} />
                  <span className="text-xs font-semibold">{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Info Card */}
          <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-xl p-5 space-y-3">
            <h4 className="font-serif font-bold text-lg text-stone-900">
              {activeInfo.title}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              {activeInfo.summary}
            </p>

            <div className="pt-2 border-t border-stone-200/70 space-y-2">
              <div className="text-xs">
                <span className="font-semibold text-stone-800 block mb-0.5">
                  {viewMode === 'NORMAL' ? 'In Normal Pigmentation:' : 'In Vitiligo Skin:'}
                </span>
                <p className="text-stone-600 leading-relaxed">
                  {viewMode === 'NORMAL' ? activeInfo.normalState : activeInfo.vitiligoState}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
