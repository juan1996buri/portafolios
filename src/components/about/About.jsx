import React from "react";
import temporal from "../../images/temporal.svg";
import SectionTitle from "../sectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="SOBRE MI" className="w-full pb-8">
      <SectionTitle title={"SOBRE MI"} />
      <div className="grid lg:grid-cols-2 justify-items-center  w-[95%]   mx-auto">
        <img src={temporal} alt="" className="lg:h-full h-72 " />
        <span className="w-full">
          <h2 className="font-sansSerif font-bold text-2xl tracking-wider text-teal-700 dark:text-cyan-100">
            Desarrollador Web
          </h2>
          <p className="font-sansSerif font-semibold dark:font-normal dark:text-white">
            Desarrollador full stack con intereses en Diseño UI, REST API,
            Desarrollo Móvil y dispuesto a aprender nuevas tecnologías web del
            mercado. Experiencia en proyectos JavaScript, REST API, maquetación
            HTML & CSS, Especialista en la solución óptima de problemas de
            software y trabajo en equipo, manteniendo siempre buenas prácticas
            de programación. Busco mi primera oportunidad para formar parte de
            un equipo de desarrollo y aprender nuevo conocimientos para crecer
            profesionalmente
          </p>
        </span>
      </div>
    </section>
  );
};

export default About;
