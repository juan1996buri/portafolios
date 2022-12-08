import React from "react";

const TechnologyItem = ({ tecnology }) => {
  return (
    <div className="flex flex-col items-center flex-auto w-40 ">
      <img
        src={tecnology.icon}
        alt=""
        className="w-20 h-20 object-scale-down"
      />
      <div className="dark:text-cyan-100">{tecnology.name}</div>
    </div>
  );
};

export default TechnologyItem;
