import React from "react";
import { Slide } from "react-reveal";
import ItemList from "./Common/ItemList";
import Title from "./Common/Title";
const Experience = () => {
  return (
    <Slide left>
      <div className="md:w-2/5 w-ful md:mb-0 mb-8 bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <Title title={"Experience"} />
        <div className="flex gap-4 md:pl-3 pl-4 ">
          <ItemList text="Jul - 2022-Present — Frontend Developer at Wobot Intelligence." />
        </div>
        <div className="flex gap-4 md:pl-3 pl-4">
          <ItemList text="Jan - June-2022 — Frontend Intern at Wobot Intelligence." />
        </div>
      </div>
    </Slide>
  );
};

export default Experience;
