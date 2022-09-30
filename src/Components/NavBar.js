import React, { useEffect, useRef, useState } from "react";
import GitHub from "./Common/Icon/GitHub";
import LinkedIn from "./Common/Icon/LinkedIn";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 py-3 border-b-2 border-slate-700
      ${scrollPosition > 64 ? "bg-secondary shadow" : "bg-primary"}`}
    >
      <nav className="container mx-auto">
        <ul className="flex justify-end gap-5">
          <div class="cursor-pointer flex-none w-20 h-10  relative z-10 md:before:absolute md:before:top-1 md:before:left-1   md:before:rounded-md  md:before:w-full md:before:h-full md:before:bg-yellow  md:hover:before:left-0 md:hover:before:top-0 transition ease-in-out delay-300">
            <span className="md:absolute  flex items-center justify-center  z-10 border-2 border-slate-700 rounded-md inset-0 w-full h-full object-cover bg-secondary">
              <a
                href="https://github.com/2raiyyan1khan"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </span>
          </div>
          <div class="cursor-pointer flex-none w-20 h-10  relative z-10 md:before:absolute md:before:top-1 md:before:left-1   md:before:rounded-md  md:before:w-full md:before:h-full md:before:bg-yellow  md:hover:before:left-0 md:hover:before:top-0 transition ease-in-out delay-300">
            <span className="md:absolute flex items-center justify-center z-10 border-2 border-slate-700 rounded-md inset-0 w-full h-full object-cover bg-secondary">
              <a
                href="https://www.linkedin.com/in/mohammad-raiyyan-735a71152/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </span>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
