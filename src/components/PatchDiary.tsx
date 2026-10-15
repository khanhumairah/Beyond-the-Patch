import React, { useState, useEffect } from 'react';
import { DiaryEntry } from '../types';
import { Calendar, Plus, Trash2, ShieldCheck, Clock, FileText } from 'lucide-react';

const DIARY_STORAGE_KEY = 'beyond_the_patch_diary_v1';

const INITIAL_DEMO_ENTRIES: DiaryEntry[] = [
  {
    id: 'entry-1',
    date: '2026-01-14',
    bodyArea: 'Right Knuckles & Wrist',
    observation: 'First noticed a small dime-sized lighter macule under natural window light. No itch or pain.',
    treatmentOrAppointment: 'Scheduled first consultation with Dr. Henderson.',
    personalNotes: 'Felt a bit nervous initially; taking clear photos with natural light to monitor.'
  },
  {
    id: 'entry-2',
    date: '2026-03-02',
    bodyArea: 'Hands & Face',
    observation: 'Wood’s lamp confirmed well-demarcated non-segmental vitiligo patches.',
    treatmentOrAppointment: 'Dermatologist visit: prescribed topical calcineurin inhibitor (tacrolimus 0.1%) twice daily.',
    personalNotes: 'Relieved to have a clear diagnosis and understand that it is non-contagious and autoimmune.'
  },
  {
    id: 'entry-3',
    date: '2026-06-20',
    bodyArea: 'Face (Upper Lip)',
    observation: 'Noticing tiny follicular pigment dots reappearing near the lip border.',
    treatmentOrAppointment: 'Discussing low-dose narrowband UVB phototherapy sessions 2x/week.',
    personalNotes: 'Feeling much more confident. SPF 50 mineral sunscreen is now an easy daily habit.'
  }
];

export const PatchDiary: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>(() => {
    try {
      const saved = localStorage.getItem(DIARY_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ENTRIES;
    } catch {
      return INITIAL_DEMO_ENTRIES;
    }
  });

  const [isAdding, setIsAdding] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [bodyArea, setBodyArea] = useState('Hands & Wrists');
  const [observation, setObservation] = useState('');
  const [treatment, setTreatment] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.warn('Failed to save diary:', e);
    }
  }, [entries]);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!observation.trim()) return;

    const newEntry: DiaryEntry = {
      id: `entry-${Date.now()}`,
      date,
      bodyArea,
      observation: observation.trim(),
      treatmentOrAppointment: treatment.trim(),
      personalNotes: notes.trim()
    };

    setEntries([newEntry, ...entries]);
    setObservation('');
    setTreatment('');
    setNotes('');
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
            Personal Organization Journal
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            PATCH DIARY
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            A private timeline to document your personal observations, doctor visits, and routines over time.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 self-start md:self-auto shadow-2xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel Entry' : 'Log New Observation'}</span>
        </button>
      </div>

      {/* Mandatory Safety Notice */}
      <div className="px-6 sm:px-8 py-3.5 bg-amber-50/50 border-b border-amber-200/60 flex items-center gap-2 text-xs text-amber-900">
        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
        <span>
          <strong>Medical Privacy & Safety Note:</strong> This is a personal organizational tracking tool stored exclusively on your device browser. It is not an automated diagnostic system and does not replace medical review.
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* New Entry Form */}
        {isAdding && (
          <form
            onSubmit={handleAddEntry}
            className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 space-y-4 animate-in fade-in duration-200"
          >
            <h4 className="font-serif font-bold text-lg text-stone-900">
              New Timeline Record
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Body Area
                </label>
                <select
                  value={bodyArea}
                  onChange={(e) => setBodyArea(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option>Face & Lips</option>
                  <option>Hands & Wrists</option>
                  <option>Arms & Elbows</option>
                  <option>Knees & Legs</option>
                  <option>Trunk & Abdomen</option>
                  <option>Scalp & Hair (Poliosis)</option>
                  <option>Other / Multiple Areas</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Visual Observation
              </label>
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Describe any size changes, border sharpness, or color changes noticed..."
                rows={2}
                className="w-full bg-white border border-stone-300 rounded-lg p-3 text-xs text-stone-900 focus:outline-hidden"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Treatment / Doctor Appointment (Optional)
                </label>
                <input
                  type="text"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  placeholder="e.g. Started tacrolimus ointment; Wood's lamp check"
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Personal Mindset / Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Felt relaxed outdoors; using SPF 50 daily"
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-stone-900 text-stone-50 rounded-lg text-xs font-semibold hover:bg-stone-800"
              >
                Save Record
              </button>
            </div>
          </form>
        )}

        {/* Timeline Stream */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
          {entries.map((entry) => (
            <div key={entry.id} className="relative pl-9 group">
              {/* Timeline circle node */}
              <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-stone-900 border-2 border-white shadow-xs" />

              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs hover:border-stone-300 transition-all">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-stone-800">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span>·</span>
                    <span className="font-semibold text-stone-700">
                      {entry.bodyArea}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-stone-300 hover:text-red-600 transition-colors p-1"
                    title="Delete record"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed mb-3">
                  {entry.observation}
                </p>

                {(entry.treatmentOrAppointment || entry.personalNotes) && (
                  <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {entry.treatmentOrAppointment && (
                      <div className="text-stone-600">
                        <strong className="text-stone-700 font-medium">Care/Visit:</strong> {entry.treatmentOrAppointment}
                      </div>
                    )}
                    {entry.personalNotes && (
                      <div className="text-stone-600">
                        <strong className="text-stone-700 font-medium">Note:</strong> {entry.personalNotes}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
