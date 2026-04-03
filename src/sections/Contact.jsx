import React from "react";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-200">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
        Whether you've got a question about navigating your career, want feedback on your resume,
        or just want to say hi — feel free to reach out. 👇
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6">
        <a
          href="mailto:buildwithgiri@gmail.com"
          aria-label="Email"
          className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition px-5 py-3 rounded-xl shadow dark:shadow-none border border-transparent dark:border-blue-900/30 text-blue-700 dark:text-blue-400"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-sm font-medium">Email Me</span>
        </a>
        <a
          href="https://www.linkedin.com/in/girirajbhagat/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition px-5 py-3 rounded-xl shadow dark:shadow-none border border-transparent dark:border-blue-900/30 text-blue-700 dark:text-blue-400"
        >
          <FaLinkedin className="text-2xl" />
          <span className="text-sm font-medium">Connect on LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/GirirajBhagat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition px-5 py-3 rounded-xl shadow dark:shadow-none border border-transparent dark:border-blue-900/30 text-blue-700 dark:text-blue-400"
        >
          <FaTwitter className="text-2xl" />
          <span className="text-sm font-medium">Follow on Twitter</span>
        </a>
      </div>
    </section>
  );
}
