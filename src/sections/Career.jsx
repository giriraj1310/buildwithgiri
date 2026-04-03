import React from "react";
import { SiOracle, SiAdobe } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

export default function Career() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-200">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Career Path</h3>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
        From 3 internships and full time at IBM, exploring consulting at Oracle to managing enterprise
        clients at Adobe, my career has been about solving real problems, building systems that scale,
        and helping people grow along the way.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
          <div className="text-4xl text-red-600 dark:text-red-500 mb-2"><SiAdobe /></div>
          <p className="font-semibold text-gray-900 dark:text-white">Support Services Manager</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Adobe · 2024 – Present</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
          <div className="text-4xl text-orange-500 mb-2"><SiOracle /></div>
          <p className="font-semibold text-gray-900 dark:text-white">Principal Consultant</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Oracle · 2022 – 2024</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
          <div className="text-4xl text-blue-700 dark:text-blue-400 mb-2"><FaLaptopCode /></div>
          <p className="font-semibold text-gray-900 dark:text-white">Technical Support Analyst</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">IBM · 2018 – 2022</p>
        </div>
      </div>
    </section>
  );
}
