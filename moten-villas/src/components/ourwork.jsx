import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';


const images = [
  "https://i.imgur.com/rBUEtaJ.jpg",
  "https://i.imgur.com/6Zxo2Pw.jpg",
  "https://i.imgur.com/0XpQmI3.jpg",
  "https://i.imgur.com/EeQ1a8P.jpg",
  "https://i.imgur.com/lr1ddXP.jpg",
  "https://i.imgur.com/ip4mkWs.jpg",
  "https://i.imgur.com/uWZE7im.jpg",
  "https://i.imgur.com/h4c21WW.jpg",
  "https://i.imgur.com/sexIwpD.jpg",
  "https://i.imgur.com/XeDv2cR.jpg",
  "https://i.imgur.com/UIZl5Uz.jpg",
  "https://i.imgur.com/oF3AdVe.jpg",
  "https://i.imgur.com/8bHD4uH.jpg",
  "https://i.imgur.com/4JsV5G0.jpg",
  "https://i.imgur.com/ZuqcJRV.jpg0",
  "https://i.imgur.com/0ku5S8n.jpg",
  "https://i.imgur.com/JrUnBFW.jpg",
  "https://i.imgur.com/BiZGqVP.jpg",
  "https://i.imgur.com/eoBglsc.jpg",
  "https://i.imgur.com/jcyTQeH.jpg",
  "https://i.imgur.com/n9DmJCH.jpg",
  "https://i.imgur.com/1amHGvX.jpg",
  "https://i.imgur.com/JnXr9aT.jpg",
  "https://i.imgur.com/STCbc8m.jpg",
  "https://i.imgur.com/IZGzQLo.jpg",
  "https://i.imgur.com/5ajIf1c.jpg",
  "https://i.imgur.com/63LcQsp.jpg",
  "https://i.imgur.com/wS1oNMJ.jpg",
  "https://i.imgur.com/QAVUgfg.jpg",
  "https://i.imgur.com/6WqkUH5.jpg",
  "https://i.imgur.com/NmdBj66.jpg",
  "https://i.imgur.com/JeJ9omJ.jpg",
  "https://i.imgur.com/IpIjTCb.jpg",
  "https://i.imgur.com/Bz0lfbM.jpg",
  "https://i.imgur.com/Yrm3LH1.jpg",
  "https://i.imgur.com/HI0VpQ3.jpg",
  "https://i.imgur.com/v8LMYGR.jpg",
  "https://i.imgur.com/S4rmWrl.jpg",
  "https://i.imgur.com/PNIRjRP.jpg",
  "https://i.imgur.com/ztRsV3M.jpg",
  "https://i.imgur.com/MaKotVW.jpg",
  "https://i.imgur.com/lxfLQjV.jpg",
  "https://i.imgur.com/GYO87L7.jpg",
  "https://i.imgur.com/EeQ1a8P.jpg",
  
];

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Portfolio = () => {
  const [hasAnimated, setHasAnimated] = useState(Array(images.length).fill(false));
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting && !hasAnimated[index]) {
            setHasAnimated((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, [hasAnimated]);

  return (
    <div>
  
      <div className="mx-8 overflow-hidden">
    
      <motion.h2
        className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-center text-gray-800 "
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
      >
        <div className="flex items-center justify-center  mt-12 sm:mt-4 mb-12">
          <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
          <h2 className="text-black uppercase font-bold text-center">OUR WORK</h2>
          <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
        </div>
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            data-index={index}
            className="border-black border p-2 h-[300px] bg-white shadow-md  overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut", 
              delay: index * 0.1,
            }} 
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"  // Add lazy loading
            />
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
