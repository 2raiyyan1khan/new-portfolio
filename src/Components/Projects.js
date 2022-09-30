import React from "react";
import { projects } from "../data";
import GitHub from "./Common/Icon/GitHub";
import Link from "./Common/Icon/Link";

const Projects = () => {
  return (
    <article className=" bg-primary">
      <section className="text-center container mx-auto py-14">
        <h2 className="md:text-3xl text-2xl font-extrabold inline-block text-center mb-10 text-slate-700 tracking-wider">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-2 md:grid-flow-row mt-4">
          {projects.map((el, i) => {
            return (
              <div class="flex-none h-80 mb-10 relative z-10 md:before:absolute md:before:top-2 md:before:left-2   md:before:w-full md:before:rounded-md md:before:h-full md:before:bg-yellow md:hover:before:left-0 md:hover:before:top-0 transition ease-in-out delay-300">
                <div className="absolute z-10 inset-0 pb-14 overflow-hidden bg-primary rounded-md border-slate-700 border-2 group ">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-full h-full object-fill"
                    loading="lazy"
                  />
                  <div className="pt-4">
                    <h4 className="text-xl text-slate-700 font-semibold">
                      {el.title}
                    </h4>
                  </div>

                  <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold bg-overLay">
                    <ul className="flex justify-end gap-5">
                      <div class="cursor-pointer flex-none w-20 h-10  relative z-10 before:absolute before:top-1 before:left-1  before:rounded-md  before:w-full before:h-full before:bg-yellow  hover:before:left-0 hover:before:top-0 transition ease-in-out delay-300">
                        <span className="absolute  flex items-center justify-center  z-10 border-2 border-slate-700 rounded-md inset-0 w-full h-full object-cover bg-slate-700">
                          <a
                            href={el.githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GitHub />
                          </a>
                        </span>
                      </div>
                      <div class="cursor-pointer flex-none w-20 h-10  relative z-10 before:absolute before:top-1 before:left-1  before:rounded-md  before:w-full before:h-full before:bg-yellow  hover:before:left-0 hover:before:top-0 transition ease-in-out delay-300">
                        <span className="absolute flex items-center justify-center z-10 border-2 border-slate-700 rounded-md inset-0 w-full h-full object-cover bg-slate-700">
                          <a href={el.link} target="_blank" rel="noreferrer">
                            <Link />
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Projects;
