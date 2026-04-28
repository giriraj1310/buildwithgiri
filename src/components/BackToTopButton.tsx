import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      offset={-60}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer z-50"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </Link>
  );
}
