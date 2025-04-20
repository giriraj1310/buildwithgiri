// // buildwithgiri.com - Starter Homepage (React + Tailwind CSS)

// import React, { useState } from "react";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Career from "./sections/Career";
// import Students from "./sections/Students";
// import Blog from "./sections/Blog";
// import Contact from "./sections/Contact";
// import Navbar from "./components/Navbar";
// import BackToTopButton from "./components/BackToTopButton";

// import { Element } from "react-scroll";


// export default function HomePage() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white text-gray-800 font-inter">
//       {/* Import Google Fonts in your index.html or _document.js if using Next.js */}

//       <Navbar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
//       <Element name="hero"><Hero /></Element>
//       <Element name="about"><About /></Element>
//       <Element name="career"><Career /></Element>
//       <Element name="students"><Students /></Element>
//       <Element name="blog"><Blog /></Element>
//       <Element name="contact"><Contact /></Element>

//       <Element name="contact"><BackToTopButton /></Element>

//       <footer className="text-center py-6 border-t mt-10 text-sm bg-white">
//         <p>&copy; {new Date().getFullYear()} buildwithgiri.com — Made with ❤️ by Giri</p>
//       </footer>
//     </div>
//   );
// }

// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Career from "./sections/Career";
import Students from "./sections/Students";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BackToTopButton";
import BlogPost from "./pages/BlogPost";
import { VerticalTimeline } from "./sections/CareerTimeline";


import { Element } from "react-scroll";

export default function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-gray-800 font-inter">
              <Navbar
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <Element name="hero"><Hero /></Element>
              <Element name="about"><About /></Element>
              <Element name="career"><Career /></Element>
              {/* <Element name="students"><Students /></Element> */}
              {/* <Element name="blog"><Blog /></Element> */}
              <Element name="contact"><Contact /></Element>

              <BackToTopButton />
              <footer className="text-center py-6 border-t mt-10 text-sm bg-white">
                <p>&copy; {new Date().getFullYear()} buildwithgiri.com — Made with ❤️ by Giri</p>
              </footer>
            </div>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}