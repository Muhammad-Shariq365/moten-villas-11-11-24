import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from '../css-components/animation';
import { allservices } from '../css-components/export';
import '../css-components/services.css';

const Services = () => {
  
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div id="services" className=" overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Animated "OUR SERVICES" Heading */}
          <motion.div
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
      >
        <div className="flex items-center justify-center">
          <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-black uppercase">OUR SERVICES</h2>
          <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
        </div>
      </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="m-auto flex flex-col justify-between items-center gap-5 "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="bg-[#ffffff00] px-6 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-start gap-5"
          >
            {allservices.map((item) => (
              <motion.div
                key={item.id}
                className="service-card flex justify-center items-start transition-transform duration-300 ease-in-out hover:shadow-xl  hover:scale-105"
              >
                <div className="service-card-inner">
                  {/* Front of the card */}
                  <div className="service-card-front flex justify-center items-center p-5 ">
                    <img 
                      src={item.icon} 
                      alt={`${item.title} icon`} 
                      className="w-20 sm:w-24 "
                    />
                  </div>
                  
                  {/* Back of the card */}
                  <div className="service-card-back flex flex-col justify-center items-start p-5 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h1 className="text-lg sm:text-xl font-bold text-black pb-2">{item.title}</h1>
                    <p className="text-sm sm:text-base text-justify  pr-2">{item.about}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
