import React from "react";
import { SiOracle, SiAdobe } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = [
  {
    icon: <SiAdobe />,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-900/20",
    company: "Adobe",
    title: "Support Services Manager",
    period: "June 2024 – Present",
    location: "Ottawa, ON",
    bullets: [
      "Managing enterprise client success across North American accounts",
      "Driving adoption and ROI for Adobe Experience Cloud products",
      "Leading technical support strategy for Fortune 500 customers",
    ],
  },
  {
    icon: <SiOracle />,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-900/20",
    company: "Oracle",
    title: "Principal Consultant",
    period: "Jan 2022 – May 2024",
    location: "Mississauga, ON",
    bullets: [
      "Led ERP cloud implementations for mid-market and enterprise clients",
      "Translated complex requirements into actionable technical roadmaps",
      "Managed cross-functional delivery teams across multiple time zones",
    ],
  },
  {
    icon: <FaLaptopCode />,
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    company: "IBM",
    title: "Technical Support Analyst",
    period: "2018 – 2022",
    location: "Ottawa, ON",
    note: "3 co-ops + full-time",
    bullets: [
      "3 consecutive co-op placements, each leading to the next",
      "Built monitoring dashboards that cut incident response time significantly",
      "Mentored incoming co-op students in final term",
    ],
  },
];

export default function Career() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
          Where I've Worked
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-xl">
            From co-op student to enterprise tech at{" "}
            <span className="text-red-500">Adobe.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
            Each role taught me something the previous one couldn't. Here's the honest version.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
            >
              {/* Icon + company */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${role.iconBg} flex items-center justify-center text-xl ${role.iconColor}`}>
                  {role.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white text-sm">{role.company}</p>
                  {role.note && (
                    <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                      {role.note}
                    </span>
                  )}
                </div>
              </div>

              {/* Title + period */}
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100 leading-snug">{role.title}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{role.period} · {role.location}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                {role.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-blue-500 mt-1 shrink-0">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
