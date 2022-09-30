import React from "react";
import { Slide } from "react-reveal";
import CSS from "./Common/Icon/CSS";
import Express from "./Common/Icon/Express";
import Html from "./Common/Icon/Html";
import Javscript from "./Common/Icon/Javscript";
import MySql from "./Common/Icon/MySql";
import NodeIcon from "./Common/Icon/NodeIcon";
import ReactIcon from "./Common/Icon/React";
const Skills = () => {
  return (
    <Slide right>
      <div className="md:w-1/3 w-full bg-primary rounded-md py-7 md:px-9 px-5 shadow border-2 border-slate-700">
        <h2 className="md:text-2xl text-xl font-extrabold mb-5 text-slate-700 tracking-wider">
          Skills
        </h2>
        <ul className=" flex flex-col gap-4">
          <div className="flex  justify-evenly">
            <li className=" flex flex-col items-center">
              <div className=" mb-1">
                <Html />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                HTML
              </span>
            </li>
            <li className=" flex flex-col items-center">
              <div className="  mb-1">
                <CSS />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                CSS
              </span>
            </li>
            <li className=" flex flex-col items-center">
              <div className=" mb-1">
                <Javscript />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                JScript
              </span>
            </li>
            <li className=" flex flex-col items-center">
              <div className="  mb-1">
                <ReactIcon />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                React JS
              </span>
            </li>
          </div>

          <div className="flex  justify-evenly">
            <li className=" flex flex-col items-center">
              <div className="  mb-1">
                <NodeIcon />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                Node JS
              </span>
            </li>
            <li className=" flex flex-col items-center">
              <div className="  mb-1">
                <Express />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                Express JS
              </span>
            </li>
            <li className=" flex flex-col items-center">
              <div className="  mb-1">
                <MySql />
              </div>

              <span className="text-slate-600 tracking-wider font-semibold">
                MySql
              </span>
            </li>
          </div>
        </ul>
      </div>
    </Slide>
  );
};

export default Skills;
