import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { shippingMap } from "../assets";

const Map = () => {  
  return (
    <>
      <motion.div>
        <h2 className="flex justify-center w-full text-yellow-500 text-center font-black text-[20px] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          MAPA DE ENVÍOS
        </h2>

        <h2 className="flex justify-center w-full text-yellow-500 text-center font-black text-[20px] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          🛵✨ DELIVERY PROPIO
        </h2>

        <img
            src={shippingMap}
            alt="project_image"
            className="w-full h-full pt-10 object-cover rounded-2xl"
        />

      </motion.div>
    </>
  );
};

export default SectionWrapper(Map, "map");
