import React from "react";
import { motion } from "framer-motion";
import { wins } from "../data/wins";
import type { WinCategory } from "../types";

const categoryColor: Record<WinCategory, string> = {
  "first-job": "bg-green-900/30 text-green-400 border-green-800/40",
  "internship": "bg-blue-900/30 text-blue-400 border-blue-800/40",
  "promotion": "bg-purple-900/30 text-purple-400 border-purple-800/40",
  "offer": "bg-amber-900/30 text-amber-400 border-amber-800/40",
  "pivot": "bg-pink-900/30 text-pink-400 border-pink-800/40",
};

const categoryLabel: Record<WinCategory, string> = {
  "first-job": "First job",
  "internship": "Internship",
  "promotion": "Promotion",
  "offer": "Offer",
  "pivot": "Career pivot",
};

export default function WallOfWins() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white transition-colors duration-200">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
          Wall of Wins
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-xl">
            People I've helped{" "}
            <span className="text-blue-400">make their move.</span>
          </h2>
          <a
            href="mailto:buildwithgiri@gmail.com?subject=My Win&body=Hey Giri, I wanted to share a win..."
            className="shrink-0 inline-flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-xl transition"
          >
            🎉 Share your win
          </a>
        </div>

        {/* Win cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wins.map((win, i) => (
            <motion.div
              key={win.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.07] transition"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center font-display font-bold text-sm text-blue-300">
                    {win.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {win.name} {win.flag}
                    </p>
                    <p className="text-xs text-gray-500">{win.company}</p>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColor[win.category]}`}>
                  {categoryLabel[win.category]}
                </span>
              </div>

              {/* Achievement */}
              <p className="font-display font-semibold text-white text-base leading-snug">
                {win.achievement}
              </p>

              {/* Quote */}
              <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 italic">
                "{win.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Had a call with Giri that made a difference?
          </p>
          <a
            href="mailto:buildwithgiri@gmail.com?subject=My Win&body=Hey Giri, I wanted to share a win..."
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition shadow-lg shadow-blue-900/30"
          >
            🎉 Add your win to the wall
          </a>
        </div>
      </div>
    </section>
  );
}
