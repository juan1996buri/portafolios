import { LocalAirportOutlined } from "@mui/icons-material";
import React from "react";
import { information } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useSelector } from "react-redux";
const Contac = () => {
  const currentColor = useSelector((state) => state.color.currentColor);
  return (
    <div className="pb-48 dark:text-cyan-100" id="CONTACTO">
      <SectionTitle title={"CONTACTO"} />
      <div className="flex md:px-6 ">
        <div className=" w-1/12 lg:w-3/12 hidden  mx-4 lg:flex flex-col gap-2 px-8 pt-3  shadow-xl dark:shadow-md">
          {information.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div>{item.icon} </div>
              <div>
                <h2>{item.name}:</h2>
                <h3>{item.detail}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1  md:mx-4 px-8 pt-3 shadow-xl dark:shadow-md">
          <form className=" px-2 flex flex-col">
            <div className="flex w-full">
              <div className="flex-1 mr-2">
                <h2>Nombre</h2>
                <input
                  className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full"
                  placeholder="nombre"
                />
              </div>
              <div className="flex-1 ">
                <h2>Email</h2>
                <input
                  className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full "
                  placeholder="Email"
                />
              </div>
            </div>
            <h2>Teléfono/Celular </h2>
            <input
              placeholder="Tu Teléfono"
              className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black"
            />
            <h2>Mensaje</h2>
            <textarea className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full h-52" />
            <button
              type="button"
              className={` py-2  mt-2 mb-6 text-white ${currentColor.bg}`}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contac;
