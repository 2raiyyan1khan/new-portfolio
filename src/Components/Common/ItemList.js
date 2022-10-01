import React from "react";

const ItemList = ({ text }) => {
  return (
    <>
      <div class="flex-none mt-1  w-5 h-5 relative z-10 before:absolute before:top-1 before:left-1   before:rounded-sm  before:w-full before:h-full before:bg-yellow">
        <span className="absolute  flex items-center justify-center z-10 border border-slate-700 rounded-sm inset-0 w-full h-full object-cover bg-secondary"></span>
      </div>
      <p className="md:text-xl text-lg  mb-1 text-slate-600 tracking-wider font-semibold">
        {text}
      </p>
    </>
  );
};

export default ItemList;
