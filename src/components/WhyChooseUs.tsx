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
      "Managed an advanced meeting management app with React to streamline scheduling, organization, and management; decreased administrative overhead by 30%; and improved meeting coordination efficiency by 35%.",
      "Designed a dynamic customer interface with React and Zoho CRM API integration, enabled real-time access to client information, enhancing customer service efficiency, and increasing client satisfaction scores by 25%.",
      "Engineered sophisticated workflows in Zoho CRM via webhooks and custom functions; streamlined business logic, slashing manual intervention and boosting system efficiency, contributing to a rise in overall operational performance.",
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
