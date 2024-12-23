import React from "react";
import Todo from "../assets/Images/Todo.png";
import Calculator from "../assets/Images/Calculatorr.png";
import ProfileSearch from "../assets/Images/ProfileSearch.png";
import Counter from "../assets/Images/Counter.png";
import Trivia from "../assets/Images/ydtrivia.png";
import YdotGames from "../assets/Images/ydotgames.png";
import GameWin from "../assets/Images/gamewin.png";
import Revve from "../assets/Images/revveme.png";
import FormWork from "../assets/Images/formwork.png";
import Smapps from "../assets/Images/smapps.png";

const projects = [
  {
    title: "Formwork",
    description:
      "Formwork is a limited liability company that have been involved in execution of a variety of projects in the Construction Industry. Built with React.js, Tailwind CSS",
    image: FormWork,
    link: "https://github.com/Mhizdhee/Form-work",
    live: "https://formwork.netlify.app/",
  },
  {
    title: "Smapps",
    description:
      " Smapps is a technology company, with the sole aim of helping businesses to reduce operational expenses, eradicate inefficiencies, increase revenue generation. Built with React.js, Tailwind CSS",
    image: Smapps,
    link: "https://github.com/Mhizdhee/Smapps",
    live: "https://smapps-group.netlify.app/",
  },
  {
    title: "Online Trivia",
    description:
      "This is a fun and engaging platform for trivia enthusiasts, where users can test their knowledge across various topics with interactive questions. Built with React.js, CSS, Redux Toolkit.",

    image: Trivia,
    link: "https://github.com/Yellowdot-Africa/yd_online_trivia_game",
    live: "https://yd-trivia-game.netlify.app/",
  },
  {
    title: "Ydot Games",
    description:
      "This is an exciting gaming platform offering a variety of competitive games. YDotGames provides immersive gameplay, leaderboards, and exclusive prizes to keep users entertained and engaged. Built with React.js. Tailwind CSS, Context API.",
    image: YdotGames,
    link: "https://github.com/Mhizdhee/ydvas_YdotGames2",
    live: "https://ydotgames-ydvas.netlify.app/",
  },
  {
    title: "Game Win",
    description:
      "This is an exhilarating fastest-finger game where speed and accuracy are key to winning. Built with React.js, Context API, Tailwind CSS. ",
    image: GameWin,
    link: "https://github.com/Yellowdot-Africa/Game_Win",
    live: "https://ydvas-game-win.netlify.app/",
  },
  {
    title: "Revveme_Admin",
    description:
      "This is a financial service platform tailored to simplify money transfers between Canada and registered African countries. I was part of the Frontend team that built this dashboard. Built with React.js,Antd design, Redux.",
    image: Revve,
    link: "https://github.com/P2Vest/Revveme_AdminUI",
    live: "https://rotura.revveme.com.s3-website.us-east-2.amazonaws.com/",
  },

  {
    title: "Todo List",
    description:
      "A user-friendly application to manage daily tasks. Add, edit, and delete tasks with ease to stay organized and productive.",
    image: Todo,
    link: "https://github.com/Mhizdhee/ToDo-List",
    live: "https://dheee-todo-list.netlify.app/",
  },
  {
    title: "Calculator",
    description:
      "A functional and user-friendly calculator that performs basic arithmetic operations, such as addition, subtraction, multiplication, and division.",
    image: Calculator,
    link: "https://github.com/Mhizdhee/Calculator-proj",
    live: "https://mhizdhee.github.io/Calculator-proj/",
  },

  {
    title: "Counter",
    description:
      "A minimalistic counter application to increment, decrement, or reset values. Ideal for tracking counts or scores.",
    image: Counter,
    link: "https://github.com/Mhizdhee/Counter-Program-Js",
    live: "https://mhizdhee.github.io/Counter-Program-Js/",
  },
];

function Projects() {
  return (
    <div id="projects" 
    className="py-10 px-8 bg-gray-200 dark:bg-gray-700">
      <h2 className="text-[30px] font-bold text-gray-900 dark:text-gray-100 p-5 mb-5 flex items-center">
        <span className="inline-block w-[50px] h-[4px] bg-[#5eb1f5] mr-1"></span>
        Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 100} 
            className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline"
              >
                View Project
              </a> */}
              <div className="flex gap-5">
                <button>
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-block bg-[#4682b4] text-white p-2 border-none rounded-[10px] text-[16px] dark:text-white hover:bg-transparent hover:border-2 hover:border-solid hover:border-[#4682b4]"
                  >
                    GitHub
                  </a>
                </button>
                <button className="btttn">
                  <a
                    href={project.live}
                    target="_blank"
                    className="mt-4 inline-block bg-transparent text-[#4682b4] p-2 border-2 border-[#4682b4] rounded-[10px] text-[16px] dark:text-[#4682b4] hover:bg-[#4682b4] hover:text-white dark:hover:text-white"
                  >
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
