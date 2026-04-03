import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const STATUSES = [
  { icon: "🏢", text: "Working at Adobe" },
  { icon: "🤝", text: "Open to mentoring" },
  { icon: "✍️", text: "Writing on the blog" },
  { icon: "☕", text: "Probably drinking coffee" },
  { icon: "📍", text: "Based in Canada 🍁" },
];

// Seeded by day so it's stable per day, changes daily
const QUOTES = [
  "Your accent is not a disadvantage. It's proof you speak more than one language.",
  "The offer letter doesn't care about your GPA. Your portfolio does.",
  "Every senior dev you admire was once the confused junior you are now.",
  "Networking is not who you know — it's who thinks of you when an opportunity appears.",
  "Canada didn't build itself. Neither will your career. Show up anyway.",
  "The best time to start was yesterday. The next best time is right now.",
  "Confidence isn't the absence of doubt. It's deciding to go anyway.",
];

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const NAV_LINKS = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "career", label: "Career" },
  { to: "blog", label: "Blog" },
  { to: "contact", label: "Contact" },
];

export default function Footer() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [heartCount, setHeartCount] = useState(
    () => parseInt(localStorage.getItem("giri_hearts") || "0")
  );
  const [showHeartTooltip, setShowHeartTooltip] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  const year = new Date().getFullYear();
  const dayOfYear = Math.floor(
    (Date.now() - new Date(year, 0, 0).getTime()) / 86_400_000
  );
  const quote = QUOTES[dayOfYear % QUOTES.length];

  // Rotate status every 3s
  useEffect(() => {
    const id = setInterval(
      () => setStatusIndex((i) => (i + 1) % STATUSES.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  // Konami code listener
  useEffect(() => {
    const handler = (e) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          setEasterEgg(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(e.key === KONAMI[0] ? 1 : 0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [konamiIndex]);

  const handleHeart = () => {
    const next = heartCount + 1;
    setHeartCount(next);
    localStorage.setItem("giri_hearts", String(next));
    setShowHeartTooltip(true);
    setTimeout(() => setShowHeartTooltip(false), 2200);
  };

  return (
    <>
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── Main 3-column grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <p className="text-white text-xl font-display font-bold mb-1 tracking-tight">
                buildwithgiri
              </p>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Helping international students break into tech in Canada — one
                conversation at a time.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 text-xl mb-6">
                <a
                  href="https://www.linkedin.com/in/girirajbhagat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/GirirajBhagat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="hover:text-sky-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="mailto:buildwithgiri@gmail.com"
                  aria-label="Email"
                  className="hover:text-red-400 transition"
                >
                  <FaEnvelope />
                </a>
              </div>

              {/* Live rotating status */}
              <div className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400"
                  >
                    {STATUSES[statusIndex].icon} {STATUSES[statusIndex].text}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h5 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
                Navigate
              </h5>
              <ul className="space-y-3 text-sm">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      offset={-60}
                      className="hover:text-white transition cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work with me */}
            <div>
              <h5 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
                Work With Me
              </h5>
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com/giriraj1310/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2.5 rounded-lg transition font-medium"
                >
                  📅 Book a 1:1 Call
                </a>
                <a
                  href="/Bhagat_Giriraj_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm px-4 py-2.5 rounded-lg transition"
                >
                  📄 View Resume
                </a>
                <a
                  href="mailto:buildwithgiri@gmail.com"
                  className="text-sm text-gray-500 hover:text-white transition mt-1"
                >
                  ✉️ buildwithgiri@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Daily quote ── */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <p className="text-center text-sm text-gray-600 italic max-w-xl mx-auto leading-relaxed">
              "{quote}"
            </p>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-1 flex-wrap justify-center sm:justify-start">
              <span>© {year} buildwithgiri.com</span>
              <span className="mx-1.5">·</span>
              <span className="flex items-center gap-1">
                Made with
                {/* Hidden gem #1 — clickable heart with local counter */}
                <button
                  onClick={handleHeart}
                  className="relative inline-flex items-center mx-0.5 group"
                  title="Show some love!"
                >
                  <FaHeart className="text-red-500 group-hover:scale-125 transition-transform" />
                  <AnimatePresence>
                    {showHeartTooltip && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                      >
                        {heartCount === 1 ? "First love! 🎉" : `${heartCount} ❤️`}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                from Canada 🍁
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span>Toronto, ON</span>
              <span className="mx-1">·</span>
              {/* Hidden gem #2 — subtle Konami hint */}
              <span
                title="Psst… try the Konami code 👀"
                className="cursor-default select-none opacity-20 hover:opacity-50 transition font-mono tracking-tight"
              >
                ↑↑↓↓←→
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Easter egg modal (Konami code) ── */}
      <AnimatePresence>
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setEasterEgg(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold font-display mb-2 text-gray-900">
                You found it!
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                The Konami Code still works in {year}. You clearly have the
                curiosity of a great engineer. 🚀
              </p>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                ↑↑↓↓←→←→BA — Konami, 1986
              </p>
              <button
                onClick={() => setEasterEgg(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Keep exploring 🔍
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
