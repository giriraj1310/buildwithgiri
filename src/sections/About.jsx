// src/sections/About.jsx

import React from "react";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold mb-6">My Journey</h3>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
        I landed in Canada with nothing but a backpack, a dream, and no network. The early days were filled with rejection, loneliness, and confusion. But I kept learning, growing, and saying yes to hard things.
        That led to 3 internships at IBM, a consulting role at Oracle, and now a Support Services Manager role at Adobe — all while helping 10+ students navigate their own journeys.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <p className="text-4xl font-bold text-blue-600">3x</p>
          <p className="text-sm text-gray-600 mt-2">IBM Internships</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <p className="text-4xl font-bold text-blue-600">10+</p>
          <p className="text-sm text-gray-600 mt-2">Mentorship Calls</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <p className="text-4xl font-bold text-blue-600">4+ yrs</p>
          <p className="text-sm text-gray-600 mt-2">in Tech Industry</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <p className="text-4xl font-bold text-blue-600">🇮🇳→🇨🇦</p>
          <p className="text-sm text-gray-600 mt-2">From Gujarat to Ottawa</p>
        </div>
      </div>
    </section>
  );
}
