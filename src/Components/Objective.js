import React from "react";
import { Slide } from "react-reveal";
import Title from "./Common/Title";
const Objective = () => {
  return (
    <Slide left>
      <div className="md:w-2/3 relative w-full md:mb-0 mb-8 bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <Title title={"Objective"} />
        <div className=" md:pl-3 pl-4">
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
