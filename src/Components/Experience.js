import React from "react";
import { Slide } from "react-reveal";
const Experience = () => {
  return (
    <Slide left>
      <div className="md:w-2/5 w-ful md:mb-0 mb-8 bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <h2 className="md:text-2xl text-xl font-extrabold mb-5 text-slate-700 tracking-wider">
          Experience
        </h2>
        <div className="flex gap-4 ">
          <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
            <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
          </div>
          <p className="md:text-xl text-lg  mb-1 text-slate-600 tracking-wider font-semibold">
            Jul - 2022-Present — Frontend Developer at Wobot Intelligence.
          </p>
        </div>
        <div className="flex gap-4 ">
          <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
            <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
          </div>
          <p className="md:text-xl text-lg   mb-1 text-slate-600 tracking-wider font-semibold">
            Jan - June-2022 — Frontend Intern at Wobot Intelligence.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Experience;
