"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function FeaturedSkills() {
  return (
    <div>
      <div>
        <div className="text-center">
          <h2 className=" text-teal-600 text-3xl font-semibold tracking-wide uppercase">
            Skills
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default FeaturedSkills;

export const projects = [
  {
    title: "Langauges",

    skills: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    title: "Frontend ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Tailwind",
    ],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "ExpressJS", "NPM", "PostMan"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgresSQL", "SupaBase", "Mongoose", "Prisma"],
  },
  {
    title: "Devops",
    skills: ["Docker", "AWS", "CI/CD"],
  },
  {
    title: "Tools",
    skills: ["VSCode", "Intellije", "Git", "GitHub", "Docker"],
  },
];
