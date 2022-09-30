import React from "react";
import { Slide } from "react-reveal";
const Education = () => {
  return (
    <Slide right>
      <div className="md:w-3/5 w-full bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <h2 className="md:text-2xl text-xl font-extrabold mb-5 text-slate-700 tracking-wider ">
          Education & Certifications
        </h2>
        <div className="divide-y ">
          <div>
            <div className="flex gap-4 ">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1  before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg   mb-1 text-slate-600 tracking-wider font-semibold">
                Bachelor Of Computer Application.
              </p>
            </div>
            <div className="flex gap-4 ">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1  before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg   mb-1 text-slate-600 tracking-wider font-semibold">
                Bengaluru City University (2021).
              </p>
            </div>
            <div className="flex gap-4 mb-2">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1  before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg  text-slate-600 tracking-wider font-semibold">
                CGPA 7.8 / 10
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex gap-4 mt-2">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg  mb-1 text-slate-600 tracking-wider font-semibold">
                Frontend Development with React (Courseara 2021).
              </p>
            </div>
            <div className="flex gap-4 ">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg  mb-1 text-slate-600 tracking-wider font-semibold">
                Backend Development with Node and Express (Udemy 2022).
              </p>
            </div>
            <div className="flex gap-4 ">
              <div class="flex-none w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
                <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
              </div>
              <p className="md:text-xl text-lg  mb-1 text-slate-600 tracking-wider font-semibold">
                Backend Development in Python (Courseara 2021).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Education;
