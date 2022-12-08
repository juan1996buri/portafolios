import React from "react";
import { technologies } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import TechnologyItem from "./TechnologyItem";

const Skills = () => {
  return (
    <section id="HABILIDADES" className="pb-8">
      <SectionTitle title={"HABILIDADES"} />
      <div className="flex flex-wrap gap-2  w-[80%] mx-auto">
        {technologies.map((item, index) => (
          <TechnologyItem key={index} tecnology={item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
