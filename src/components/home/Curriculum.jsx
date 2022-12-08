import React from "react";
import { useSelector } from "react-redux";
const Curriculum = () => {
  const currentColor = useSelector((state) => state.color.currentColor);
  return (
    <button type="button" className={`${currentColor.bg} py-2 px-4 rounded`}>
      Curriculum
    </button>
  );
};

export default Curriculum;
