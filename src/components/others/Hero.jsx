import React from "react";
import GradientText from "../ui/GradientText";

const Hero = () => {
  return (
    <section className="mt-40">
      <div className="md:px-20 px-6 md:py-24 py-20">
        <div className="w-full min-h-[60vh]">
          <div className="grid md:grid-cols-[70%_30%] grid-cols-1 gap-10 md:gap-0">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="md:text-6xl text-3xl font-semibold">
                Not Just{" "}
                <GradientText
                  className={"bg-gradient-to-l from-ut-orange to-french "}
                >
                  Marketing
                </GradientText>{" "}
                We Redefine
              </h1>
              <h1 className="md:text-6xl text-3xl font-semibold">
                And Transform Your{" "}
                <GradientText
                  className={"bg-gradient-to-l from-ut-orange to-french "}
                >
                  Business
                </GradientText>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className="mt-5 text-lg text-foreground/50">
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
