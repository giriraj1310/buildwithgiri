import React from "react";
import { Link } from "react-scroll";
import { SiAdobe, SiOracle } from "react-icons/si";
import { FaLaptopCode, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const YEAR_STARTED = 2018;
const yearsExp = new Date().getFullYear() - YEAR_STARTED;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden px-6 py-24">

      {/* Dot-grid background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.045)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left column ── */}
        <div>
          {/* Status chip */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Currently at Adobe · Ottawa, Canada
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.08)} className="font-display text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
            I made it.<br />
            Now I'm helping<br />
            <span className="text-blue-400">you do the same.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.16)} className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
            Career advice, resume feedback, and honest conversations for anyone
            trying to break into tech or level up their career.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3 mb-14">
            <a
              href="https://calendly.com/giriraj1310/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition text-sm shadow-lg shadow-blue-900/40"
            >
              <FaCalendarAlt className="text-sm" />
              Book a 1:1 Call
            </a>
            <a
              href="/Bhagat_Giriraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition text-sm"
            >
              <FaFileAlt className="text-sm" />
              View Resume
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-8 text-sm">
            {[
              { value: `${yearsExp}+`, label: "Years in tech" },
              { value: "3x", label: "IBM intern" },
              { value: "10+", label: "Mentorship calls" },
              { value: "3", label: "Companies" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-bold text-2xl text-white">{value}</p>
                <p className="text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column: Bento cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:grid grid-cols-2 gap-3 max-w-sm ml-auto"
        >
          {/* Profile chip */}
          <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-display font-bold text-lg shrink-0">
              GB
            </div>
            <div>
              <p className="font-semibold text-white">Giriraj Bhagat</p>
              <p className="text-xs text-gray-400">Support Services Manager</p>
            </div>
          </div>

          {/* Exp */}
          <div className="bg-blue-600 rounded-2xl p-5">
            <p className="font-display font-bold text-3xl text-white">{yearsExp}+</p>
            <p className="text-xs text-blue-200 mt-1">Years in tech</p>
          </div>

          {/* Location */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
            <span className="text-2xl">🍁</span>
            <p className="text-xs text-gray-400 mt-auto">Ottawa, Canada</p>
          </div>

          {/* Company logos */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Experience</p>
            <div className="flex items-center gap-3 text-xl">
              <SiAdobe className="text-red-500" title="Adobe" />
              <SiOracle className="text-orange-500" title="Oracle" />
              <FaLaptopCode className="text-blue-400" title="IBM" />
            </div>
          </div>

          {/* Journey */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Journey</p>
            <p className="text-sm text-gray-300 mt-2">🇮🇳 → 🇨🇦</p>
          </div>

          {/* Open status */}
          <div className="col-span-2 bg-green-950/60 border border-green-800/40 rounded-2xl p-4 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <p className="text-sm text-green-300">Open to mentorship calls</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Link to="about" smooth duration={600} offset={-60} className="cursor-pointer">
          <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
