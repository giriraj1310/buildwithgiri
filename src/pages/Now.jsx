import React from "react";
import { Link as RouterLink } from "react-router-dom";

// ── UPDATE THIS PAGE MONTHLY ──────────────────────────────────────────────────
// This is your /now page. Think of it as a public status update.
// Change the LAST_UPDATED date and the content below whenever things shift.
// Keep it honest and brief — that's what makes /now pages valuable.
// ─────────────────────────────────────────────────────────────────────────────

const LAST_UPDATED = "April 2026";

const now = {
  working_on: [
    "Scaling enterprise support operations at Adobe",
    "This site — improving it one feature at a time",
    "Writing more posts about real career lessons",
  ],
  reading: [
    "The Coaching Habit — Michael Bungay Stanier",
    "Substack newsletters on tech leadership and career growth",
  ],
  thinking_about: [
    "What it actually means to build a personal brand vs just posting online",
    "How to make mentorship more accessible, not just 1:1 calls",
    "The gap between advice that sounds good and advice that works",
  ],
  available_for: [
    "30-min career conversations (book via Calendly)",
    "Resume and LinkedIn profile reviews",
    "Quick email questions — I try to reply to all of them",
  ],
};

export default function Now() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-body transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Back */}
        <RouterLink
          to="/"
          className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:opacity-80 transition mb-12"
        >
          ← buildwithgiri
        </RouterLink>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Now
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            What I'm focused on right now.{" "}
            <span className="italic">Last updated: {LAST_UPDATED}.</span>
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 transition"
            >
              Derek Sivers' /now movement.
            </a>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          <NowSection
            emoji="💼"
            title="Working on"
            items={now.working_on}
          />
          <NowSection
            emoji="📚"
            title="Reading"
            items={now.reading}
          />
          <NowSection
            emoji="🧠"
            title="Thinking about"
            items={now.thinking_about}
          />

          {/* Available for — slightly different treatment */}
          <div>
            <h2 className="flex items-center gap-2 font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
              <span>📬</span> Available for
            </h2>
            <ul className="space-y-3">
              {now.available_for.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 shrink-0">✓</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/giriraj1310/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition"
              >
                📅 Book a call
              </a>
              <a
                href="mailto:buildwithgiri@gmail.com"
                className="inline-block px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 text-sm rounded-lg transition"
              >
                ✉️ Send an email
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            This page lives at buildwithgiri.com/now — it's a snapshot, not a full biography.
            For the full story, check the{" "}
            <RouterLink to="/" className="underline hover:text-blue-500 transition">
              home page.
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  );
}

function NowSection({ emoji, title, items }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
        <span>{emoji}</span> {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-blue-500 mt-1.5 shrink-0 text-xs">●</span>
            <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
