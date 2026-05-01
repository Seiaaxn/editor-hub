import { useCallback, useEffect, useState } from "react";

export type EligibilityAnswers = {
  usesAlightMotion: boolean | null;
  noPreset: boolean | null;
  understandsBasics: boolean | null;
  hasOriginalWorks: boolean | null;
  willBeActive: boolean | null;
  respectful: boolean | null;
};

export const EMPTY_ANSWERS: EligibilityAnswers = {
  usesAlightMotion: null,
  noPreset: null,
  understandsBasics: null,
  hasOriginalWorks: null,
  willBeActive: null,
  respectful: null,
};

const STORAGE_KEY = "nexarion:eligibility";

export const ELIGIBILITY_QUESTIONS: { key: keyof EligibilityAnswers; label: string; help?: string }[] = [
  { key: "usesAlightMotion", label: "Saya mengedit menggunakan Alight Motion" },
  { key: "noPreset", label: "Saya TIDAK menggunakan preset orang lain" },
  { key: "understandsBasics", label: "Saya paham basic editing (keyframe, mask, transition)" },
  { key: "hasOriginalWorks", label: "Saya punya minimal 3 karya original siap dikirim" },
  { key: "willBeActive", label: "Saya bersedia aktif dan ikut event/collab" },
  { key: "respectful", label: "Saya sopan, tidak SARA, dan menghormati senior" },
];

export const useEligibility = () => {
  const [answers, setAnswers] = useState<EligibilityAnswers>(EMPTY_ANSWERS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswers({ ...EMPTY_ANSWERS, ...JSON.parse(raw) });
    } catch { /* ignore */ }
  }, []);

  const update = useCallback((key: keyof EligibilityAnswers, value: boolean) => {
    setAnswers((prev) => {
      const next = { ...prev, [key]: value };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setAnswers(EMPTY_ANSWERS);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }, []);

  const answered = ELIGIBILITY_QUESTIONS.filter((q) => answers[q.key] !== null).length;
  const passed = ELIGIBILITY_QUESTIONS.filter((q) => answers[q.key] === true).length;
  const total = ELIGIBILITY_QUESTIONS.length;
  const allAnswered = answered === total;
  const eligible = allAnswered && passed === total;
  const progress = Math.round((answered / total) * 100);

  return { answers, update, reset, answered, passed, total, allAnswered, eligible, progress };
};
