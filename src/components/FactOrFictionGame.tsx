import React, { useState } from 'react';
import { FACT_QUESTIONS } from '../data/factsAndFiction';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, BookOpen, Award } from 'lucide-react';

interface FactOrFictionGameProps {
  onExploreUnderstand: () => void;
  compact?: boolean;
}

export const FactOrFictionGame: React.FC<FactOrFictionGameProps> = ({
  onExploreUnderstand,
  compact = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = FACT_QUESTIONS[currentIndex];

  const handleAnswer = (choice: boolean) => {
    if (selectedAnswer !== null) return; // already answered
    setSelectedAnswer(choice);
    if (choice === currentQuestion.isFact) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < FACT_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const percentage = Math.round((score / FACT_QUESTIONS.length) * 100);
    return (
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mx-auto mb-4 text-stone-800">
          <Award className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1 block">
          Quiz Completed
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
          Your Score: {score}/{FACT_QUESTIONS.length}
        </h3>

        <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
          {percentage >= 80
            ? "Impressive knowledge! You clearly recognize the scientific distinctions and separate facts from persistent folklore."
            : percentage >= 50
            ? "Great effort! You understand many key principles, and our educational guides are here to clarify the rest."
            : "Vitiligo is surrounded by widespread myths. Exploring our medical guides will clear up common misunderstandings."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onExploreUnderstand}
            className="w-full sm:w-auto px-6 py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Understand Vitiligo</span>
          </button>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 border border-stone-200 hover:bg-stone-100 text-stone-800 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.isFact;

  return (
    <div className={`bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden ${compact ? 'p-6' : 'p-6 sm:p-8 md:p-10'} max-w-3xl mx-auto`}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-stone-200/80 pb-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
            Interactive Fact Check
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
            Vitiligo: Fact or Fiction?
          </h3>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-medium text-stone-600">
            Question {currentIndex + 1} / {FACT_QUESTIONS.length}
          </span>
          <div className="w-24 sm:w-32 h-1.5 bg-stone-100 rounded-full mt-1.5 overflow-hidden border border-stone-200/50">
            <div
              className="h-full bg-stone-800 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / FACT_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Statement Card */}
      <div className="py-2 mb-6">
        <span className="text-xs font-medium text-stone-500 block mb-2">
          Category: {currentQuestion.category}
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug font-medium">
          "{currentQuestion.statement}"
        </blockquote>
      </div>

      {/* Choice Buttons */}
      {!isAnswered ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 my-6">
          <button
            onClick={() => handleAnswer(true)}
            className="py-3.5 px-4 rounded-xl border border-stone-300 hover:border-stone-900 hover:bg-stone-50 text-stone-900 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>FACT</span>
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="py-3.5 px-4 rounded-xl border border-stone-300 hover:border-stone-900 hover:bg-stone-50 text-stone-900 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>FICTION</span>
          </button>
        </div>
      ) : (
        /* Revealed Answer & Explanation */
        <div className="my-6 space-y-4 animate-in fade-in duration-200">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              currentQuestion.isFact
                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                : 'bg-amber-50/60 border-amber-200 text-amber-900'
            }`}
          >
            {currentQuestion.isFact ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-serif font-bold text-base mb-0.5">
                {currentQuestion.isFact ? "FACT ✅" : "FICTION ❌"}
                <span className="ml-2 font-sans font-normal text-xs text-stone-600">
                  {isCorrect ? "(You answered correctly!)" : "(Incorrect choice)"}
                </span>
              </div>
              <p className="text-sm text-stone-800 leading-relaxed font-sans">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>

          <p className="text-xs text-stone-500 bg-stone-100/60 p-3 rounded-lg border border-stone-200/50 leading-relaxed">
            <strong className="text-stone-700 font-medium">Medical Context:</strong> {currentQuestion.detailedContext}
          </p>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>{currentIndex < FACT_QUESTIONS.length - 1 ? 'Next Question' : 'View Final Score'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer hint */}
      <div className="text-[11px] text-stone-600 pt-3 border-t border-stone-200/60 flex items-center justify-between">
        <span>Grounded in dermatology consensus guidelines</span>
        <span className="font-mono tabular-nums">Current Score: {score}</span>
      </div>
    </div>
  );
};
