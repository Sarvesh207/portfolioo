import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function SocialDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Linkedin",
      icon: (
        <Image
          src="https://res.cloudinary.com/dliuckrho/image/upload/v1713110252/linkedin_moiw1f.png"
          width={30}
          height={30}
          alt="linkedin Logo"
        />
      ),
      href: "https://www.linkedin.com/in/sarvesh207/",
    },
    {
      title: "Instgram",
      icon: (
        <Image
          src="https://res.cloudinary.com/dliuckrho/image/upload/v1713110254/instagram_knsjzd.png"
          width={30}
          height={30}
          alt="instagram Logo"
        />
      ),
      href: "https://www.instagram.com/Sarvesh207_/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/gaynar_sarvesh",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Sarvesh207",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
