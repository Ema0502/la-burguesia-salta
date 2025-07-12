import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  price,
  image,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
      <div className="bg-tertiary p-5 rounded-2xl w-full lg:w-1/3">
        <div className="relative w-full">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <h3 className="w-full flex justify-end text-yellow-500 font-bold text-[24px]">{price}</h3>
        </div>
      </div>
  );
};

const Collection = () => {  
  return (
    <>
      <motion.div>
        <h2 className={`${styles.sectionHeadText}`}>
          La Burguesía Salta Smash Burger
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-10 text-secondary text-center flex justify-center w-full text-[17px] leading-[30px]">
          🍔👑 La Burguesía Salta Smash burgers reales. Pedí ahora y sentite
          parte de la realeza. 👑🍔
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center overflow-visible lg:mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Collection, "");
