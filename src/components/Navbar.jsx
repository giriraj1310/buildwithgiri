// src/components/Navbar.jsx

import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";


export default function Navbar({ isMobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight text-blue-700">buildwithgiri</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li><Link to="about" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link to="career" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 transition-colors">Career</Link></li>
          <li><Link to="students" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 transition-colors">For Students</Link></li>
          <li><Link to="blog" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 transition-colors">Blog</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl text-blue-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <FaBars />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
          <Link to="about" smooth={true} duration={500} offset={-60} className="block hover:text-blue-600 cursor-pointer">About</Link>
          <Link to="career" smooth={true} duration={500} offset={-60} className="block hover:text-blue-600 cursor-pointer">Career</Link>
          <Link to="students" smooth={true} duration={500} offset={-60} className="block hover:text-blue-600 cursor-pointer">For Students</Link>
          <Link to="blog" smooth={true} duration={500} offset={-60} className="block hover:text-blue-600 cursor-pointer">Blog</Link>
          <Link to="contact" smooth={true} duration={500} offset={-60} className="block hover:text-blue-600 cursor-pointer">Contact</Link>
        </div>
      )}
    </>
  );
}
