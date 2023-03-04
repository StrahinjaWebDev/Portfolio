import React from "react";

export const ProjectItem = ({ img, title, desc, link }) => {
  return (
    <div className="relative flex items-center   justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10  transition-all ease-in duration-300" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center flex justify-center items-center">{title}</h3>
        <p className="pb-4 pt-2 hidden lg:block text-white text-center">{desc}</p>
        <a href="/">
          <a className="rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg flex justify-center items-center w-[8rem]  sm:ml-[1rem] lg:ml-[2.5rem] sm:mt-[2rem] lg:mt-0" href={link} target="_blank">More Info</a>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem
