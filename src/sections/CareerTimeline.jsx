// src/sections/CareerTimeline.jsx

import React from "react";

const timelineData = [
  {
    title: "Support Services Manager",
    organization: "Adobe",
    location: "Ottawa, ON",
    duration: "June 2024 – Present"
  },
  {
    title: "Principal Consultant",
    organization: "Oracle",
    location: "Mississauga, ON",
    duration: "Jan 2022 – May 2024"
  },
  {
    title: "Technical Support Analyst",
    organization: "IBM",
    location: "Ottawa, ON",
    duration: "Jan 2020 – Jan 2022"
  },
  {
    title: "Sheridan Leadership & Internships",
    organization: "Sheridan College & IBM Co-ops",
    location: "Brampton & Ottawa, ON",
    duration: "2018 – 2019"
  },
  {
    title: "Computer Systems Technology",
    organization: "Sheridan College",
    location: "Brampton, ON",
    duration: "2016 – 2019"
  },
  {
    title: "Science (ICSE & ISC)",
    organization: "Queen Of Angels' Convent",
    location: "India",
    duration: "– March 2016"
  }
];

export function VerticalTimeline() {
  return (
    <section className="py-16 px-6 bg-white max-w-3xl mx-auto">
      <div className="text-center mb-10">
  <h3 className="text-3xl font-bold mb-4">Career & Education Timeline</h3>
  <p className="text-gray-700 max-w-xl mx-auto mb-4">
    I’ve built my career through progressive roles at IBM, Oracle, and Adobe — combining technical depth with client-facing leadership. Here's a snapshot of my journey so far.
  </p>
  
  {/* <h3 className="text-3xl font-bold mb-4">Career & Education Timeline</h3> */}
  
</div>
      <div className="relative border-l-4 border-blue-500 pl-10 space-y-10">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[1.55rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p className="text-gray-700">{item.organization}</p>
            <p className="text-sm text-gray-500">{item.location}</p>
            <span className="text-sm text-gray-400">{item.duration}</span>
          </div>
        ))}
      </div>
      
</section>
  );
}
