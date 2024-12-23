import React from "react";
import Html from "../assets/Images/html5.png";
import Css from "../assets/Images/CSS.png";
import Js from "../assets/Images/Javascript.png";
import ReactImg from "../assets/Images/react.png";
import Tailwind from "../assets/Images/Tailwind.png";
import Bootstrap from "../assets/Images/logos_bootstrap.svg";
import Git from "../assets/Images/gitt.png";
import GitHub from "../assets/Images/git.png";
import MaterialUi from "../assets/Images/MateriaUI.png";
// import Tailwind from "../Images/Tailwind.png";

const Skills = () => {
  return (
    <>
      <div id="skills" className=" bg-gray-50 dark:bg-gray-900 dark:text-[#f0f8ff] flex flex-col py-10 px-8 justify-center text-gray-800">
        {/* <h2 className="text-[30px] p-5 mb-5"><span className="w-[100%]">-</span>My Skills</h2> */}
        <h2 className="text-[30px] p-5 mb-5 flex items-center">
          <span className="inline-block w-[50px] h-[4px] bg-[#5eb1f5] mr-1"></span>
          My Skills
        </h2>

        <div
          className="dark:text-white text-white flex items-center justify-center flex-wrap pb-[50px] gap-6"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Html} alt="htmlimg" />
            <p className="p-7">HTML5</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Css} alt="cssimg" />
            <p className="p-7">CSS3</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Js} alt="jsimg" />
            <p className="p-7">JAVASCRIPT</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={ReactImg} alt="rctimg" />
            <p className="p-7">REACT</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Tailwind} alt="tailwimg" />
            <p className="p-7">TAILWIND</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Bootstrap} alt="bootimg" />
            <p className="p-7">BOOTSTRAP</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={Git} alt="gitimg" />
            <p className="p-7">GIT</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={GitHub} alt="githubimg" />
            <p className="p-7">GITHUB</p>
          </div>
          <div className="flex items-center justify-center bg-[#161313] p-3 w-[25%]">
            <img className="w-[20%]" src={MaterialUi} alt="muiimg" />
            <p className="p-7">MUI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
