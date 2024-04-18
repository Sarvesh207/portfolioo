"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { TracingBeam } from "./ui/tracing-beam";

const musicSchoolContent = [
  {
    title: "Student",
    company: "Newton School",
    date: "July-22 - May-23",

    description: [
      "Full Stack Web Development and Problem Solving",

      "Technical Stack Learnt: HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS MongoDB, ExpressJS.",

      "Participated in various coding competitions held by Newton School",

      "Worked on various projects like Restaurant Website, Shopping Site, News App, Tip Calculator, and many more..",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Wynisco Inc.",
    date: "April-22 - April-23",

    description: [
      "Developed a meeting management application using React, allowing users to schedule, organize, and manage meetings efficiently.",

      "Engineered backend API in Express and Node.js, enabling seamless data retrieval from MongoDB database leading to a reduction in front-end loading time and improved user experience.",

      "Developed and implemented automated solutions using Google AppScript (JavaScript) to streamline and optimize workflow processes within Google Workspace applications, resulting in increased efficiency and reduced manual workload.",

      "Implemented scheduled scripts in Google Apps Script to perform routine tasks, such as data updates and email notifications, reducing the need for manual intervention and ensuring timely execution of critical processes.",
    ],
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
