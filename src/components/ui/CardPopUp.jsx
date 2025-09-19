"use client";

import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285708/Never_buy_ice_cream_franchise_until_hoccoamchi_hoccoicecream_startup_marketing_business_ca_js2h7n.mp4",
    alt: "Mobile-1",
    delay: 1.2,
    className: "top-20 z-10 left-[calc(30%-10rem)]",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285738/When_Maggie_was_banned_...._maggie_nestle_noodles_koreannoddle_chickenmaggie_marketing_s_puvukz.mp4",
    alt: "Mobile-2",
    delay: 2.2,
    className: "z-20 left-[calc(50%-10rem)]",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285730/Amul_Free_Franchise_franchiseseries_franchise_amulfranchise_amulicecream_Amul_amul_milk_hbzllb.mp4",
    alt: "Mobile-3",
    delay: 1.8,
    className: "top-20 z-10 left-[calc(70%-10em)]",
  },
];

const CardPopUp = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="relative z-10">
        {videos.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: "40%" }}
            animate={{ y: 0 }}
            transition={{
              delay: item.delay,
              duration: 0.8,
              ease: "easeInOut", // ✅ string instead of import
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

      <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none bg-gradient-to-b from-transparent to-main-background" />
    </div>
  );
};

export default CardPopUp;
