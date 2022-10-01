import React from "react";
import { Slide } from "react-reveal";
import CSS from "./Common/Icon/CSS";
import Express from "./Common/Icon/Express";
import Html from "./Common/Icon/Html";
import Javscript from "./Common/Icon/Javscript";
import MySql from "./Common/Icon/MySql";
import NodeIcon from "./Common/Icon/NodeIcon";
import ReactIcon from "./Common/Icon/React";
import SkillList from "./Common/SkillList";
import Title from "./Common/Title";
const Skills = () => {
  return (
    <Slide right>
      <div className="md:w-1/3 w-full bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <Title title={"Skills"} />
        <ul className=" flex flex-col gap-4 mt-1">
          <div className="flex  justify-evenly">
            <SkillList Icon={<Html />} title="HTML" />
            <SkillList Icon={<CSS />} title="CSS" />
            <SkillList Icon={<Javscript />} title="JScript" />
            <SkillList Icon={<ReactIcon />} title="React Js" />
          </div>

          <div className="flex  justify-evenly">
            <SkillList Icon={<NodeIcon />} title="Node Js" />
            <SkillList Icon={<Express />} title="Express Js" />
            <SkillList Icon={<MySql />} title=" MySql" />
          </div>
        </ul>
      </div>
    </Slide>
  );
};

export default Skills;
