import React from "react";
import { Slide } from "react-reveal";
const Objective = () => {
  return (
    <Slide left>
      <div className="md:w-2/3 w-full md:mb-0 mb-8 bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <h2 className="md:text-2xl  text-xl font-extrabold mb-5 text-slate-700 tracking-wider">
          Objective
        </h2>

        <div className=" pl-4">
          <p className="md:text-xl text-lg text-slate-600 tracking-wider font-semibold">
            Creative and self-starting developer, working in fast-paced
            collaborative environments and problem solver. Having 1.5 years of
            professional experience with proven skills and well-versed in Scrum
            and Agile.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Objective;
