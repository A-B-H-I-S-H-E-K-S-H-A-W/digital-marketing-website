import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "mobile2",
    alt: "Mobile-1",
    delay: 2.5,
    className: "top-20 z-10 left-[calc(30%-10rem)]",
  },
  {
    id: 2,
    src: "mobile",
    alt: "Mobile-2",
    delay: 3.5,
    className: "z-20 left-[calc(50%-10rem)]",
    priority: true,
  },
  {
    id: 3,
    src: "mobile3",
    alt: "Mobile-3",
    delay: 3,
    className: "top-20 z-10 left-[calc(70%-10em)]",
  },
];

const CardPopUp = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="relative z-10">
        {videos.map((item) => (
          <motion.div
            initial={{ y: "40%" }}
            animate={{ y: 0 }}
            transition={{
              delay: item.delay,
              duration: 0.8,
              ease: easeInOut,
              type: "spring",
              stiffness: 50,
              damping: 16,
              mass: 1.5,
            }}
            style={{
              willChange: "transform",
              transform: "translate3d(0,0,0)",
            }}
            key={item.id}
            className={`absolute border border-foreground rounded-2xl w-80 ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={320}
              height={640}
              priority={item.priority || false}
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </div>
  );
};

export default CardPopUp;
