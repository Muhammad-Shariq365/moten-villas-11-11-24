import React, { useState } from 'react';
import ProtfolioCard from "../components/protfolioCard";
import AboutImage from "../assets/aboutimg.jpg";
import Ourwork from "../components/services"
import { Helmet } from 'react-helmet';
import AboutCard from '../components/aboutCards';
import Services from '../components/services';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <link rel="preload" href={AboutImage} as="image" />
      </Helmet>
      <div className="relative w-screen  h-[40vh] sm:h-[70vh] object-cover bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <span>Loading...</span>
          </div>
        )}

        <img
          src={AboutImage}
          alt="About Us"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full ${imageLoaded ? 'animate-zoomIn' : 'opacity-0'} transition-opacity duration-1000`}
        />

        {imageLoaded && (
         <div className="absolute inset-0 flex items-center justify-center">
         <h1 className="text-5xl sm:text-8xl font-bold text-black bg-white bg-opacity-50 p-4 animate-borderAnimation">
           About Us
         </h1>
       </div>
        )}

        <style jsx>{`
          @keyframes zoomIn {
            from {
              transform: scale(1.2);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes borderAnimation {
            0% {
              border-color: transparent; /* Initially invisible */
            }
            25% {
              border-top-color: black;  /* Slowly appear top border */
            }
            50% {
              border-top-color: black;
              border-right-color: black; /* Right border appears */
            }
            75% {
              border-top-color: black;
              border-right-color: black;
              border-bottom-color: black; /* Bottom border appears */
            }
            100% {
              border-color: black; /* All borders are black */
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.2s ease-out forwards;
            will-change: transform, opacity;
          }

          .animate-borderAnimation {
            animation: borderAnimation 4s ease-in-out forwards;  /* Slow down the border animation duration */
            border-width: 4px;
            border-style: solid;
            border-color: transparent; /* Set initial border color to transparent */
          }
        `}</style>
      </div>
      <AboutCard />
      <Services/>
    </div>
  );
};

export default About;
