import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { whatsapp, facebook, instagram, pinmaps } from "../assets";

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
      <motion.div>
        <h2 className="flex justify-center w-full pt-10 text-white text-center font-black text-[20px] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          ¿Se te antojó?
        </h2>
        <p className="mt-2 text-secondary text-center text-[14px]">
          ¿Tenés una duda, querés hacer un pedido o simplemente no podés dejar
          de pensar en nuestras hamburguesas?
        </p>
        <p className="mt-2 text-secondary text-center text-[14px]">
          Podés acceder a través de los enlaces o encontrarnos en las redes sociales.
          Contactanos por WhatsApp o Instagram y te respondemos enseguida.
        </p>
        <p className="mt-2 text-secondary text-center text-[14px] pb-5">
          ¡Estamos para tentarte!
        </p>

        <div className="flex flex-col w-full h-full justify-center pt-5 gap-5">
          <div className="flex justify-center w-full">
            <a href="https://api.whatsapp.com/send/?phone=5493874830054&text&type=phone_number&app_absent=0" className="flex items-center gap-2">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-9 h-9 object-contain"
              />
              <p>+54 387 483 0054</p>
            </a>
          </div>

          <div className="flex justify-center w-full">
            <a href="https://www.facebook.com/laburguesiasalta" className="flex items-center gap-2">
              <img
                src={facebook}
                alt="facebook"
                className="w-9 h-9 object-contain"
              />
              <p>@laburguesiasalta</p>
            </a>
          </div>

          <div className="flex justify-center w-full">
            <a href="https://www.instagram.com/laburguesiasalta" className="flex items-center gap-2">
              <img
                src={instagram}
                alt="instagram"
                className="w-9 h-9 object-contain"
              />
              <p>@laburguesiasalta</p>
            </a>
          </div>

          <div className="flex justify-center w-full">
            <a href="https://maps.app.goo.gl/smpBe3cU2xz6TkUA8" className="flex items-center gap-2">
              <img
                src={pinmaps}
                alt="maps"
                className="w-9 h-9 object-contain"
              />
              <p>Map: Arenales 380</p>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Collection, "");
