// // src/sections/Hero.jsx

// import React from "react";

// export default function Hero() {
//   return (
//     <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
//       <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">Hi, I’m Giri 👋</h2>
//       <p className="text-lg sm:text-xl max-w-xl mb-6">
//         Support Services Manager @ Adobe | Helping Students Thrive in Canada 🇨🇦
//       </p>
//       <div className="flex gap-4">
//         <a href="#career" className="px-5 py-2 bg-blue-600 text-white rounded-2xl shadow hover:shadow-lg hover:bg-blue-700 transition">Explore My Career</a>
//         <a href="#students" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-100 transition">Student Resources</a>
//       </div>
//     </section>
//   );
// }

// src/sections/Hero.jsx

import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">Hi, I’m Giri 👋</h2>
      <p className="text-lg sm:text-xl max-w-xl mb-6">
        Support Services Manager @ Adobe | Helping Students Thrive in Canada 🇨🇦
      </p>
      <div className="flex gap-4">
        <Link to="career" smooth={true} duration={500} offset={-60} className="px-5 py-2 bg-blue-600 text-white rounded-2xl shadow hover:shadow-lg hover:bg-blue-700 transition cursor-pointer">
          Explore My Career
        </Link>
        <Link to="students" smooth={true} duration={500} offset={-60} className="px-5 py-2 border border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-100 transition cursor-pointer">
          Student Resources
        </Link>
      </div>
    </section>
  );
}
