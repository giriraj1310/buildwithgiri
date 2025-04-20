// src/sections/Hero.jsx

import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100 relative">
      <div className="flex gap-4 absolute top-6 right-6 md:right-10 text-blue-600 text-xl">
        <a href="https://www.linkedin.com/in/girirajbhagat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-blue-800 transition" />
        </a>
        <a href="mailto:giriraj@example.com" aria-label="Email">
          <FaEnvelope className="hover:text-blue-800 transition" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="hover:text-blue-800 transition" />
        </a>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4" style={{ fontFamily: 'Playfair Display' }}>Made it. Now I’m helping you do the same.</h2>
      <p className="text-md sm:text-lg max-w-xl mb-6 text-gray-700">
  I'm Giri — currently at Adobe, formerly Oracle and IBM. I help international students and early-career tech professionals break in, level up, and build confidence.
</p>
<div className="text-sm sm:text-base text-gray-700 mb-6 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
  <div className="flex items-center gap-2"><span className="text-green-600">✅</span> 3x IBM Internships</div>
  <div className="flex items-center gap-2"><span className="text-green-600">✅</span> SSM at Adobe</div>
  <div className="flex items-center gap-2"><span className="text-green-600">✅</span> Mentorship Calls</div>
</div>
      <div className="flex gap-4 mb-4">
        <Link to="career" smooth={true} duration={500} offset={-60} className="px-5 py-2 bg-blue-600 text-white rounded-2xl shadow hover:shadow-lg hover:bg-blue-700 transition cursor-pointer">
          Explore My Career
        </Link>
        {/* <Link to="students" smooth={true} duration={500} offset={-60} className="px-5 py-2 border border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-100 transition cursor-pointer">
          Student Resources
        </Link> */}
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/Bhagat_Giriraj_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          📄 Download Resume
        </a>
        <a
          href="https://calendly.com/giriraj1310/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition"
        >
          📅 Book a 1:1 Call
        </a>
      </div>
    </section>
  );
}
