import React from "react";
import { motion } from "framer-motion";

const YEAR_STARTED = 2018;

const milestones = [
  { year: "2016", label: "Moved to Canada from Gujarat, India" },
  { year: "2018", label: "First IBM co-op — no network, figured it out" },
  { year: "2020", label: "Full-time offer at IBM, Ottawa" },
  { year: "2022", label: "Principal Consultant at Oracle" },
  { year: "2024", label: "Support Services Manager at Adobe" },
  { year: "Now", label: "Helping others navigate the same path" },
];

export default function About() {
  const yearsExp = new Date().getFullYear() - YEAR_STARTED;

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
          My Story
        </p>

        {/* Pull quote */}
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mb-16">
          I landed in Canada with a backpack, a student visa, and no network.{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {yearsExp} years later, here's what I learned.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Story text */}
          <div className="space-y-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              The first few months were hard in ways I didn't expect. Not just the weather.
              The silence of having no one to call when you got rejected, no one who understood
              the visa clock ticking, no blueprint for how any of this worked.
            </p>
            <p>
              I said yes to everything that scared me. Co-op applications I thought were out
              of reach. Networking events where I knew nobody. Roles that pushed me past what
              I thought I was ready for.
            </p>
            <p>
              Three IBM co-ops turned into a full-time offer. Oracle deepened my client-facing
              skills. Adobe gave me the enterprise scale I'd been building toward. And somewhere
              along the way, people started asking me how I did it.
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              That's what this site is. The answer to that question.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { n: `${yearsExp}+`, label: "years in tech" },
                { n: "3x", label: "IBM intern" },
                { n: "10+", label: "mentorship calls" },
                { n: "🇮🇳→🇨🇦", label: "Gujarat to Ottawa" },
              ].map(({ n, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-full px-4 py-2"
                >
                  <span className="font-display font-bold text-blue-700 dark:text-blue-400 text-sm">{n}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-5"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-0.5 font-display tracking-wide">
                      {m.year}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{m.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
