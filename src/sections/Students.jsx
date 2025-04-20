// src/sections/Students.jsx

import React from "react";

export default function Students() {
  return (
    <section id="students" className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-display font-semibold mb-4">Resources for International Students</h3>
      <p className="max-w-3xl mx-auto text-lg mb-6">
        Whether you're new to Canada or preparing to arrive, I’ve put together real, practical advice to help you navigate study permits, housing, banking, job searching, and more. These are tips I wish someone gave me when I first arrived.
      </p>
      <a href="#" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:shadow-lg hover:bg-blue-700 transition">
        Explore the Student Hub
      </a>
    </section>
  );
}
