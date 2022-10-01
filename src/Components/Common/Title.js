import React from "react";

const Title = ({ title }) => {
  return (
    <div class="flex-none w-20 h-20 relative z-10 before:absolute   before:rounded-full  before:w-full before:h-full before:bg-yellow shadow-2xl md:-top-4 md:-left-5 -top-5 -left-2 rounded-full shadow-yellow">
      <h2 className="md:text-2xl absolute  md:top-6 md:left-7 top-7 left-7   text-xl font-extrabold mb-0 text-slate-700 tracking-wider">
        {title}
      </h2>
    </div>
  );
};

export default Title;
