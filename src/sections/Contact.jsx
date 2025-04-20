// src/sections/Contact.jsx

import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
      <h3 className="text-3xl font-display font-semibold mb-4">Contact Me</h3>
      <p className="text-lg mb-6">I'd love to connect! Reach out via any of the platforms below:</p>
      <div className="flex justify-center gap-6 text-3xl text-blue-600">
        <a href="https://www.linkedin.com/in/girirajbhagat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
        <a href="https://www.instagram.com/gb.eth" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaInstagram /></a>
        <a href="https://twitter.com/GirirajBhagat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaTwitter /></a>
        <a href="https://www.facebook.com/giriraj.bhagat.5" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaFacebook /></a>
        <a href="mailto:buildwithgiri@gmail.com" className="hover:scale-110 transition-transform"><FaEnvelope /></a>
      </div>
    </section>
  );
}
