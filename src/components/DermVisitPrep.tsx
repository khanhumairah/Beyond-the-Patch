import React, { useState } from 'react';
import { DERM_VISIT_CHECKLIST_QUESTIONS } from '../data/treatments';
import { CheckSquare, Square, Plus, Copy, Check, Printer, FileText } from 'lucide-react';

export const DermVisitPrep: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [customQuestions, setCustomQuestions] = useState<string[]>([
    "Is my vitiligo currently showing signs of being active or stable?",
    "Which topical or light therapy options are best suited for my patch locations?",
    "Should we do a routine blood check for thyroid antibody levels?"
  ]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [copied, setCopied] = useState(false);

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;
    setCustomQuestions([...customQuestions, newQuestionText.trim()]);
    setNewQuestionText('');
  };

  const handleRemoveQuestion = (idx: number) => {
    setCustomQuestions(customQuestions.filter((_, i) => i !== idx));
  };

  const handleCopySummary = () => {
    const checklistText = DERM_VISIT_CHECKLIST_QUESTIONS.map(
      (q, i) => `[${checkedItems[i] ? 'X' : ' '}] ${q}`
    ).join('\n');

    const questionsText = customQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n');

    const fullExport = `BEYOND THE PATCH — DERMATOLOGIST VISIT PREPARATION\n\nCHECKLIST ITEMS REVIEWED:\n${checklistText}\n\nQUESTIONS TO ASK MY DERMATOLOGIST:\n${questionsText}\n\nGenerated for personal consultation.`;

    navigator.clipboard.writeText(fullExport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
            Clinical Preparation Guide
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            BEFORE YOUR DERMATOLOGIST VISIT
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Arrive organized, confident, and prepared with clear clinical history and your most important questions.
          </p>
        </div>

        <button
          onClick={handleCopySummary}
          className="px-4 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 self-start sm:self-auto shadow-2xs"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Visit Summary'}</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Checklist Section */}
        <div>
          <h4 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-stone-700" />
            <span>History & Symptom Checklist</span>
          </h4>
          <p className="text-xs text-stone-500 mb-4">
            Mark the items you are ready to describe during your examination:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DERM_VISIT_CHECKLIST_QUESTIONS.map((question, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    isChecked
                      ? 'bg-stone-50 border-stone-800 text-stone-900'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-stone-900">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-stone-900" />
                    ) : (
                      <Square className="w-4 h-4 text-stone-400" />
                    )}
                  </div>
                  <span className="text-xs font-sans leading-relaxed">
                    {question}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Questions Section */}
        <div className="pt-6 border-t border-stone-200 space-y-4">
          <h4 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
            <span>Questions I Want to Ask</span>
          </h4>

          <div className="space-y-2">
            {customQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs text-stone-800"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-stone-400 font-semibold">{idx + 1}.</span>
                  <span className="font-sans">{q}</span>
                </div>
                <button
                  onClick={() => handleRemoveQuestion(idx)}
                  className="text-stone-400 hover:text-red-600 transition-colors text-xs font-medium px-2 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add custom question input */}
          <form onSubmit={handleAddQuestion} className="flex gap-2">
            <input
              type="text"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Type your own custom question to ask..."
              className="flex-1 bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-hidden"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Question</span>
            </button>
          </form>
        </div>
      </div>

      <div className="px-6 py-4 bg-stone-100/60 border-t border-stone-200 text-xs text-stone-500 text-center">
        Taking an active, informed role in your medical appointments creates the strongest foundation for treatment success.
      </div>
    </div>
  );
};
