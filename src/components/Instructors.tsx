"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const media = [
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/Sarvesh207",
    image:
      "https://res.cloudinary.com/dliuckrho/image/upload/v1713110252/github_wk2x9u.png",
  },
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/Sarvesh207_/",
    image:
      "https://res.cloudinary.com/dliuckrho/image/upload/v1713110254/instagram_knsjzd.png",
  },

  {
    id: 3,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sarvesh207/",
    image:
      "https://res.cloudinary.com/dliuckrho/image/upload/v1713110252/linkedin_moiw1f.png",
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://twitter.com/gaynar_sarvesh",
    image:
      "https://res.cloudinary.com/dliuckrho/image/upload/v1713110253/twitter_uybayj.png",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold text-center mb-8">
        Let&apos; build something awesome together!
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Connect with me and let&apos; make it happen.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          {/* <AnimatedTooltip items={media} /> */}
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
