import React from "react";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors duration-200">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
        I landed in Canada with nothing but a backpack, a dream, and no network. The early days were
        filled with rejection, loneliness, and confusion. But I kept learning, growing, and saying yes
        to hard things. That led to 3 internships at IBM, a consulting role at Oracle, and now a
        Support Services Manager role at Adobe, all while helping 10+ students navigate their own
        journeys.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { stat: "3x", label: "IBM Internships" },
          { stat: "10+", label: "Mentorship Calls" },
          { stat: "4+ yrs", label: "in Tech Industry" },
          { stat: "🇮🇳→🇨🇦", label: "From Gujarat to Ottawa" },
        ].map(({ stat, label }) => (
          <div
            key={label}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-sm dark:shadow-none border border-transparent dark:border-blue-900/30"
          >
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{stat}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
