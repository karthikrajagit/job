import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 ">
      {/* Image Section */}
      <img
        src="https://nietm.in/wp-content/uploads/2022/11/CSE3.png"
        alt="CSE3"
        className="w-full h-[400px] md:w-[800px] md:h-full mb-6 md:mb-0 shadow-lg rounded-r-lg"
      />

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:ml-8">
        <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl text-blue-600">
          FIND YOUR DREAM
        </h1>
        <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl">JOB</h1>
        <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl text-blue-600">
          EASILY AND QUICKLY
        </h1>
      </div>
    </div>
  );
}
