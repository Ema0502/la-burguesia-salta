import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { whatsapp, facebook, instagram, pinmaps } from "../assets";


const Contact = () => {  
  return (
    <>
      <motion.div>
        <h2 className="flex justify-center w-full pb-5 text-yellow-500 text-center font-black text-[20px] xs:text-[40px] sm:text-[50px] md:text-[60px]">
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

export default SectionWrapper(Contact, "contact");
