import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBuilding, FaTree, FaHammer, FaPaintRoller, FaCheckCircle } from 'react-icons/fa'; 

import foundationImage from '../assets/banglow3.jpg';

import AnimatedImages from './animatedImages';

const PortfolioSection = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);

  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  const isInView4 = useInView(ref4, { once: false });
  const isInView5 = useInView(ref5, { once: false });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const reverseImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const reverseTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <>
      <AnimatedImages />
      <section className="mt-12 mb-24 ">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-center mb-12 text-gray-800"
            initial="hidden"
            animate={isInView1 || isInView2 || isInView3 || isInView4 || isInView5 ? "visible" : "hidden"}
            variants={headingVariants}
          >
            <div className="flex items-center justify-center">
              <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
              <h2 className="text-black uppercase font-bold text-center">OUR EXPERTISE</h2>
              <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
            </div>
          </motion.h2>

          {/* Project Sections */}
          {[
            { id: 1, title: "Corporate Office", image: "https://i.postimg.cc/YSFbsd96/premium-photo-1723823036326-075a2ec87fc4-1.avif", icon: FaBuilding, text: "Explore our corporate office projects, designed with modern aesthetics and functionality. We aim to create spaces that inspire productivity and collaboration." },
            { id: 2, title: "Strong Foundations", image: foundationImage, icon: FaHammer, text: "Our projects are built on strong foundations, ensuring longevity and reliability. We incorporate the best materials and techniques to deliver exceptional quality." },
            { id: 3, title: "Green Living", image: "https://i.postimg.cc/sXKFbGhV/5a6ff7cd-6223-491f-9120-b928d4da2dfd.jpg", icon: FaTree, text: "We integrate natural elements into our designs, creating spaces that harmonize with the environment while promoting sustainability and well-being." },
            { id: 4, title: "Innovative Designs", image: "https://i.postimg.cc/4ygnsxsL/rsz-2f00c1ffe-78bf-4511-97dc-8a85c5fb3296.jpg", icon: FaPaintRoller, text: "Our innovative designs set trends in the industry, focusing on aesthetic appeal while ensuring practical functionality. We create unique spaces that meet your needs." },
            { id: 5, title: "Quality for Years", image: "https://i.postimg.cc/G3GZnYJb/rsz-9384266a-7054-4699-b97b-b17728188649.jpg", icon: FaCheckCircle, text: "Our commitment to quality ensures that every project is not just visually appealing but also built to withstand the test of time. Experience durability and craftsmanship you can trust." }
          ].map(({ id, title, image, icon: Icon, text }, index) => (
            <div
              key={id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center space-y-10 md:space-y-0`}
              ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : index === 3 ? ref4 : ref5}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial="hidden"
                animate={(index === 0 && isInView1) || (index === 1 && isInView2) || (index === 2 && isInView3) || (index === 3 && isInView4) || (index === 4 && isInView5) ? "visible" : "hidden"}
                variants={index % 2 === 0 ? imageVariants : reverseImageVariants}
              >
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 space-y-6 text-center"
                initial="hidden"
                animate={(index === 0 && isInView1) || (index === 1 && isInView2) || (index === 2 && isInView3) || (index === 3 && isInView4) || (index === 4 && isInView5) ? "visible" : "hidden"}
                variants={index % 2 === 0 ? textVariants : reverseTextVariants}
              >
                <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold flex items-center justify-center text-gray-900">
                  <Icon className="mr-3 text-4xl text-orange-600" />
                  {title}
                </h3>
                <p className="text-[clamp(1rem,3vw,1.125rem)] text-gray-600 leading-relaxed p-4 break-words max-w-md mx-auto">
                  {text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
