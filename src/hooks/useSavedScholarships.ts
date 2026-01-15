import { useState, useEffect } from "react";

const STORAGE_KEY = "bells-saved-scholarships";

export function useSavedScholarships() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const isSaved = (id: string) => savedIds.includes(id);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const removeSaved = (id: string) => {
    setSavedIds((prev) => prev.filter((i) => i !== id));
  };

  return { savedIds, isSaved, toggleSave, removeSaved };
}
