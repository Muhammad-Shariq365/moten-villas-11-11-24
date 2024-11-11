import React, { useState } from 'react';
import AboutImage from "../assets/portfolioimg.jpg";
import { Helmet } from 'react-helmet';
import VideoCards from '../components/videoCards';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <div className="overflow-hidden ">
      <Helmet>
        <link rel="preload" href={AboutImage} as="image" />
      </Helmet>
      <div className="relative w-screen h-[40vh] sm:h-[70vh] object-cover bg-gray-200">
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
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'animate-zoomIn' : 'opacity-0'}`}
        />

        {imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl sm:text-8xl font-bold text-black bg-white bg-opacity-50 p-4 animate-borderAnimation">
              Testimonials
            </h1>
          </div>
        )}

        <style>{`
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
              border-color: transparent;
            }
            25% {
              border-top-color: black;
            }
            50% {
              border-top-color: black;
              border-right-color: black;
            }
            75% {
              border-top-color: black;
              border-right-color: black;
              border-bottom-color: black;
            }
            100% {
              border-color: black;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.2s ease-out forwards;
            will-change: transform, opacity;
          }

          .animate-borderAnimation {
            animation: borderAnimation 4s ease-in-out forwards;
            border-width: 4px;
            border-style: solid;
            border-color: transparent;
          }
        `}</style>
      </div>
    

    </div>
   <VideoCards/>
    </div>
  );
};

export default About;
