import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="py-16 px-8 bg-gray-100 dark:bg-gray-800 text-center"
    >
      <h2 className="text-[30px] font-bold text-gray-900 dark:text-gray-100 p-5 mb-5 flex justify-center items-center">
        <span className="inline-block w-[50px] h-[4px] bg-[#5eb1f5] mr-2"></span>
       Get In Touch
        <span className="inline-block w-[50px] h-[4px] bg-[#5eb1f5] ml-2"></span>
      </h2>

      <form className="mt-8 max-w-lg mx-auto flex flex-col space-y-4">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            placeholder="SURNAME"
            className="outline-none p-2 rounded-[10px] w-full bg-white dark:bg-gray-700 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="FIRST NAME"
            className="outline-none p-2 rounded-[10px] w-full bg-white dark:bg-gray-700 dark:text-gray-300"
          />
        </div>
        <input
          type="email"
          placeholder="EMAIL"
          className="outline-none p-2 rounded-[10px] w-full bg-white dark:bg-gray-700 dark:text-gray-300"
        />
        <textarea
          placeholder="MESSAGE"
          rows={10}
          cols={30}
          className="outline-none p-2 mt-[20px] rounded-[10px] w-full bg-white dark:bg-gray-700 dark:text-gray-300 "
        />
        <button className="px-4 py-2 bg-[#4682b4] dark:bg-[#4682b4] text-white rounded-[10px] hover:border-[#4682b4] hover:border hover:text-[#4682b4] hover:bg-transparent dark:hover:border-[#4682b4] dark:hover:bg-transparent">
          Send 
        </button>
      </form>
    </div>
  );
}

export default Contact;
