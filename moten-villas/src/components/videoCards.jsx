import React from 'react';
import { motion } from 'framer-motion';
import Videos from "../components/videos"

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const VideoCards = () => {
  return (
 <div>
     <section className="text-center my-12 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
      >
        <div className="flex items-center justify-center">
          <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-black uppercase">Client Reviews</h2>
          <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
        </div>
      </motion.div>
      
      <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
        We highly value feedback from our clients, and knowing they’re pleased with our work is incredibly rewarding. 
        At moten villas, we are committed to delivering excellence in every aspect of building and remodeling.
      </p>
    </section>
    <Videos />
 </div>
  );
};

export default VideoCards;
