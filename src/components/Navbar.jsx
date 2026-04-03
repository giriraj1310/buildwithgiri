import React from "react";
import { FaBars, FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const SCROLL_LINKS = [
  { to: "about", label: "About" },
  { to: "career", label: "Career" },
  { to: "blog", label: "Blog" },
  { to: "contact", label: "Contact" },
];

export default function Navbar({ isMobileMenuOpen, setMobileMenuOpen }) {
  const { isDark, toggle } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-800/30 sticky top-0 z-50 transition-colors duration-200">

        {/* Logo */}
        <RouterLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl text-blue-700 dark:text-blue-400 hover:opacity-80 transition-opacity tracking-tight"
        >
          buildwithgiri
        </RouterLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          {isHome
            ? SCROLL_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-60}
                    className="px-3 py-1.5 rounded-lg cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))
            : SCROLL_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <RouterLink
                    to={`/#${to}`}
                    className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    {label}
                  </RouterLink>
                </li>
              ))}
          <li>
            <RouterLink
              to="/now"
              className={`px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition ${
                pathname === "/now" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : ""
              }`}
            >
              Now
            </RouterLink>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[61px] left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 space-y-1 z-40 transition-colors duration-200">
          {SCROLL_LINKS.map(({ to, label }) =>
            isHome ? (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-60}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium cursor-pointer"
              >
                {label}
              </Link>
            ) : (
              <RouterLink
                key={to}
                to={`/#${to}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
              >
                {label}
              </RouterLink>
            )
          )}
          <RouterLink
            to="/now"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl font-medium transition ${
              pathname === "/now"
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Now
          </RouterLink>
        </div>
      )}
    </>
  );
}
