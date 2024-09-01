import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 lg:left-40 md:-left-32 md:-top-20 -left-64 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 lg:left-96 md:left-20 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 lg:left-80 md:left-12 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" />
      </div>

      <div className="flex justify-center relative mw-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-120">
            Modern and Responsive Application Development
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning Design Concepts into Real User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Erick Sandhu, a recently-graduated software engineer based in Texas.
          </p>

          <a
            href="https://github.com/essandhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShimmerButton
              title="View Projects"
              icon={<FaGithub />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
