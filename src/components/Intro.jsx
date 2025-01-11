import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center ">
      {/* Image Section */}
      <img
        src="https://img.freepik.com/premium-vector/newspaper-job-search_91756-511.jpg?semt=ais_hybrid"
        alt="CSE3"
        className="w-full h-[400px] md:w-[700px] md:h-[600px] mb-6 md:mb-0 shadow-lg rounded-r-lg"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center  p-4">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-blue-600 animate-slide-in">
          FIND YOUR
        </h1>
        <span className="font-bold text-5xl md:text-6xl lg:text-7xl text-blue-800 animate-fade-in">
          DREAM
        </span>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl animate-fade-in">
          JOBS
        </h1>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-blue-600 animate-slide-in delay-200">
          EASILY AND QUICKLY
        </h1>
      </div>


    </div>
  );
}
