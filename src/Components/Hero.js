import React from "react";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <article className="md:flex items-center justify-between flex-col-reverse md:flex-row">
      <Fade left>
        <div className="flex-1 text-center md:mb-0 mb-8">
          <p className="text-slate-600 mb-2">Hey,I'am</p>
          <h1 className="md:text-5xl text-3xl font-black text-slate-700 mb-3 tracking-wider">
            MOHAMMAD RAIYYAN
          </h1>
          <h3 className="md:text-2xl text-xl font-semibold text-slate-700 tracking-wider">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Backend Developer"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h3>
        </div>
      </Fade>
      <Fade top big>
        <div className="flex-1 text-center">
          <div class="flex-none md:w-2/3 w-full mx-auto h-96 mb-10 relative z-10 md:before:absolute md:before:top-2 md:before:left-2  md:before:rounded-md md:before:w-full md:before:h-full before:bg-yellow  md:hover:before:left-0 md:hover:before:top-0 transition ease-in-out delay-300">
            <img
              src="/Dp.jpg"
              alt="hello"
              className="md:absolute brightness-100 z-10 md:inset-0 w-full h-full object-cover rounded-md border-slate-700 border-2"
              loading="lazy"
            />
          </div>
        </div>
      </Fade>
    </article>
  );
};

export default Hero;
