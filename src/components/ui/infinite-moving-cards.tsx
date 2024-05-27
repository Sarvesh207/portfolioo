"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  leftItems,
  rightItems,
  leftSpeed = "fast",
  rightSpeed = "fast",
  pauseOnHover = true,
  className,
}: {
  leftItems: {
    skill: string;
    name: string;
  }[];
  rightItems: {
    skill: string;
    name: string;
  }[];
  leftSpeed?: "fast" | "normal" | "slow";
  rightSpeed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const leftContainerRef = React.useRef<HTMLDivElement>(null);
  const rightContainerRef = React.useRef<HTMLDivElement>(null);
  const leftScrollerRef = React.useRef<HTMLUListElement>(null);
  const rightScrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation(leftContainerRef, leftScrollerRef, leftSpeed, "left");
    addAnimation(rightContainerRef, rightScrollerRef, rightSpeed, "right");
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation(
    containerRef: React.RefObject<HTMLDivElement>,
    scrollerRef: React.RefObject<HTMLUListElement>,
    speed: "fast" | "normal" | "slow",
    direction: "left" | "right"
  ) {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection(containerRef, direction);
      getSpeed(containerRef, speed);
      setStart(true);
    }
  }

  const getDirection = (
    containerRef: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = (
    containerRef: React.RefObject<HTMLDivElement>,
    speed: "fast" | "normal" | "slow"
  ) => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        ref={leftContainerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={leftScrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {leftItems.map((item, idx) => (
            <li className="w-[100px]" key={item.name}>
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <Image src={item.skill} alt={item.name} width={100} height={100}></Image>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={rightContainerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={rightScrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {rightItems.map((item, idx) => (
            <li className="w-[100px]" key={item.name}>
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <Image src={item.skill} alt={item.name} width={100} height={100}></Image>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
