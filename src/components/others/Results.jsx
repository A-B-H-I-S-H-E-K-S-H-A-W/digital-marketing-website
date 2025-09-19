"use client";

import React from "react";
import GradientText from "../ui/GradientText";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "/videos/video7.mp4",
    alt: "Mobile-1",
    delay: 1.2,
    className: "z-10",
  },
  {
    id: 2,
    src: "/videos/video6.mp4",
    alt: "Mobile-2",
    delay: 2.2,
    className: "z-10",
  },
  {
    id: 3,
    src: "/videos/video5.mp4",
    alt: "Mobile-3",
    delay: 1.8,
    className: "z-10",
  },
];

export const Results = () => {
  return (
    <div className="min-h-screen md:px-20 px-4">
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          <GradientText className={"bg-gradient-to-l from-ut-orange to-french"}>
            Client-Centric Content That Generate Leads
          </GradientText>{" "}
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="mt-5 text-lg text-foreground/50">
            Unlock your business potential by embracing online platforms. Social
            media and digital ads amplify reach, engage targeted audiences, and
            drive measurable growth.
          </p>
        </div>
      </div>
      <div className="relative h-[500px] overflow-hidden">
        <div className="relative z-10 grid grid-cols-4">
          {videos.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: "0%" }}
              animate={{ y: 0 }}
              transition={{
                delay: item.delay,
                duration: 0.8,
                ease: "easeInOut",
                type: "spring",
                stiffness: 50,
                damping: 16,
                mass: 1.5,
              }}
              style={{
                willChange: "transform",
                transform: "translate3d(0,0,0)",
              }}
              className={`absolute border border-foreground rounded-2xl w-80 ${item.className}`}
            >
              <video
                src={item.src}
                width={320}
                height={640}
                autoPlay
                loop
                muted
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
