import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className=" h-[457px] md:h-[595px] bg-gray-50 dark:bg-gray-900 dark:text-[#f0f8ff] flex flex-col items-center justify-center text-gray-800 px-4 sm:px-6 md:px-8"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-center">
        Hi, I'm
      </h1>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold pt-4 sm:pt-6 md:pt-10 text-center">
        Olaniyan Dorcas
      </h1>
      <div className="flex flex-row sm:flex-row items-center mt-6 sm:mt-10 justify-center ">
        <span className="inline-block w-[50px] h-[4px] bg-[#5eb1f5] mr-1 mt-5  md:mt-2"></span>

        <p className="mt-5 sm:mt-0 text-xl sm:text-2xl md:text-3xl dark:text-[#f0f8ff] text-gray-800 text-center">
          <span>
            <Typewriter
              words={["A Frontend Developer", "React Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        <span className="inline-block  w-[50px] h-[4px] bg-[#5eb1f5] mt-5 md:mt-2 mr-1"></span>
      </div>
      <button
        onClick={handleScroll}
        className="mt-6 px-6 py-2 bg-[#5eb1f5] text-[#f0f8ff] rounded-lg hover:border-2 hover:border-blue-400 hover:bg-white hover:text-[#5eb1f5] dark:bg-gray-700 dark:text-[#f0f8ff] transition-all duration-300"
      >
        View My Work
      </button>
    </div>
  );
};

export default Hero;
