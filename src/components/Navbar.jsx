import React from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ isMobileMenuOpen, setMobileMenuOpen }) {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 dark:shadow-gray-800/50 sticky top-0 z-50 transition-colors duration-200">
        <RouterLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold font-display tracking-tight text-blue-700 dark:text-blue-400 hover:opacity-80 transition-opacity"
        >
          buildwithgiri
        </RouterLink>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <Link to="about" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="career" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Career
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="text-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-blue-700 dark:text-blue-400 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/50 px-6 py-4 space-y-3 z-40 transition-colors duration-200">
          {["about", "career", "blog", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-400 transition font-medium capitalize cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
