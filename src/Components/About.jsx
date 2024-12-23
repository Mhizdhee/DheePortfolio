import React, { useState, useEffect } from "react";
import MyCv from "../assets/my-cv.pdf";
import MyPic from "../assets/Images/Dhee.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    const url = MyCv;
    window.open(url, "_blank");
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    //   once: true,     
    });
  }, []);
  

  return (
    <div
    data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000"
      id="about"
      className="py-16 px-8 flex flex-row bg-gray-100 dark:bg-gray-800 text-justify "
    >
      <div className="px-5">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl text-[18px] mx-auto">
          I am a driven and enthusiastic frontend developer with a strong
          passion for creating user-friendly, beautiful and responsive websites
          and web applications.{" "}
        </p>{" "}
        <br />
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl text-[18px] mx-auto">
          I have excellent skills in HTML, CSS, JavaScript, React,
          Bootstrap,Tailwind,Chakra UI,Material UI,GIT and GITHUB and I derive
          satisfaction from collaborating with cross-functional teams to develop
          exceptional web applications, as I possess strong teamwork skills.
        </p>{" "}
        <br />
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl text-[18px] mx-auto">
          I find great pleasure in learning and continually evolving, always
          committed to staying updated with the latest trends and best practices
          in software development. I have the ability to navigate through
          deadlines and overcome obstacles in order to deliver high-quality
          results, even under time constraints.
        </p>{" "}
        <br />
        <button className="bg-[#5eb1f5] text-white border-none px-6 py-2 mt-10 w-[25%] rounded-[0.5rem] font-bold text-[18px]" onClick={handleClick}>
          View CV
        </button>
      </div>
      <img
        className="w-[40%] h-[50%] p-[30px] rounded-[50%]"
        src={MyPic}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        alt="img"
      />
    </div>
  );
};

export default About;
