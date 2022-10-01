import React from "react";
import { Slide } from "react-reveal";
import ItemList from "./Common/ItemList";
import Title from "./Common/Title";
const Education = () => {
  return (
    <Slide right>
      <div className="md:w-3/5 w-full bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <Title title={"Education"} />
        <div className="divide-y md:pl-3 pl-4">
          <div>
            <div className="flex gap-4 ">
              <ItemList text="Bachelor Of Computer Application." />
            </div>
            <div className="flex gap-4 ">
              <ItemList text="Bengaluru City University (2021)." />
            </div>
            <div className="flex gap-4 mb-2">
              <ItemList text="CGPA 7.8 / 10" />
            </div>
          </div>

          <div className="">
            <div className="flex gap-4 mt-2">
              <ItemList text="Frontend Development with React (Courseara 2021)." />
            </div>
            <div className="flex gap-4 ">
              <ItemList text="Backend Development with Node and Express (Udemy 2022)." />
            </div>
            <div className="flex gap-4 ">
              <ItemList text="Backend Development in Python (Courseara 2021)." />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Education;
