import React from "react";
import About from "./components/about/About";
import ConfigurationOptions from "./components/configurationOptions/ConfigurationOptions";
import Contac from "./components/contac/Contac";
import FloatingButton from "./components/floatingbutton/FloatingButton";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Proyects from "./components/proyect/Proyects";
import Skills from "./components/skills/Skills";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const activeNavbar = useSelector((state) => state.navbar.isActive);
  const themeColor = useSelector((state) => state.theme.themeColor);

  return (
    <div className={`flex ${themeColor === "dark" ? "dark" : ""}`}>
      <div
        className={` ${
          activeNavbar
            ? "fixed z-50 bg-zinc-50 shadow-xl dark:bg-zinc-900 w-72 "
            : "w-0  "
        }`}>
        <Navbar />
      </div>
      <div
        className={`w-full bg-slate-50 dark:bg-zinc-800 ${
          activeNavbar ? "md:ml-72" : ""
        } `}>
        <Home />
        <About />
        <Proyects />
        <Skills />
        <Contac />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <FloatingButton />
      </div>
      <div className="fixed top-1 right-0 z-50">
        <ConfigurationOptions />
      </div>
    </div>
  );
}

export default App;
