"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "innovait_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Show after a short delay so it doesn't clash with first paint
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (value) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 sm:px-0">
      <div className="w-full max-w-3xl bg-surface-elevated border border-subtle shadow-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 text-xs sm:text-sm text-muted font-body">
          <p className="mb-1 text-primary font-semibold">
            We use cookies to improve your experience.
          </p>
          <p>
            We use a small number of cookies for analytics and to remember your theme
            preferences. You can read more in our{" "}
            <Link
              href="/cookie-policy"
              className="text-gold hover:text-gold-light underline underline-offset-4"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 sm:shrink-0">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="px-3 py-2 text-[11px] sm:text-xs font-body tracking-[0.18em] uppercase border border-subtle text-subtle hover:border-gold hover:text-gold transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="px-4 py-2 text-[11px] sm:text-xs font-body tracking-[0.18em] uppercase bg-gold text-navy hover:bg-gold-light transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

