import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Career from "./sections/Career";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import BlogPost from "./pages/BlogPost";
import { Analytics } from "@vercel/analytics/react";
import GiriBotWidget from "./components/GiriBotWidget";
import { Element } from "react-scroll";

export default function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MainLayout = (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="career"><Career /></Element>
      <Element name="blog"><Blog /></Element>
      <Element name="contact"><Contact /></Element>
      <GiriBotWidget />
      <BackToTopButton />
      <Analytics />
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={MainLayout} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
