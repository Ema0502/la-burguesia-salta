import React from "react";
import logo from "../assets/logo.png";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="bg-transparent pb-4 px-4">
      <div className="text-center">
        <img
          className="w-12 h-auto md:w-16 mb-2 md:mb-0 mx-auto pb-4"
          src={logo}
          alt="Logo..."
        />
        <span className="text-sm md:text-base text-gray-700">
          Apasionados por el sabor real, llevamos cada hamburguesa al siguiente nivel con ingredientes frescos y recetas irresistibles. ¡Descubre el placer de comer bien, sin complicaciones!
        </span>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-700 pt-4">Copyright ® 2025 | La burguesia Salta</p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "contact");
