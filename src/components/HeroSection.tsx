"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const words = [
  {
    text: "Full",
  },
  {
    text: "Stack",
  },
  {
    text: "Developer.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <Image
        src="https://res.cloudinary.com/dliuckrho/image/upload/v1713115322/vcq8stfz8rsma8awu07h.png"
        className=" rounded-full"
        width={400}
        height={400}
        alt="Profile"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <TypewriterEffect words={words} />

        <div className="mt-4 flex gap-8 justify-center  ">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Hire Me
            </Button>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default HeroSection;
