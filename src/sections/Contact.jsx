// // src/sections/Contact.jsx

// import React from "react";
// import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
//       <h3 className="text-3xl font-display font-semibold mb-4">Contact Me</h3>
//       <p className="text-lg mb-6">I'd love to connect! Reach out via any of the platforms below:</p>
//       <div className="flex justify-center gap-6 text-3xl text-blue-600">
//         <a href="https://www.linkedin.com/in/girirajbhagat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
//         <a href="https://www.instagram.com/gb.eth" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaInstagram /></a>
//         <a href="https://twitter.com/GirirajBhagat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaTwitter /></a>
//         <a href="https://www.facebook.com/giriraj.bhagat.5" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaFacebook /></a>
//         <a href="mailto:buildwithgiri@gmail.com" className="hover:scale-110 transition-transform"><FaEnvelope /></a>
//       </div>
//     </section>
//   );
// }

// src/sections/Contact.jsx

import React from "react";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold mb-6">Let’s Connect</h3>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
        Whether you’ve got a question about navigating your career, want feedback on your resume, or just want to say hi — feel free to reach out. 👇
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6">
  <a
    href="mailto:buildwithgiri@gmail.com"
    aria-label="Email"
    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition px-5 py-3 rounded-xl shadow text-blue-700"
  >
    <FaEnvelope className="text-2xl" />
    <span className="text-sm font-medium">Email Me</span>
  </a>
  <a
    href="https://www.linkedin.com/in/girirajbhagat/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition px-5 py-3 rounded-xl shadow text-blue-700"
  >
    <FaLinkedin className="text-2xl" />
    <span className="text-sm font-medium">Connect on LinkedIn</span>
  </a>
  <a
    href="https://twitter.com/GirirajBhagat"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition px-5 py-3 rounded-xl shadow text-blue-700"
  >
    <FaTwitter className="text-2xl" />
    <span className="text-sm font-medium">Follow on Twitter</span>
  </a>
</div>
    </section>
  );
}
