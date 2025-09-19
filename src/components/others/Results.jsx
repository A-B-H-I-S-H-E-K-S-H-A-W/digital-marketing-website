"use client";

import React from "react";
import GradientText from "../ui/GradientText";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285729/We_are_Hiring_video_editor_link_in_bio_Ambani_s_don_t_compete_they_dominate_startup_campacola_qqfiby.mp4",
    alt: "Mobile-1",
    delay: 1.2,
    className: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285708/Never_buy_ice_cream_franchise_until_hoccoamchi_hoccoicecream_startup_marketing_business_ca_js2h7n.mp4",
    alt: "Mobile-2",
    delay: 2.2,
    className: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285697/Snitch_Franchise_snitch.co.in_snitch_offline_snitch_snitchcloths_snitches_sharktank_ein9re.mp4",
    alt: "Mobile-3",
    delay: 1.8,
    className: "",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dlp4fpgvg/video/upload/v1758285697/Ramdev_-_The_Money_Making_Baba...._patanjali_patanjalibaba_ramdevbaba_patanjalidantkanti_dan_p5mwrm.mp4",
    alt: "Mobile-3",
    delay: 1.8,
    className: "",
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
      <div className="relative min-h-[600px] overflow-hidden mt-20 md:px-12 sm:px-10 px-5">
        <div className="relative">
          <div className={`grid md:grid-cols-4 sm:grid-cols-2 gap-10`}>
            {videos.map((item) => (
              <video
                key={item.id}
                src={item.src}
                width={320}
                height={640}
                loop
                controls
                className="rounded-lg w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
