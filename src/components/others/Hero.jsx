import React from "react";
import GradientText from "../ui/GradientText";

const Hero = () => {
  return (
    <section className="mt-40">
      <div className="px-20 py-24">
        <div className="w-full min-h-[60vh]">
          <div className="grid grid-cols-[70%_30%]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-semibold">
                Not Just{" "}
                <GradientText
                  className={"bg-gradient-to-l from-ut-orange to-french "}
                >
                  Marketing
                </GradientText>{" "}
                we redefine
              </h1>
              <h1 className="text-6xl font-semibold">
                and transform your{" "}
                <GradientText
                  className={"bg-gradient-to-l from-ut-orange to-french "}
                >
                  Business
                </GradientText>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className="mt-5 text-lg">
                  It's more than a marketing agency – we combine creativity and
                  insight to deliver marketing that reaches the right audience
                  and drives meaningful growth.
                </p>
              </div>
            </div>
            <div className="border w-full min-h-40 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
