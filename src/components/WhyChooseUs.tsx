"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { TracingBeam } from "./ui/tracing-beam";

const musicSchoolContent = [
  {
    title: "Student Intern",
    company:"Newton School",
    date:"July-22 - May-23",
    
    description:
      "Full Stack Web Development and Problem Solving Technical Stack Learnt: HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS MongoDB, ExpressJS. Participated in various coding competitions held by Newton School Worked on various projects like Restaurant Website, Shopping Site, News App, Tip Calculator, and many more",
  },
  {
    title: "Full Stack Engineer",
    company:"Wynisco Inc.",
    date:"April-22 - April-23",
    
    description:
      "Full Stack Web Development and Problem Solving Technical Stack Learnt: HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS MongoDB, ExpressJS. Participated in various coding competitions held by Newton School Worked on various projects like Restaurant Website, Shopping Site, News App, Tip Calculator, and many more",
  },
  
  
];

function WhyChooseUs() {
  return (
    <div>
      <div className="text-center">
        <h2 className=" text-teal-600 text-3xl font-semibold tracking-wide uppercase">
          Experience
        </h2>
      </div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
