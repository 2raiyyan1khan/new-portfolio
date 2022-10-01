import React from "react";

const SkillList = ({ Icon, title }) => {
  return (
    <li className=" flex flex-col items-center">
      <div className=" mb-1">{Icon}</div>

      <span className="text-slate-600 tracking-wider font-semibold">
        {title}
      </span>
    </li>
  );
};

export default SkillList;
