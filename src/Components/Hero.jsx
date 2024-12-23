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
      className="h-screen bg-gray-50 dark:bg-gray-900 dark:text-[#f0f8ff] flex flex-col items-center justify-center text-gray-800"
    >
      <h1 className="text-5xl font-bold">Hi, I'm</h1>
      <h1 className="text-6xl font-bold  pt-10">Olaniyan Dorcas</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="text-[#5eb1f5] mx-4 pt-2">______________</div>
        <p className="mt-5 text-2xl dark:text-[#f0f8ff] text-gray-800">
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
        <div className="text-[#5eb1f5] mx-4 pt-2">______________</div>
      </div>
      <button
        onClick={handleScroll}
        className="mt-6 px-6 py-2 bg-[#5eb1f5] text-[#f0f8ff] rounded-lg hover:border-2 hover:border-blue-400 hover:bg-white hover:text-[#5eb1f5]   dark:bg-gray-700 dark:text-[#f0f8ff]"
      >
        View My Work
      </button>
    </div>
  );
};

export default Hero;
