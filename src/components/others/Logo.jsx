import React from "react";
import { OrbitLogo } from "../subComponents/OrbitLogo";
import GradientText from "../ui/GradientText";

const Logo = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          <GradientText className={"bg-gradient-to-l from-ut-orange to-french"}>
            Unlock Business Potential
          </GradientText>{" "}
          Through Online Platforms
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="mt-5 text-lg text-foreground/50">
            Unlock your business potential by embracing online platforms. Social
            media and digital ads amplify reach, engage targeted audiences, and
            drive measurable growth.
          </p>
        </div>
      </div>
      <OrbitLogo />
    </div>
  );
};

export default Logo;
